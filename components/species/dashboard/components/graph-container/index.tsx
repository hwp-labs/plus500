"use client";

import { PropsWithChildren } from "react";
import { Toolbar } from "./toolbar";
import { Chart } from "./chart";
import { useDashboardStore } from "@/store/dashboard-store";

interface Props extends PropsWithChildren {
  rightSection?: React.ReactNode;
}

export const GraphContainer = ({ children, rightSection }: Props) => {
  const fullScreen = useDashboardStore((s) => s.fullScreen);
  //
  return (
    <main className="flex-sb bg-background flex-1">
      <div className="flex-col-xx min-h-[90svh] flex-1">
        {fullScreen ? null : <section className="flex-1">{children}</section>}
        <div className="show-sm-block">
          <section className="flex-col-xb">
            <Toolbar />
            <Chart />
          </section>
        </div>
      </div>
      {rightSection}
    </main>
  );
};
