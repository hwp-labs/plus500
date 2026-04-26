export const Table = () => {
  return (
    <div className="bg-background flex-1">
      <table className="w-full">
        <thead>
          <tr className="border-ash6 border-b [&>th]:py-2">
            <th>Instrument</th>
            <th>Change</th>
            <th>Sell</th>
            <th>Buy</th>
            <th>High/Low</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="border-ash6 border-b [&>td]:py-2">
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const data = [
  {
    name: "EUR/USD",
    change: 0.3,
    sell: 0.99985,
    buy: 0.99993,
    range: "1.00230 / 0.99551",
  },
  {
    name: "Czech 15",
    change: -0.48,
    sell: 1233,
    buy: 1238,
    range: "Market is Closed",
  },
  {
    name: "Natural Gas",
    change: 4.73,
    sell: 8.671,
    buy: 8.68,
    range: "8.842 / 8.323",
  },
  {
    name: "Gold",
    change: 0.2,
    sell: 1705.37,
    buy: 1705.75,
    range: "1,706.85 / 1,697.05",
  },
  {
    name: "NFT Giants Index",
    change: -0.03,
    sell: 762.65,
    buy: 768.39,
    range: "765.17 / 755.16",
  },
  {
    name: "Gold | Call 1710 | Oct",
    change: 1.13,
    sell: 16.76,
    buy: 17.34,
    range: "17.78 / 14.26",
  },
];
