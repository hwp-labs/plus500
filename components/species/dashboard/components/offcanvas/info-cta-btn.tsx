"use client";

import { ColorVariantType } from "@/types";
import { asMoney } from "@/utils";
import clsx from "clsx";

interface Props {
  label: string;
  value: number;
  onClick?: () => void;
  variant?: ColorVariantType;
}

export const InfoCtaBtn = ({ label, value, onClick, variant }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex-col-cc border-ash5 btn-fx hover:bg-secondary hover:border-secondary h-18 flex-1 gap-0 border-2 hover:text-white"
    >
      <strong className="text-xs">{label}</strong>
      <span
        className={clsx(
          "text-2xl leading-7",
          variant === "danger" && "text-danger",
          variant === "success" && "text-success",
        )}
      >
        {asMoney(value)}
      </span>
    </button>
  );
};
