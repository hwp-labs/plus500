"use client";

import { useRouter } from "next/navigation";
import { IconLogin, IconCircleArrowDown, IconCash } from "@tabler/icons-react";
import { PATH, PATH_PROTECTED } from "@/constants/PATH";
//
import { MenuItem } from "./item";

export const Menu = () => {
  const router = useRouter();
  //
  return (
    <div className="flex-col-xx mt-2.5">
      <MenuItem
        Icon={IconCash}
        label="Switch to Real Money"
        onClick={() =>
          confirm("Switch to Real Money?") ? router.push(PATH_PROTECTED.funds) : null
        }
      />
      <MenuItem
        Icon={IconCircleArrowDown}
        label="Add To Home Screen"
        path={PATH.home}
      />
      <MenuItem
        Icon={IconLogin}
        label="Log Out"
        onClick={() =>
          confirm("Exit Application?") ? router.replace(PATH.login) : null
        }
      />
    </div>
  );
};
