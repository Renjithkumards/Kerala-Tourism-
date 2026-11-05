# 🌴 Explore Kerala — God's Own Country

A modern travel guide website for Kerala, India, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🗺️ Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Destinations | `/destinations` |
| Food | `/food` |
| Stays | `/stays` |
| Packages | `/packages` |
| Contact | `/contact` |
| About | `/about` |

## ✨ Features

- **Kerala Destinations** — Munnar, Alleppey, Wayanad, Kochi, Varkala & more
- **Kerala Food** — 10 authentic dishes with filters (Vegetarian, Non-Veg, Breakfast, Dessert...)
- **Stays** — Curated houseboats, resorts, and homestays
- **Tour Packages** — 3–8 day curated holiday packages
- **WhatsApp Integration** — Central config, floating FAB, contextual enquiry buttons
- **Responsive Design** — Mobile-first, tested from 320px to 1440px

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) — Icons

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── home/             # Homepage sections
│   ├── layout/           # Navbar, Footer, MobileNav
│   └── ui/               # Reusable UI components
├── config/
│   └── contact.ts        # WhatsApp number — single source of truth
├── data/                 # Static data (destinations, food, stays, packages)
├── lib/                  # Utility functions (whatsapp.ts, utils.ts)
└── types/                # TypeScript types
```

## 📞 WhatsApp Configuration

All WhatsApp settings are managed in [`src/config/contact.ts`](src/config/contact.ts).  
To change the WhatsApp number, update `WHATSAPP_NUMBER` in that file only.

---

*Built with ❤️ for Kerala Tourism*