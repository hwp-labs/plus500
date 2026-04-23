"use client";

import { useEffect, useState } from "react";

export const Kpis = () => {
  const [tuple, setTuple] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      const i = Math.floor(Math.random() * 5);
      const j = Math.floor(Math.random() * 5);
      setTuple([i, j]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  //
  return (
    <section className="flex-cc _bg-no-repeat min-h-[800px] bg-[url('/images/cover-white-crosses.png')] bg-contain">
      <div className="container-md text-center">
        <div className="min-h-[700px]"></div>
        <h2 className="text-primary container-sm text-[30px] leading-9 font-semibold">
          Over 33 million customers worldwide have already chosen Plus500.
        </h2>
        <div className="flex-cs mt-10 h-[320px] bg-[url('/images/cover-worldwide.png')] bg-contain bg-no-repeat">
          <div className="grid grid-cols-2 w-[1080px]">
            {renderKpi(tuple[0])}
            {renderKpi(tuple[1])}
          </div>
        </div>
        <p className="text-muted mt-2 leading-5 mb-20">
          * Instrument availability is subject to jurisdiction. Futures trading
          by U.S. market participants occurs through Plus500US Financial
          Services LLC, a registered futures commission merchant.
        </p>
      </div>
    </section>
  );
};

const renderKpi = (i: number) => {
  const data = [
    { value: "2800*", label: "Instruments" },
    { value: "60+", label: "Countries" },
    { value: "33+", valueSuffix: "Million", label: "Registered Customers" },
    { value: "300+", valueSuffix: "Million", label: "Positions Opened" },
    { value: "$800+", valueSuffix: "Billion", label: "Traded Value" },
  ];
  const { label, value, valueSuffix } = data[i];
  //
  return (
    <div className="text-primary text-center">
      <h1 className="space-x-3 text-[50px] leading-10 font-semibold">
        <span>{value}</span>
        <span className="font-light">{valueSuffix}</span>
      </h1>
      <h2 className="text-[30px] font-light">{label}</h2>
    </div>
  );
};
