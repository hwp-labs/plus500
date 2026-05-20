import type { Metadata } from "next";
//
import clsx from "clsx";
import { OutlineBtn } from "@/components/species/dashboard/components/form-builder";
import { SparklineChart } from "@/components/widgets/sparkline-chart";
import { asMoney } from "@/utils";
import data from "@/data/traders.json";

export const metadata: Metadata = {
  title: "Copy Trading",
};

export default function TradeCopyPage() {
  return (
    <main className="bg-background flex-1 px-6">
      <h1 className="mt-4 text-3xl font-bold sm:text-center">Copy Trading</h1>
      <ul className="debug_ flex-cc mt-4 flex-wrap gap-8">
        {data.map((item, i) => (
          <li
            key={i}
            className="bg-card w-full rounded-xl px-5 py-5 shadow-2xl sm:w-80"
          >
            <div className="flex-cb flex-wrap gap-4">
              <figure className="flex-cs gap-4">
                <img
                  src={item.avatar}
                  alt=""
                  width={40}
                  className="border-muted rounded-full border-2 shadow-2xl"
                />
                <figcaption className="grid leading-3">
                  <strong className="text-lg text-white">
                    {item.username}
                  </strong>
                  <small>{item.market}</small>
                </figcaption>
              </figure>
              <OutlineBtn className="bg-secondary! hover:bg-success! border-none! px-4! text-white!">
                Copy
              </OutlineBtn>
            </div>
            <div className="">
              <SparklineChart value={item.change}/>
            </div>
            <div className="flex-cb mt-2 flex-wrap">
              <div className="grid text-center">
                <strong
                  className={clsx(
                    "text-lg",
                    item.change < 1 ? "text-danger" : "text-success",
                  )}
                >
                  {item.change >= 0 ? "+" : ""}
                  {item.change}%
                </strong>
                <small>
                  <abbr title="Return on Investment">ROI </abbr>({item.roi}D)
                </small>
              </div>
              <div className="grid text-center">
                <strong className="text-lg">
                  {asMoney(item.copies, true)}
                </strong>
                <small>Copies</small>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
