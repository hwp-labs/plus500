"use client";

import { useState } from "react";
import { IconMoonFilled, IconCircleDotFilled } from "@tabler/icons-react";
import clsx from "clsx";

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  //
  return (
    <div
      title={darkMode ? "Dark Mode" : "Light Mode"}
      onClick={() => setDarkMode((s) => !s)}
      className={clsx("sidebar-toggle", !darkMode && "justify-start")}
    >
      {darkMode ? (
        <IconMoonFilled className="dashboard-icon" />
      ) : (
        <IconCircleDotFilled className="dashboard-icon" />
      )}
    </div>
  );
};
