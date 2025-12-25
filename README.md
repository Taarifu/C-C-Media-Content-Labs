# TM Media Content Labs Agency

A Next.js application with a neobrutalist design system celebrating African creativity.

## Project Structure

This project has been migrated to **Next.js 16** using the App Router pattern.

```
/
├── frontend/              # Next.js application
│   ├── app/              # App Router pages and layouts
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...          # Custom components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── public/          # Static assets
│   └── ...              # Config files
├── public/              # Legacy public folder (can be merged)
└── README.md            # This file
```

## Tech Stack

- **Framework**: Next.js 16.1 (App Router)
- **Styling**: Tailwind CSS v3 with custom neobrutalist theme
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod
- **Fonts**: Archivo Black (display), Fraunces (serif)

## Getting Started

### Prerequisites

- Node.js 18+ & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Development

```sh
# Navigate to the frontend directory
cd frontend

# Install dependencies (if not already installed)
npm install --legacy-peer-deps

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```sh
cd frontend
npm run build
npm start
```

## Design System

This project uses a custom **neobrutalist** design system featuring:

- **Color Palette**: 
  - Paper White (`#F4F4F1`) / Ink Black (`#1A1A1A`)
  - Matatu Chrome (Electric Teal) - Primary
  - Savannah Sun (Deep Ochre) - Secondary  
  - Maasai Red - Accent

- **Typography**:
  - Display: Archivo Black (bold, uppercase headers)
  - Body: Fraunces (elegant serif for readability)

- **Visual Elements**:
  - Bold 3-5px borders
  - Offset shadows (6x6px brutal shadows)
  - Zero border radius (sharp corners)
  - Grainy texture overlay

## Key Components

- `NewsTicker` - Animated news ticker
- `HeroSection` - Hero banner with animations
- `MemeBentoGrid` - Bento grid layout for memes
- `EditorialSection` - Article cards
- `ConstitutionSection` - Constitution highlights
- `AgencyPortal` - Contact/footer section

## Next.js Best Practices Applied

✅ **Server Components by Default** - Most components render on the server for better performance
✅ **Client Components** - Used only where needed (animations, interactions)
✅ **App Router** - Modern routing with layouts and nested routes
✅ **Image Optimization** - Next.js Image component ready
✅ **Font Optimization** - Google Fonts loaded via next/font
✅ **Path Aliases** - `@/*` imports for cleaner code
✅ **TypeScript** - Full type safety

## Deployment

This project is ready to deploy to Vercel, Netlify, or any Next.js-compatible hosting platform.

```sh
cd frontend
npm run build
```
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
