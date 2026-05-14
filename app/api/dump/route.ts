import { adminRepo } from "@/lib/fsdb/repositories/admin-repository";
import { userRepo } from "@/lib/fsdb/repositories/user-repository";
import { transactionRepo } from "@/lib/fsdb/repositories/transaction-repository";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const apiKey = searchParams.get("apiKey");

  if (apiKey !== process.env.API_KEY) {
    return Response.json(
      { message: "Invalid API Key!" },
      { status: HTTP_STATUS_CODE.FORBIDDEN },
    );
  }

  const data: any = {};

  const { success: successA, ...resA } = await adminRepo.getFirst();
  const { success: successU, ...resU } = await userRepo.getAll();
  const { success: successT, ...resT } = await transactionRepo.getAll();

  if ("data" in resA) data.admin = resA.data;
  if ("data" in resU) data.users = resU.data;
  if ("data" in resT) data.transactions = resT.data;

  return Response.json(data);
}
