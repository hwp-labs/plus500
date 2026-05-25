"use client";

import { useEffect, useState } from "react";
import {
  NumberInput,
  PairedSubmitBtn,
  TextInput,
} from "../../dashboard/components/form-builder";
import { SectionHeading } from "./section-heading";
import { useTransactionsApi } from "@/hooks/services/use-transactions-api";
import { useUsersApi } from "@/hooks/services/use-users-api";
import { asMoney } from "@/utils";
import { CURRENCY } from "@/constants/CURRENCY";

interface Props {
  onClose?: () => void;
}

export const WithdrawForm = ({ onClose }: Props) => {
  const [canSubmit, setCanSubmit] = useState(true);
  const { user, fetchUser } = useUsersApi();
  const {
    loading,
    success,
    error,
    setError,
    form,
    handleChange,
    handleWithdraw,
  } = useTransactionsApi();

  const handleSubmit = () => {
    if (canSubmit) handleWithdraw(onClose);
  };

  useEffect(() => {
    if (user.wallet) handleChange({ wallet: user.wallet });
  }, [user.wallet]);

  useEffect(() => {
    fetchUser();
  }, []);
  //
  return (
    <section>
      <SectionHeading onClose={onClose}>Withdrawal Slip</SectionHeading>
      <div className="my-4 grid items-start gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <strong>Enter Amount</strong>
          <NumberInput
            onChange={(amount) => {
              if (amount <= (user.available || 0)) {
                handleChange({ amount });
                setCanSubmit(true);
                setError(null);
              } else {
                setCanSubmit(false);
                setError(
                  `Insufficient balance: Limit ${CURRENCY.Euro.symbol}${asMoney(user.available)}`,
                );
              }
            }}
          />
        </div>
        <div className="space-y-2">
          <strong>Enter Wallet Address</strong>
          <TextInput
            value={form.wallet}
            onChange={(wallet) => handleChange({ wallet })}
          />
        </div>
      </div>
      <PairedSubmitBtn
        loading={loading}
        success={success}
        error={error}
        onSubmit={handleSubmit}
        onCancel={onClose}
      >
        Confirm Withdrawal
      </PairedSubmitBtn>
    </section>
  );
};
