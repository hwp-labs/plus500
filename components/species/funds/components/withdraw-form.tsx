"use client";

import {
  NumberInput,
  PairedSubmitBtn,
} from "../../dashboard/components/form-builder";
import { SectionHeading } from "./section-heading";

interface Props {
  onClose?: () => void;
}

export const WithdrawForm = ({ onClose }: Props) => {
  return (
    <section>
      <SectionHeading onClose={onClose}>Withdrawal Slip</SectionHeading>
      <div className="mt-2"></div>
      <NumberInput />
      <PairedSubmitBtn>Confirm withdrawal</PairedSubmitBtn>
    </section>
  );
};
