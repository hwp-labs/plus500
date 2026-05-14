import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";
import { useAuthStore } from "@/store/auth-store";
import { useState } from "react";

export function useMutateTransaction() {
  const session = useAuthStore((s) => s.session);

  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {};

  const handleCreate = async (next?: () => void) => {
    if (session && amount) {
      setLoading(true);

      const raw = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: session.email,
          amount,
          type: 0,
          status: 0,
        }),
      });

      if (raw.status === HTTP_STATUS_CODE.CREATED) {
        alert("Done!");
        next?.();
      }

      setLoading(false);
    }
  };

  const handleUpdate = async () => {};
  const handleDelete = async () => {};

  return {
    amount,
    setAmount,
    loading,
    handleUpload,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
}
