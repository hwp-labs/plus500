import { PropsWithChildren } from "react";
import clsx from "clsx";
//
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { asMoney } from "@/utils";
import data from "./data.json";

export const Table = () => {
  return (
    <div className="bg-background flex-1">
      <table className="w-full">
        <TableBuilder.Thead
          data={[
            "Instrument",
            "Change|c",
            "Sell|c",
            "",
            "Buy|c",
            "",
            "High/Low|c",
          ]}
          hasActions
        />
        <TableBuilder.Tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <TableBuilder.Cc>
                <ContextValue value={item.change} suffix="%">
                  {item.change}
                </ContextValue>
              </TableBuilder.Cc>
              <TableBuilder.Cc>
                <ContextValue value={item.sell}>{item.sell}</ContextValue>
              </TableBuilder.Cc>
              <td>
                <ActionButton>Sell</ActionButton>
              </td>
              <TableBuilder.Cc>
                <ContextValue value={item.buy}>{item.buy}</ContextValue>
              </TableBuilder.Cc>
              <td>
                <ActionButton>Buy</ActionButton>
              </td>
              <TableBuilder.Cc>{item.range}</TableBuilder.Cc>
              <TableBuilder.Action hasStar hasBell hasInfo />
            </tr>
          ))}
        </TableBuilder.Tbody>
      </table>
    </div>
  );
};

const ActionButton = ({ children }: PropsWithChildren) => (
  <button className="border-ash6 text-ash3 cursor-pointer rounded-full border-2 px-6 py-1 font-medium">
    {children}
  </button>
);

const ContextValue = ({
  children,
  value,
  suffix,
}: {
  children: number;
  value: number;
  suffix?: string;
}) => (
  <button className={clsx("", value < 1 ? "text-danger" : "text-success")}>
    {asMoney(children, true)}
    {suffix}
  </button>
);
