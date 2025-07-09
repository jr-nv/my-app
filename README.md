# Next.js Project with TypeScript, Tailwind CSS, and Supabase

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), enhanced with TypeScript, Tailwind CSS, and Supabase integration.

## Tech Stack

- **[Next.js](https://nextjs.org)** (v15.3.5) - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** (v5.8.3) - Static type checking
- **[Tailwind CSS](https://tailwindcss.com/)** (v4.1.11) - Utility-first CSS framework
- **[Supabase](https://supabase.com/)** (v2.50.3) - Open source Firebase alternative

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Environment Variables

This project uses Supabase and requires environment variables to connect to your Supabase instance.

The project already includes a `.env.local` file in the root directory with the necessary Supabase configuration. This file is gitignored for security.

### Installation

```bash
# Install dependencies
npm install

### Run the development server
npm run dev 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- [src/](cci:7://file:///c:/Users/jesse/OneDrive/Desktop/Dev/next.js_templates/my-app/src:0:0-0:0) - Application source code
  - [app/](cci:7://file:///c:/Users/jesse/OneDrive/Desktop/Dev/next.js_templates/my-app:0:0-0:0) - Next.js App Router pages
  - `lib/` - Utility functions and shared libraries
    - [supabase.ts](cci:7://file:///c:/Users/jesse/OneDrive/Desktop/Dev/next.js_templates/my-app/src/lib/supabase.ts:0:0-0:0) - Supabase client configuration

## Development Workflow

You can start editing the page by modifying [app/page.tsx](cci:7://file:///c:/Users/jesse/OneDrive/Desktop/Dev/next.js_templates/my-app/src/app/page.tsx:0:0-0:0). The page auto-updates as you edit the file.

This project uses:

- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TypeScript](https://www.typescriptlang.org/) for type safety

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Supabase Integration

The project is already connected to Supabase. The Supabase client is configured in [src/lib/supabase.ts](cci:7://file:///c:/Users/jesse/OneDrive/Desktop/Dev/next.js_templates/my-app/src/lib/supabase.ts:0:0-0:0) and can be imported and used in your components.

The home page includes a simple connection test that verifies your Supabase connection is working properly.

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS features.
- [Supabase Documentation](https://supabase.com/docs) - learn about Supabase features and API.