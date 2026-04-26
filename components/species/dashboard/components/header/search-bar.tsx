import { IconSearch } from "@tabler/icons-react";

export const SearchBar = () => {
  return (
    <div className="relative w-100 show-lg-block">
      <input
        type="search"
        placeholder="Search our instruments"
        className="input-antialiased border-ash6 border-b-2 px-2 py-1"
      />
      <i className="absolute top-2 right-2">
        <IconSearch size={18} className="text-ash5" />
      </i>
    </div>
  );
};
