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
  const mq = useMediaQuery();
  const [showSearch, setShowSearch] = useState(false);
  const [showEarnings, setShowEarnings] = useState(false);
  //
  return (
    <header className="bg-header _flex-1 px-4 py-1">
      <div className="flex-cb gap-8">
        <a href={PATH_PROTECTED.home} title="Home" className="">
          <LogoDashboard />
        </a>
        {!mq && (
          <div className="flex-cs flex-1 gap-8">
            <SearchBar />
            {showEarnings && <Earnings />}
          </div>
        )}
        <div className="flex-cs gap-4">
          {mq && (
            <SearchBarToggle
              show={showSearch}
              onToggle={() => {
                setShowEarnings(false);
                setShowSearch((s) => !s);
              }}
            />
          )}
          <EarningsToggle
            show={showEarnings}
            onToggle={() => {
              setShowSearch(false);
              setShowEarnings((s) => !s);
            }}
          />
          <Notifications />
          <ProfileAvatarMenu />
        </div>
      </div>
      {/* MOBILE */}
      {mq && (
        <div className="py-2">
          {showSearch && <SearchBar />}
          {showEarnings && <Earnings />}
        </div>
      )}
    </header>
  );
};
