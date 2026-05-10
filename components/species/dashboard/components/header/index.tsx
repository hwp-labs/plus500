"use client";

import { useState } from "react";
//
import { LogoDashboard } from "@/components/logo";
import { SearchBar, SearchBarToggle } from "./search-bar";
import { Earnings, EarningsToggle } from "./earnings";
import { Notifications } from "../notifications";
import { ProfileAvatarMenu } from "../profile-avatar-menu";
import { useMediaQuery } from "@/hooks/use-media-query";
import { PATH_PROTECTED } from "@/constants/PATH";

export const Header = () => {
  const isMobile = useMediaQuery();
  const [showSearch, setShowSearch] = useState(false);
  const [showEarnings, setShowEarnings] = useState(false);
  //
  return (
    <header className="flex-cb bg-header flex-1 gap-8 px-4 py-1">
      <a href={PATH_PROTECTED.home} title="Home" className="">
        <LogoDashboard />
      </a>
      <div className="flex-cs flex-1 gap-8">
        <SearchBar />
        <Earnings />
      </div>
      <div className="flex-cs gap-4">
        {isMobile && (
          <div className="flex-cs gap-4">
            <SearchBarToggle
              show={showSearch}
              onToggle={() => {
                setShowEarnings(false);
                setShowSearch((s) => !s);
              }}
            />
            <EarningsToggle
              show={showEarnings}
              onToggle={() => {
                setShowSearch(false);
                setShowEarnings((s) => !s);
              }}
            />
          </div>
        )}
        <Notifications />
        <ProfileAvatarMenu />
      </div>
    </header>
  );
};
