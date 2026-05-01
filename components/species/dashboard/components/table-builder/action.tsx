"use client";

import { BellIcon, InfoIcon, StarIcon } from "lucide-react";

interface ActionProps {
  hasStar?: boolean;
  hasBell?: boolean;
  hasInfo?: boolean;
  onClickInfo?: () => void;
}

export const TableAction = ({
  hasStar,
  hasBell,
  hasInfo,
  onClickInfo,
}: ActionProps) => (
  <td className="">
    <div className="flex-cc debug_ gap-4">
      {hasStar && (
        <StarIcon className="dash-icon text-foreground size-[16px]!" />
      )}
      {hasBell && (
        <BellIcon className="dash-icon text-foreground size-[16px]!" />
      )}
      {hasInfo && (
        <InfoIcon
          onClick={onClickInfo}
          className="dash-icon text-foreground size-[16px]!"
        />
      )}
    </div>
  </td>
);
