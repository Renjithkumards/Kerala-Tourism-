"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Phone, MapPin, Palmtree } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/config/contact";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navLinks,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-kerala-800 text-white flex items-center justify-center">
                <Palmtree className="w-4 h-4 text-gold-300" />
              </div>
              <div>
                <span className="font-extrabold text-kerala-900 tracking-tight block text-base font-serif">
                  Explore Kerala
                </span>
                <span className="text-[10px] text-gold-600 tracking-wider uppercase font-semibold">
                  God&apos;s Own Country
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-kerala-800 hover:bg-kerala-50 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-gray-300 text-sm">→</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-gray-100 mt-6 space-y-3">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.general}
            variant="primary"
            size="md"
            fullWidth
            className="py-3 rounded-xl shadow-sm"
          >
            Chat on WhatsApp
          </WhatsAppButton>

          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium transition-colors text-sm"
          >
            <Phone className="w-4 h-4 text-kerala-700" />
            <span>{siteConfig.phone}</span>
          </a>

          <div className="pt-2 text-center">
            <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-kerala-600" />
              <span>Helpline: {siteConfig.touristHelpline}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
