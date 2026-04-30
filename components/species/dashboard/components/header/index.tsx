import { IconSearch } from "@tabler/icons-react";
//
import { LogoDashboard } from "@/components/logo";
import { SearchBar } from "./search-bar";
import { Kpis } from "./kpis";
import { Notifications } from "../notifications";
import { ProfileAvatar } from "../profile-avatar";

export const Header = () => {
  return (
    <header className="flex-cb bg-header flex-1 gap-8 px-4 py-1 lg:gap-16">
      <div className="flex-cs debug_ gap-6">
        <LogoDashboard />
        <SearchBar />
      </div>
      <Kpis />
      <div className="flex-cs debug_ gap-6">
        <div className="hide-lg-block">
          <IconSearch />
        </div>
        <Notifications />
        <ProfileAvatar />
      </div>
    </header>
  );
};
