import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { TransactionEntity } from "@/lib/fsdb/config";
import { sleep } from "@/utils";
import { PATH_PROTECTED } from "@/constants/PATH";
//
import {
  FormDto,
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "./utils";

export function useTransactionsApi() {
  const router = useRouter()
  const session = useAuthStore((s) => s.session);

  const [refetchKey, setRefetchKey] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<TransactionEntity[]>([]);
  const [form, setForm] = useState<FormDto>({});

  const validateForm = (validateFile = false) => {
    setError(null);

    if (!session) {
      setError("Session error, please login and try again!");
      return false;
    }

    if (!form.amount) {
      setError("Enter a valid amount!");
      return false;
    }

    if (validateFile && !form.file) {
      setError("Upload proof of payment!");
      return false;
    }

    return true;
  };

  const handleChange = (form: Partial<FormDto>) => {
    setForm((s) => ({ ...s, ...form }));
  };

  const handleView = (receipt: TransactionEntity["receipt"]) => {
    if (receipt) window.open(receipt, "_blank");
  };

  const fetchData = async () => {
    setFetching(true);

    const newData = await getTransactions();
    if (newData) setData(newData);

    setFetching(false);
  };

  const handleDeposit = async (next?: () => void) => {
    if (validateForm(true)) {
      setLoading(true);
      const ok = await createTransaction(
        {
          email: session!.email,
          amount: form.amount!,
          type: 1,
          status: 0,
        },
        form.file,
      );
      setLoading(false);

      if (ok) {
        alert("Deposit Pending Approval!");
        next?.();
        router.push(PATH_PROTECTED.trade)
      } else {
        setError("Deposit failed, please try again!");
      }
    }
  };

  const handleWithdraw = async (next?: () => void) => {
    if (validateForm()) {
      setLoading(true);
      const ok = await createTransaction({
        email: session!.email,
        amount: form.amount!,
        type: 0,
        status: 0,
      });
      setLoading(false);

      if (ok) {
        alert("Withdrawal Pending Approval!");
        next?.();
        router.push(PATH_PROTECTED.trade)
      } else {
        setError("Withdrawal failed, please try again!");
      }
    }
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

  const handleDelete = async (item: TransactionEntity) => {
    if (confirm("Delete Transaction?")) {
      setLoading(true);

      await deleteTransaction(item);
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
    handleChange,
    handleView,
    handleDeposit,
    handleWithdraw,
    handleUpdate,
    handleDelete,
  };
}
