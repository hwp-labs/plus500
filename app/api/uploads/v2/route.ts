import { NextRequest } from "next/server";
import { put, del } from "@vercel/blob";
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
    const { url } = await put(filename, file, { access: "public" });

    return Response.json(
      { data: { filename: url } },
      { status: HTTP_STATUS_CODE.CREATED },
    );
  } catch(error) {
    return Response.json(
      { error: (error as Error).message },
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
    await del(filename);

    return Response.json(null, { status: HTTP_STATUS_CODE.NO_CONTENT });
  } catch(error) {
    return Response.json(
      { error: (error as Error).message },
      { status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR },
    );
  }
}
