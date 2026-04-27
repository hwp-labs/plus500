import {
  CalendarDaysIcon,
  ChartCandlestickIcon,
  ChevronDownIcon,
  ExpandIcon,
  FilePenLineIcon,
  LayoutGridIcon,
  MessageSquareTextIcon,
  RemoveFormattingIcon,
  SaveIcon,
  ScanLineIcon,
  TrendingUpDownIcon,
} from "lucide-react";

export const GraphToolbar = () => {
  return (
    <div className="flex-cs gap-6 border-t-3 border-b-3 border-t-[#2b4058] border-b-[#9b89b2] px-4 pt-2 pb-4">
      <ExpandIcon className="dashboard-icon" />
      <MessageSquareTextIcon className="dashboard-icon" />
      <FilePenLineIcon className="dashboard-icon" />
      <ScanLineIcon className="dashboard-icon" />
      <TrendingUpDownIcon className="dashboard-icon" />
      <LayoutGridIcon className="dashboard-icon" />
      <SaveIcon className="dashboard-icon" />
      <RemoveFormattingIcon className="dashboard-icon" />
      <ChartCandlestickIcon className="dashboard-icon" />
      <div className="flex-cc  gap-1 cursor-pointer">
        <CalendarDaysIcon className="dashboard-icon" />
        <ChevronDownIcon className="text-icon" />
      </div>
      <div className="flex-cc gap-1 cursor-pointer">
        <span className="text-icon font-medium">1 Minute</span>
        <ChevronDownIcon className="text-icon" />
      </div>
    </div>
  );
};
