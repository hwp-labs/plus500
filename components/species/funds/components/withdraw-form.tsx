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
  const { setAmount, loading, handleCreate } = useMutateTransaction();
  //
  return (
    <section>
      <SectionHeading onClose={onClose}>Withdrawal Slip</SectionHeading>
      <div className="mt-2"></div>
      <NumberInput onChange={setAmount} />
      <PairedSubmitBtn loading={loading} onClick={() => handleCreate(onClose)}>
        {loading ? "Processing..." : "Confirm Withdraw"}
      </PairedSubmitBtn>
    </section>
  );
};
