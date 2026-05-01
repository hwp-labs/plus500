"use client";

import { PropsWithChildren } from "react";
import { Toolbar } from "./toolbar";
import { Chart } from "./chart";
import { useAppStore } from "@/store/app-store";

interface Props extends PropsWithChildren {
  rightSection?: React.ReactNode;
}

export const GraphContainer = ({ children, rightSection }: Props) => {
  const fullScreen = useAppStore((s) => s.fullScreen);
  //
  return (
    <main className="flex-sb">
      <div className="flex-col-xx min-h-[90svh] flex-1">
        {fullScreen ? null : <section className="flex-1">{children}</section>}
        <section className="flex-col-xb">
          <Toolbar />
          <Chart />
        </section>
      </div>
      {rightSection}
    </main>
  );
};
