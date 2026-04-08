import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const links = [
  { label: 'email', value: 'arpit.nigam@outlook.com', href: 'mailto:arpit.nigam@outlook.com' },
  { label: 'github', value: 'github.com/nigamarpit', href: 'https://github.com/nigamarpit' },
  { label: 'linkedin', value: 'linkedin.com/in/nigamarpit', href: 'https://www.linkedin.com/in/nigamarpit/' },
]

function Prompt({ cmd }: { cmd: string }) {
  return (
    <p>
      <span className="text-[#33ff33]">arpit@portfolio:~$</span>{' '}
      <span className="text-[#888]">{cmd}</span>
    </p>
  )
}

function ContactPage() {
  return (
    <div className="space-y-6">
      <div>
        <Prompt cmd="cat contact.txt" />
        <div className="mt-2 space-y-1">
          {links.map((l) => (
            <p key={l.label}>
              <span className="text-[#5fafff]">{l.label}</span>
              <span className="text-[#666]"> → </span>
              <a href={l.href} target={l.label !== 'email' ? '_blank' : undefined} rel="noopener noreferrer">
                {l.value}
              </a>
            </p>
          ))}
        </div>
      </div>

      <div>
        <Prompt cmd="cat status.txt" />
        <p className="mt-2">
          <span className="text-[#888]">location:</span>{' '}
          <span className="text-[#ccc]">United States</span>
        </p>
        <p>
          <span className="text-[#888]">status:</span>{' '}
          <span className="text-[#98c379]">open to opportunities</span>
        </p>
      </div>

      <p>
        <span className="text-[#33ff33]">arpit@portfolio:~$</span>{' '}
        <span className="cursor">█</span>
      </p>
    </div>
  )
}
