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
    <section className="bg-white py-16 font-manrope">
      <div className="max-w-9xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <h2 className="text-5xl text-green-800 font-manrope font-semibold">
              {item.prefix && item.prefix}
              <CountUp end={item.value} duration={3} separator="," />
              {item.suffix}
            </h2>
            <p className="mt-2 text-sm text-green-900">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
