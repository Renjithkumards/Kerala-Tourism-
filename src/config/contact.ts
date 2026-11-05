/**
 * Central Contact and WhatsApp Configuration
 * 
 * Edit your WhatsApp Business number here. 
 * All WhatsApp buttons, floating widgets, and links across the site reference this single source of truth.
 */

// Central WhatsApp business number placeholder requested by user
export const WHATSAPP_NUMBER = "8075845306";

// Country code for India (without + or symbols)
export const WHATSAPP_COUNTRY_CODE = "91";

/**
 * Strips all non-digit characters and ensures country code is present.
 * Complies with WhatsApp wa.me link specifications:
 * - No +, spaces, brackets, or hyphens.
 * - Example: https://wa.me/918075845306
 */
export function getCleanWhatsAppNumber(raw: string = WHATSAPP_NUMBER): string {
  const digits = raw.replace(/\D/g, "");
  // If a 10-digit Indian mobile number is provided without country code, prepend 91
  if (digits.length === 10) {
    return `${WHATSAPP_COUNTRY_CODE}${digits}`;
  }
  return digits;
}

/**
 * Standard pre-filled messages for contextual user inquiries
 */
export const WHATSAPP_MESSAGES = {
  general: "Hello, I would like to know more about Kerala tours.",
  destination: (destinationName: string) =>
    `Hello, I am interested in visiting ${destinationName}. Please share more information.`,
  package: (packageTitle: string) =>
    `Hello, I am interested in the ${packageTitle} package. Please share the details.`,
  stay: (stayName: string) =>
    `Hello, I am interested in staying at ${stayName}. Please share more information.`,
  food: (foodName: string) =>
    `Hello, I am interested in experiencing authentic ${foodName} in Kerala. Please share recommendations.`,
  customTrip: "Hello, I would like to plan a custom Kerala tour. Please help me with customized itineraries.",
};

/**
 * Helper to build standard wa.me URLs.
 * Encodes messages properly with encodeURIComponent.
 * 
 * @param message Optional pre-filled message
 * @param customNumber Optional phone number override (defaults to central WHATSAPP_NUMBER)
 * @returns Fully formatted WhatsApp URL: https://wa.me/918075845306?text=...
 */
export function getWhatsAppUrl(message?: string, customNumber?: string): string {
  const phone = getCleanWhatsAppNumber(customNumber || WHATSAPP_NUMBER);
  if (!message || message.trim() === "") {
    return `https://wa.me/${phone}`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message.trim())}`;
}
