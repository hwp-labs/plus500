import { CreateTransactionDto } from "@/lib/fsdb/config";
import { transactionRepo } from "@/lib/fsdb/repositories/transaction-repository";

export async function GET() {
  const { status, ...res } = await transactionRepo.getAll();

  return Response.json(res, { status });
}

export async function POST(req: Request) {
  const body: CreateTransactionDto = await req.json();

  const { status, ...res } = await transactionRepo.create(body);

  return Response.json(res, { status });
}
