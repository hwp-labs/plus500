import { useEffect, useRef } from "react";
import { createChart, LineSeries } from "lightweight-charts";

export default function ChartV2() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chart = createChart(ref.current, {
      width: ref.current.clientWidth,
      height: 400,
      layout: { background: { color: "#1a1f2e" }, textColor: "#fff" },
      grid: {
        vertLines: { color: "#2a2f3e" },
        horzLines: { color: "#2a2f3e" },
      },
    });

    const lineSeries = chart.addSeries(LineSeries, { color: "#fff" });
    lineSeries.setData([
      { time: "2022-09-14", value: 1704.56 },
      { time: "2022-09-15", value: 1705.17 },
    ]);

    return () => chart.remove();
  }, []);

  return <div ref={ref} />;
}
