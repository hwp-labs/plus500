"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconHomeMove,
  IconLockPassword,
  IconLogin,
  IconUserCircle,
} from "@tabler/icons-react";
import { UserCircleIcon } from "lucide-react";
//
import { MenuItem } from "./menu/item";
import { useAuthApi } from "@/hooks/services/use-auth-api";
import { PATH, PATH_PROTECTED } from "@/constants/PATH";
import { MOCK } from "@/constants/MOCK";

const M = MOCK.profileAvatarMenu;

export const ProfileAvatarMenu = () => {
  const { session, handleSignOut } = useAuthApi();

  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(Boolean(M.portal));

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
            <p className="text-muted">{session?.email}</p>
          </div>
          <div className="p-4">
            <MenuItem
              Icon={IconLockPassword}
              label="Update Password"
              path={PATH_PROTECTED.updatePassword}
            />
            <MenuItem
              Icon={IconHomeMove}
              label="Visit Website"
              path={PATH.home}
            />
            <button
              onClick={handleSignOut}
              className="btn btn-lg mt-2 max-h-[48px]! rounded-full border-none bg-[#9272ff] font-semibold"
            >
              <IconLogin />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
