import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
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
        title: 'Portfolio',
      },
    ],
    links: [{ rel: 'stylesheet', href: globalsCss }],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <nav className="border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex gap-6">
            <Link
              to="/"
              className="hover:text-slate-900 transition-colors"
              activeProps={{ className: 'font-semibold text-slate-900' }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-slate-900 transition-colors"
              activeProps={{ className: 'font-semibold text-slate-900' }}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="hover:text-slate-900 transition-colors"
              activeProps={{ className: 'font-semibold text-slate-900' }}
            >
              Projects
            </Link>
          </div>
        </nav>
        {children}
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  )
}
