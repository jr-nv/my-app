# Next.js Starter Template

A modern, beginner-friendly starter template for building full-stack web applications with Next.js, TypeScript, Tailwind CSS, and Supabase. Created with the help of Claude.ai and Cursor.

## What is This?

This starter template provides a solid foundation for developers who want to build modern web applications using industry-standard tools. It's specifically designed for beginners who want to learn full-stack development with a proven tech stack, while also being robust enough for experienced developers to use as a quick starting point. 

**Perfect for building:**
- SaaS applications
- E-commerce sites
- Content management systems
- Social media platforms
- Portfolio websites
- Any full-stack web application

## Tech Stack

- **[Next.js](https://nextjs.org)** (v15.3.5) - React framework for production with App Router
- **[TypeScript](https://www.typescriptlang.org/)** (v5.8.3) - Static type checking for better code quality
- **[Tailwind CSS](https://tailwindcss.com/)** (v4.1.11) - Utility-first CSS framework for rapid UI development
- **[Supabase](https://supabase.com/)** (v2.50.3) - Open source Firebase alternative with PostgreSQL database

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or later) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git** - [Download here](https://git-scm.com/)
- **Supabase Account** - [Sign up here](https://supabase.com/) (free tier available)

## Project Structure

```
my-app/
├── src/
│   ├── app/                 # Next.js App Router pages and layouts
│   │   ├── globals.css      # Global styles and Tailwind imports
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Home page component
│   └── lib/
│       └── supabase.ts      # Supabase client configuration
├── .env.local               # Environment variables (not in repo)
├── .gitignore              # Git ignore rules
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/jr-nv/my-app.git
cd my-app
```

### 2. Install Dependencies (I use npm)

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Supabase

1. Create a new project at [Supabase](https://supabase.com/)
2. Go to your project settings > API
3. Copy your project URL and anon key

### 4. Configure Environment Variables

1. Copy the environment example file:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### 5. Run the Development Server (I use npm)

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The home page includes a simple connection test that verifies your Supabase connection is working properly.

## Available Scripts

- `npm run dev` - Starts the development server on http://localhost:3000
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server (requires build first)
- `npm run lint` - Runs ESLint to check code quality
- `npm run type-check` - Runs TypeScript compiler to check types

## Database Setup

### Initial Database Configuration

1. In your Supabase project dashboard, go to the SQL Editor
2. Create your first table (example):
   ```sql
   create table posts (
     id uuid default gen_random_uuid() primary key,
     title text not null,
     content text,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null
   );
   ```

3. Set up Row Level Security (RLS) if needed:
   ```sql
   alter table posts enable row level security;
   ```

### Database Migrations

For production applications, consider using Supabase's migration system:
```bash
# Install Supabase CLI
npm install -g supabase

# Initialize migrations
supabase init

# Create a new migration
supabase migration new create_posts_table
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Add your environment variables in Vercel's dashboard
4. Deploy!

### Environment Variables in Production

Make sure to add these environment variables in your deployment platform:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Troubleshooting

### Common Issues

**Supabase Connection Error**
- Verify your environment variables are correctly set
- Check that your Supabase project is active
- Ensure your API keys are copied correctly (no extra spaces)

**TypeScript Errors**
- Run `npm run type-check` to see detailed error messages
- Make sure all dependencies are installed
- Check that your `tsconfig.json` is properly configured

**Styling Issues**
- Ensure Tailwind CSS is properly imported in `globals.css`
- Check that your `tailwind.config.js` includes all necessary paths
- Verify that your components are using valid Tailwind classes

## What's Included

- ✅ Next.js with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS setup
- ✅ Supabase integration
- ✅ ESLint configuration
- ✅ Responsive design foundation
- ✅ Environment variable setup
- ✅ Basic error handling

## What's Not Included (But Easy to Add)

- Authentication (Supabase Auth is easy to implement)
- Testing framework (Jest, Cypress, etc.)
- Database ORM (Prisma, Drizzle, etc.)
- State management (Zustand, Redux, etc.)
- UI component library (shadcn/ui, Chakra UI, etc.)

### Development Guidelines

1. Follow the existing code style and TypeScript conventions
2. Use meaningful commit messages
3. Add tests for new features when applicable
4. Update documentation as needed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:

1. Check the [troubleshooting section](#troubleshooting) above
2. Search existing [GitHub issues](https://github.com/jr-nv/my-app/issues)
3. Create a new issue if your problem isn't already addressed

## Acknowledgments

- Built with [Next.js](https://nextjs.org/) - The React Framework for Production
- Database and auth powered by [Supabase](https://supabase.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Type safety with [TypeScript](https://www.typescriptlang.org/)

---

**Happy coding!** 🚀