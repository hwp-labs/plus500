import { useState } from "react";
import { useAuthStore } from "@/store/auth-store";
import { CreateTransactionDto, ITransaction } from "@/lib/fsdb/config";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export function useMutateTransaction() {
  const session = useAuthStore((s) => s.session);

  const [amount, setAmount] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const _handleUpload = async () => {};

  const _handleCreate = async (payload: Partial<CreateTransactionDto>) => {
    if (session && amount) {
      setLoading(true);

      const raw = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: session.email,
          status: 0,
          amount,
          ...payload,
        }),
      });

      setLoading(false);
      return raw.status;
    }
  };

  const handleDeposit = async (next?: () => void) => {
    if (!file) {
      alert("Upload proof of payment!");
      return;
    }

    const status = await _handleCreate({ type: 1, receipt: file.name });
    if (status === HTTP_STATUS_CODE.CREATED) {
      alert("Deposit Pending Approval!");
      next?.();
    }
  };

  const handleWithdraw = async (next?: () => void) => {
    const status = await _handleCreate({ type: 0 });
    if (status === HTTP_STATUS_CODE.CREATED) {
      alert("Withdrawal Pending Approval!");
      next?.();
    }
  };

  const handleUpdate = async (
    payload: Pick<ITransaction, "email" | "status">,
    next?: () => void,
  ) => {
    setLoading(true);
    const raw = await fetch(`/api/transactions?q=${payload.email}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: payload.status }),
    });

    setLoading(false);
    if (raw.status === HTTP_STATUS_CODE.OK) next?.();
  };

  const handleDelete = async (email: string, next?: () => void) => {
    setLoading(true);
    const raw = await fetch(`/api/transactions?q=${email}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    setLoading(false);
    if (raw.status === HTTP_STATUS_CODE.NO_CONTENT) next?.();
  };

  return {
    amount,
    setAmount,
    file,
    setFile,
    loading,
    handleDeposit,
    handleWithdraw,
    handleUpdate,
    handleDelete,
  };
}
