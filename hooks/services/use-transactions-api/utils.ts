import { UpdateTransactionDto, TransactionEntity } from "@/lib/fsdb/config";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export const getTransactions = async () => {
  const raw = await fetch(`/api/transactions`);

  if (raw.status === HTTP_STATUS_CODE.OK) {
    const { data }: { data: TransactionEntity[] } = await raw.json();
    return data;
  }
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

export const deleteTransaction = async (id: TransactionEntity["id"]) => {
  const raw = await fetch(`/api/transactions/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  return raw.status === HTTP_STATUS_CODE.NO_CONTENT;
};
