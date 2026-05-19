"use client";

import {
  NumberInput,
  PairedSubmitBtn,
} from "../../dashboard/components/form-builder";
import { SectionHeading } from "./section-heading";
import { useTransactionsApi } from "@/hooks/services/use-transactions-api";

interface Props {
  onClose?: () => void;
}

export const WithdrawForm = ({ onClose }: Props) => {
  const { loading, success, error, handleChange, handleWithdraw } =
    useTransactionsApi();
  //
  return (
    <section>
      <SectionHeading onClose={onClose}>Withdrawal Slip</SectionHeading>
      <div className="mt-2 grid gap-6 sm:grid-cols-2">
        <NumberInput onChange={(amount) => handleChange({ amount })} />
        <PairedSubmitBtn
          loading={loading}
          success={success}
          error={error}
          onClick={() => handleWithdraw(onClose)}
        >
          Confirm Withdrawal
        </PairedSubmitBtn>
      </div>
    </section>
  );
};
