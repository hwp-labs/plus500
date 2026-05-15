"use client";

import { IconCreditCardPay, IconCreditCardRefund } from "@tabler/icons-react";
import { DepositForm } from "./deposit-form";
import { WithdrawForm } from "./withdraw-form";
import { useFundsStore } from "@/store/funds-store";

export const CtaButtons = () => {
  const deposit = useFundsStore((s) => s.deposit);
  const toggleDeposit = useFundsStore((s) => s.toggleDeposit);
  const setDeposit = useFundsStore((s) => s.setDeposit);
  const withdraw = useFundsStore((s) => s.withdraw);
  const toggleWithdraw = useFundsStore((s) => s.toggleWithdraw);
  const setWithdraw = useFundsStore((s) => s.setWithdraw);
  //
  return (
    <div className="">
      {deposit && <DepositForm onClose={toggleDeposit} />}
      {withdraw && <WithdrawForm onClose={toggleWithdraw} />}
      {deposit || withdraw ? null : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <button
            onClick={() => {
              setWithdraw(false);
              toggleDeposit();
            }}
            className="btn btn-lg bg-secondary max-h-[50px] rounded-full border-none"
          >
            <IconCreditCardPay />
            Deposit
          </button>
          <button
            onClick={() => {
              setDeposit(false);
              toggleWithdraw();
            }}
            className="btn btn-lg bg-secondary max-h-[50px] rounded-full border-none"
          >
            <IconCreditCardRefund />
            Withdraw
          </button>
        </div>
      )}
    </div>
  );
};
