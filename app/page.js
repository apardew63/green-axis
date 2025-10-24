"use client";
import Counter from "@/components/Counter";
import FarmShowcase from "@/components/FarmShowcase";
import Header, { NavbarDemo } from "@/components/Header";

export default function HeroSection() {

  return (
   <div className="bg-white">
    <NavbarDemo/>
    <Counter/>
    <FarmShowcase/>
    
   </div>
  );
}
