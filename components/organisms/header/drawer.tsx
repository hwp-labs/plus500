"use client";

import { useState } from "react";
import { IconCaretLeftFilled, IconChevronRight } from "@tabler/icons-react";
import { useMainStore } from "@/store/main-store";
import { MENU } from "@/constants/MENU";

const data = [
  ...MENU,
  {
    label: "Login",
  },
  {
    label: "EN",
    menu: ["Espanol"],
  },
];

export const Drawer = () => {
  const drawer = useMainStore((s) => s.drawer);
  const [selected, setSelected] = useState(-1);
  //
  return drawer ? (
    <div className="bg-primary hide-lg-block py-2.5 text-sm text-white shadow-2xl">
      {selected > -1 ? (
        <>
          <div
            onClick={() => setSelected(-1)}
            className="text-tertiary flex-cs bg-primary-active btn-fx gap-1.5 px-1 py-1.5"
          >
            <IconCaretLeftFilled size={18} />
            Back
          </div>
          <ul className="mt-1">
            {data[selected]?.menu?.map((item, i) => (
              <li
                key={i}
                className="hover:bg-primary-active btn-fx px-2.5 py-1.5"
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul>
          {data.map((item, i) => (
            <li key={i}>
              <div
                onClick={() => setSelected(item.menu ? i : -1)}
                className="flex-cs hover:bg-primary-active btn-fx gap-1 px-4 py-1.5"
              >
                <p className="">{item.label}</p>
                {item.menu ? <IconChevronRight size={16} /> : null}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : null;
};
