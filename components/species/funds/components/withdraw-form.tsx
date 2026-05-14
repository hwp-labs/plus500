"use client";

import {
  NumberInput,
  PairedSubmitBtn,
} from "../../dashboard/components/form-builder";
import { SectionHeading } from "./section-heading";
import { useMutateTransaction } from "@/hooks/use-mutate-transaction";

interface Props {
  onClose?: () => void;
}

export const WithdrawForm = ({ onClose }: Props) => {
  const { setAmount, loading, handleWithdraw } = useMutateTransaction();
  //
  return (
    <section>
      <SectionHeading onClose={onClose}>Withdrawal Slip</SectionHeading>
      <div className="mt-2 grid gap-6 sm:grid-cols-2">
        <NumberInput onChange={(amount) => setAmount(amount)} />
        <PairedSubmitBtn
          loading={loading}
          onClick={() => handleWithdraw(onClose)}
        >
          {loading ? "Processing..." : "Confirm Withdrawal"}
        </PairedSubmitBtn>
      </div>
    </section>
  );
};
