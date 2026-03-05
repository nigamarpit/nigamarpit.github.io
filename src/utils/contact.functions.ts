import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100),
  message: z.string().min(20, 'Message must be at least 20 characters').max(1000),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const sendContactEmail = createServerFn({ method: 'POST' }).handler(
  async ({ data }: { data: ContactFormData }) => {
    try {
      const validated = contactSchema.parse(data)

      console.log('Contact form submission:', {
        name: validated.name,
        email: validated.email,
        subject: validated.subject,
        messageLength: validated.message.length,
      })

      return {
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(error.errors[0].message)
      }
      throw new Error('Failed to send message')
    }
  }
)
