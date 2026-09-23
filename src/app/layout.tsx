import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export const metadata: Metadata = {
  title: {
    default: "Explore Kerala - God's Own Country | Travel, Stays, Packages & Food",
    template: "%s | Explore Kerala",
  },
  description:
    "Official travel guide to Kerala, India. Discover iconic destinations like Munnar, Alleppey backwaters, Wayanad and Kochi, authentic Kerala Sadya food, luxury houseboats, and curated 3-8 day holiday tour packages.",
  keywords: [
    "Kerala Tourism",
    "God's Own Country",
    "Munnar Tea Gardens",
    "Alleppey Houseboats",
    "Kerala Tour Packages",
    "Kerala Food",
    "Kerala Stays",
    "Wayanad",
    "Fort Kochi",
    "Varkala Beach",
    "Ayurveda Kerala"
  ],
  authors: [{ name: "Explore Kerala Tourism Team" }],
  creator: "Explore Kerala",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://explorekerala.travel",
    siteName: "Explore Kerala",
    title: "Explore Kerala - Discover God's Own Country",
    description:
      "Plan your dream Kerala vacation with authentic destination guides, local cuisine, verified stays, and curated tour packages.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Kerala Houseboat on Alleppey Backwaters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Kerala - Discover God's Own Country",
    description:
      "Discover destinations, stays, authentic cuisine, and tour packages in Kerala.",
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
