"use client";

import { Dispatch, SetStateAction } from "react";
import { IconSearch } from "@tabler/icons-react";

export const SearchBar = () => {
  return (
    <div className="relative w-75">
      <input
        type="search"
        list="search-list"
        placeholder="Search our instruments"
        className="input-reset border-ash6 border-b-2 px-2 py-1"
      />
      <datalist id="search-list">
        <option value="EUR/USD" />
        <option value="AMD|AMD" />
        <option value="DOX|Amdocs" />
        <option value="CPT|Camden" />
        <option value="AMZN|Amazon" />
      </datalist>
      <i className="absolute top-2 right-2">
        <IconSearch size={18} className="text-ash5" />
      </i>
    </div>
  );
};

interface SearchBarToggleProps {
  isMobile?: boolean;
  show?: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const SearchBarToggle = ({
  isMobile,
  show,
  setShow,
}: SearchBarToggleProps) =>
  isMobile ? (
    <button
      onClick={() => setShow((s) => !s)}
      title={`${show ? "Hide" : "Show"} Search`}
      className="cursor-pointer"
    >
      <IconSearch />
    </button>
  ) : null;
