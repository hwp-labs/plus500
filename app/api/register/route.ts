import { userRepo } from "@/lib/fsdb/repositories/user-repository";
import { AuthRequestDto } from "@/components/species/auth/utils";

export async function POST(req: Request) {
  const body: AuthRequestDto = await req.json();
  const { status, ...res } = await userRepo.create(body);

  const overwriteData = res.success
    ? {
        data: {
          email: body.email,
          role: "user",
        },
      }
    : {};

  return Response.json(
    {
      ...res,
      ...overwriteData,
    },
    { status },
  );
}
