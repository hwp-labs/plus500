import path from "path";
import { writeFile, unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { routeUtil } from "../utils";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export interface ApiUploadsDto {
  filename: string;
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) return routeUtil.missingFieldValue;

  const ext = file.name.split(".").pop();
  const filename = `/uploads/${Date.now()}.${ext}`;

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.resolve("public" + filename);

    await writeFile(filePath, buffer);

    return Response.json(
      { success: true, data: { filename } },
      { status: HTTP_STATUS_CODE.CREATED },
    );
  } catch {
    return Response.json(
      { success: false, message: "Error uploading file" },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { filename }: ApiUploadsDto = await req.json();

  if (!filename) return routeUtil.missingFieldValue;

  try {
    const filePath = path.resolve("public" + filename);

    await unlink(filePath);

    return routeUtil.noContent;
  } catch {
    return routeUtil.notFound;
  }
}
