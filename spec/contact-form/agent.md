# Contact Form

## Status
⬜ Planned

## Purpose
Implement a functional contact form with server-side email sending, validation, and user feedback. Allows visitors to reach out directly from the portfolio.

## Requirements

### Functionality

1. **Form Fields**
   - Name (required, 2-50 chars)
   - Email (required, valid email format)
   - Subject (required, 5-100 chars)
   - Message (required, 20-1000 chars)

2. **Validation**
   - Client-side validation (immediate feedback)
   - Server-side validation (security)
   - Clear error messages
   - Field-level validation on blur

3. **Submission**
   - Server function to send email
   - Loading state during submission
   - Success message with confirmation
   - Error handling with retry option

4. **User Experience**
   - Disable form during submission
   - Clear form on success
   - Preserve form data on error
   - Accessible error announcements

### Email Integration
- Use server function to send email
- Options: Resend, SendGrid, or AWS SES
- Email template with sender info
- Auto-reply to sender (optional)

## Implementation Plan

### Server Functions to Create

1. **sendContactEmail** (`src/utils/contact.functions.ts`)
   - Input validation with Zod
   - Email sending logic
   - Error handling
   - Rate limiting (prevent spam)

### Components to Create

1. **ContactForm** (`src/components/contact-form.tsx`)
   - Form with all fields
   - Validation logic
   - Submit handler
   - Loading/success/error states

2. **Input** (`src/components/ui/input.tsx`)
   - Styled input component
   - Error state styling
   - Label integration

3. **Textarea** (`src/components/ui/textarea.tsx`)
   - Styled textarea
   - Auto-resize option
   - Character count

4. **Label** (`src/components/ui/label.tsx`)
   - Form label component
   - Required indicator

### Routes to Create/Modify

1. **src/routes/contact.tsx**
   - New contact page
   - ContactForm component
   - Success/error messaging

2. **src/routes/__root.tsx**
   - Add Contact link to navigation

### Dependencies to Add
```bash
npm install zod react-hook-form @hookform/resolvers
npm install resend  # or sendgrid, or use AWS SES
```

## Validation Schema

```typescript
const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(20).max(1000),
})
```

## Email Service Options

1. **Resend** (Recommended)
   - Simple API
   - Free tier: 100 emails/day
   - Good deliverability

2. **SendGrid**
   - Free tier: 100 emails/day
   - More features

3. **AWS SES**
   - Pay as you go
   - Requires AWS setup

## Security Considerations

- Rate limiting (max 5 submissions per hour per IP)
- Input sanitization
- CAPTCHA (optional, for spam prevention)
- Email validation
- XSS prevention

## Acceptance Criteria
- [ ] Form validates all fields correctly
- [ ] Clear error messages for invalid input
- [ ] Email sends successfully
- [ ] User receives confirmation message
- [ ] Form clears after successful submission
- [ ] Loading state shows during submission
- [ ] Error handling with retry option
- [ ] Rate limiting prevents spam
- [ ] Accessible (keyboard navigation, screen readers)
- [ ] Mobile responsive

## Dependencies
- zod (validation)
- react-hook-form (form management)
- resend or sendgrid (email service)

## Estimated Effort
Medium (6-8 hours)

## Environment Variables Needed
```
RESEND_API_KEY=your_api_key
CONTACT_EMAIL=arpit.nigam@outlook.com
```
