import { ArrowUpIcon, BellIcon, type LucideIcon, StarIcon } from "lucide-react";

interface Props {
  name: string;
  nameShort: string;
}

export const InfoHeader = ({ name, nameShort }: Props) => {
  return (
    <div className="flex-sb">
      <div className="">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="mt-2">({nameShort})</p>
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
  <i className="flex-cc hover:bg-secondary hover:border-secondary border-ash4 btn-fx size-8 rounded-full border">
    <Icon size={16} strokeWidth={3} />
  </i>
);
