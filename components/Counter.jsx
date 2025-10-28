"use client";

import CountUp from "react-countup";

export default function Counter() {
  const stats = [
    { value: 25, suffix: "+", label: "Year Of Experience" },
    { value: 300, suffix: "+", label: "Field In Progress" },
    { value: 115000, suffix: "+", label: "Farmer Around World" },
    { value: 15, suffix: " Billion", label: "Agricultural Product", prefix: "$" },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 text-center px-6">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
            <h2 className="text-[#0B7A1A] text-3xl md:text-5xl lg:text-[64px] font-bold leading-tight md:leading-[80px]">
              {item.prefix && item.prefix}
              <CountUp end={item.value} duration={3} separator="," />
              {item.suffix}
            </h2>
            <p className="text-[#222A2C] text-sm md:text-lg font-medium leading-5 md:leading-6">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
