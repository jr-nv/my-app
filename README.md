# Next.js Project with TypeScript, Tailwind CSS, and Supabase

## Tech Stack

- **[Next.js](https://nextjs.org)** (v15.3.5) - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** (v5.8.3) - Static type checking
- **[Tailwind CSS](https://tailwindcss.com/)** (v4.1.11) - Utility-first CSS framework
- **[Supabase](https://supabase.com/)** (v2.50.3) - Open source Firebase alternative

### Environment Variables

This project uses Supabase and requires environment variables to connect to your Supabase instance.

The project already includes a `.env.local` file in the root directory with the necessary Supabase configuration. This file is gitignored for security.

### Installation

```bash
# Install dependencies
npm install

### Run the development server
npm run dev 

Open http://localhost:3000 with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

The home page includes a simple connection test that verifies your Supabase connection is working properly.

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS features.
- [Supabase Documentation](https://supabase.com/docs) - learn about Supabase features and API.