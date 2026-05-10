"use client";

import { IconCreditCardPay, IconCreditCardRefund } from "@tabler/icons-react";
import { DepositForm } from "./deposit-form";
import { WithdrawForm } from "./withdraw-form";
import { useFundsStore } from "@/store/wallet-store";

export const CtaButtons = () => {
  const deposit = useFundsStore((s) => s.deposit);
  const toggleDeposit = useFundsStore((s) => s.toggleDeposit);
  const withdraw = useFundsStore((s) => s.withdraw);
  const toggleWithdraw = useFundsStore((s) => s.toggleWithdraw);
  //
  return (
    <div className="">
      {deposit && <DepositForm onClose={toggleDeposit}/>}
      {withdraw && <WithdrawForm onClose={toggleWithdraw}/>}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <button
          onClick={toggleDeposit}
          className="btn btn-lg bg-secondary max-h-[50px] rounded-full border-none"
        >
          <IconCreditCardPay />
          Deposit
        </button>
        <button
          onClick={toggleWithdraw}
          className="btn btn-lg bg-secondary max-h-[50px] rounded-full border-none"
        >
          <IconCreditCardRefund />
          Withdraw
        </button>
      </div>
    </div>
  );
};
