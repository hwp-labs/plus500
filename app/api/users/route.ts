import { type NextRequest } from "next/server";
import { UpdateUserDto } from "@/lib/fsdb/config";
import { userRepo } from "@/lib/fsdb/repositories/user-repository";
import { routeUtil } from "../utils";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");

  if (q) {
    const { status, ...res } = await userRepo.getById(q);
    
    return Response.json(res, { status });
  } else {
    const { status, ...res } = await userRepo.getAll();
    
    return Response.json(res, { status });
  }
}

// POST /api/register

export async function PATCH(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");
  const body: UpdateUserDto = await req.json();

  if (q) {
    const { status, ...res } = await userRepo.updateWallet(body, q);
    return Response.json(res, { status });
  }

  return routeUtil.missingQueryParam();
}

export async function DELETE(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");

  if (q) {
    const { status, ...res } = await userRepo.delete(q);
    return Response.json(res, { status });
  }

  return routeUtil.missingQueryParam();
}
