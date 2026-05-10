import { ArrowUpIcon } from "lucide-react";

interface Props {
  name: string;
  nameShort: string;
}

export const BuySellHeader = ({ name, nameShort }: Props) => {
  return (
    <div className="flex-cb">
      <div className="">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="">({nameShort})</p>
      </div>
      <div className="flex-col-ee gap-1">
        <div className="flex-cs text-success gap-1">
          <span>1.07%</span>
          <ArrowUpIcon size={16} />
        </div>
        <small className="">Current Rate 127.70</small>
      </div>
    </div>
  );
};
