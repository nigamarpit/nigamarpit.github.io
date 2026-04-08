import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const experience = [
  { period: '2018 - present', role: 'Senior SDE', company: 'Amazon', note: 'Applied AI · Multi-Agent Systems' },
  { period: '2017 - 2018', role: 'System Engineer', company: 'Lucky Brand' },
  { period: '2016 - 2017', role: 'Full Stack Developer', company: 'USC' },
  { period: '2012 - 2015', role: 'Software Engineer', company: 'Sopra Steria', note: '⭐ STAR Award (2014)' },
]

const education = [
  { period: '2015 - 2017', degree: 'M.S. Computer Science', school: 'USC' },
  { period: '2008 - 2012', degree: 'B.Tech Computer Science', school: 'AKTU' },
]

function Prompt({ cmd }: { cmd: string }) {
  return (
    <p>
      <span className="text-[#33ff33]">arpit@portfolio:~$</span>{' '}
      <span className="text-[#888]">{cmd}</span>
    </p>
  )
}

function AboutPage() {
  return (
    <div className="space-y-6">
      <div>
        <Prompt cmd="cat about.md" />
        <p className="mt-2 text-[#ccc]">
          I love to extract fun out of everything and kind of
          workaholic. Currently building multi-agent AI systems
          at Amazon, with 12+ years shipping software at scale.
        </p>
      </div>

      <div>
        <Prompt cmd="cat experience.log" />
        <div className="mt-2 space-y-2">
          {experience.map((e) => (
            <div key={e.period} className="border-l-2 border-[#333] pl-3">
              <p>
                <span className="text-[#e5c07b]">{e.period}</span>
                <span className="text-[#666]"> · </span>
                <span className="text-[#ccc]">{e.role}</span>
                <span className="text-[#666]"> @ </span>
                <span className="text-[#5fafff]">{e.company}</span>
              </p>
              {e.note && (
                <p className="text-xs text-[#888]">{e.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <Prompt cmd="cat education.log" />
        <div className="mt-2 space-y-2">
          {education.map((e) => (
            <div key={e.period} className="border-l-2 border-[#333] pl-3">
              <p>
                <span className="text-[#e5c07b]">{e.period}</span>
                <span className="text-[#666]"> · </span>
                <span className="text-[#ccc]">{e.degree}</span>
                <span className="text-[#666]"> @ </span>
                <span className="text-[#5fafff]">{e.school}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <p>
        <span className="text-[#33ff33]">arpit@portfolio:~$</span>{' '}
        <span className="cursor">█</span>
      </p>
    </div>
  )
}
