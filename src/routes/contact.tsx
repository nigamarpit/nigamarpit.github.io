import { createFileRoute } from '@tanstack/react-router'
import { ContactForm } from '~/components/contact-form'
import { FadeIn } from '~/components/animations/fade-in'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <FadeIn>
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">Get in Touch</h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 mb-12">
          Have a question or want to work together? I'd love to hear from you.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8">
        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <a
                    href="mailto:arpit.nigam@outlook.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  >
                    arpit.nigam@outlook.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Bellevue, Washington, United States
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connect on Social</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/nigamarpit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/nigamarpit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Looking to collaborate?</strong> I'm particularly interested in GenAI
                  projects, distributed systems, and AWS technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
