"use client";

import { useRouter } from "next/navigation";
import { IconLogin, IconCircleArrowDown, IconCash } from "@tabler/icons-react";
import { PATH } from "@/constants/PATH";
//
import { MenuItem } from "./item";

export const Menu = () => {
  const router = useRouter();
  //
  return (
    <div className="flex-col-xx mt-2.5">
      <MenuItem Icon={IconCash} label="Switch To Real Money" />
      <MenuItem
        Icon={IconCircleArrowDown}
        label="Add To Home Screen"
        path={PATH.home}
      />
      <MenuItem
        Icon={IconLogin}
        label="Log Out"
        onClick={() => {
          if (confirm("Exit Application?")) router.replace(PATH.login);
        }}
      />
    </div>
  );
};
