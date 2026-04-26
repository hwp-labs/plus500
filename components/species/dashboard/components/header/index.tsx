import Image from "next/image";
import { IconSearch, IconEyeOff } from "@tabler/icons-react";
import { EURO } from "@/constants";

export const Header = () => {
  return (
    <header className="flex-cb gap-16 bg-[#1c2732] px-4 py-1">
      <div className="flex-cs gap-6 debug_">
        <Image
          src="/logo-dashboard.png"
          alt=""
          width={106}
          height={26}
          priority
          className="min-w-[106px]"
        />
        <div className="relative w-100">
          <input
            type="search"
            placeholder="Search our instruments"
            className="input-antialiased border-ash6 border-b-2 py-1 px-2"
          />
          <i className="absolute right-2 top-2">
            <IconSearch size={18} className="text-ash5" />
          </i>
        </div>
      </div>
      <ul className="flex-cb flex-1 gap-6 debug_">
        {[
          { value: EURO + "40,000.00", label: "Available" },
          { value: EURO + "40,000.00", label: "Equity" },
          { value: EURO + "0.00", label: "M. Margin" },
          { value: EURO + "0.00", label: "Profit/Loss" },
        ].map((item, i) => (
          <li key={i}>
            <div className="font-medium">{item.value}</div>
            <div className="text-sm">{item.label}</div>
          </li>
        ))}
      </ul>
      <div className="flex-cs gap-6 debug_">
        <IconEyeOff />
        <div className="flex-cc size-10 rounded-full bg-[#54273f]">
          <div className="flex-cc size-6 rounded-full bg-[#c22e5d] text-xs">
            1
          </div>
        </div>
      </div>
    </header>
  );
};
