"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

export default function FarmShowcase() {
    const slides = [
        {
            title: "Technology Irrigation",
            img: "https://images.unsplash.com/photo-1590080875831-6a3a8468e49a?w=600",
        },
        {
            title: "Plant Propagation",
            img: "https://images.unsplash.com/photo-1587502536263-7a21a1e5685b?w=600",
        },
        {
            title: "Irrigation System",
            img: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600",
        },
        {
            title: "Agricultural Monitoring",
            img: "https://images.unsplash.com/photo-1602872029321-3de8973c82d8?w=600",
        },
    ];

    const categories = ["Organic farm", "Automation farm", "Bio-medical farm"];

    return (
        <section className="relative bg-white py-16 px-8 md:px-16 overflow-hidden">
            {/* FIGMA GRADIENT (smaller, positioned top-left) */}
            <div
                className="absolute rounded-full blur-2xl"
                style={{
                    width: "416px",
                    height: "416px",
                    background: "linear-gradient(90deg, #67EF3E 0%, #67EF3E 100%)",
                    top: "-130px",
                    left: "-146px",
                    zIndex: 0,
                    opacity: 1,
                }}
            />

            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                {/* LEFT SIDE — TEXT AREA */}
                <div className="flex flex-col justify-center space-y-10">
                    {/* Year Badge */}
                    <div className="text-green-900 font-semibold text-2xl ">
                        2025
                    </div>

                    {/* Category Buttons */}
                    <div className="flex flex-col gap-8 mt-24">
                        <div className="flex gap-24 mr-14">
                            {categories.map((cat, i) => (
                                <button
                                    key={i}
                                    className={`text-base ${i === 0
                                        ? "text-green-700 font-semibold border-b-2 border-green-600"
                                        : "text-gray-500 hover:text-green-700"
                                        } transition-colors`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE — HEADING + SUBTEXT */}
                <div className="flex flex-col justify-center">
                    <motion.h1
                        className="text-4xl md:text-4xl font-semibold text-green-900 "
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                        Eiusmod Tempor Incididunt Ut Labore Et Dolore.
                    </motion.h1>

                    {/* Subtext below */}
                    <div className="flex justify-between text-gray-700 text-sm mt-3 md:mt-4 py-24">
                        <span className="text-green-900 text-xl font-semibold">Harvesting Legacy.</span>
                        <span className="text-green-900 text-xl font-semibold">Planting Tomorrow</span>
                    </div>
                </div>
            </div>

            {/* SLIDER SECTION */}
            <div className="relative mt-12 md:mt-16">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={-500}
                    slidesPerView={1.5}
                    breakpoints={{
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3.2 },
                    }}
                    className="overflow-visible"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`rounded-2xl overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1 w-96 h-96 ${index % 2 === 0 ? "mt-0" : "mt-10"
                                    }`}
                            >
                                <img
                                    src={slide.img}
                                    alt={slide.title}
                                    className="w-72 h-96 object-cover"
                                />
                                <div className="p-3 text-center text-gray-700">
                                    <p>{slide.title}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Arrows */}
                <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #0f5132;
            background: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 16px;
            font-weight: bold;
          }
        `}</style>
            </div>
        </section>
    );
}
