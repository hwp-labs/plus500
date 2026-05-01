"use client";

import { clsx } from "clsx";
import { useAppStore } from "@/store/app-store";

interface IData {
  label: string;
  value?: string;
  selected?: boolean;
}

interface Props {
  label: string;
  data: IData[];
}

export const Menu = ({ label, data }: Props) => {
  const filter = useAppStore((s) => s.filter);
  const setFilter = useAppStore((s) => s.setFilter);
  //
  return (
    <div className="">
      <p className="text-muted px-4 py-1.5">{label}</p>
      <ul className="">
        {data.map((item, i) => (
          <li
            key={i}
            onClick={() => {
              reset();
              setFilter(item.label);
            }}
            className={clsx(
              "hover:text-secondary debug_ cursor-pointer px-4 py-1.5",
              filter === item.label &&
                "bg-secondary text-white hover:text-white",
            )}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
