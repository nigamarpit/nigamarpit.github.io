import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block px-4 py-2 mb-6 rounded-full glass"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-sm font-medium">Available for opportunities</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
              Arpit Nigam
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-medium">
            Senior Software Development Engineer
          </p>

          <p className="text-base md:text-lg text-gray-500 dark:text-gray-500 mb-10 max-w-2xl mx-auto">
            Applied AI Team @ Amazon · Multi-Agent Systems · AWS
          </p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              size="lg"
              onClick={() => window.open('https://github.com/nigamarpit', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://www.linkedin.com/in/nigamarpit/', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('mailto:arpit.nigam@outlook.com')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
