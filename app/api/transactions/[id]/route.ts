import { type NextRequest } from "next/server";
import { UpdateTransactionDto } from "@/lib/fsdb/config";
import { transactionRepo } from "@/lib/fsdb/repositories/transaction-repository";
import { RouteIdParams } from "@/types/next-type";
import { routeUtil } from "../../utils";

export async function PATCH(req: NextRequest, { params }: RouteIdParams) {
  const body: UpdateTransactionDto = await req.json();
  const { id } = await params;

  const { status, ...res } = await transactionRepo.updateStatus(body, id);
  return Response.json(res, { status });
}

export async function DELETE(_: NextRequest, { params }: RouteIdParams) {
  const { id } = await params;

  // DELETE RECEIPT

  await transactionRepo.delete(id);
  return routeUtil.noContent;
}