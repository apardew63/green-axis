"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Image from "next/image";
import { useState } from "react";


export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About us", link: "" },
    { name: "Reviews", link: "" },
    { name: "Product", link: "" },
    { name: "Blogs", link: "" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navItems}
            className="text-black text-lg font-semibold space-x-8"
          />
          <div className="flex items-center gap-6">
            <NavbarButton
              variant="secondary"
              className="text-lg px-6 py-3 font-semibold"
            >
              Login
            </NavbarButton>
            <NavbarButton
              variant="primary"
              className="text-lg px-6 py-3 font-semibold"
            >
              Book a call
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative block text-black text-xl font-semibold py-2 dark:text-neutral-300"
              >
                {item.name}
              </a>
            ))}

            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full text-xl py-3 font-semibold"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full text-xl py-3 font-semibold"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>

    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#F1F1F1]">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Green Agriculture Background"
        fill
        className="object-cover"
        priority
      />

      {/* Decorative Ellipses - Hidden on mobile */}
      <div className="hidden lg:block absolute w-[146px] h-[928px] -right-[73px] -top-[73px] opacity-8 bg-[#222A2C] rounded-full blur-[137px] transform rotate-30" />
      <div className="hidden lg:block absolute w-[146px] h-[866px] right-[13px] top-[13px] opacity-6 bg-[#222A2C] rounded-full blur-[137px] transform rotate-30" />
      <div className="hidden lg:block absolute w-[146px] h-[904px] left-[560px] top-[22px] opacity-8 bg-[#222A2C] rounded-full blur-[137px] transform rotate-30" />

      {/* Decorative Lines - Hidden on mobile */}
      <div className="hidden lg:block absolute top-0 left-[67px] w-[978px] h-px bg-[#CACACA] transform -rotate-90" />
      <div className="hidden lg:block absolute top-0 left-[502px] w-[978px] h-px bg-[#CACACA] transform -rotate-90" />
      <div className="hidden lg:block absolute top-0 left-[937px] w-[978px] h-px bg-[#CACACA] transform -rotate-90" />
      <div className="hidden lg:block absolute top-0 left-[1372px] w-[978px] h-px bg-[#CACACA] transform -rotate-90" />

      {/* Centered Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[687px] px-6">
        {/* Top Badge */}
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <div className="w-2 h-2 bg-[#0B7A1A] rounded-full" />
          <p className="text-[#222A2C] text-xs md:text-sm font-medium">
            Top Notch Webinar Platform
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-[#222A2C] text-4xl md:text-6xl lg:text-[96px] font-bold leading-tight md:leading-[120px] mb-4 md:mb-6">
          Bring Fresh Growth to Agriculture.
        </h1>

        {/* Description */}
        <p className="text-[#222A2C] text-base md:text-lg leading-6 mb-8 md:mb-10 max-w-[429px]">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        </p>

        {/* Sophisticated Button */}
        <button className="relative group w-[140px] md:w-[172px] h-[48px] md:h-[56px] rounded-[188px] overflow-hidden shadow-[0_18px_52px_rgba(0,0,0,0.38)]">
          {/* Button Background with Gradient */}
          <div 
            className="absolute inset-0 rounded-[188px]"
            style={{
              background: 'radial-gradient(circle, #72E472 0%, #282828 49.68%, #111111 100%)'
            }}
          />
          
          {/* Border Effects */}
          <div className="absolute -inset-1 bg-gradient-to-b from-[#767676] to-[#B1B1B1] rounded-[188px] opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black rounded-[188px] opacity-50" />
          <div className="absolute inset-[3px] bg-gradient-to-b from-white/10 to-black rounded-[188px] opacity-50" />
          
          {/* Blur Effects */}
          <div className="absolute inset-0 bg-[#222A2C] rounded-[188px] blur-[210px] opacity-100" />
          <div className="absolute -inset-[30px] bg-[#222A2C] rounded-[188px] blur-[225px] opacity-35" />
          
          {/* Shining Line Effect */}
          <div 
            className="absolute inset-[7px] rounded-[80px] blur-sm"
            style={{
              background: 'linear-gradient(to bottom, #111111 0%, rgba(17, 17, 17, 0.5) 100%)'
            }}
          />
          <div 
            className="absolute inset-[7px] rounded-[80px]"
            style={{
              border: '0.5px solid',
              borderImage: 'linear-gradient(to bottom, rgba(17, 17, 17, 0.7) 0%, transparent 100%) 1'
            }}
          />
          
          {/* Button Content */}
          <div className="relative z-10 flex items-center justify-center gap-2 h-full">
            <span className="text-white text-sm md:text-base font-medium">Get Started</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
    </section>

    </>
    
  );
}
