import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Palmtree,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/config/contact";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-kerala-950 text-gray-300 pt-16 pb-12 border-t border-kerala-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid: About, Quick links, Destinations, Contact, Social links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-kerala-800 text-white flex items-center justify-center">
                <Palmtree className="w-5 h-5 text-gold-300" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight font-serif">
                Explore Kerala
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Explore Kerala is your comprehensive travel companion to God&apos;s Own Country. From tranquil backwater lagoons and misty hill stations to heritage architecture, authentic cuisine, and peaceful stays.
            </p>
            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 block mb-3">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-kerala-700 text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-kerala-700 text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-kerala-700 text-white flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-kerala-700 text-white flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-emerald-400 transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/food" className="hover:text-emerald-400 transition-colors">
                  Food
                </Link>
              </li>
              <li>
                <Link href="/stays" className="hover:text-emerald-400 transition-colors">
                  Stays
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-emerald-400 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Destinations */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/destinations#munnar" className="hover:text-emerald-400 transition-colors">
                  Munnar Tea Hills
                </Link>
              </li>
              <li>
                <Link href="/destinations#alleppey" className="hover:text-emerald-400 transition-colors">
                  Alleppey Backwaters
                </Link>
              </li>
              <li>
                <Link href="/destinations#kochi" className="hover:text-emerald-400 transition-colors">
                  Historic Fort Kochi
                </Link>
              </li>
              <li>
                <Link href="/destinations#wayanad" className="hover:text-emerald-400 transition-colors">
                  Wayanad Nature &amp; Caves
                </Link>
              </li>
              <li>
                <Link href="/destinations#thekkady" className="hover:text-emerald-400 transition-colors">
                  Thekkady Wildlife Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/destinations#varkala" className="hover:text-emerald-400 transition-colors">
                  Varkala Cliff Beach
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>{siteConfig.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors truncate">
                  {siteConfig.email}
                </a>
              </p>
              <div className="pt-2">
                <WhatsAppButton
                  message={WHATSAPP_MESSAGES.general}
                  variant="primary"
                  size="sm"
                  className="rounded-xl"
                >
                  WhatsApp Concierge
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Explore Kerala. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4 text-gray-400">
            <span>Discover God&apos;s Own Country</span>
            <span className="hidden sm:inline">•</span>
            <span>Sustainable &amp; Responsible Tourism</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
