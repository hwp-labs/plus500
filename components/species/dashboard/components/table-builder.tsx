import { Fragment, PropsWithChildren } from "react";
import { BellIcon, InfoIcon, StarIcon } from "lucide-react";
import clsx from "clsx";
//
import { asMoney } from "@/utils";
import { momentUtil } from "@/utils/moment-util";
import { CURRENCY } from "@/constants/CURRENCY";

interface TheadProps {
  data: string[];
  hasNumbers?: boolean;
  hasActions?: boolean;
}

const Thead = ({ data, hasNumbers, hasActions }: TheadProps) => (
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

const Tbody = ({ children }: PropsWithChildren) => (
  <tbody className="[&>tr]:border-ash7 [&>tr]:border-b [&>tr>td]:px-4 [&>tr>td]:py-2">
    {children}
  </tbody>
);

const Tc = ({ children }: PropsWithChildren) => (
  <td className="text-center">{children}</td>
);

const Tr = ({ children }: PropsWithChildren) => (
  <td className="text-right">{children}</td>
);

interface AmountProps {
  value: number;
  noDp?: boolean;
  currency?: "usd" | "eur";
  suffix?: string;
  tc?: boolean;
  tr?: boolean;
  colored?: boolean;
}

const Amount = ({
  value,
  noDp,
  currency,
  suffix,
  tc,
  tr,
  colored,
}: AmountProps) => (
  <td
    className={clsx(
      tc && "text-center",
      tr && "text-right",
      colored && (value < 1 ? "text-danger" : "text-success"),
    )}
  >
    {currency === "usd"
      ? CURRENCY.US_Dollar.symbol
      : currency === "eur"
        ? CURRENCY.Euro.symbol
        : null}
    {asMoney(value, noDp)}
    {suffix}
  </td>
);

const DateTime = ({ dt }: { dt?: string | null }) => (
  <td className="text-center">
    {momentUtil.stdDate(dt)}
    <br />
    {momentUtil.stdTime(dt)}
  </td>
);

interface ActionProps {
  hasStar?: boolean;
  hasBell?: boolean;
  hasInfo?: boolean;
}

const Action = ({ hasStar, hasBell, hasInfo }: ActionProps) => (
  <td className="">
    <div className="flex-cc debug_ gap-4">
      {hasStar && <StarIcon size={16} />}
      {hasBell && <BellIcon size={16} />}
      {hasInfo && <InfoIcon size={16} />}
    </div>
  </td>
);

const BuyBr = ({ text }: { text: string }) => (
  <td>
    Buy
    <br />
    <strong>{text}</strong>
  </td>
);

interface ObjBrProps {
  data: Record<string, number>;
}

const ObjBr = ({ data }: ObjBrProps) => (
  <td>
    {Object.entries(data).map(([label, value], i) => (
      <Fragment key={i}>
        <strong>{label}: </strong>
        {asMoney(value)} <br />
      </Fragment>
    ))}
  </td>
);

export const TableBuilder = {
  Thead,
  Tbody,
  Tc,
  Tr,
  Amount,
  DateTime,
  Action,
  BuyBr,
  ObjBr,
};
