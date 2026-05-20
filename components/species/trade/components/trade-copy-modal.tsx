"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { IconInfoCircle, IconXFilled } from "@tabler/icons-react";
import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
//
import { TransformedTraderDto } from "@/hooks/use-traders";
import { PATH_PROTECTED } from "@/constants/PATH";

interface Props {
  trader: TransformedTraderDto;
  onClose?: () => void;
}

export const TradeCopyModal = ({ trader, onClose }: Props) => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    router.push(PATH_PROTECTED.funds);
  };
  //
  return (
    <div className="flex-cc fixed inset-0 z-50 bg-black/80">
      <div className="text-background w-full max-w-md rounded-xl bg-white shadow-lg">
        <div className="flex-cb border-ash2 border-b px-6 py-4 pb-2">
          <h1 className="text-lg font-semibold">Copy Trader</h1>
          <button onClick={onClose} className="btn-fx" title="Close">
            <IconXFilled />
          </button>
        </div>
        <div className="px-6 pb-6">
          <div className="flex-cb mt-4 rounded bg-blue-50 px-4 py-2">
            <span>Risk Assessment</span>
            <div
              className={clsx(
                "bg-warning flex-cc _size-4 px-1 text-xs text-white",
                trader.changeColorBg,
              )}
            >
              {trader.changeRiskText}
            </div>
          </div>
          <figure className="flex-cs mt-4 gap-4">
            <img
              src={trader.avatar}
              alt=""
              width={40}
              className="border-muted rounded-full border-2 shadow-2xl"
            />
            <figcaption className="grid leading-3">
              <strong className="text-lg">{trader.username}</strong>
              <small>{trader.market}</small>
            </figcaption>
          </figure>
          <div className="flex-cs mt-4 gap-8">
            <div className="flex-cs gap-1.5">
              Initial Margin <IconInfoCircle size={14} />
            </div>
            <div className="flex-cs gap-1.5">
              Maintenance Margin <IconInfoCircle size={14} />
            </div>
          </div>
          <div className="flex-cs mt-2 gap-4">
            <div className="border-secondary border px-4 py-1">
              {trader.copiesText}
            </div>
            <span>Copies</span>
          </div>
          <div
            className="mt-4 font-medium"
            dangerouslySetInnerHTML={{ __html: trader.roiRichText }}
          />
          <div className="border-ash3 flex-cb mt-4 border px-4 py-1">
            <CircleMinusIcon size={14} />
            <strong className={clsx("text-lg", trader.changeColor)}>
              {trader.changeText}
            </strong>
            <CirclePlusIcon size={14} />
          </div>
          <p className="mt-2 text-xs">
            Your funds are less than 24 USDT,{" "}
            <Link
              className="text-secondary underline"
              href={PATH_PROTECTED.funds}
            >
              deposit now
            </Link>{" "}
            to start automatic copy trading.
          </p>
          <button
            onClick={handleSubmit}
            className="btn-fx dash-submit-btn mt-4 text-white!"
          >
            {submitting ? "Copying..." : "Copy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};
