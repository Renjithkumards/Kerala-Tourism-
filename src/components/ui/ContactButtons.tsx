import React from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppLink } from "@/lib/utils";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface ContactButtonsProps {
  inquirySubject?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  showPhone?: boolean;
  showEmail?: boolean;
  showWhatsApp?: boolean;
  stacked?: boolean;
}

export const ContactButtons: React.FC<ContactButtonsProps> = ({
  inquirySubject = "Hello, I am interested in planning a Kerala trip.",
  className,
  size = "sm",
  showPhone = true,
  showEmail = false,
  showWhatsApp = true,
  stacked = false,
}) => {
  const whatsappUrl = getWhatsAppLink(siteConfig.whatsappNumber, inquirySubject);
  const phoneUrl = `tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`;
  const emailUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    inquirySubject
  )}`;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2",
        stacked && "flex-col w-full items-stretch",
        className
      )}
    >
      {showWhatsApp && (
        <Button
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          size={size}
          icon={<MessageCircle className="w-4 h-4" />}
          className={stacked ? "w-full justify-center" : ""}
        >
          WhatsApp Inquiry
        </Button>
      )}

      {showPhone && (
        <Button
          href={phoneUrl}
          variant="outline"
          size={size}
          icon={<Phone className="w-4 h-4 text-kerala-700" />}
          className={stacked ? "w-full justify-center" : ""}
        >
          Call Now
        </Button>
      )}

      {showEmail && (
        <Button
          href={emailUrl}
          variant="ghost"
          size={size}
          icon={<Mail className="w-4 h-4 text-gray-600" />}
          className={stacked ? "w-full justify-center" : ""}
        >
          Email Us
        </Button>
      )}
    </div>
  );
};
