🧠 AI Coding Assistant Workspace Rules
Next.js + TypeScript + Tailwind CSS + Supabase Project

🔄 Project Context & Awareness
Always Start Here
Read PROJECTDIARY.md first - This is the single source of truth for project status, recent changes, and current work
Reference README.md for setup instructions and tech stack overview
Understand the current state before making any suggestions or changes
Tech Stack Context
Next.js v15.3.5 with App Router (src/app/ directory)
TypeScript v5.8.3 - All code must be properly typed
Tailwind CSS v4.1.11 - Utility-first styling approach
Supabase v2.50.3 - Backend services and authentication

🏗️ Code Architecture & Structure
File Organization
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   └── ui/             # Base UI components
├── lib/                # Utility functions and configurations
│   └── supabase.ts     # Supabase client (DO NOT MODIFY)
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── utils/              # Helper functions

Code Modularity Rules
Keep components under 300 lines - Split into smaller, focused components if needed
Extract custom logic into hooks - Reusable stateful logic goes in src/hooks/
Use composition over inheritance - Prefer component composition patterns
Group related functionality - Organize by feature, not by file type

Import Organization
// 1. External libraries
import React from 'react'
import { NextPage } from 'next'

// 2. Internal modules (relative imports for now)
import { supabase } from '../lib/supabase'
import Button from '../components/ui/Button'

// 3. Type imports (separate section)
import type { User, Database } from '../types'


📝 TypeScript Standards
Type Safety Rules
No any types - Use proper typing or unknown with type guards
Define interfaces for props - Every component needs proper prop types
Use generic types for reusable components
Leverage TypeScript strict mode - All code must pass strict type checking
Type Organization
// Component prop types
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick: () => void
  children: React.ReactNode
}

// API response types
interface UserProfile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  created_at: string
}


🎨 Styling & UI Guidelines
Tailwind CSS Best Practices
Use utility classes consistently - No inline styles or custom CSS
Follow responsive design patterns - Mobile-first approach
Create reusable component variants - Use className props for flexibility
Maintain consistent spacing - Use Tailwind's spacing scale
Component Patterns
// Good: Flexible component with variant support
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Button = ({ variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) => {
  const baseClasses = 'font-medium rounded-md transition-colors'
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300'
  }
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
}

Accessibility Requirements
Use semantic HTML - <button>, <nav>, <main>, etc.
Include ARIA attributes - For complex interactions
Provide focus indicators - Visible focus states for keyboard navigation
Use proper color contrast - Meet WCAG AA standards

🔐 Supabase Integration Standards
Client Usage Rules
NEVER modify src/lib/supabase.ts - This is the single source of truth
Always import from the configured client - import { supabase } from '../lib/supabase'
Use TypeScript with Supabase - Leverage generated types when available
Authentication Patterns
// Good: Proper auth state management
const [user, setUser] = useState<User | null>(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
    setLoading(false)
  }
  
  getUser()
  
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (event, session) => {
      setUser(session?.user ?? null)
    }
  )
  
  return () => subscription.unsubscribe()
}, [])

Data Fetching Best Practices
Use Server Components when possible for better performance
Implement proper error handling - Always handle potential failures
Use loading states - Provide feedback during async operations
Cache when appropriate - Leverage Next.js caching strategies

🧪 Testing & Quality Assurance
Manual Testing Protocol
When making changes, always:
Test core functionality - Verify the main feature works
Test edge cases - Empty states, error conditions, boundary values
Test responsiveness - Check mobile, tablet, and desktop views
Test accessibility - Keyboard navigation and screen readers
Test authentication flows - Login, logout, protected routes
Code Quality Checks
Run npm run lint - Fix all linting errors before committing
Check TypeScript compilation - npm run build should pass
Review console errors - No errors or warnings in browser console
Verify environment variables - Ensure .env.local is properly configured

📚 Documentation & Maintenance
PROJECTDIARY.md Updates
Always log these changes:
## [Date] - [Brief Description]

### Changes Made
- New feature: [Description]
- Bug fix: [Description]
- Dependencies: [Added/Updated/Removed]

### Technical Details
- Modified files: [List key files]
- Database changes: [If applicable]
- Environment changes: [If applicable]

### Testing Notes
- [What was tested]
- [Any issues found]

Code Comments
Explain complex logic - Not what the code does, but why
Document API integrations - Especially Supabase queries
Note future improvements - Use // TODO: for planned enhancements
Explain unusual patterns - Use // Reason: for non-standard approaches

⚙️ Development Environment
Required Scripts
npm run dev - Local development server
npm run build - Production build (test before deployment)
npm run start - Production server
npm run lint - Code linting and formatting
Environment Management
.env.local - Never commit this file
Supabase credentials - Only in environment variables
Production vs Development - Use appropriate environment URLs

🤖 AI Assistant Behavior Rules
Context Awareness
Never assume missing information - Always ask for clarification
Validate all references - Don't invent APIs, libraries, or file paths
Consider the full tech stack - Solutions should work with Next.js 15.3.5 + TypeScript + Tailwind + Supabase
Code Generation Standards
Use modern React patterns - Hooks, functional components, proper TypeScript
Follow Next.js App Router conventions - Server/Client components, proper routing
Provide complete examples - Include imports, types, and error handling
Explain complex solutions - Don't just provide code, explain the approach
Change Management
Always update PROJECTDIARY.md - Document meaningful changes
Suggest testing steps - Provide manual testing guidelines for new features
Consider breaking changes - Warn about potential impacts on existing code
Maintain consistency - Follow established patterns in the codebase

🚀 Performance & Optimization
Next.js Best Practices
Use Server Components when no client-side interactivity is needed
Implement proper loading states - loading.tsx files for routes
Optimize images - Use Next.js Image component
Minimize client-side JavaScript - Only use 'use client' when necessary
Supabase Optimization
Use proper indexing - For database queries
Implement pagination - For large datasets
Use RLS (Row Level Security) - For data security
Cache frequent queries - When appropriate

🔄 Version Control & Deployment
Git Workflow
Commit frequently - Small, focused commits
Use descriptive messages - Clear commit descriptions
Update diary before committing - Document changes first
Test before pushing - Ensure builds pass
Deployment Checklist
[ ] All tests pass
[ ] Build completes without errors
[ ] Environment variables configured
[ ] Database migrations applied (if any)
[ ] PROJECTDIARY.md updated
[ ] README.md updated (if setup changed)


in future conversations about this project, you can simply say "Please follow our project memories" or "Remember our project rules" and I'll automatically apply these guidelines. The memories will only be retrieved when you're working within this specific project workspace.