"use client";

import { useEffect, useState } from "react";

export const KpiCard = () => {
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
    <div className="debug_ border-primary relative mt-10 h-[280px] lg:h-[320px] rounded-4xl lg:border-0 border-b-2 border-l-2 px-10">
      <div className="-right-10 flex lg:size-full lg:items-center justify-center bg-contain bg-no-repeat lg:absolute lg:justify-start lg:bg-[url('/images/cover-worldwide.png')]">
        <div className="_debug grid gap-20 lg:w-[1070px] lg:grid-cols-2 lg:gap-0">
          {renderKpi(tuple[0])}
          {renderKpi(tuple[1])}
        </div>
      </div>
      <div className="bg-primary absolute -bottom-4 left-8 rounded-full px-4 py-2 text-white hide-lg-block">
        Worldwide
      </div>
    </div>
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
      <h1 className="space-x-3 text-[30px] leading-5 font-medium lg:text-[50px] lg:leading-10 lg:font-semibold">
        <span>{value}</span>
        <span className="font-light">{valueSuffix}</span>
      </h1>
      <h2 className="mt-1 text-[24px] font-light lg:mt-0 lg:text-[30px]">
        {label}
      </h2>
    </div>
  );
};
