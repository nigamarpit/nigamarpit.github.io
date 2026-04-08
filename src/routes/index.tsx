import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useRef, useEffect, useCallback } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const ASCII_ART = `
  __ _ _ __ _ __ (_) |_
 / _\` | '__| '_ \\| | __|
| (_| | |  | |_) | | |_
 \\__,_|_|  | .__/|_|\\__|
           |_|
`.trimStart()

const NEOFETCH = [
  { label: 'name', value: 'Arpit Nigam' },
  { label: 'role', value: 'Senior SDE @ Amazon' },
  { label: 'team', value: 'Applied AI (Multi-Agent Systems)' },
  { label: 'exp', value: '12+ years in software engineering' },
  { label: 'edu', value: 'M.S. CS (USC) · B.Tech CS (AKTU)' },
  { label: 'langs', value: 'Python · Java · TypeScript · C' },
  { label: 'cloud', value: 'AWS · Distributed Systems' },
  { label: 'ai', value: 'GenAI · Multi-Agent · NLP · ML' },
  { label: 'loc', value: 'United States' },
]

const BOOT_LINES = [
  { text: '[  OK  ] Starting portfolio.service...', delay: 0 },
  { text: '[  OK  ] Loading modules: react, tanstack, tailwind', delay: 200 },
  { text: '[  OK  ] Mounting filesystem at /home/arpit', delay: 400 },
  { text: '[  OK  ] Initializing neural networks...', delay: 600 },
  { text: '[  OK  ] Connecting to github.com/nigamarpit', delay: 900 },
  { text: '[  OK  ] System ready. Welcome, visitor.', delay: 1200 },
]

const ALL_COMMANDS = [
  'help', 'about', 'projects', 'contact', 'skills',
  'neofetch', 'clear', 'man arpit', 'sudo hire-me',
  'cd about', 'cd projects', 'whoami', 'history',
  'download resume',
]

const MAN_PAGE = `ARPIT(1)              Portfolio Manual              ARPIT(1)

NAME
    arpit - senior software development engineer

SYNOPSIS
    arpit [--hire] [--collaborate] [--connect]

DESCRIPTION
    Experienced engineer with 12+ years building
    software at scale. Currently at Amazon on the
    Applied AI team, designing multi-agent systems.

    Holds an M.S. in Computer Science (Data Science)
    from USC and a B.Tech from AKTU.

SKILLS
    Cloud & Infra    AWS, Distributed Systems
    AI & ML          GenAI, Multi-Agent, NLP
    Languages        Python, Java, TypeScript, C

OPTIONS
    --hire           Send an offer letter
    --collaborate    Start a conversation
    --connect        arpit.nigam@outlook.com

SEE ALSO
    github(1), linkedin(1), portfolio(1)

ARPIT(1)              April 2026              ARPIT(1)`

const COMMANDS: Record<string, string | null> = {
  help: `Available commands:

  about            Learn more about me
  projects         View my projects
  skills           Show skill tree
  contact          Get my contact info
  neofetch         System info
  man arpit        Read the manual
  history          Show command history
  download resume  Download my resume
  clear            Clear terminal
  whoami           Who am I?
  sudo hire-me     ???

  Tip: ↑↓ history · Tab autocomplete · Ctrl+L clear`,
  contact: `  email     → arpit.nigam@outlook.com
  github   → github.com/nigamarpit
  linkedin → linkedin.com/in/nigamarpit`,
  skills: `skills/
├── cloud/
│   ├── AWS
│   ├── Distributed Systems
│   └── Scalable Architecture
├── ai/
│   ├── GenAI
│   ├── Multi-Agent Systems
│   ├── NLP
│   └── Machine Learning
└── languages/
    ├── Python
    ├── Java
    ├── TypeScript
    ├── C
    └── MATLAB`,
  whoami: 'arpit — builder of things that scale',
  'man arpit': MAN_PAGE,
  neofetch: null,
  clear: null,
  about: null,
  projects: null,
  'cd about': null,
  'cd projects': null,
  'sudo hire-me': `[sudo] password for recruiter: ********
✓ Access granted.

🚀 HIRE ME — I'm ready for impact!

  12+ years building at scale
  Multi-agent AI systems @ Amazon
  M.S. from USC · AWS expert

  → arpit.nigam@outlook.com`,
}

