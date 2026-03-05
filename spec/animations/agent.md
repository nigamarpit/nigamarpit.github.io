# Animations

## Status
⬜ Planned

## Purpose
Add smooth, professional animations to enhance user experience without being distracting. Includes scroll animations, hover effects, and page transitions.

## Requirements

### Animation Types

1. **Scroll Animations**
   - Fade in elements as they enter viewport
   - Stagger animations for lists/grids
   - Parallax effects (subtle)

2. **Hover Effects**
   - Card lift on hover (shadow + transform)
   - Button scale/color transitions
   - Link underline animations

3. **Page Transitions**
   - Smooth fade between routes
   - Loading states

4. **Micro-interactions**
   - Button click feedback
   - Icon animations
   - Smooth scrolling

### Performance
- Use CSS transforms (GPU accelerated)
- Respect `prefers-reduced-motion`
- No layout shifts
- 60fps animations

## Implementation Plan

### Libraries to Add
```bash
npm install framer-motion
```

### Components to Create
1. **FadeIn** (`src/components/animations/fade-in.tsx`)
   - Wrapper for fade-in on scroll
   - Configurable delay and duration

2. **StaggerContainer** (`src/components/animations/stagger-container.tsx`)
   - Stagger children animations

### Files to Modify
1. **src/routes/index.tsx**
   - Wrap sections in FadeIn
   - Add stagger to project cards

2. **src/components/ui/card.tsx**
   - Add hover lift effect
   - Smooth transitions

3. **src/components/ui/button.tsx**
   - Add click scale effect
   - Smooth color transitions

4. **src/routes/__root.tsx**
   - Add page transition wrapper

## Animation Specifications

### Fade In
- Duration: 600ms
- Easing: ease-out
- Initial: opacity 0, translateY(20px)
- Final: opacity 1, translateY(0)

### Card Hover
- Duration: 200ms
- Transform: translateY(-4px)
- Shadow: increase from sm to lg

### Button Hover
- Duration: 150ms
- Scale: 1.02
- Brightness: 110%

## Acceptance Criteria
- [ ] Elements fade in smoothly on scroll
- [ ] Cards lift on hover
- [ ] Buttons have click feedback
- [ ] Page transitions are smooth
- [ ] Respects prefers-reduced-motion
- [ ] No performance issues (60fps)
- [ ] Animations feel professional, not gimmicky

## Dependencies
- framer-motion (animation library)

## Estimated Effort
Medium (4-6 hours)
