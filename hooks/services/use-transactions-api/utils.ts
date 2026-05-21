import {
  UpdateTransactionDto,
  TransactionEntity,
  CreateTransactionDto,
} from "@/app/api/transactions/types";
import { UploadsDto } from "@/app/api/uploads/route";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export type FormDto = {
  amount?: number;
  file?: File;
};

export const getTransactionsApi = async (q?: string | null) => {
  const raw = q
    ? await fetch(`/api/transactions?q=${q}`)
    : await fetch(`/api/transactions`);

  if (raw.status === HTTP_STATUS_CODE.OK) {
    const { data }: { data: TransactionEntity[] } = await raw.json();
    return data;
  }
};

export const createTransactionApi = async (
  form: CreateTransactionDto,
  file?: File,
) => {
  const fileSafe = { ...form };

  if (file) {
    const body = new FormData();
    body.append("file", file);

    const raw = await fetch("/api/uploads/v2", {
      method: "POST",
      body,
    });

    if (raw.status === HTTP_STATUS_CODE.CREATED) {
      const res: { data: UploadsDto } = await raw.json();
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

export const updateTransactionApi = async (
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

export const deleteTransactionApi = async (item: TransactionEntity) => {
  if (item.receipt) {
    await fetch(`/api/uploads/v2`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename: item.receipt }),
    });
  }

  const raw = await fetch(`/api/transactions/${item.id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  return raw.status === HTTP_STATUS_CODE.OK;
};
