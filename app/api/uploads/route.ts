import path from "path";
import { writeFile, unlink } from "fs/promises";
import { NextRequest } from "next/server";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export interface UploadsDto {
  filename: string;
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return Response.json(
      { error: "Missing field value `file`" },
      { status: HTTP_STATUS_CODE.UNPROCESSABLE },
    );
  }

  const ext = file.name.split(".").pop();
  const filename = `/uploads/${Date.now()}.${ext}`;

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.resolve("public" + filename);

    await writeFile(filePath, buffer);

    return Response.json(
      { data: { filename } },
      { status: HTTP_STATUS_CODE.CREATED },
    );
  } catch {
    return Response.json(
      { error: "Failed to upload file" },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { filename }: UploadsDto = await req.json();

  if (!filename) {
    return Response.json(
      { error: "Missing field value `filename`" },
      { status: HTTP_STATUS_CODE.UNPROCESSABLE },
    );
  }

  if (filename.indexOf("seed-") > -1)
    return Response.json(null, { status: HTTP_STATUS_CODE.NO_CONTENT });

  try {
    const filePath = path.resolve("public" + filename);

    await unlink(filePath);

    return Response.json(null, { status: HTTP_STATUS_CODE.NO_CONTENT });
  } catch {
    return Response.json(
      { error: "Failed to delete file" },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}
