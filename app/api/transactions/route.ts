import { type NextRequest } from "next/server";
import { CreateTransactionDto, UpdateTransactionDto } from "@/lib/fsdb/config";
import { transactionRepo } from "@/lib/fsdb/repositories/transaction-repository";
import { routeUtil } from "../utils";

export async function GET() {
  const { status, ...res } = await transactionRepo.getAll();

  return Response.json(res, { status });
}

export async function POST(req: Request) {
  const body: CreateTransactionDto = await req.json();

  const { status, ...res } = await transactionRepo.create(body);

  return Response.json(res, { status });
}

export async function PATCH(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");
  const body: UpdateTransactionDto = await req.json();

  if (q) {
    const { status, ...res } = await transactionRepo.updateStatus(body, q);
    return Response.json(res, { status });
  }

  return routeUtil.missingQueryParam();
}

export async function DELETE(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");

  if (q) {
    const { status } = await transactionRepo.delete(q);
    return new Response(null, { status });
  }

  return routeUtil.missingQueryParam();
}
