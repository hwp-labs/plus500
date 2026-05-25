import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { TransactionEntity } from "@/app/api/transactions/types";
import { sleep } from "@/utils";
import { PATH_PROTECTED } from "@/constants/PATH";
//
import {
  FormDto,
  createTransactionApi,
  deleteTransactionApi,
  getTransactionsApi,
  updateTransactionApi,
} from "./utils";

export function useTransactionsApi() {
  const router = useRouter();
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

  const fetchTransactions = async () => {
    setFetching(true);

    const newData = await getTransactionsApi();
    if (newData) setData(newData);

    setFetching(false);
  };

  const fetchTransaction = async (email?: string) => {
    setFetching(true);

    const q = email || session!.email;
    const newData = await getTransactionsApi(q);
    if (newData) setData(newData);

    setFetching(false);
  };

  const handleDeposit = async (next?: () => void) => {
    if (validateForm(true)) {
      setLoading(true);
      const ok = await createTransactionApi(
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
        next?.();
        alert("Deposit Pending Approval!");
        window.location.reload();
      } else {
        setError("Deposit failed, please try again!");
      }
    }
  };

  const handleWithdraw = async (next?: () => void) => {
    if (validateForm()) {
      if (!form.wallet) {
        setError("Enter your wallet address!");
        return false;
      }

      setLoading(true);
      const ok = await createTransactionApi({
        email: session!.email,
        amount: form.amount!,
        wallet: form.wallet!,
        type: 0,
        status: 0,
      });
      setLoading(false);

      if (ok) {
        next?.();
        alert("Withdrawal Pending Approval!");
        window.location.reload();
      } else {
        setError("Withdrawal failed, please try again!");
      }
    }
  };

  const handleUpdate = async (id: TransactionEntity["id"]) => {
    if (confirm("Approve Transaction?")) {
      setError(null);
      setLoading(true);

      const ok = await updateTransactionApi({ status: 1 }, id);
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

      await deleteTransactionApi(item);
      setRefetchKey((s) => !s);

      setLoading(false);
    }
  };

  return {
    router,
    refetchKey,
    fetching,
    loading,
    success,
    error,
    setError,
    data,
    form,
    setForm,
    fetchTransactions,
    fetchTransaction,
    handleChange,
    handleView,
    handleDeposit,
    handleWithdraw,
    handleUpdate,
    handleDelete,
  };
}
