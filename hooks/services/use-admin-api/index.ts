import { useState } from "react";
import { UpdateAdminDto } from "@/lib/fsdb/config";
import { sleep } from "@/utils";
//
import { DataDto, defaultData, getFirst, updateWallet } from "./utils";

export function useAdminApi() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<DataDto>(defaultData);
  const [form, setForm] = useState<UpdateAdminDto>({});

  const handleChange = (form: UpdateAdminDto) => {
    setForm((s) => ({ ...s, ...form }));
  };

  const getFirstQuery = async () => {
    setLoading(true);

    const newData = await getFirst(data);
    if (newData) setData(newData);

    setLoading(false);
  };

  const updateWalletMutation = async () => {
    setError(null);
    setLoading(true);

    const ok = await updateWallet(form);
    setLoading(false);

    if (ok) {
      setSuccess(true);
      await sleep(2.5);
      setSuccess(false);
    } else {
      setError("Update failed, please try again!");
    }
  };

  return {
    loading,
    success,
    error,
    data,
    setData,
    form,
    setForm,
    handleChange,
    getFirstQuery,
    updateWalletMutation,
  };
}
