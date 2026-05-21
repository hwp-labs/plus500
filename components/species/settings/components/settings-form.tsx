"use client";

import { useEffect } from "react";
import {
  TextInput,
  PairedSubmitBtn,
} from "@/components/species/dashboard/components/form-builder";
import { useAdminApi } from "@/hooks/services/use-admin-api";

export const SettingsForm = () => {
  const {
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
  } = useAdminApi();

  useEffect(() => {
    fetchAdmin();
  }, [refetchKey]);

  useEffect(() => {
    setForm({
      btc: data.btc.value,
      eth: data.eth.value,
      usdt: data.usdt.value,
      usdc: data.usdc.value,
    });
  }, [data]);
  //
  return (
    <>
      <ul className="space-y-4 [&>li]:space-y-1 [&>li>h2]:text-lg">
        <li>
          <h2>BTC Address</h2>
          <TextInput
            value={fetching ? "Loading..." : form.btc}
            onChange={(btc) => handleChange({ btc })}
          />
        </li>
        <li>
          <h2>ETH Address</h2>
          <TextInput
            value={fetching ? "Loading..." : form.eth}
            onChange={(eth) => handleChange({ eth })}
          />
        </li>
        <li>
          <h2>USDT Address</h2>
          <TextInput
            value={fetching ? "Loading..." : form.usdt}
            onChange={(usdt) => handleChange({ usdt })}
          />
        </li>
        <li>
          <h2>USDC Address</h2>
          <TextInput
            value={fetching ? "Loading..." : form.usdc}
            onChange={(usdc) => handleChange({ usdc })}
          />
        </li>
      </ul>
      <div className="mt-6"></div>
      <PairedSubmitBtn
        loading={loading}
        success={success}
        error={error}
        onSubmit={handleUpdate}
      >
        Save
      </PairedSubmitBtn>
    </>
  );
};
