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

    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <Image
    src="/hero.png"
    alt="Green Agriculture Background"
    fill
    className="object-cover"
    priority
  />

  {/* Overlay for slight darkening (optional) */}
  <div className="absolute inset-0 bg-linear-to-b from-white/30 to-white/10" />

  {/* Centered Content */}
  <div className="relative z-10 text-center max-w-3xl px-6 -translate-y-20 md:-translate-y-64">
    <p className="text-xl md:text-xl text-gray-700 font-medium">
      <span className="text-green-600 text-2xl">•</span> Top Notch Webinar Platform
    </p>

    <h1 className="text-4xl md:text-6xl font-bold font-manrope text-gray-900 leading-tight">
      Bring Fresh Growth <br /> To Agriculture.
    </h1>

    <p className="text-gray-600 mt-4 mb-8 text-base md:text-lg">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore"
    </p>

    <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2 mx-auto">
      Get Started
      <span className="text-xl">→</span>
    </button>
  </div>
</section>

    </>
    
  );
}
