import { userRepo } from "@/lib/fsdb/repositories/user-repository";

export async function GET() {
  const { status, ...res } = await userRepo.getAll();

  return Response.json(res, { status });
}

// POST /api/register
