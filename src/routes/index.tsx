import { createFileRoute } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <section className="text-center mb-20">
        <h1 className="text-6xl font-bold mb-4">Arpit Nigam</h1>
        <p className="text-2xl text-gray-600 mb-2">
          Senior Software Development Engineer at Amazon
        </p>
        <p className="text-lg text-gray-500 mb-8">
          Applied AI Team | Building multi-agent AI systems | AWS | Distributed Systems
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button onClick={() => window.open('https://github.com/nigamarpit', '_blank')}>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open('https://www.linkedin.com/in/nigamarpit/', '_blank')}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open('mailto:arpit.nigam@outlook.com')}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Restaurant Genie</CardTitle>
              <CardDescription>Voice Assistant for Finding Restaurants</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Voice-powered restaurant discovery system using natural language processing
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">C</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">NLP</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Real-time Spatial System</CardTitle>
              <CardDescription>National Park Animal Tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Real-time tracking system for wildlife in 2D space using Oracle Spatial DB
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                  Oracle Spatial
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                  Java
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>NLP Solutions</CardTitle>
              <CardDescription>Natural Language Processing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Collection of NLP programs and solutions for text processing
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                  Python
                </span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                  NLP
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>ML Algorithms</CardTitle>
              <CardDescription>Machine Learning Implementations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Common machine learning algorithms implemented in MATLAB and Python
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">
                  MATLAB
                </span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">
                  Python
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => window.open('https://github.com/nigamarpit?tab=repositories', '_blank')}
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8">Skills & Technologies</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Cloud & Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Distributed Systems', 'Scalable Architecture', 'Cloud Computing'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
            <div className="flex flex-wrap gap-2">
              {['GenAI', 'NLP', 'Machine Learning', 'AI Applications'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Programming</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Java', 'TypeScript', 'C', 'MATLAB'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-600 mb-6">
          Interested in collaborating on GenAI projects or discussing AWS and distributed systems?
        </p>
        <Button
          size="lg"
          onClick={() => window.open('mailto:arpit.nigam@outlook.com')}
        >
          <Mail className="mr-2 h-5 w-5" />
          Get in Touch
        </Button>
      </section>
    </div>
  )
}
