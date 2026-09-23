"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Palmtree } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/config/contact";
import { MobileNav } from "./MobileNav";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Food", href: "/food" },
  { name: "Stays", href: "/stays" },
  { name: "Packages", href: "/packages" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft py-3 border-b border-gray-100"
            : "bg-white py-4 border-b border-gray-100/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-kerala-800 text-white flex items-center justify-center shadow-sm group-hover:bg-kerala-700 transition-colors">
              <Palmtree className="w-5 h-5 text-gold-300" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-kerala-900 block leading-tight font-serif">
                Explore Kerala
              </span>
              <span className="text-[10px] font-semibold text-gold-600 tracking-wider uppercase block">
                God&apos;s Own Country
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-kerala-800 font-semibold bg-kerala-50/80"
                      : "text-gray-600 hover:text-kerala-800 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.general}
              variant="primary"
              size="sm"
            >
              Plan on WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile Menu & WhatsApp Button */}
          <div className="flex items-center gap-2 md:hidden">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.general}
              variant="primary"
              size="sm"
              iconOnly
              aria-label="Chat on WhatsApp"
              className="rounded-xl min-w-[40px] min-h-[40px]"
            />

            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
