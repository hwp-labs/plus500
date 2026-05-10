"use client";

import { useState } from "react";
import {
  CheckboxInput,
  NumberInput,
} from "@/components/species/dashboard/components/form-builder";
import { SectionHeading } from "./section-heading";
import { CURRENCY } from "@/constants/CURRENCY";

export const AdvancedSection = ({ collapsed }: { collapsed?: boolean }) => {
  const [checkedT, setCheckedT] = useState(false);
  const [checkedB, setCheckedB] = useState(false);
  //
  return (
    <SectionHeading label="Advanced" collapsed={collapsed}>
      <div className="mt-2 space-y-4">
        <div>
          <CheckboxInput
            label={
              <>
                Trailing stop: <strong>Pips</strong>
              </>
            }
            checked={checkedT}
            onCheck={() => setCheckedT((s) => !s)}
          />
          {checkedT && (
            <div className="mt-2.5 space-y-1">
              <NumberInput defaultValue={31} sm />
              <small>{CURRENCY.Euro.symbol}-44.46 -0.99%</small>
            </div>
          )}
        </div>
        <div>
          <CheckboxInput
            label="Buy when rate is"
            checked={checkedB}
            onCheck={() => setCheckedB((s) => !s)}
          />
          {checkedB && (
            <div className="mt-2.5 space-y-1">
              <NumberInput defaultValue={128.90} sm />
              <small>0.31% from last rate</small>
            </div>
          )}
        </div>
      </div>
    </SectionHeading>
  );
};