function timestamp() {
  const now = new Date()
  const h = String(now.getHours()).padStart(2, '0')
  const m = String(now.getMinutes()).padStart(2, '0')
  const s = String(now.getSeconds()).padStart(2, '0')
  return `${h}:${m}:${s}`
}

function NeofetchBlock() {
  return (
    <div className="flex gap-4 sm:gap-6">
      <div className="hidden sm:block text-[#33ff33] text-[10px] leading-tight whitespace-pre">{`    .--.
   |o_o |
   |:_/ |
  //   \\ \\
 (|     | )
/'\\_   _/\`\\
\\___)=(___/`}</div>
      <div className="text-xs space-y-0.5">
        <p className="text-[#33ff33] font-bold">arpit@portfolio</p>
        <p className="text-[#333]">─────────────────────</p>
        {NEOFETCH.map((item) => (
          <p key={item.label}>
            <span className="text-[#33ff33]">{item.label}</span>
            <span className="text-[#666]"> ~ </span>
            <span className="text-[#ccc]">{item.value}</span>
          </p>
        ))}
        <div className="flex gap-1 pt-1">
          {['#ff5f57','#febc2e','#28c840','#33ff33','#5fafff','#c678dd','#56b6c2','#e0e0e0'].map((c) => (
            <span key={c} className="inline-block w-3 h-3" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>
    </div>
  )
}

type HistoryEntry = { cmd: string; output: string; time: string }

function HomePage() {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [booted, setBooted] = useState(false)
  const [bootLines, setBootLines] = useState<string[]>([])
  const [tabHint, setTabHint] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Boot sequence
  useEffect(() => {
    const hasBooted = sessionStorage.getItem('booted')
    if (hasBooted) {
      setBooted(true)
      return
    }
    BOOT_LINES.forEach(({ text, delay }) => {
      setTimeout(() => {
        setBootLines((prev) => [...prev, text])
      }, delay)
    })
    setTimeout(() => {
      setBooted(true)
      sessionStorage.setItem('booted', '1')
    }, 1800)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history, bootLines])

  const handleCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    if (!trimmed) return

    setCmdHistory((prev) => [...prev, trimmed])
    setHistoryIndex(-1)
    setTabHint('')

    if (trimmed === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    if (trimmed === 'about' || trimmed === 'cd about') {
      navigate({ to: '/about' })
      return
    }
    if (trimmed === 'projects' || trimmed === 'cd projects') {
      navigate({ to: '/projects' })
      return
    }
    if (trimmed === 'contact' || trimmed === 'cd contact') {
      navigate({ to: '/contact' })
      return
    }

    const time = timestamp()

    if (trimmed === 'neofetch') {
      setHistory((h) => [...h, { cmd, output: '__neofetch__', time }])
      setInput('')
      return
    }

    if (trimmed === 'history') {
      const histOutput = cmdHistory.length === 0
        ? '  (no commands yet)'
        : cmdHistory.map((c, i) => `  ${String(i + 1).padStart(4)}  ${c}`).join('\n')
      setHistory((h) => [...h, { cmd, output: histOutput, time }])
      setInput('')
      return
    }

    if (trimmed === 'download resume') {
      setHistory((h) => [...h, { cmd, output: 'Downloading resume.pdf...', time }])
      setInput('')
      // Trigger download
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'Arpit_Nigam_Resume.pdf'
      link.click()
      return
    }

    const output = COMMANDS[trimmed]
    if (output !== undefined) {
      setHistory((h) => [...h, { cmd, output: output || '', time }])
    } else {
      setHistory((h) => [...h, {
        cmd,
        output: `bash: ${trimmed}: command not found\nType 'help' for available commands.`,
        time,
      }])
    }
    setInput('')
  }, [navigate])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Ctrl+L — clear terminal
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
      e.preventDefault()
      setHistory([])
      return
    }

    if (e.key === 'Enter') {
      handleCommand(input)
      return
    }

    // Arrow up — previous command
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cmdHistory.length === 0) return
      const newIndex = historyIndex === -1
        ? cmdHistory.length - 1
        : Math.max(0, historyIndex - 1)
      setHistoryIndex(newIndex)
      setInput(cmdHistory[newIndex])
      return
    }

    // Arrow down — next command
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex === -1) return
      const newIndex = historyIndex + 1
      if (newIndex >= cmdHistory.length) {
        setHistoryIndex(-1)
        setInput('')
      } else {
        setHistoryIndex(newIndex)
        setInput(cmdHistory[newIndex])
      }
      return
    }

    // Tab autocomplete
    if (e.key === 'Tab') {
      e.preventDefault()
      const partial = input.trim().toLowerCase()
      if (!partial) return
      const matches = ALL_COMMANDS.filter((c) => c.startsWith(partial))
      if (matches.length === 1) {
        setInput(matches[0])
        setTabHint('')
      } else if (matches.length > 1) {
        setTabHint(matches.join('  '))
      }
      return
    }

    setTabHint('')
  }

  // Boot screen
  if (!booted) {
    return (
      <div className="space-y-1 text-xs">
        {bootLines.map((line, i) => (
          <p key={i}>
            <span className="text-[#98c379]">{line.slice(0, 8)}</span>
            <span className="text-[#ccc]">{line.slice(8)}</span>
          </p>
        ))}
        <p className="mt-2 text-[#33ff33] cursor">█</p>
      </div>
    )
  }

  return (
    <div onClick={() => inputRef.current?.focus()} className="min-h-0">
      {/* ASCII Art */}
      <pre className="text-[#33ff33] text-[10px] sm:text-xs leading-tight">{ASCII_ART}</pre>

      {/* Neofetch */}
      <div className="mt-4">
        <NeofetchBlock />
      </div>

      {/* Hint */}
      <p className="mt-6 text-[#666] text-xs">
        Type <span className="text-[#33ff33]">help</span> for commands
        <span className="text-[#444]"> · </span>
        <span className="text-[#444]">↑↓ history · Tab autocomplete · Ctrl+L clear</span>
      </p>

      {/* Mobile tap hint */}
      <p className="mt-1 text-[#444] text-xs sm:hidden">
        Tap anywhere to start typing
      </p>

      {/* Command history */}
      <div className="mt-4 space-y-3">
        {history.map((entry, i) => (
          <div key={i}>
            <p>
              <span className="text-[#444] text-[10px]">[{entry.time}] </span>
              <span className="text-[#33ff33]">arpit:~$</span>{' '}
              <span className="text-[#ccc]">{entry.cmd}</span>
            </p>
            {entry.output === '__neofetch__' ? (
              <div className="mt-1"><NeofetchBlock /></div>
            ) : (
              <pre className="text-[#ccc] whitespace-pre-wrap text-xs mt-1">{entry.output}</pre>
            )}
          </div>
        ))}
      </div>

      {/* Tab autocomplete hint */}
      {tabHint && (
        <p className="mt-2 text-[#666] text-xs">{tabHint}</p>
      )}

      {/* Interactive input */}
      <div className="mt-4 flex items-center">
        <span className="text-[#33ff33]">arpit:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="ml-2 flex-1 bg-transparent text-[#ccc] outline-none caret-[#33ff33] text-sm"
          autoFocus
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          aria-label="Terminal command input"
        />
      </div>
      <div ref={bottomRef} />
    </div>
  )
}
