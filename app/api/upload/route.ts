import path from "path";
import { writeFile, unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

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
  const { fileName } = (await req.json()) as { fileName: string };

  if (!fileName) {
    return NextResponse.json(
      { message: "No filename provided" },
      { status: 400 },
    );
  }

  const filePath = path.join(process.cwd(), "public", "uploads", fileName);

  try {
    await unlink(filePath);
    return NextResponse.json({ message: "File deleted successfully" });
  } catch {
    return NextResponse.json({ message: "File not found" }, { status: 404 });
  }
}
