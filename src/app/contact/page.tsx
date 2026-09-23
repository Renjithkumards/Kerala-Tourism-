"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ShieldCheck, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { getWhatsAppUrl, WHATSAPP_MESSAGES, WHATSAPP_NUMBER } from "@/config/contact";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "Munnar",
    duration: "3-5 Days",
    message: "",
  });

  const getCustomMessage = () => {
    const parts = [
      `Hello! My name is ${formData.name || "Traveler"}.`,
      `I am planning a ${formData.duration} trip to Kerala (interested in ${formData.destination}).`,
    ];
    if (formData.phone) parts.push(`Phone: ${formData.phone}`);
    if (formData.email) parts.push(`Email: ${formData.email}`);
    if (formData.message) parts.push(`Message: ${formData.message}`);
    return parts.join(" ");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Directly open WhatsApp with inquiry details pre-filled
    const url = getWhatsAppLink(siteConfig.whatsappNumber, getCustomMessage());
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const whatsappInquiryUrl = getWhatsAppLink(
    siteConfig.whatsappNumber,
    getCustomMessage()
  );

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-50 border border-kerala-200 px-3.5 py-1 rounded-full mb-3 inline-block">
            TRIP ASSISTANCE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-kerala-900 font-serif tracking-tight">
            Contact &amp; Trip Concierge
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
            Have questions about visiting Kerala? Need a customized itinerary, houseboat recommendation, or local stay guidance? Our team is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-emerald-50/70 p-6 sm:p-7 rounded-3xl border border-emerald-200/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-sm">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald-800 block">
                    WhatsApp
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-gray-900">
                    Chat with us on WhatsApp
                  </h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-5 leading-relaxed">
                Connect directly with our local Kerala travel coordinators for instant responses, custom quotes, stay options, and customized itineraries.
              </p>
              <WhatsAppButton
                href={getWhatsAppLink(siteConfig.whatsappNumber, "Hello, I would like to know more about Kerala tours.")}
                variant="primary"
                size="md"
                fullWidth
                className="py-3 px-4 rounded-xl text-sm font-semibold shadow-sm"
              >
                Chat on WhatsApp
              </WhatsAppButton>
            </div>

            {/* Direct Information */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-card space-y-5">
              <h2 className="text-lg font-bold text-gray-900 font-serif">
                Information &amp; Helpline
              </h2>

              <div className="flex items-start gap-3 text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block text-xs uppercase tracking-wider">
                    Kerala Tourism 24x7 Helpline
                  </strong>
                  <span className="text-gray-600 font-medium text-sm">{siteConfig.touristHelpline}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-kerala-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block text-xs uppercase tracking-wider">
                    Direct Phone Line
                  </strong>
                  <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="text-kerala-800 hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-kerala-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block text-xs uppercase tracking-wider">
                    Email Inquiries
                  </strong>
                  <a href={`mailto:${siteConfig.email}`} className="text-kerala-800 hover:underline">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-kerala-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block text-xs uppercase tracking-wider">
                    Visitor Center Address
                  </strong>
                  <span className="text-gray-600 leading-relaxed text-xs block mt-0.5">
                    {siteConfig.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-card">
            <h2 className="text-2xl font-bold text-kerala-900 font-serif mb-2">
              Send a Trip Inquiry
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Fill out the form below and we will get back to you with custom recommendations.
            </p>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Inquiry Received!</h3>
                <p className="text-sm text-gray-600 mt-2 max-w-sm mx-auto">
                  Thank you for reaching out. We have logged your request and will reach out via WhatsApp / Email shortly.
                </p>
                <div className="mt-6">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-kerala-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl"
                  >
                    <span>Connect Immediately on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-kerala-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-kerala-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-kerala-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Preferred Duration
                    </label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-kerala-600 bg-white"
                    >
                      <option>3 Days Weekend</option>
                      <option>4-5 Days Highlights</option>
                      <option>6-7 Days Family / Honeymoon</option>
                      <option>8+ Days Grand Kerala</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Destination or Preferences
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Munnar tea hills, Alleppey houseboat, Varkala cliffs"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-kerala-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the number of travelers, budget preference, or any special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-kerala-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-kerala-800 hover:bg-kerala-700 text-white font-semibold py-3.5 px-6 rounded-2xl text-sm shadow-soft transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Travel Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
