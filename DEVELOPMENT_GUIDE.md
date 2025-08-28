# 🚀 Development Guide - Fast & Error-Free Workflow

## 📋 Quick Reference Checklist

### ✅ Before Making Changes
- [ ] Check if dev server is running (`npm run dev`)
- [ ] Ensure no TypeScript/ESLint errors (`npm run build`)
- [ ] Backup current working state
- [ ] Identify all files that need modification

### ✅ During Development
- [ ] Make changes in small, testable chunks
- [ ] Use TypeScript for type safety
- [ ] Follow established patterns and conventions
- [ ] Test changes immediately in browser

### ✅ After Making Changes
- [ ] Run `npm run build` to check for errors
- [ ] Test functionality in development server
- [ ] Verify mobile responsiveness
- [ ] Check browser console for warnings

## 🎯 Key Development Patterns

### 1. **Component Structure**
```typescript
// Always use this pattern for new components
'use client'
import { memo, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const ComponentName = memo(() => {
  // Component logic here
  return (
    <motion.div>
      {/* Component content */}
    </motion.div>
  )
})

ComponentName.displayName = 'ComponentName'
export default ComponentName
```

### 2. **Constants Management**
- **Single Source**: All data in `src/lib/constants.ts`
- **No Duplicates**: Avoid duplicate arrays with similar names
- **TypeScript**: Use `as const` for immutable data
- **Import Correctly**: Always verify import names match exports

### 3. **Performance Optimizations**
- **Memoization**: Use `memo()` for components, `useCallback()` for functions
- **Lazy Loading**: Use `useIntersectionObserver` for scroll-triggered content
- **Image Optimization**: Always use `OptimizedImage` component
- **Animation**: Optimize with `framer-motion` and `transform` properties

## 🛠️ Common Editable Areas & Best Practices

### 📝 Team Member Information
**File**: `src/lib/constants.ts` → `TEAM_MEMBERS` array
**Pattern**:
```typescript
export const TEAM_MEMBERS = [
  {
    id: '1',
    name: 'Full Name',
    role: 'Job Title',
    expertise: ['Skill1', 'Skill2', 'Skill3'],
    experience: 'X+ years description',
    color: 'from-violet-600 to-purple-600',
    social: {
      linkedin: 'https://linkedin.com/in/username',
      twitter: 'https://twitter.com/username'
    }
  }
] as const
```
**Remember**: Update `roleColors` in `About.tsx` if adding new roles

### 🎨 Services Information
**File**: `src/lib/constants.ts` → `SERVICES` array
**Key Fields**: `id`, `title`, `description`, `features`, `price`
**Icons**: Must match lucide-react icon names in `Services.tsx`

### 💰 Pricing Plans
**File**: `src/lib/constants.ts` → `PRICING_PLANS` array
**Structure**: `id`, `name`, `price`, `period`, `features`, `popular`

### 📞 Contact Information
**File**: `src/lib/constants.ts` → `CONTACT_INFO` object
**Auto-updates**: Footer, Contact section, and social links

### 🎯 Navigation
**File**: `src/lib/constants.ts` → `NAVIGATION_ITEMS` array
**Pattern**: `{ name: 'Display Name', href: '#section-id' }`

## ⚡ Performance & Speed Optimizations

### 1. **Caching Strategy**
```bash
# Clear Next.js cache when changes don't appear
rm -rf .next
npm run dev
```

### 2. **Development Server Management**
```bash
# Stop all Node processes if server issues
taskkill /f /im node.exe
npm run dev
```

### 3. **Build Optimization**
```bash
# Always test production build
npm run build
npm run start
```

### 4. **TypeScript Performance**
- Use proper type imports: `import type { ComponentProps } from 'react'`
- Avoid `any` type - use proper type assertions
- Enable strict mode for better error catching

## 🐛 Common Issues & Quick Fixes

### Issue: Changes Not Appearing
**Solution**:
1. Check correct array/object is being imported
2. Clear browser cache (Ctrl+Shift+R)
3. Restart development server
4. Check for TypeScript errors

### Issue: TypeScript Errors
**Common Causes**:
- Missing role in `roleColors` object
- Incorrect type assertions
- Missing imports

**Quick Fix**:
```bash
npm run build
# Fix errors shown in output
```

### Issue: Performance Problems
**Solutions**:
- Add `memo()` to frequently re-rendering components
- Use `useCallback()` for event handlers
- Optimize images with `OptimizedImage` component
- Check console for performance warnings

### Issue: Mobile Responsiveness
**Check**:
- Tailwind responsive classes (`sm:`, `md:`, `lg:`)
- Touch target sizes (minimum 44px)
- Viewport meta tag
- Test on actual mobile devices

## 🔧 Development Commands

### Essential Commands
```bash
# Development
npm run dev              # Start development server
npm run build           # Production build + error check
npm run start           # Start production server
npm run lint            # Run ESLint

# Debugging
npm run build -- --debug    # Detailed build output
npm run dev -- --turbo     # Faster development mode
```

### Git Workflow
```bash
# Before making changes
git add .
git commit -m "Working state before changes"

# After successful changes
git add .
git commit -m "feat: descriptive commit message"
```

## 📱 Mobile-First Development

### Responsive Design Rules
1. **Mobile First**: Start with mobile styles, scale up
2. **Touch Targets**: Minimum 44px for clickable elements
3. **Performance**: Optimize for slower mobile networks
4. **Testing**: Test on real devices, not just browser dev tools

### Breakpoints
```css
/* Tailwind Breakpoints */
sm: 640px   /* Small tablet */
md: 768px   /* Tablet */
lg: 1024px  /* Small desktop */
xl: 1280px  /* Large desktop */
```

## 🎯 SEO & Accessibility

### SEO Checklist
- [ ] Unique page titles and meta descriptions
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Alt text for all images
- [ ] Internal linking structure
- [ ] Schema markup (structured data)

### Accessibility Checklist
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Color contrast ratios
- [ ] Focus indicators
- [ ] ARIA labels where needed

## 🚦 Error Prevention

### Pre-commit Checklist
- [ ] No console.log statements in production code
- [ ] All imports are used
- [ ] No TypeScript errors
- [ ] All constants are properly exported
- [ ] Mobile responsiveness tested
- [ ] Performance is acceptable

### Code Quality Rules
1. **Single Responsibility**: Each component does one thing well
2. **DRY Principle**: Don't repeat yourself - use constants/utilities
3. **Type Safety**: Always use TypeScript properly
4. **Performance**: Optimize for speed and user experience
5. **Accessibility**: Make it usable for everyone

---

## 🎉 Quick Win Optimizations

1. **Add `loading="lazy"` to images below the fold**
2. **Use `memo()` on expensive components**
3. **Implement proper error boundaries**
4. **Optimize fonts with `font-display: swap`**
5. **Use service worker for offline capabilities**

Remember: **Fast development = Consistent patterns + Good tooling + Error prevention**