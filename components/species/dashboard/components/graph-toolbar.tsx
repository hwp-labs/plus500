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
      <CalendarDaysIcon className="dashboard-icon" />
      {/* <div className="flex-cc cursor-pointer gap-1">
        <CalendarDaysIcon className="dashboard-icon" />
        <ChevronDownIcon className="text-icon" />
      </div> */}
      {/* <div className="flex-cc gap-1 cursor-pointer">
        <span className="text-icon font-medium">1 Minute</span>
        <ChevronDownIcon className="text-icon" />
        <select name="" id=""></select>
        {[]}
      </div> */}
      <div className="flex-cc debug_">
        <select value={"1 Minute"} className="text-icon input-antialiased">
          {[
            "Tick",
            "1 Minute",
            "2 Minutes",
            "5 Minutes",
            "15 Minutes",
            "30 Minutes",
            "1 Hour",
            "2 Hours",
            "4 Hours",
            "1 Day",
            "1 Week",
          ].map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
