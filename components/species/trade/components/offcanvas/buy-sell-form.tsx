"use client";

import { useState } from "react";
import {
  CheckboxInput,
  NumberInput,
  PairedSubmitBtn,
} from "@/components/species/dashboard/components/form-builder";
import { CURRENCY } from "@/constants/CURRENCY";
import { useAppStore } from "@/store/app-store";

export const BuySellForm = ({ buy }: { buy?: boolean }) => {
  const reset = useAppStore((s) => s.reset);
  const [checkedP, setCheckedP] = useState(false);
  const [checkedL, setCheckedL] = useState(false);
  const [checkedG, setCheckedG] = useState(false);
  //
  return (
    <div className="">
      {renderInputLabel}
      <NumberInput defaultValue={1992} />
      {renderInputDescription}
      <div className="mt-6 space-y-4">
        <div>
          <CheckboxInput
            label="Close at profit"
            checked={checkedP}
            onCheck={() => setCheckedP((s) => !s)}
          />
          {checkedP && (
            <div className="mt-2.5 space-y-1">
              <NumberInput defaultValue={200.0} sm />
              <small>Profit: {CURRENCY.Euro.symbol}2,496.68 (55.45%)</small>
            </div>
          )}
        </div>
        <div>
          <CheckboxInput
            label="Close at loss"
            checked={checkedL}
            onCheck={() => setCheckedL((s) => !s)}
          />
          {checkedL && (
            <>
              <div className="my-2.5 space-y-1">
                <NumberInput defaultValue={127.37} sm />
                <small>Loss: {CURRENCY.Euro.symbol}-45.15 (-1.00%)</small>
              </div>
              <CheckboxInput
                label="Guaranteed stop"
                checked={checkedG}
                onCheck={() => setCheckedG((s) => !s)}
              />
              {checkedG && (
                <div className="mt-2.5">
                  <b>(Wider Spread 0.00008)</b>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <PairedSubmitBtn onSubmit={reset}>{buy ? "Buy" : "Sell"}</PairedSubmitBtn>
    </div>
  );
};

const renderInputLabel = (
  <div className="flex-cb">
    <div className="flex-cs gap-1">
      Amount:
      <strong>Shares</strong>
    </div>
    <small>After leverage</small>
  </div>
);

const renderInputDescription = (
  <div className="flex-cb mt-2">
    <div className="grid">
      <strong>
        {CURRENCY.USD.symbol}154,722.40 = {CURRENCY.Euro.symbol}154,744.55
      </strong>
      <small>Value</small>
    </div>
    <div className="grid text-right">
      <strong>
        {CURRENCY.USD.symbol}30,954.48 = {CURRENCY.Euro.symbol}30,948.91
      </strong>
      <small>Required Margin</small>
    </div>
  </div>
);
