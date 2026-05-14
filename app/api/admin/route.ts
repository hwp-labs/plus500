import { UpdateAdminDto } from "@/lib/fsdb/config";
import { adminRepo } from "@/lib/fsdb/repositories/admin-repository";

export async function GET() {
  const { status, ...res } = await adminRepo.getFirst();

  return Response.json(res, { status });
}

export async function PATCH(req: Request) {
  const body: UpdateAdminDto = await req.json();

  const { status, ...res } = await adminRepo.updateWallet(body);

  return Response.json(res, { status });
}
