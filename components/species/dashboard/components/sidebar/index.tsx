"use client";

import { useState } from "react";
import clsx from "clsx";
import {
  XIcon,
  TextAlignJustifyIcon,
  RadioIcon,
  MessageSquareMoreIcon,
} from "lucide-react";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
//
import { MenuItem } from "./menu-item";
import { Toggle } from "./toggle";
import { menu } from "./utils";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  //
  return (
    <aside className="flex-col-cb bg-aside text-icon h-svh gap-4 pb-4">
      <div className="flex-1">
        <MenuItem
          Icon={collapsed ? XIcon : TextAlignJustifyIcon}
          label="Menu"
          onClick={() => setCollapsed((s) => !s)}
          collapsed={collapsed}
        />
        <nav className={clsx("grid", collapsed && "gap-1")}>
          {menu.map((item, i) => (
            <MenuItem
              key={i}
              {...item}
              active={pathname.startsWith(item.path)}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </div>
      <div className={clsx("flex-col-cx", collapsed ? "gap-4" : "gap-2")}>
        <div className="space-y-4">
          <Toggle
            label="Real Money"
            title={`${darkMode ? "Dark" : "Light"} Mode`}
            onClick={() => setDarkMode((s) => !s)}
            active={!darkMode}
            collapsed={collapsed}
          >
            {darkMode ? (
              <IconMoonFilled className="dash-icon" />
            ) : (
              <IconSunFilled className="dash-icon" />
            )}
          </Toggle>
          {/* <Toggle label="Real Money" collapsed={collapsed}>
            <RadioIcon className="dash-icon" />
          </Toggle> */}
        </div>
        <MenuItem
          Icon={MessageSquareMoreIcon}
          label="Live Support"
          collapsed={collapsed}
        />
      </div>
    </aside>
  );
};
