import { useEffect, useState } from "react";
import { InstrumentDto } from "@/store/dashboard-store/utils";
import { useDashboardStore } from "@/store/dashboard-store";
import instruments from "@/data/instruments.json";

export function useTicker() {
  const filter = useDashboardStore((s) => s.filter);

  // local rows state so we can mutate / randomize values for demo/live updates
  const [rows, setRows] = useState(
    () => (instruments as InstrumentDto[]) ?? [],
  );

  // randomize numeric fields every 1 second
  useEffect(() => {
    const id = setInterval(mutateRows, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setRows((prev) => [...prev].sort(() => Math.random() - 0.5));
  }, [filter]);

  const mutateRows = () => {
    setRows((prev) =>
      prev.map((item) => {
        const changeDelta = +((Math.random() - 0.5) * 2).toFixed(2); // -1.00 .. 1.00
        const change = +(Number(item.change ?? 0) + changeDelta).toFixed(2);

        const baseSell = Number(item.sell ?? 0);
        const baseBuy = Number(item.buy ?? baseSell);
        const multiplier = 1 + changeDelta / 100; // small pct move

        const sell = +(baseSell * multiplier).toFixed(
          baseSell % 1 === 0 ? 0 : 3,
        );
        const buy = +(baseBuy * multiplier).toFixed(baseBuy % 1 === 0 ? 0 : 3);

        return {
          ...item,
          change,
          sell,
          buy,
        };
      }),
    );
  };

  return { rows };
}
