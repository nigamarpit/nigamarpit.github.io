import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { Hero } from '~/components/hero'
import { FadeIn } from '~/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '~/components/animations/stagger-container'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />

      <FadeIn>
        <section className="container mx-auto px-4 py-20 max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-stone-900 dark:text-stone-50">
            Featured Projects
          </h2>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            <StaggerItem>
              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Restaurant Genie</CardTitle>
                  <CardDescription>Voice Assistant for Finding Restaurants</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                    Voice-powered restaurant discovery using NLP
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-800">
                      C
                    </span>
                    <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-800">
                      NLP
                    </span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Real-time Spatial System</CardTitle>
                  <CardDescription>National Park Animal Tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                    Real-time wildlife tracking using Oracle Spatial DB
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs font-medium">
                      Oracle
                    </span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs font-medium">
                      Java
                    </span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle>NLP Solutions</CardTitle>
                  <CardDescription>Natural Language Processing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                    Text processing and language understanding
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs font-medium">
                      Python
                    </span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs font-medium">
                      NLP
                    </span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle>ML Algorithms</CardTitle>
                  <CardDescription>Machine Learning Implementations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                    Common ML algorithms from scratch
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs font-medium">
                      MATLAB
                    </span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs font-medium">
                      Python
                    </span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://github.com/nigamarpit?tab=repositories', '_blank')}
            >
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className="container mx-auto px-4 py-20 max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-stone-900 dark:text-stone-50">
            Skills & Technologies
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Cloud & Infrastructure
              </h3>
              <div className="flex flex-wrap gap-3">
                {['AWS', 'Distributed Systems', 'Scalable Architecture', 'Cloud Computing'].map(
                  (skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-full text-sm font-medium cursor-default border border-gray-200 dark:border-gray-800 shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                AI & Machine Learning
              </h3>
              <div className="flex flex-wrap gap-3">
                {['GenAI', 'Multi-Agent Systems', 'NLP', 'Machine Learning'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-full text-sm font-medium cursor-default border border-gray-200 dark:border-gray-800 shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Programming</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'Java', 'TypeScript', 'C', 'MATLAB'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg text-sm font-medium cursor-default border border-gray-300 dark:border-gray-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.4}>
        <section className="bg-stone-100 dark:bg-stone-900 py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-stone-900 dark:text-stone-50">Let's Connect</h2>
            <p className="text-stone-700 dark:text-stone-300 mb-8 text-lg">
              Interested in collaborating on GenAI projects or discussing AWS and distributed
              systems?
            </p>
            <Button
              size="lg"
              onClick={() => window.open('mailto:arpit.nigam@outlook.com')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </div>
        </section>
      </FadeIn>
    </>
  )
}
