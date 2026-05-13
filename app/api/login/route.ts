import { userRepository } from "@/lib/fsdb/repositories/user-repository";

export async function POST(req: Request) {
  const body = await req.json();
  const { status, ...res } = await userRepository.create(body);
  return Response.json(res, { status });
}
