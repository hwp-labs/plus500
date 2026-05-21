"use client";

import { useEffect, useState } from "react";
import {
  NumberInput,
  PairedSubmitBtn,
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
  const { loading, success, error, setError, handleChange, handleWithdraw } =
    useTransactionsApi();

  const handleSubmit = () => {
    if (canSubmit) handleWithdraw(onClose);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  //
  return (
    <section>
      <SectionHeading onClose={onClose}>Withdrawal Slip</SectionHeading>
      <div className="mt-2 grid items-start gap-6 sm:grid-cols-2">
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
        <PairedSubmitBtn
          loading={loading}
          success={success}
          error={error}
          onSubmit={handleSubmit}
          onCancel={onClose}
        >
          Confirm Withdrawal
        </PairedSubmitBtn>
      </div>
    </section>
  );
};
