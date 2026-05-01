"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { useAppStore } from "@/store/app-store";

const data = ["AMD|AMD", "AMZN|Amazon", "CPT|Camden", "DOX|Amdocs", "EUR/USD"];

export const SearchBar = () => {
  const [value, setValue] = useState("");
  const setInstrument = useAppStore((s) => s.setInstrument);

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const valueSafe = ev.currentTarget.value.trim();
    if (data.includes(valueSafe)) setInstrument(valueSafe);
    setValue(valueSafe);
  };
  //
  return (
    <div className="relative w-75">
      <input
        type="search"
        list="search-list"
        value={value}
        onChange={handleChange}
        placeholder="Search our instruments"
        className="input-reset border-ash6 border-b-2 px-2 py-1"
      />
      <datalist id="search-list">
        {data.map((item, i) => (
          <option key={i} value={item} />
        ))}
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
