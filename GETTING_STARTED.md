# Getting Started

## ✅ Your Portfolio is Ready!

The application is running at **http://localhost:3001**

## What's Included

### Pages
- **Home** (`/`) - Portfolio landing page with hero, projects, and skills
- **About** (`/about`) - About me section with background and tech stack
- **Demo** (`/demo`) - Server functions demonstration

### Components
- **Button** - Customizable button with variants (default, outline, ghost)
- **Card** - Card component for content sections
- **Navigation** - Responsive navigation bar

### Features
- ✅ Server-side rendering (SSR)
- ✅ File-based routing
- ✅ Type-safe server functions
- ✅ Tailwind CSS styling
- ✅ Hot module replacement
- ✅ Clean code architecture

## Customization

### Update Your Information

Edit `src/routes/index.tsx`:
```tsx
<h1 className="text-5xl font-bold mb-4">Hi, I'm Your Name</h1>
<p className="text-xl text-muted-foreground mb-8">
  Your tagline here
</p>
```

### Add Projects

In `src/routes/index.tsx`, update the projects grid:
```tsx
<Card>
  <CardHeader>
    <CardTitle>Your Project</CardTitle>
    <CardDescription>Project description</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-gray-600">
      Project details
    </p>
  </CardContent>
</Card>
```

### Update Skills

Modify the skills array in `src/routes/index.tsx`:
```tsx
{['Your', 'Skills', 'Here'].map((skill) => (
  <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full">
    {skill}
  </span>
))}
```

### Add Social Links

Update button hrefs in `src/routes/index.tsx`:
```tsx
<Button onClick={() => window.open('https://github.com/yourusername')}>
  <Github className="mr-2 h-4 w-4" />
  GitHub
</Button>
```

## Adding New Routes

Create a new file in `src/routes/`:

```tsx
// src/routes/projects.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return <div>Your projects page</div>
}
```

Then add it to navigation in `src/routes/__root.tsx`.

## Adding New Components

Create components in `src/components/ui/`:

```tsx
// src/components/ui/badge.tsx
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
      {children}
    </span>
  )
}
```

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Run production build
npm run start

# Lint code
npm run lint
```

## Clean Code Checklist

✅ Component names are clear (HomePage, Button, Card)
✅ Functions are small and focused
✅ No code duplication
✅ Type-safe throughout
✅ Consistent formatting
✅ Single responsibility per component

## Next Steps

1. Customize your personal information
2. Add your real projects
3. Update social media links
4. Add more pages (blog, contact, etc.)
5. Deploy to Vercel, Netlify, or your preferred host

## Resources

- [TanStack Start Docs](https://tanstack.com/start/latest)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

Enjoy building your portfolio! 🚀
