import Image from "next/image";
import { IconSearch } from "@tabler/icons-react";
import { OutlineBtn } from "../form-builder";

const M = 0;

export const Chart = () => {
  return (
    <div className="">
      {M ? (
        renderEmpty
      ) : (
        <Image
          src="/images/graph.png"
          alt=""
          width={1193}
          height={255}
          priority
          className="w-full"
        />
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
