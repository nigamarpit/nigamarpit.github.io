import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react'
import { FadeIn } from '~/components/animations/fade-in'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <FadeIn>
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 mb-12">
          I love to extract fun out of everything and kind of workaholic. I like myself loaded with work.
        </p>
      </FadeIn>

      <div className="space-y-8">
        <FadeIn delay={0.1}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <CardTitle>Professional Journey</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg dark:text-gray-100">Senior Software Development Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">Amazon · Full-time</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Apr 2018 - Present · 8 years</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">Bellevue, Washington, United States · On-site</p>
                <div className="mt-3 pl-4 border-l-2 border-blue-500 dark:border-blue-400">
                  <p className="font-medium text-sm mb-1 dark:text-gray-200">Applied AI Team | April 2025 - Present</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Spearheading development of cutting-edge multi-agent AI systems to revolutionize Knowledge Management
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                      Artificial Intelligence
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                      Multi-Agent Systems
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                      Software Development
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t dark:border-gray-800">
                <h3 className="font-semibold dark:text-gray-100">System Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">Lucky Brand</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Jul 2017 - Apr 2018 · 10 months</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Greater Los Angeles Area</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer on Integration and Omni-Channel team. Worked on building next-generation e-commerce platform.
                </p>
              </div>

              <div className="pt-4 border-t dark:border-gray-800">
                <h3 className="font-semibold dark:text-gray-100">Full Stack Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">University of Southern California</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Feb 2016 - May 2017 · 1 year 4 months</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Los Angeles</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Increased voter turnout by 46.2% by building Election Website for Undergraduate Student Governance</li>
                  <li>• Built Norman Topping Scholar Repository application for Topping Scholars exceptional funding</li>
                </ul>
              </div>

              <div className="pt-4 border-t dark:border-gray-800">
                <h3 className="font-semibold dark:text-gray-100">Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">Sopra Steria</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Jul 2012 - Jul 2015 · 3 years 1 month</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Noida, Uttar Pradesh, India</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Client: Walgreens Boots Alliance
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Developed BORIS Club-UnClub application for automating the process of clubbing
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">🏆 Received STAR Award (October 2014)</p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <CardTitle>Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg dark:text-gray-100">University of Southern California</h3>
                <p className="text-gray-600 dark:text-gray-400">Master of Science (M.S.), Computer Science (Data Science)</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">2015 - 2017</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Graduated from USC with M.S. in Computer Science (Data Science) in May 2017
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Activities: Dragon boat, ACM
                </p>
                <div className="mt-3">
                  <p className="font-medium text-sm mb-2 dark:text-gray-200">Graduate Coursework:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Machine Learning (CSCI 567)',
                      'Applied NLP (CSCI 544)',
                      'AI Foundations (CSCI 561)',
                      'Database Systems (CSCI 585)',
                      'Information Retrieval (CSCI 572)',
                      'Analysis of Algorithms (CSCI 570)',
                      'Information Integration (CSCI 548)',
                      'Engineering Communication (CSCI 598)',
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs dark:text-gray-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t dark:border-gray-800">
                <h3 className="font-semibold text-lg dark:text-gray-100">Dr. A.P.J. Abdul Kalam Technical University</h3>
                <p className="text-gray-600 dark:text-gray-400">Bachelor of Technology (B.Tech.), Computer Science and Engineering</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">2008 - 2012</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Grade: First Division with Honors
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Graduated with first division (honors) in Computer Science and Engineering from 
                  Hindustan Institute of Technology (now Sharda University)
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Activities: Natyakriti (Dramatic Club), Volleyball
                </p>
              </div>

              <div className="pt-4 border-t dark:border-gray-800">
                <h3 className="font-semibold dark:text-gray-100">HAL School, Lucknow</h3>
                <p className="text-gray-600 dark:text-gray-400">Intermediate, Science</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">2004 - 2008</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Science major</p>
              </div>

              <div className="pt-4 border-t dark:border-gray-800">
                <h3 className="font-semibold dark:text-gray-100">Certification</h3>
                <p className="text-gray-600 dark:text-gray-400">MITx 6.00.1x - Introduction to Computer Science</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">edX · Issued August 2016</p>
                <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">Credential ID: 931a77da588f4cf582f2cd5eae3f5183</p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <CardTitle>What I'm Up To</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-lg">🔭</span>
                  <span>Currently building bots and automation systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🌱</span>
                  <span>
                    Learning to build highly scalable distributed systems in cost-effective ways
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">👯</span>
                  <span>Looking to collaborate on the next big thing in GenAI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">💬</span>
                  <span>
                    Ask me about AWS technologies and building highly scalable distributed systems
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">⚡</span>
                  <span>Fun fact: I'm not very active on GitHub 😝</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  )
}