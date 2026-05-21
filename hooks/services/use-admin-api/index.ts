import { useState } from "react";
import { UpdateAdminDto } from "@/app/api/admins/types";
import { sleep } from "@/utils";
//
import { DataDto, defaultData, defaultForm, getAdminApi, updateAdminApi } from "./utils";

export function useAdminApi() {
  const [refetchKey, setRefetchKey] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<DataDto>(defaultData);
  const [form, setForm] = useState<UpdateAdminDto>(defaultForm);

  const handleChange = (form: UpdateAdminDto) => {
    setForm((s) => ({ ...s, ...form }));
  };

  const fetchAdmin = async () => {
    setFetching(true);

    const newData = await getAdminApi(data);
    if (newData) setData(newData);

    setFetching(false);
  };

  const handleUpdate = async () => {
    setError(null);
    setLoading(true);

    const ok = await updateAdminApi(form);
    if (ok) {
      setSuccess(true);
      await sleep(2.5);
      setSuccess(false);
      setRefetchKey((s) => !s);
    } else {
      setError("Update failed, please try again!");
    }

    setLoading(false);
  };

  return {
    refetchKey,
    fetching,
    loading,
    success,
    error,
    data,
    form,
    setForm,
    handleChange,
    fetchAdmin,
    handleUpdate,
  };
}
