"use client";

import { useState } from "react";
import {
  CheckboxInput,
  NumberInput,
  PairedSubmitBtn,
} from "@/components/species/dashboard/components/form-builder";

export const BuySellForm = () => {
  const [checkedP, setCheckedP] = useState(false);
  const [checkedL, setCheckedL] = useState(false);
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
              <small>Profit: E2,496.68 (55.45%)</small>
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
            <div className="mt-2.5 space-y-1">
              <NumberInput defaultValue={127.37} sm />
              <small>Loss: E-45.15 (-1.00%)</small>
            </div>
          )}
        </div>
      </div>
      <PairedSubmitBtn>Sell</PairedSubmitBtn>
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
      <strong>$154,722.40 = E154,744.55</strong>
      <small>Value</small>
    </div>
    <div className="grid text-right">
      <strong>$30,954.48 = E30,948.91</strong>
      <small>Required Margin</small>
    </div>
  </div>
);
