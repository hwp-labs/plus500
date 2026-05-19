"use client";

import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { useDashboardStore } from "@/store/dashboard-store";
import instruments from "@/data/instruments.json";

const data = instruments.map(({ name }) => name);

export const SearchBar = () => {
  const [value, setValue] = useState("");
  const setInstrument = useDashboardStore((s) => s.setInstrument);

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const valueSafe = ev.currentTarget.value.trim();
    const i = data.indexOf(valueSafe);
    if (i > -1) setInstrument(instruments[i]);
    setValue(valueSafe);
  };
  //
  return (
    <div className="relative flex-1">
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
  show?: boolean;
  onToggle: () => void;
}

export const SearchBarToggle = ({ show, onToggle }: SearchBarToggleProps) => (
  <button
    onClick={onToggle}
    title={`${show ? "Hide" : "Show"} Search`}
    className="cursor-pointer"
  >
    <IconSearch />
  </button>
);
