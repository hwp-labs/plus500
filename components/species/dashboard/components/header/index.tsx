"use client";

import { useState } from "react";
//
import { LogoDashboard } from "@/components/logo";
import { SearchBar, SearchBarToggle } from "./search-bar";
import { Earnings, EarningsToggle } from "./earnings";
import { Notifications } from "../notifications";
import { ProfileAvatarMenu } from "../profile-avatar-menu";
import { useIsMobile } from "@/hooks/use-is-mobile";

export const Header = () => {
  const isMobile = useIsMobile(960);
  const [showSearch, setShowSearch] = useState(true);
  const [showEarnings, setShowEarnings] = useState(true);
  //
  return (
    <header className="flex-cb bg-header flex-1 gap-8 px-4 py-1 lg:gap-16">
      <div className="flex-cs debug_ gap-6">
        {/* LOGO */}
        <LogoDashboard />
        {/* SEARCH BAR */}
        {isMobile ? showSearch ? <SearchBar /> : null : <SearchBar />}
      </div>
      {/* EARNINGS */}
      {showEarnings && <Earnings />}
      <div className="flex-cs debug_ gap-4">
        {/* TOGGLE SEARCH  */}
        <SearchBarToggle
          isMobile={isMobile}
          show={showSearch}
          setShow={setShowSearch}
        />
        {/* TOGGLE EARNINGS  */}
        <EarningsToggle show={showEarnings} setShow={setShowEarnings} />
        {/* NOTIFICATIONS */}
        <Notifications />
        {/* PROFILE MENU */}
        <ProfileAvatarMenu />
      </div>
    </header>
  );
};
