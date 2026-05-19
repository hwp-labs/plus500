"use client";

import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon, DatabaseSearchIcon } from "lucide-react";
//
import { OutlineBtn } from "../form-builder";
import { TableBuilder } from "./";

interface Props extends PropsWithChildren {
  label: string;
  buttonText?: string;
  path?: string;
}

export const TrEmpty = ({ label, buttonText, path }: Props) => {
  const router = useRouter();
  //
  return (
    <TableBuilder.Tr>
      <td colSpan={9}>
        <div className="flex-col-cc debug_ h-[255px] gap-2">
          <DatabaseSearchIcon size={32} />
          <h1 className="text-lg font-medium">{label}</h1>
          <OutlineBtn
            className="mt-2 py-2 text-sm!"
            onClick={() => router.push(path || "#")}
          >
            {buttonText}
            <ArrowRightIcon size={18} />
          </OutlineBtn>
        </div>
      </td>
    </TableBuilder.Tr>
  );
};
