import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from '~/components/theme-provider'
import { ThemeToggle } from '~/components/theme-toggle'
import globalsCss from '~/styles/globals.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Arpit Nigam - Portfolio',
      },
    ],
    links: [{ rel: 'stylesheet', href: globalsCss }],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ThemeProvider>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <nav className="border-b border-gray-200/50 dark:border-gray-800/50 glass sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex gap-8">
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
                activeProps={{ className: 'text-black dark:text-white font-semibold' }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
                activeProps={{ className: 'text-black dark:text-white font-semibold' }}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
                activeProps={{ className: 'text-black dark:text-white font-semibold' }}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
                activeProps={{ className: 'text-black dark:text-white font-semibold' }}
              >
                Contact
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </nav>
        {children}
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  )
}
