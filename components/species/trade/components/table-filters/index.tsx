import { Menu } from "./menu";

export const TableFilters = () => {
  return (
    <div className="debug_ bg-background h-[400px] min-w-50 space-y-2 overflow-y-auto">
      <Menu
        label="Most Popular"
        data={[
          { label: "All Popular" },
          { label: "Popular Options" },
          { label: "Risers & Fallers" },
          { label: "My Favorites" },
        ]}
      />
      <Menu label="Commodities" data={[{ label: "All Commodities" }]} />
      <Menu
        label="Indices"
        data={[
          { label: "All Indices" },
          { label: "Country Indices" },
          { label: "Sector Indices" },
        ]}
      />
      <Menu label="Crypto" data={[{ label: "Cryptocurrencies" }]} />
      <Menu label="Forex Options" data={[{ label: "EUR/USD" }]} />
      <Menu
        label="Forex"
        data={[{ label: "Major" }, { label: "Minor" }, { label: "Exotic" }]}
      />
      <Menu
        label="Commodities Options"
        data={[
          { label: "Oil options" },
          { label: "Gold" },
          { label: "Natural Gas" },
        ]}
      />
      <Menu
        label="Indices Options"
        data={[
          { label: "Germany 40" },
          { label: "UK 100" },
          { label: "Netherlands 25" },
          { label: "USA 500" },
          { label: "US-TECH 100" },
          { label: "Europe 50" },
        ]}
      />
      <Menu
        label="Shares Options"
        data={[
          { label: "Alphabet" },
          { label: "Meta" },
          { label: "Apple" },
          { label: "DeutscheBank" },
          { label: "Snap" },
          { label: "Twitter" },
          { label: "Amazon" },
          { label: "Microsoft" },
          { label: "Netflx" },
          { label: "Tesla" },
          { label: "NIO" },
        ]}
      />
      <Menu label="Crypto Options" data={[{ label: "Bitcoin" }]} />
      <Menu
        label="Shares"
        data={[
          { label: "Popular Shares" },
          { label: "Czech" },
          { label: "Cannabis" },
          { label: "USA" },
          { label: "Germany" },
          { label: "Poland" },
          { label: "UK" },
          { label: "Hong Kong" },
          { label: "France" },
          { label: "Italy" },
          { label: "Japan" },
          { label: "Hungary" },
          { label: "Australia" },
          { label: "Singapore" },
          { label: "South Africa" },
          { label: "Netherlands" },
          { label: "Finland" },
          { label: "Belgium" },
          { label: "Denmark" },
          { label: "Sweden" },
        ]}
      />
    </div>
  );
};
