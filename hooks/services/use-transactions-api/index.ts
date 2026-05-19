import { useState } from "react";
import { TransactionEntity } from "@/lib/fsdb/config";
import { sleep } from "@/utils";
//
import { deleteTransaction, getTransactions, updateTransaction } from "./utils";

export function useTransactionsApi() {
  const [refetchKey, setRefetchKey] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<TransactionEntity[]>([]);

  const fetchData = async () => {
    setFetching(true);

    const newData = await getTransactions();
    if (newData) setData(newData);

    setFetching(false);
  };

  const handleUpdate = async (id: TransactionEntity["id"]) => {
    if (confirm("Approve Transaction?")) {
      setError(null);
      setLoading(true);

      const ok = await updateTransaction({ status: 1 }, id);
      if (ok) {
        setSuccess(true);
        await sleep(2);
        setSuccess(false);
        setRefetchKey((s) => !s);
      } else {
        setError("Update failed, please try again!");
      }

      setLoading(false);
    }
  };

  const handleDelete = async (id: TransactionEntity["id"]) => {
    if (confirm("Delete Transaction?")) {
      setLoading(true);

      await deleteTransaction(id);
      setRefetchKey((s) => !s);

      setLoading(false);
    }
  };

  return {
    refetchKey,
    fetching,
    loading,
    success,
    error,
    data,
    fetchData,
    handleUpdate,
    handleDelete,
  };
}
