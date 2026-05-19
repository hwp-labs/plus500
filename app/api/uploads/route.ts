import path from "path";
import { writeFile, unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { routeUtil } from "../utils";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ message: "No file provided" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const newFilename = Date.now() + "." + file.name.split(".").pop();

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(uploadDir, newFilename);

  await writeFile(filePath, buffer);

  return NextResponse.json({
    message: "Upload successful",
    url: `/uploads/${file.name}`,
  });
}

export async function DELETE(req: NextRequest) {
  const body: { name: string } = await req.json();

  if (!body.name) return routeUtil.missingFieldValue;

  try {
    const filePath = path.resolve("public" + body.name);
    await unlink(filePath);
    return routeUtil.noContent;
  } catch {
    return routeUtil.notFound;
  }
}
