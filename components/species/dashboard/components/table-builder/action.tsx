"use client";

import { PropsWithChildren } from "react";
import { BellIcon, InfoIcon, StarIcon, Trash2Icon } from "lucide-react";

interface ActionProps extends PropsWithChildren {
  hasStar?: boolean;
  hasBell?: boolean;
  hasInfo?: boolean;
  onInfo?: () => void;
  hasDelete?: boolean;
  onDelete?: () => void;
}

export const TableAction = ({
  children,
  hasStar,
  hasBell,
  hasInfo,
  onInfo,
  hasDelete,
  onDelete,
}: ActionProps) => (
  <td className="">
    <div className="flex-cc debug_ gap-4">
      {children}
      {hasStar && (
        <StarIcon className="dash-icon text-foreground size-[16px]!" />
      )}
      {hasBell && (
        <BellIcon className="dash-icon text-foreground size-[16px]!" />
      )}
      {hasInfo && (
        <InfoIcon
          onClick={onInfo}
          className="dash-icon text-foreground size-[16px]!"
        />
      )}
      {hasDelete && (
        <Trash2Icon
          onClick={onDelete}
          className="dash-icon text-danger size-[16px]!"
        />
      )}
    </div>
  </td>
);
