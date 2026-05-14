import { UpdateUserDto } from "@/lib/fsdb/config";
import { userRepo } from "@/lib/fsdb/repositories/user-repository";
import { RouteIdParams } from "@/types/next-type";

export async function GET(
  req: Request,
  { params }: RouteIdParams,
) {
  const { status, ...res } = await userRepo.getById(params.id);
  
  return Response.json(res, { status });
}

export async function PATCH(
  req: Request,
  { params }: RouteIdParams,
) {
  const body: UpdateUserDto = await req.json();

  const { status, ...res } = await userRepo.updateWallet(
    body,
    params.id,
  );

  return Response.json(res, { status });
}

export async function DELETE(
  req: Request,
  { params }: RouteIdParams,
) {
  const { status, ...res } = await userRepo.delete(params.id);

  return Response.json(res, { status });
}
