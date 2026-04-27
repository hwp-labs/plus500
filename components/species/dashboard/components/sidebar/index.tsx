"use client";

import { useState } from "react";
import clsx from "clsx";
import {
  MessageSquareMoreIcon,
  RadioIcon,
  TextAlignJustifyIcon,
} from "lucide-react";
import { IconMoonFilled, IconCircleDotFilled } from "@tabler/icons-react";
//
import { MenuItem } from "./menu-item";
import { Toggle } from "./toggle";
import { menu } from "./utils";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  //
  return (
    <aside className="flex-col-cb bg-aside text-icon h-screen gap-4 pb-4">
      <div className="flex-1">
        <MenuItem
          Icon={TextAlignJustifyIcon}
          label="Menu"
          onClick={() => setCollapsed((s) => !s)}
          collapsed={collapsed}
        />
        <nav className={clsx("grid", collapsed && "gap-1")}>
          {menu.map((item, i) => (
            <MenuItem
              key={i}
              {...item}
              active={i === 0}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </div>
      <div className={clsx("flex-col-cx", collapsed ? "gap-4" : "gap-2")}>
        <div className="space-y-4">
          <Toggle
            label="Theme"
            title={`${darkMode ? "Dark" : "Light"} Mode`}
            onClick={() => setDarkMode((s) => !s)}
            active={!darkMode}
            collapsed={collapsed}
          >
            {darkMode ? (
              <IconMoonFilled className="dashboard-icon" />
            ) : (
              <IconCircleDotFilled className="dashboard-icon" />
            )}
          </Toggle>
          <Toggle label="Unknown" collapsed={collapsed}>
            <RadioIcon className="dashboard-icon" />
          </Toggle>
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
