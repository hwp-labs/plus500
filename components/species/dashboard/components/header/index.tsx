import { IconUserCircle , IconSearch } from "@tabler/icons-react";
//
import { LogoDashboard } from "@/components/logo";
import { SearchBar } from "./search-bar";
import { Kpis } from "./kpis";
import { ProfileAvatar } from "../profile-avatar";

export const Header = () => {
  return (
    <header className="flex-cb flex-1 gap-8 lg:gap-16 bg-header px-4 py-1">
      <div className="flex-cs debug_ gap-6">
        <LogoDashboard />
        <SearchBar />
      </div>
      <Kpis />
      <div className="flex-cs debug_ gap-6">
        <div className="hide-lg-block">
          <IconSearch />
        </div>
        {renderNotifications}
        <ProfileAvatar  />
      </div>
    </header>
  );
};

const renderNotifications = (
  <div className="flex-cc size-10 rounded-full bg-[#54273f]">
    <div className="flex-cc size-6 rounded-full bg-[#c22e5d] text-xs">1</div>
  </div>
);
