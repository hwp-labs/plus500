"use client";

import Image from "next/image";
import { IconSearch } from "@tabler/icons-react";
import { OutlineBtn } from "../form-builder";
import { APP_STORE, useAppStore } from "@/store/app-store";

export const Chart = () => {
  const filter = useAppStore((s) => s.filter);
  //
  return (
    <div className="">
      {filter === APP_STORE.filter  ? (
        <Image
          src="/images/graph.png"
          alt=""
          width={1193}
          height={255}
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
