import { PropsWithChildren } from "react";
import { Toolbar } from "./toolbar";
import { Chart } from "./chart";

interface Props extends PropsWithChildren {
  rightSection?: React.ReactNode;
}

export const GraphContainer = ({ children, rightSection }: Props) => {
  return (
    <main className="flex-cb">
      <div className="flex-col-xx flex-1  min-h-[92svh]">
        <section className="min-h-[320px]">{children}</section>
        <section className="flex-col-xb flex-1">
          <Toolbar />
          <Chart />
        </section>
      </div>
      {rightSection}
    </main>
  );
};
