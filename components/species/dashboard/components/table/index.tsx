import { PropsWithChildren } from "react";
import { BellIcon, InfoIcon, StarIcon } from "lucide-react";
import clsx from "clsx";
//
import data from "./data.json";

export const Table = () => {
  return (
    <div className="bg-background flex-1">
      <table className="w-full">
        <thead className="border-ash6 border-b text-left [&>tr>th]:px-4 [&>tr>th]:py-2">
          <tr>
            <th>Instrument</th>
            <th className="text-center">Change</th>
            <th className="text-center">Sell</th>
            <th></th>
            <th className="text-center">Buy</th>
            <th></th>
            <th className="text-center">High/Low</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="[&>tr]:border-ash7 [&>tr]:border-b [&>tr>td]:px-4 [&>tr>td]:py-2">
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td className="text-center">
                <ContextValue value={item.change} suffix="%">
                  {item.change}
                </ContextValue>
              </td>
              <td className="text-center">
                <ContextValue value={item.sell}>{item.sell}</ContextValue>
              </td>
              <td>
                <ActionButton>Sell</ActionButton>
              </td>
              <td className="text-center">
                <ContextValue value={item.buy}>{item.buy}</ContextValue>
              </td>
              <td>
                <ActionButton>Buy</ActionButton>
              </td>
              <td className="text-center">{item.range}</td>
              <td className="">
                <div className="flex-cc debug_ gap-4">
                  <StarIcon size={16} />
                  <BellIcon size={16} />
                  <InfoIcon size={16} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
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
    {children.toLocaleString(undefined, { maximumFractionDigits: 20 })}
    {suffix}
  </button>
);
