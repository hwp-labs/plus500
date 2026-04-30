import { ArrowUpIcon, BellIcon, type LucideIcon, StarIcon } from "lucide-react";

export const InfoHeader = () => {
  return (
    <div className="flex-sb">
      <div className="">
        <h1 className="text-lg font-semibold">Amazon</h1>
        <p className="mt-2">(AMZN)</p>
        <p className="mt-1 text-xs leading-4">
          Advanced Micro Devices Inc. An American multinational semiconductor
          company based in Santa Clara, Califonia.
          <a className="text-secondary">Yahoo! Finance</a>
        </p>
      </div>
      <div className="flex-col-ee gap-2">
        <div className="flex-cs text-success gap-1">
          <span>1.06%</span>
          <ArrowUpIcon size={16} />
        </div>
        <div className="flex-cs gap-2">
          {renderIcon(StarIcon)}
          {renderIcon(BellIcon)}
        </div>
      </div>
    </div>
  );
};

const renderIcon = (Icon: LucideIcon) => (
  <i className="flex-cc hover:bg-secondary hover:border-secondary border-ash4 size-8 btn-fx rounded-full border">
    <Icon size={16} strokeWidth={3} />
  </i>
);
