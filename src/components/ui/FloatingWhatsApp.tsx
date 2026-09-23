"use client";

import React, { useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/config/contact";

interface FloatingWhatsAppProps {
  message?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  message = WHATSAPP_MESSAGES.general,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = getWhatsAppUrl(message);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center group">
      {/* Tooltip on left */}
      <div
        className={`hidden sm:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-kerala-950/90 text-white text-xs font-medium backdrop-blur-md shadow-lg border border-white/10 transition-all duration-300 pointer-events-none ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
        role="tooltip"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2 animate-pulse" />
        Chat with us on WhatsApp
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:shadow-[0_10px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Subtle glowing ring pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none duration-1000" />

        {/* WhatsApp Official SVG */}
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 drop-shadow-sm" />
      </a>
    </div>
  );
};
