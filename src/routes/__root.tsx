import { useEffect } from 'react'
import { Outlet, createRootRoute, HeadContent, Scripts, Link, useRouterState } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import globalsCss from '~/styles/globals.css?url'

export const Route = createRootRoute({
  notFoundComponent: () => (
    <div>
      <p>
        <span className="text-[#33ff33]">arpit:~$</span>{' '}
        <span className="text-[#888]">cd ???</span>
      </p>
      <p className="mt-2 text-[#ff5f57]">bash: directory not found</p>
      <p className="mt-1 text-[#888]">
        Try <a href="/">cd ~</a> to go home.
      </p>
    </div>
  ),
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'arpit@portfolio: ~' },
      { name: 'description', content: 'Terminal-style portfolio of Arpit Nigam — Senior SDE at Amazon, building multi-agent AI systems.' },
      { property: 'og:title', content: 'arpit@portfolio: ~' },
      { property: 'og:description', content: 'Senior SDE at Amazon · Applied AI · Multi-Agent Systems · 12+ years of engineering. Type "help" to explore.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'arpit@portfolio: ~' },
      { name: 'twitter:description', content: 'A terminal-style portfolio. Type commands to explore.' },
      { name: 'theme-color', content: '#0d0d0d' },
    ],
    links: [
      { rel: 'stylesheet', href: globalsCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap' },
    ],
  }),
  component: RootComponent,
})

function AnimatedOutlet() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        const input = document.querySelector<HTMLInputElement>('input[aria-label="Terminal command input"]')
        input?.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const tabPath = (path: string) => {
    const active = pathname === path
    return active
      ? 'bg-[#0d0d0d] text-[#33ff33] px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs border-t-2 border-[#33ff33]'
      : 'bg-[#1a1a1a] text-[#666] px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs border-t-2 border-transparent hover:text-[#999]'
  }

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="scanlines flex items-start justify-center p-2 sm:p-8">
        <div className="terminal-glow w-full max-w-3xl rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 bg-[#2d2d2d] px-3 sm:px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="ml-2 flex-1 text-center text-[11px] sm:text-xs text-[#999]">
              arpit@portfolio: ~
            </span>
          </div>

          <div className="flex bg-[#1a1a1a] border-b border-[#333]">
            <Link to="/" className={tabPath('/')}>~/home</Link>
            <Link to="/about" className={tabPath('/about')}>~/about</Link>
            <Link to="/projects" className={tabPath('/projects')}>~/projects</Link>
            <Link to="/contact" className={tabPath('/contact')}>~/contact</Link>
          </div>

          <div className="bg-[#0d0d0d] p-3 sm:p-6 min-h-[70vh] text-xs sm:text-sm leading-relaxed overflow-x-hidden overflow-y-auto">
            <AnimatedOutlet />
          </div>

          <div className="flex items-center justify-between bg-[#2d2d2d] px-3 sm:px-4 py-1 text-[10px] text-[#666]">
            <span>bash — 80×24</span>
            <span className="hidden sm:inline">Ctrl+K focus · </span>
            <span>{pathname}</span>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
