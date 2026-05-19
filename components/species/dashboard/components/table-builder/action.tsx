"use client";

import { PropsWithChildren } from "react";
import {
  BellIcon,
  InfoIcon,
  ReceiptTextIcon,
  SquarePenIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react";
import clsx from "clsx";

interface ActionProps extends PropsWithChildren {
  loading?: boolean;
  hasStar?: boolean;
  hasBell?: boolean;
  hasInfo?: boolean;
  onInfo?: () => void;
  hasFile?: boolean;
  onFile?: () => void;
  hasEdit?: boolean;
  onEdit?: () => void;
  hasDelete?: boolean;
  onDelete?: () => void;
}

const classNames = { icon: "dash-icon text-foreground size-[16px]!" };

export const TableAction = ({
  children,
  loading,
  hasStar,
  hasBell,
  hasInfo,
  onInfo,
  hasFile,
  onFile,
  hasEdit,
  onEdit,
  hasDelete,
  onDelete,
}: ActionProps) => (
  <td className="">
    <div className="flex-cc debug_ gap-4">
      {children}
      {hasStar && <StarIcon className={classNames.icon} />}
      {hasBell && <BellIcon className={classNames.icon} />}
      {hasInfo && (
        <button title="View" onClick={onInfo} disabled={loading}>
          <InfoIcon className={classNames.icon} />
        </button>
      )}
      {hasFile && (
        <button title="Receipt" onClick={onFile} disabled={loading}>
          <ReceiptTextIcon className={classNames.icon} />
        </button>
      )}
      {hasEdit && (
        <button title="Edit" onClick={onEdit} disabled={loading}>
          <SquarePenIcon className={classNames.icon} />
        </button>
      )}
      {hasDelete && (
        <button title="Delete" onClick={onDelete} disabled={loading}>
          <Trash2Icon className={clsx(classNames.icon, "text-danger!")} />
        </button>
      )}
    </div>
  </td>
);
