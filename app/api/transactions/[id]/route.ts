import { UpdateTransactionDto } from "@/lib/fsdb/config";
import { transactionRepo } from "@/lib/fsdb/repositories/transaction-repository";
import { RouteIdParams } from "@/types/next-type";

export async function PATCH(
  req: Request,
  { params }: RouteIdParams,
) {
  const body: UpdateTransactionDto = await req.json();

  const { status, ...res } = await transactionRepo.updateStatus(
    body,
    params.id,
  );

  return Response.json(res, { status });
}

export async function DELETE(
  req: Request,
  { params }: RouteIdParams,
) {
  const { status, ...res } = await transactionRepo.delete(params.id);

  return Response.json(res, { status });
}
