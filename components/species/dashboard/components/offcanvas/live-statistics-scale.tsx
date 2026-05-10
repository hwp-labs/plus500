import { IconTriangleInvertedFilled } from "@tabler/icons-react";

interface Props {
  low?: number;
  high?: number;
  duration?: string;
  right?: number;
}

export const LiveStatisticsScale = ({ low, high, duration, right }: Props) => {
  return (
    <div className="">
      <div className="relative h-2.5 rounded-full bg-[#304f73]">
        <IconTriangleInvertedFilled
          size={12}
          className="absolute -top-2 z-50"
          style={{ right }}
        />
      </div>
      <div className="flex-cb mt-2.5 px-1">
        <small>{low}</small>
        <small className="debug_ flex-1 text-center">{duration}</small>
        <small>{high}</small>
      </div>
    </div>
  );
};
