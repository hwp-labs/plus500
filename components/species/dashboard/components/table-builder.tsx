import { PropsWithChildren } from "react";
import { BellIcon, InfoIcon, StarIcon } from "lucide-react";
import clsx from "clsx";
import { momentUtil } from "@/utils/moment-util";

interface TheadProps {
  data: string[];
  hasNumbers?: boolean;
  hasActions?: boolean;
}

const Thead = ({ data, hasNumbers, hasActions }: TheadProps) => {
  return (
    <thead className="border-ash6 border-b text-left [&>tr>th]:px-4 [&>tr>th]:py-2">
      <tr>
        {hasNumbers && <th></th>}
        {data.map((item, i) => {
          const alignCenter = item.indexOf("|c") > 0;
          const alignRight = item.indexOf("|r") > 0;
          const safeText = item.replaceAll("|c", "").replaceAll("|r", "");
          //
          return (
            <th
              key={i}
              className={clsx(
                alignCenter && "text-center",
                alignRight && "text-right",
              )}
            >
              {safeText}
            </th>
          );
        })}
        {hasActions && <th></th>}
      </tr>
    </thead>
  );
};

const Tbody = ({ children }: PropsWithChildren) => {
  return (
    <tbody className="[&>tr]:border-ash7 [&>tr]:border-b [&>tr>td]:px-4 [&>tr>td]:py-2">
      {children}
    </tbody>
  );
};

interface DateTimeProps {
  dt?: string | null;
  cc?: boolean;
  cr?: boolean;
}

const DateTime = ({ dt, cc, cr }: DateTimeProps) => {
  return (
    <td className={clsx(cc && "text-center", cr && "text-right")}>
      {momentUtil.stdDate(dt)}
      <br />
      {momentUtil.stdTime(dt)}
    </td>
  );
};

interface ActionProps {
  hasStar?: boolean;
  hasBell?: boolean;
  hasInfo?: boolean;
}

const Action = ({ hasStar, hasBell, hasInfo }: ActionProps) => {
  return (
    <td className="">
      <div className="flex-cc debug_ gap-4">
        {hasStar && <StarIcon size={16} />}
        {hasBell && <BellIcon size={16} />}
        {hasInfo && <InfoIcon size={16} />}
      </div>
    </td>
  );
};

const Cc = ({ children }: PropsWithChildren) => {
  return <td className="text-center">{children}</td>;
};

const Cr = ({ children }: PropsWithChildren) => {
  return <td className="text-right">{children}</td>;
};

export const TableBuilder = { Thead, Tbody, DateTime, Action, Cc, Cr };
