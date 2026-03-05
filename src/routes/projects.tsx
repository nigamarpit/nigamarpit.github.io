import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { FadeIn } from '~/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '~/components/animations/stagger-container'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

const projects = [
  {
    title: 'Restaurant Genie',
    description: 'Voice Assistant for Finding Restaurants',
    details:
      'Voice-powered restaurant discovery system using natural language processing and speech recognition',
    tech: ['C', 'NLP', 'Voice Recognition'],
    stars: 1,
    forks: 2,
  },
  {
    title: 'Real-time Spatial System',
    description: 'National Park Animal Tracking',
    details:
      'Real-time tracking system for wildlife in 2D space using Oracle Spatial database and JFrame',
    tech: ['Oracle Spatial DB', 'Java', 'JFrame'],
    period: 'Oct 2015 - Dec 2015',
  },
  {
    title: 'NLP Solutions',
    description: 'Natural Language Processing Programs',
    details: 'Collection of programs for text processing, sentiment analysis, and language understanding',
    tech: ['Python', 'NLP', 'Text Processing'],
  },
  {
    title: 'Santander Customer Satisfaction',
    description: 'Machine Learning Solution',
    details: 'Kaggle competition solution for predicting customer satisfaction using ML algorithms',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
  },
  {
    title: 'ML Algorithms',
    description: 'Machine Learning Implementations',
    details: 'Common machine learning algorithms implemented from scratch',
    tech: ['MATLAB', 'Java', 'Algorithms'],
  },
  {
    title: 'Fingerprint Recognition System',
    description: 'Undergraduate Final Project',
    details: 'Biometric authentication system using fingerprint pattern matching and image processing',
    tech: ['MATLAB', 'Image Processing', 'Pattern Recognition'],
    stars: 5,
    forks: 2,
  },
  {
    title: 'Client-Server Architecture',
    description: 'Distributed Systems Project',
    details: 'Implementation of client-server communication patterns and distributed computing concepts',
    tech: ['Distributed Systems', 'Networking', 'Protocols'],
    period: 'Oct 2012 - Present',
  },
  {
    title: 'Project Euler Solutions',
    description: 'Mathematical Programming Challenges',
    details: 'Solutions to computational mathematics and algorithmic problems',
    tech: ['Jupyter Notebook', 'Python', 'Algorithms'],
  },
]

function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <FadeIn>
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-50">Projects</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            A collection of my work in ML, NLP, distributed systems, and more
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <StaggerItem key={project.title}>
            <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.details}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  {project.period && (
                    <p className="text-xs text-gray-500 dark:text-gray-500">{project.period}</p>
                  )}
                  {project.stars !== undefined && (
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      ⭐ {project.stars} stars · 🍴 {project.forks} forks
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.3}>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={() => window.open('https://github.com/nigamarpit?tab=repositories', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </FadeIn>
    </div>
  )
}
