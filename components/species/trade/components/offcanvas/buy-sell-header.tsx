import { ArrowUpIcon } from "lucide-react";

export const BuySellHeader = () => {
  return (
    <div className="flex-cb">
      <div className="">
        <h1 className="text-lg font-semibold">Amazon</h1>
        <p className="">(AMZN)</p>
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
