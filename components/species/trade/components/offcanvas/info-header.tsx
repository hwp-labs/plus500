"use client";

import clsx from "clsx";
import { ArrowUpIcon } from "lucide-react";
import {
  IconStar,
  IconStarFilled,
  IconBellFilled,
  IconBell,
} from "@tabler/icons-react";
import { useAppStore } from "@/store/app-store";

interface Props {
  name: string;
  nameShort: string;
}

export const InfoHeader = ({ name, nameShort }: Props) => {
  const star = useAppStore((s) => s.star);
  const toggleStar = useAppStore((s) => s.toggleStar);
  const alert = useAppStore((s) => s.alert);
  const toggleAlert = useAppStore((s) => s.toggleAlert);
  //
  return (
    <div className="flex-sb">
      <div className="">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="mt-2">({nameShort})</p>
        <p className="mt-1 text-xs leading-4">
          Advanced Micro Devices Inc. An American multinational semiconductor
          company based in Santa Clara, Califonia.
          <a className="text-secondary">Yahoo! Finance</a>
        </p>
      </div>
      <div className="flex-col-ee gap-2">
        <div className="flex-cs text-success gap-1">
          <span>1.06%</span>
          <ArrowUpIcon size={16} />
        </div>
        <div className="flex-cs gap-2">
          <button
            onClick={toggleStar}
            className={clsx(classNames.btnIcon, star && classNames.btnIcon_focus)}
          >
            {star ? (
              <IconStarFilled size={16} strokeWidth={3} />
            ) : (
              <IconStar size={16} strokeWidth={3} />
            )}
          </button>
          <button
            onClick={toggleAlert}
            className={clsx(classNames.btnIcon, alert && classNames.btnIcon_focus)}
          >
            {alert ? (
              <IconBellFilled size={16} strokeWidth={3} />
            ) : (
              <IconBell size={16} strokeWidth={3} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const classNames = {
  btnIcon:
    "flex-cc hover:bg-[#426da5] hover:border-[#426da5] border-ash4 btn-fx size-8 rounded-full border",
  btnIcon_focus:
    "bg-[#2e4f79] border-ash5",
};
