import {
  UpdateTransactionDto,
  TransactionEntity,
  CreateTransactionDto,
} from "@/lib/fsdb/config";
import { ApiUploadsDto } from "@/app/api/uploads/route";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export type FormDto = { 
amount?: number; 
file?: File };

export const getTransactions = async () => {
  const raw = await fetch(`/api/transactions`);

  if (raw.status === HTTP_STATUS_CODE.OK) {
    const { data }: { data: TransactionEntity[] } = await raw.json();
    return data;
  }
};

export const createTransaction = async (
  form: CreateTransactionDto,
  file?: File,
) => {
  const fileSafe = { ...form };

  if (file) {
    const body = new FormData();
    body.append("file", file);

    const raw = await fetch("/api/uploads", {
      method: "POST",
      body,
    });

    if (raw.status === HTTP_STATUS_CODE.CREATED) {
      const res: { data: ApiUploadsDto } = await raw.json();
      fileSafe.receipt = res.data.filename;
    }
  }

  const raw = await fetch("/api/transactions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fileSafe),
  });

  return raw.status === HTTP_STATUS_CODE.CREATED;
};

export const updateTransaction = async (
  form: UpdateTransactionDto,
  id: TransactionEntity["id"],
) => {
  const raw = await fetch(`/api/transactions/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  return raw.status === HTTP_STATUS_CODE.OK;
};

export const deleteTransaction = async (item: TransactionEntity) => {
  if (item.receipt) {
    await fetch(`/api/uploads`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename: item.receipt }),
    });
  }

  const raw = await fetch(`/api/transactions/${item.id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  return raw.status === HTTP_STATUS_CODE.NO_CONTENT;
};
