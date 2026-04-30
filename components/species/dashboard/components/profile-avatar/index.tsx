"use client";

import { useEffect, useRef, useState } from "react";
import { IconArrowRight, IconUserCircle } from "@tabler/icons-react";
import { UserCircleIcon } from "lucide-react";
//
import { Accordion } from "./accordion";
import { Menu } from "./menu";

export const ProfileAvatar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  //
  return (
    <div ref={ref} className="flex-cc relative">
      <button
        onClick={() => setOpen((s) => !s)}
        className="hover:text-secondary cursor-pointer"
        title="My Account"
      >
        <IconUserCircle />
      </button>

      {open && (
        <div className="bg-header absolute top-10 right-0 z-50 w-90 rounded shadow-lg">
          <div className="flex-col-cc border-ash6 mt-2 gap-2 border-b-2 py-2">
            <UserCircleIcon className="text-secondary" size={40} />
            <p className="text-muted">dehphantom@yahoo.com</p>
          </div>
          <div className="p-4">
            <Accordion />
            <Menu />
            <p className="mt-6 text-center">
              Complete your registration to become a trader!
            </p>
            <button className="btn btn-lg mt-2 max-h-[48px]! rounded-full border-none bg-[#9272ff] font-semibold">
              <IconArrowRight />
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
