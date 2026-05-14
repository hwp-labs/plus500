import { adminRepo } from "@/lib/fsdb/repositories/admin-repository";
import { userRepo } from "@/lib/fsdb/repositories/user-repository";
import { AuthRequestDto } from "@/components/species/auth/utils";
import { cryptoUtil } from "@/utils/crypto-util";

export async function POST(req: Request) {
  const body: AuthRequestDto = await req.json();
  const { status, ...res } = await adminRepo.getFirst();

  if (
    "data" in res &&
    res.data.email === body.email &&
    cryptoUtil.compare(body.password, res.data.password)
  ) {
    const overwriteData = res.success
      ? {
          data: {
            email: body.email,
            role: "admin",
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
  } else {
    const { status, ...res } = await userRepo.getByEmail(body.email);
    if (
      "data" in res &&
      res.data.email === body.email &&
      cryptoUtil.compare(body.password, res.data.password)
    ) {
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
    } else {
      return Response.json(res, { status });
    }
  }
}
