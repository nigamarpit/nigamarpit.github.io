# Dark Mode

## Status
⬜ Planned

## Purpose
Implement dark mode toggle allowing users to switch between light and dark themes with smooth transitions and persistent preference storage.

## Requirements

### Functionality
- Toggle button in navigation bar
- Smooth color transitions (200-300ms)
- Persist preference in localStorage
- Respect system preference on first visit
- Apply theme to all components

### Visual Design
- Dark background: `#0f172a` (slate-900)
- Dark card background: `#1e293b` (slate-800)
- Dark text: `#f1f5f9` (slate-100)
- Muted text dark: `#94a3b8` (slate-400)
- Border dark: `#334155` (slate-700)

## Implementation Plan

### Components to Create
1. **ThemeProvider** (`src/components/theme-provider.tsx`)
   - React Context for theme state
   - localStorage integration
   - System preference detection

2. **ThemeToggle** (`src/components/theme-toggle.tsx`)
   - Sun/Moon icon button
   - Smooth icon transition
   - Accessible label

### Files to Modify
1. **src/routes/__root.tsx**
   - Wrap app in ThemeProvider
   - Add `dark` class to `<html>` when dark mode active

2. **src/styles/globals.css**
   - Add dark mode color variables
   - Define dark: selectors for all components

3. **tailwind.config.ts**
   - Configure dark mode: 'class'

## Acceptance Criteria
- [ ] Toggle button visible in navigation
- [ ] Theme persists across page reloads
- [ ] All components support dark mode
- [ ] Smooth transitions between themes
- [ ] Respects system preference initially
- [ ] No flash of unstyled content

## Dependencies
- None (uses existing Tailwind and React)

## Estimated Effort
Small (2-3 hours)
