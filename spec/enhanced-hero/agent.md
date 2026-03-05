# Enhanced Hero Section

## Status
⬜ Planned

## Purpose
Create an eye-catching, professional hero section that makes a strong first impression with animated elements, gradient background, and better visual hierarchy.

## Requirements

### Visual Elements

1. **Animated Gradient Background**
   - Subtle animated gradient (blue/purple/pink)
   - Smooth color transitions
   - Not distracting from content

2. **Profile Photo**
   - Circular avatar (150-200px)
   - Border with gradient
   - Hover effect (slight scale)

3. **Animated Tagline**
   - Typing effect or fade-in words
   - Multiple rotating taglines:
     - "Building multi-agent AI systems"
     - "AWS & Distributed Systems Expert"
     - "8+ years at Amazon"

4. **Scroll Indicator**
   - Animated down arrow
   - Bounce animation
   - Smooth scroll to next section

5. **Floating Elements**
   - Subtle floating tech icons
   - Parallax effect on scroll

### Layout
- Full viewport height
- Centered content
- Responsive (mobile-first)
- Clear visual hierarchy

## Implementation Plan

### Components to Create

1. **Hero** (`src/components/hero.tsx`)
   - Main hero container
   - Gradient background
   - Content layout

2. **AnimatedText** (`src/components/animated-text.tsx`)
   - Typing effect or word rotation
   - Configurable speed and delay

3. **ScrollIndicator** (`src/components/scroll-indicator.tsx`)
   - Animated arrow
   - Smooth scroll handler

4. **FloatingIcons** (`src/components/floating-icons.tsx`)
   - Tech stack icons
   - Subtle float animation

### Files to Modify

1. **src/routes/index.tsx**
   - Replace current hero with new Hero component
   - Add scroll indicator

2. **src/styles/globals.css**
   - Add gradient keyframes
   - Add float animations

### Assets Needed
- Profile photo (optional)
- Tech stack icons (can use Lucide or custom SVGs)

## Design Specifications

### Gradient
```css
background: linear-gradient(
  135deg,
  #667eea 0%,
  #764ba2 50%,
  #f093fb 100%
);
animation: gradient 15s ease infinite;
```

### Typography
- Name: 4xl-6xl font-bold
- Title: xl-2xl text-gray-600
- Tagline: lg-xl text-gray-500

### Spacing
- Vertical padding: 20vh-30vh
- Content max-width: 800px

## Acceptance Criteria
- [ ] Gradient background animates smoothly
- [ ] Profile photo displays with hover effect
- [ ] Tagline animates (typing or rotation)
- [ ] Scroll indicator bounces and scrolls smoothly
- [ ] Responsive on all screen sizes
- [ ] Loads quickly (no layout shift)
- [ ] Accessible (proper heading hierarchy)

## Dependencies
- framer-motion (for animations)
- Optional: react-type-animation (for typing effect)

## Estimated Effort
Medium (5-7 hours)
