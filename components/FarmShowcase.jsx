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
        <section className="relative bg-white py-16 md:py-24 px-6 md:px-16 overflow-hidden">
            {/* FIGMA GRADIENT (positioned top-left) */}
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
            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16">
                {/* LEFT SIDE — TEXT AREA */}
                <div className="flex flex-col justify-center space-y-8 md:space-y-16">
                    {/* Year Badge */}
                    <div className="text-[#0B7A1A] font-bold text-2xl md:text-[32px] leading-tight md:leading-[40px]">
                        2025
                    </div>

                    {/* Category Buttons */}
                    <div className="flex flex-col gap-4 md:gap-8">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-24">
                            {categories.map((cat, i) => (
                                <button
                                    key={i}
                                    className={`text-base md:text-lg font-medium transition-colors ${
                                        i === 0
                                            ? "text-[#0B7A1A] border-b-2 border-[#0B7A1A] pb-2"
                                            : "text-[#7A7A7A] hover:text-[#0B7A1A]"
                                    }`}
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
                        className="text-[#222A2C] text-2xl md:text-4xl lg:text-[48px] font-bold leading-tight md:leading-[60px] mb-4 md:mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                        Eiusmod Tempor Incididunt Ut Labore Et Dolore.
                    </motion.h1>

                    {/* Subtext below */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 text-[#222A2C] text-lg md:text-[20px] font-bold">
                        <span>Harvesting Legacy.</span>
                        <span>Planting Tomorrow</span>
                    </div>
                </div>
            </div>

            {/* SLIDER SECTION */}
            <div className="relative mt-12 md:mt-20">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={16}
                    slidesPerView={1.1}
                    breakpoints={{
                        640: { slidesPerView: 1.5, spaceBetween: 24 },
                        768: { slidesPerView: 2.2, spaceBetween: 32 },
                        1024: { slidesPerView: 3.2, spaceBetween: 32 },
                    }}
                    className="overflow-visible"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`rounded-2xl overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-2 w-full max-w-[384px] h-[320px] md:h-[384px] ${
                                    index % 2 === 0 ? "mt-0" : "mt-5 md:mt-10"
                                }`}
                            >
                                <img
                                    src={slide.img}
                                    alt={slide.title}
                                    className="w-full h-[240px] md:h-[320px] object-cover"
                                />
                                <div className="p-4 md:p-6 text-center">
                                    <p className="text-[#222A2C] text-base md:text-lg font-medium">{slide.title}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Arrows */}
                <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #0B7A1A;
            background: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            border: 1px solid #E5E5E5;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 16px;
            font-weight: bold;
          }
          .swiper-button-next {
            right: -20px;
          }
          .swiper-button-prev {
            left: -20px;
          }
          @media (max-width: 640px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none;
            }
          }
        `}</style>
            </div>
        </section>
    );
}
