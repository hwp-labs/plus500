"use client";

import { useEffect, useRef, useState } from "react";
import { IconSettings, IconMail, IconBell } from "@tabler/icons-react";

export const Notifications = () => {
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
        title="Notifications"
        className="flex-cc size-10 cursor-pointer rounded-full bg-[#54273f]"
      >
        <div className="flex-cc size-6 rounded-full bg-[#c22e5d] text-xs">
          1
        </div>
      </button>

      {open && (
        <div className="bg-header absolute top-12 right-0 z-50 w-90 rounded shadow-lg">
          <div className="flex-cb border-ash6 border-b-2 px-2.5 py-2.5">
            <p className="font-semibold">Notification Centre</p>
            <IconSettings />
          </div>
          <div className="flex-sb hover:bg-secondary group cursor-default gap-2.5 bg-[#2d3b4e] px-2.5 py-2 hover:text-white">
            <IconBell size={20} />
            <div className="flex-col-xx flex-1 leading-5">
              <p>
                We're glad you joined us! Ready to start your trading journey?
                Learn more.
              </p>
              <small className="text-xs_ text-ash4 group-hover:text-white">
                20 hours ago
              </small>
            </div>
            <IconMail size={18} />
          </div>
        </div>
      )}
    </div>
  );
};
