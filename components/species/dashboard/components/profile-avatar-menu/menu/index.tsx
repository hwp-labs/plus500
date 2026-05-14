"use client";

import { useRouter } from "next/navigation";
import { IconLogin, IconCircleArrowDown, IconCash } from "@tabler/icons-react";
import { PATH, PATH_PROTECTED } from "@/constants/PATH";
//
import { MenuItem } from "./item";

export const Menu = () => {
  const router = useRouter();
  const handleLogout = () => {
    if (confirm("Log Out?")) {
      router.replace(PATH.login + "?logout=true");
    }
  };
  //
  return (
    <div className="flex-col-xx mt-2.5">
      <MenuItem
        Icon={IconCash}
        label="Switch to Real Money"
        onClick={() =>
          confirm("Switch to Real Money?")
            ? router.push(PATH_PROTECTED.funds)
            : null
        }
      />
      <MenuItem
        Icon={IconCircleArrowDown}
        label="Add To Home Screen"
        path={PATH.home}
      />
      <MenuItem Icon={IconLogin} label="Log Out" onClick={handleLogout} />
    </div>
  );
};
