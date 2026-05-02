"use client";

import Image from "next/image";
import { IconSearch } from "@tabler/icons-react";
import { OutlineBtn } from "../form-builder";
import { APP_STORE, useAppStore } from "@/store/app-store";
import ChartV2 from "./chart-v2";

export const Chart = () => {
  const filter = useAppStore((s) => s.filter);
  const fullScreen = useAppStore((s) => s.fullScreen);
  //
  return <ChartV2 />;

  return (
    <div className="">
      {filter === APP_STORE.filter ? (
        <Image
          src={fullScreen ? "/images/graph-lg.png" : "/images/graph.png"}
          alt=""
          width={fullScreen ? 1202 : 1193}
          height={fullScreen ? 538 : 255}
          priority
          className="w-full"
        />
      ) : (
        renderEmpty
      )}
    </div>
  );
};

const renderEmpty = (
  <div className="flex-col-cc debug_ h-[255px] gap-2">
    <span className="text-xl_">Please select an instrument</span>
    <OutlineBtn className="py-2 text-[16px]!">
      Search
      <IconSearch size={18} />
    </OutlineBtn>
  </div>
);
