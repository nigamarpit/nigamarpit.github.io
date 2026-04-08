import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

const projects = [
  {
    name: 'restaurant-genie',
    desc: 'Voice-powered restaurant assistant using NLP',
    tech: ['C', 'NLP'],
    status: 'archived',
  },
  {
    name: 'spatial-system',
    desc: 'Geospatial animal tracking and analysis',
    tech: ['Oracle', 'Java'],
    status: 'archived',
  },
  {
    name: 'nlp-solutions',
    desc: 'Text processing and analysis toolkit',
    tech: ['Python', 'NLP'],
    status: 'archived',
  },
  {
    name: 'ml-algorithms',
    desc: 'ML algorithms implemented from scratch',
    tech: ['MATLAB', 'Python'],
    status: 'archived',
  },
  {
    name: 'fingerprint-system',
    desc: 'Biometric authentication system',
    tech: ['MATLAB'],
    stars: 5,
    status: 'archived',
  },
  {
    name: 'project-euler',
    desc: 'Mathematical challenge solutions',
    tech: ['Python'],
    status: 'active',
  },
]

function ProjectsPage() {
  return (
    <div>
      <p><span className="text-[#33ff33]">arpit@portfolio:~$</span> <span className="text-[#888]">ls -la projects/</span></p>
      <pre className="mt-2 text-xs">
<span className="text-[#666]">total {projects.length}</span>
{projects.map((p) => (
  <span key={p.name} className="block">
    <span className="text-[#666]">drwxr-xr-x </span>
    <span className="text-[#5fafff]">{p.name}</span>
    <span className={p.status === 'active' ? 'text-[#98c379]' : 'text-[#666]'}>
      {' '}[{p.status}]
    </span>
  </span>
))}
      </pre>

      <p className="mt-6"><span className="text-[#33ff33]">arpit@portfolio:~$</span> <span className="text-[#888]">cat projects/README.md</span></p>
      <div className="mt-2 space-y-4">
        {projects.map((p) => (
          <div key={p.name} className="border-l-2 border-[#333] pl-3">
            <p>
              <span className="text-[#c678dd]">## </span>
              <span className="text-[#e5c07b]">{p.name}</span>
              {'stars' in p && <span className="text-[#e5c07b] ml-2">{'⭐'.repeat(p.stars ?? 0)}</span>}
            </p>
            <p className="text-[#ccc] text-xs">{p.desc}</p>
            <p className="text-xs mt-0.5">
              {p.tech.map((t) => (
                <span key={t} className="text-[#56b6c2] mr-2">#{t.toLowerCase()}</span>
              ))}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6"><span className="text-[#33ff33]">arpit@portfolio:~$</span> <span className="text-[#888]">echo $GITHUB</span></p>
      <p className="mt-1">
        → <a href="https://github.com/nigamarpit?tab=repositories" target="_blank" rel="noopener noreferrer">
          github.com/nigamarpit
        </a>
      </p>

      <p className="mt-6"><span className="text-[#33ff33]">arpit@portfolio:~$</span> <span className="cursor">█</span></p>
    </div>
  )
}
