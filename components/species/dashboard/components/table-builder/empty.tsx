"use client";

import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRightIcon,
  DatabaseSearchIcon,
  RefreshCwIcon,
} from "lucide-react";
//
import { OutlineBtn } from "../form-builder";
import { TableBuilder } from "./";

interface Props extends PropsWithChildren {
  label: string;
  buttonText?: string;
  path?: string;
}

export const TableEmpty = ({ label, buttonText, path }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    path ? router.push(path) : router.refresh();
  };
  //
  return (
    <TableBuilder.Tr>
      <td colSpan={9}>
        <div className="flex-col-cc debug_ h-[255px] gap-2">
          <DatabaseSearchIcon size={32} />
          <h1 className="text-lg font-medium">{label}</h1>
          <OutlineBtn className="mt-2 py-2 text-sm!" onClick={handleClick}>
            {buttonText || "Refresh"}
            {buttonText ? (
              <ArrowRightIcon size={18} />
            ) : (
              <RefreshCwIcon size={18} />
            )}
          </OutlineBtn>
        </div>
      </td>
    </TableBuilder.Tr>
  );
};
