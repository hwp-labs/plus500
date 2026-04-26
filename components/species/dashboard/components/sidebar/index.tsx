import clsx from "clsx";
import {
  MessageSquareMoreIcon,
  MoonIcon,
  RadioIcon,
  TextAlignJustifyIcon,
} from "lucide-react";
// 
import { Nav } from "./nav";

export const Sidebar = () => {
  return (
    <aside className="flex-col-cb h-screen gap-4 bg-aside text-[#8a9499]">
      <div className="flex-1">
        <i className="debug_ sidebar-btn">
          <TextAlignJustifyIcon className="sidebar-icon" />
        </i>
        <Nav />
      </div>
      <div className="flex-col-cx gap-2">
        <div className="space-y-4">
          <div className="sidebar-toggle">
            <MoonIcon className="sidebar-icon" />
          </div>
          <div className="sidebar-toggle">
            <RadioIcon className="sidebar-icon" />
          </div>
        </div>
        <i className="debug_ sidebar-btn">
          <MessageSquareMoreIcon className="sidebar-icon" />
        </i>
      </div>
    </aside>
  );
};
