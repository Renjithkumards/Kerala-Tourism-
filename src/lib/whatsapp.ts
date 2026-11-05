import { WHATSAPP_NUMBER, getCleanWhatsAppNumber, getWhatsAppUrl } from "@/config/contact";

/**
 * Generates a clean, validated WhatsApp URL with pre-filled message text.
 * 
 * @param phoneNumber WhatsApp phone number (with or without country code/formatting)
 * @param message Contextual pre-filled message
 * @returns Fully formatted WhatsApp URL: https://wa.me/<cleanNumber>?text=<encodedMessage>
 */
export function getWhatsAppLink(
  phoneNumber: string,
  message: string
): string {
  const cleanNumber = getCleanWhatsAppNumber(phoneNumber);
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export { WHATSAPP_NUMBER, getCleanWhatsAppNumber, getWhatsAppUrl };
