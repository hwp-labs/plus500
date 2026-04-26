import { Menu } from "./menu";

export const TableFilters = () => {
  return (
    <div className="debug_ bg-background min-w-50 space-y-2">
      <Menu
        label="Most Popular"
        data={[
          { label: "All Popular", selected: true },
          { label: "Popular Options" },
          { label: "Risers & Fallers" },
          { label: "My Favourites" },
        ]}
      />
      <Menu label="Commodities" data={[{ label: "All Commodities" }]} />
      <Menu
        label="Indices"
        data={[{ label: "All Indices" }, { label: "Country Indices" }]}
      />
    </div>
  );
};
