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

export const Toolbar = () => {
  return (
    <div className="flex-cs _border-b-3 gap-6 border-t-3 border-t-[#2b4058] border-b-[#9b89b2] px-4 pt-2 pb-4">
      <ExpandIcon className="dash-icon" />
      <MessageSquareTextIcon className="dash-icon" />
      <FilePenLineIcon className="dash-icon" />
      <ScanLineIcon className="dash-icon" />
      <TrendingUpDownIcon className="dash-icon" />
      <LayoutGridIcon className="dash-icon" />
      <SaveIcon className="dash-icon" />
      <RemoveFormattingIcon className="dash-icon" />
      <ChartCandlestickIcon className="dash-icon" />
      <CalendarDaysIcon className="dash-icon" />
      <div className="flex-cc debug_">
        <select defaultValue="1 Minute" className="text-icon input-reset">
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
