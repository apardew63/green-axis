"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function AdditionalSections() {
  return (
    <>
      {/* Features Section */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#222A2C] text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight md:leading-[60px] mb-4 md:mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-[#7A7A7A] text-base md:text-lg leading-6 max-w-2xl mx-auto">
              We provide cutting-edge agricultural solutions that help farmers increase productivity and sustainability.
            </p>
          </div> */}

          {/* Main Feature Card - Based on Figma Design */}
          <motion.div
            className="relative w-full max-w-[1420px] h-[730px] mx-auto rounded-[40px] overflow-hidden"
            style={{
              backgroundColor: 'rgb(171, 188, 174)',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full max-w-[1420px] h-[730px] rounded-[40px] overflow-hidden"
              style={{
                backgroundImage: 'url(/feature.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'linear-burn',
              }}
            />

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center justify-center p-8 md:p-16">
              <div className="text-center max-w-4xl">
                <h3 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Advanced Agricultural Technology
                </h3>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                  Experience the future of farming with our cutting-edge solutions that combine traditional wisdom with modern innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#222A2C] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                    Learn More
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-[#222A2C] transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Feature Cards */}
        </div>
      </section>

      {/* Services Section - Based on Figma Design */}
      <section className="bg-[#FAFAFA] py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <h2 className="text-[#222A2C] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </h2>
              </div>
              <div>
                <p className="text-[#666666] text-lg md:text-xl leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            {/* Card 1 - Farming Precision */}
            <motion.div
              className="bg-white rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative h-[516px] md:h-[400px] lg:h-[516px]">
                <Image
                  src="/farming.png"
                  alt="Farming Precision"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#222A2C] text-2xl font-bold mb-4">
                  Farming Precision
                </h3>
                <p className="text-[#666666] text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Crop Surveillance */}
            <motion.div
              className="bg-white rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-[384px] md:h-[300px] lg:h-[384px]">
                <Image
                  src="/crop.png"
                  alt="Crop Surveillance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#222A2C] text-2xl font-bold mb-4">
                  Crop Surveillance
                </h3>
                <p className="text-[#666666] text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Automated Farming */}
            <motion.div
              className="bg-white rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative h-[450px] md:h-[350px] lg:h-[450px]">
                <Image
                  src="/automated.png"
                  alt="Automated Farming"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#222A2C] text-2xl font-bold mb-4">
                  Automated Farming
                </h3>
                <p className="text-[#666666] text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section with Image and Text */}
          <div className="relative">
            {/* Divider Line */}
            <div className="w-full h-px bg-[#E3E3E3] mb-12 md:mb-16" />

            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Image */}
              <motion.div
                className="relative h-[256px] md:h-[300px] lg:h-[256px] rounded-[40px] overflow-hidden"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/desert.png"
                  alt="Agricultural Technology"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="lg:pl-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-[#222A2C] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </h3>
              </motion.div>
            </div>

            {/* Bottom Divider Line */}
            <div className="w-full h-px bg-[#E3E3E3] mt-12 md:mt-16" />
          </div>
        </div>
      </section>

      {/* Newsletter Section - Based on Figma Design */}
      <section className="relative bg-white py-8 md:py-12 px-6 md:px-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/newsletter.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.17) translateX(-3.75%) translateY(-30%)',
            transformOrigin: 'center',
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex justify-center items-center min-h-[571px]">
            <motion.div
              className="text-center max-w-[745px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading */}
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-14">
                Lorem ipsum dolor sit amet, consectetur!
              </h2>

              {/* Newsletter Form */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-[499px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Email Input */}
                <div className="relative flex-1 w-full sm:w-auto">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full h-14 px-6 rounded-full bg-white text-[#5F5F5F] placeholder-[#5F5F5F] text-base focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    style={{ minWidth: '311px' }}
                  />
                </div>

                {/* Subscribe Button */}
                <button className="flex items-center gap-2 bg-[#222A2C] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#333333] transition-colors border border-white">
                  <span>Subscribe</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Based on Figma Design */}
      <footer className="relative bg-white pt-0 py-16 md:py-16 pb-16 md:pb-24 px-6 md:px-16 overflow-hidden">
        {/* Decorative Background Elements */}
        <div
          className="absolute w-[441px] h-[441px] rounded-full blur-[360px] opacity-100"
          style={{
            background: 'rgb(103, 239, 62)',
            bottom: '-111px',
            left: '1149px',
            zIndex: 0,
          }}
        />
        <div
          className="absolute w-[542px] h-[542px] rounded-full blur-[200px] opacity-100"
          style={{
            background: 'rgb(32, 94, 57)',
            bottom: '-121px',
            left: '-343px',
            zIndex: 0,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 mb-16 md:mb-20">
            {/* Left Column - Company Info */}
            <div className="space-y-14">
              {/* Logo and Description */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-[130px] h-[80px] rounded-full flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
                <p className="text-[#222A2C] text-base leading-6 max-w-[430px]">
                  We are custom home builder located in Dallas, TX servicing Highland Park, Greenaxis..
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-5">
                {[
                  { name: 'Facebook', icon: FaFacebook },
                  { name: 'Twitter', icon: FaTwitter },
                  { name: 'Instagram', icon: FaInstagram },
                  { name: 'LinkedIn', icon: FaLinkedin }
                ].map((social, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border border-[#222A2C]/20 bg-[#222A2C]/4 flex items-center justify-center hover:bg-[#222A2C]/10 transition-colors cursor-pointer"
                  >
                    <social.icon className="text-[#222A2C] text-lg" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {/* Company */}
              <div>
                <h3 className="text-[#666666] text-sm font-medium mb-6">Company</h3>
                <ul className="space-y-4">
                  {['Features', 'Pricing', 'About Us', 'Contact', 'Pricing'].map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-[#222A2C] text-sm hover:text-[#0B7A1A] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resource */}
              <div>
                <h3 className="text-[#666666] text-sm font-medium mb-6">Resource</h3>
                <ul className="space-y-4">
                  {['Blog', 'Customer Stories', 'Information', 'Legal', 'Payments'].map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-[#222A2C] text-sm hover:text-[#0B7A1A] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career */}
              <div>
                <h3 className="text-[#666666] text-sm font-medium mb-6">Career</h3>
                <ul className="space-y-4">
                  {['Jobs', 'Hiring', 'News', 'Tips & Tricks'].map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-[#222A2C] text-sm hover:text-[#0B7A1A] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help */}
              <div>
                <h3 className="text-[#666666] text-sm font-medium mb-6">Help</h3>
                <ul className="space-y-4">
                  {['FAQ', 'Help Center', 'Support'].map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-[#222A2C] text-sm hover:text-[#0B7A1A] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter and Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-20">
            {/* Newsletter Signup */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-[#222A2C] text-3xl md:text-4xl font-bold leading-tight">
                  get in Touch!
                </h3>
                <p className="text-[#222A2C] text-base leading-6 max-w-[305px]">
                  have questions or need assistance? We're here to help!
                </p>
              </div>

              {/* Newsletter Form */}
              <div className="relative">
                <div className="bg-[#EDEDED] rounded-full p-2 flex items-center">
                  <input
                    type="email"
                    placeholder="Footer Email Field"
                    className="flex-1 bg-transparent px-6 py-3 text-[#222A2C] placeholder-[#222A2C] focus:outline-none"
                  />
                  <button className="bg-[#222A2C] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#333333] transition-colors">
                    Footer Subscribe Button
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Address 1 */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#666666] text-sm font-medium mb-6">Address</h4>
                  <p className="text-[#222A2C] text-sm leading-6">
                    1901 Thornridge Cir. Shiloh, Hawaii 81063
                  </p>
                </div>
                <div>
                  <h4 className="text-[#666666] text-sm font-medium mb-6">Address</h4>
                  <p className="text-[#222A2C] text-sm leading-6">
                    1901 Thornridge Cir. Shiloh, Hawaii
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#666666] text-sm font-medium mb-6">Phone</h4>
                  <p className="text-[#222A2C] text-sm leading-6">
                    [303] 303-303189
                  </p>
                </div>
                <div>
                  <h4 className="text-[#666666] text-sm font-medium mb-6">Email</h4>
                  <p className="text-[#222A2C] text-sm leading-6">
                    GreenaxisExports@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Border and Copyright */}
          <div className="border-t border-[#222A2C] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-[#222A2C] text-sm">
                copyright
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-[#222A2C] text-sm hover:text-[#0B7A1A] transition-colors">
                  FAQ
                </a>
                <a href="#" className="text-[#222A2C] text-sm hover:text-[#0B7A1A] transition-colors">
                  Term of Service
                </a>
                <a href="#" className="text-[#222A2C] text-sm hover:text-[#0B7A1A] transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

