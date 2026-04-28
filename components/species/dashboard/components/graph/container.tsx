import { PropsWithChildren } from "react";
import { Toolbar } from "./toolbar";
import { Graph } from "./";

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex-col-xx min-h-[92svh]">
      <section className="min-h-[320px]">{children}</section>
      <section className="flex-col-xb flex-1">
        <Toolbar />
        <Graph />
      </section>
    </main>
  );
};
