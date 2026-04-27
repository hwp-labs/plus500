import clsx from "clsx";
import {
  MessageSquareMoreIcon,
  RadioIcon,
  TextAlignJustifyIcon,
} from "lucide-react";
//
import { Nav } from "./nav";
import { ThemeToggle } from "./therme-toggle";

export const Sidebar = () => {
  return (
    <aside className="flex-col-cb bg-aside text-icon h-screen gap-4">
      <div className="flex-1">
        <i className="debug_ sidebar-btn">
          <TextAlignJustifyIcon className="dashboard-icon" />
        </i>
        <Nav />
      </div>
      <div className="flex-col-cx gap-2">
        <div className="space-y-4">
          <ThemeToggle />
          <div className="sidebar-toggle">
            <RadioIcon className="dashboard-icon" />
          </div>
        </div>
        <i className="debug_ sidebar-btn">
          <MessageSquareMoreIcon className="dashboard-icon" />
        </i>
      </div>
    </aside>
  );
};
