# Gideon Peprah Ministries & Valour Multimedia

A production-ready Next.js website featuring two distinct brands under one platform. Users select between Gideon Peprah Ministries (faith-based) or Valour Multimedia (professional multimedia services) on first visit.

## 🔧 Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** (mobile-first design system)
- **React 18+**
- **No UI libraries** - all components built from scratch

## 🎯 Project Structure

```
app/
├─ page.tsx                          # Split landing page (brand selector)
├─ layout.tsx                        # Root layout
├─ globals.css                       # Global Tailwind styles
├─ components/
│  ├─ Button.tsx                     # Reusable button (primary, accent, outline)
│  ├─ Card.tsx                       # Flexible card component
│  ├─ Header.tsx                     # Sticky navigation with mobile menu
│  └─ Footer.tsx                     # Brand-specific footers
│
├─ ministry/
│  ├─ layout.tsx                     # Ministry layout (Header + Footer)
│  ├─ page.tsx                       # Home (hero, events preview, about)
│  ├─ live/
│  │  └─ page.tsx                    # Live streaming (YouTube, Facebook, TikTok)
│  ├─ events/
│  │  └─ page.tsx                    # Events listing with cards
│  ├─ give/
│  │  └─ page.tsx                    # Donation page with buttons & payment gateway
│  └─ contact/
│     └─ page.tsx                    # Contact form & info
│
└─ multimedia/
   ├─ layout.tsx                     # Multimedia layout (Header + Footer)
   ├─ page.tsx                       # Home (services preview, about)
   ├─ services/
   │  └─ page.tsx                    # Service cards (6 services)
   ├─ portfolio/
   │  └─ page.tsx                    # Project grid (image placeholders)
   └─ contact/
      └─ page.tsx                    # Quote form with service selection
```

## 🎨 Design System

### Colors (Custom Tailwind)
- **Primary Green**: `#0F3D2E` - dominant color for CTAs and text
- **Accent Gold**: `#D4AF37` - important CTAs and highlights
- **Background**: `#FFFFFF` - clean white
- **Text Dark**: `#1F2937` - headings
- **Muted Text**: `#6B7280` - body text

### Spacing & Typography
- Mobile-first: base sizes, then `sm:`, `md:`, `lg:` breakpoints
- Responsive typography using Tailwind scale
- Large touch targets (min 44px) for mobile
- Custom `.section` and `.container-max` utilities

## 🌿 Gideon Peprah Ministries

**Purpose**: Faith-based community engagement and livestream integration

### Pages
1. **Home** - Hero section with CTAs, upcoming events preview, about section
2. **Live** - Real-time streaming status, multi-platform links (YouTube, Facebook, TikTok)
3. **Events** - Event listing with dates, times, locations; newsletter signup
4. **Give** - Donation interface with preset amounts, secure payment gateway placeholder
5. **Contact** - Contact form with prayer request, office hours, social links

### Features
- Sticky live status indicator
- Donation amount shortcuts
- Event filtering
- Contact form with subject selection

## 🎬 Valour Multimedia

**Purpose**: Professional multimedia freelancing and project showcase

### Pages
1. **Home** - Hero headline, service preview cards, why choose us section
2. **Services** - 6 service cards with features, process breakdown
3. **Portfolio** - 9 project cards with category filtering, statistics, testimonial section
4. **Contact** - Detailed quote form with service selection, budget range, quick response info

### Features
- Service feature lists
- Portfolio filtering by category
- Professional statistics display
- Service-specific contact form

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd gideon-valour
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Mobile-First Implementation

All pages follow mobile-first design:
- **Base**: Mobile layout (single column, full width)
- **`sm:` (640px)**: Slight adjustments for tablets
- **`md:` (768px)**: Desktop layout with grids and side-by-side
- **`lg:` (1024px)**: Full desktop experience

## 🧩 Component API

### Button
```tsx
<Button 
  href="/path" 
  variant="primary" | "accent" | "outline"
  size="sm" | "md" | "lg"
  external={true}
  type="submit"
>
  Label
</Button>
```

### Card
```tsx
<Card 
  variant="default" | "elevated"
  className="..."
>
  Content
</Card>
```

### Header
```tsx
<Header 
  brand="ministry" | "multimedia"
  navItems={[{ label: "Home", href: "/ministry" }]}
/>
```

### Footer
```tsx
<Footer brand="ministry" | "multimedia" />
```

## 🔌 CMS & Payment Integration Points

The project is built to easily integrate:

1. **Livestream**: Video embed placeholders in `/ministry/live`
2. **Payments**: Gateway placeholder in `/ministry/give`
3. **Portfolio Media**: Image/video grid ready for dynamic content
4. **Forms**: Both contact forms send to console (ready for serverless)
5. **Newsletter**: Email signup form structure in place

## 📝 Customization Guide

### Change Brand Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#0F3D2E",    // Change primary green
  accent: "#D4AF37",     // Change accent gold
}
```

### Modify Content
- Update service descriptions in `/multimedia/services/page.tsx`
- Edit event dates in `/ministry/page.tsx`
- Change portfolio projects in `/multimedia/portfolio/page.tsx`

### Add New Pages
Create new directory in `app/[brand]/[page]/` with `page.tsx`:
```tsx
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';

export default function NewPage() {
  return (
    <div className="section container-max">
      {/* Content */}
    </div>
  );
}
```

## 🎯 Future Enhancement Ideas

- [ ] Connect Stripe for donations and payments
- [ ] Integrate YouTube/Facebook API for live streams
- [ ] Add Sanity CMS for dynamic content
- [ ] Implement newsletter via Mailchimp/SendGrid
- [ ] Add Google Analytics
- [ ] Portfolio image uploads
- [ ] Event registration system
- [ ] Prayer request backend storage

## 📄 License

This project is ready for production deployment and commercial use.

## 🤝 Support

For modifications or extensions, all components follow the same patterns and are fully commented for clarity.
