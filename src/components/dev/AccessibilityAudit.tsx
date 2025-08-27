'use client'

import { useEffect, useState } from 'react'

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info'
  element: string
  issue: string
  suggestion: string
}

export default function AccessibilityAudit() {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([])
  const [isAuditing, setIsAuditing] = useState(false)

  const runAccessibilityAudit = () => {
    setIsAuditing(true)
    const foundIssues: AccessibilityIssue[] = []

    // Check for images without alt text
    const images = document.querySelectorAll('img')
    images.forEach((img, index) => {
      if (!img.alt || img.alt.trim() === '') {
        foundIssues.push({
          type: 'error',
          element: `Image ${index + 1}`,
          issue: 'Missing alt text',
          suggestion: 'Add descriptive alt text for screen readers'
        })
      }
    })

    // Check for buttons without accessible names
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button, index) => {
      const hasText = button.textContent?.trim()
      const hasAriaLabel = button.getAttribute('aria-label')
      const hasAriaLabelledby = button.getAttribute('aria-labelledby')
      
      if (!hasText && !hasAriaLabel && !hasAriaLabelledby) {
        foundIssues.push({
          type: 'error',
          element: `Button ${index + 1}`,
          issue: 'No accessible name',
          suggestion: 'Add text content, aria-label, or aria-labelledby'
        })
      }
    })

    // Check for headings hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    let lastLevel = 0
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1))
      if (level > lastLevel + 1 && lastLevel > 0) {
        foundIssues.push({
          type: 'warning',
          element: `Heading ${index + 1} (${heading.tagName})`,
          issue: 'Heading hierarchy skipped',
          suggestion: 'Use consecutive heading levels (h1, h2, h3...)'
        })
      }
      lastLevel = level
    })

    // Check for links without accessible names
    const links = document.querySelectorAll('a')
    links.forEach((link, index) => {
      const hasText = link.textContent?.trim()
      const hasAriaLabel = link.getAttribute('aria-label')
      const hasTitle = link.getAttribute('title')
      
      if (!hasText && !hasAriaLabel && !hasTitle) {
        foundIssues.push({
          type: 'error',
          element: `Link ${index + 1}`,
          issue: 'No accessible name',
          suggestion: 'Add descriptive text or aria-label'
        })
      }
      
      if (hasText === 'click here' || hasText === 'read more' || hasText === 'learn more') {
        foundIssues.push({
          type: 'warning',
          element: `Link ${index + 1}`,
          issue: 'Non-descriptive link text',
          suggestion: 'Use more descriptive link text'
        })
      }
    })

    // Check for form inputs without labels
    const inputs = document.querySelectorAll('input, select, textarea')
    inputs.forEach((input, index) => {
      const hasLabel = document.querySelector(`label[for="${input.id}"]`)
      const hasAriaLabel = input.getAttribute('aria-label')
      const hasAriaLabelledby = input.getAttribute('aria-labelledby')
      
      if (!hasLabel && !hasAriaLabel && !hasAriaLabelledby) {
        foundIssues.push({
          type: 'error',
          element: `Form input ${index + 1}`,
          issue: 'No associated label',
          suggestion: 'Add a label element or aria-label'
        })
      }
    })

    // Check color contrast (simplified check)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, button')
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element)
      const color = style.color
      const backgroundColor = style.backgroundColor
      
      // Simple contrast check (this is simplified - real implementation would calculate actual contrast ratios)
      if (color === backgroundColor) {
        foundIssues.push({
          type: 'error',
          element: `Text element ${index + 1}`,
          issue: 'Text and background same color',
          suggestion: 'Ensure sufficient color contrast'
        })
      }
    })

    // Check for keyboard navigation
    const focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    if (focusableElements.length === 0) {
      foundIssues.push({
        type: 'warning',
        element: 'Page',
        issue: 'No focusable elements found',
        suggestion: 'Ensure interactive elements are keyboard accessible'
      })
    }

    setIssues(foundIssues)
    setIsAuditing(false)
  }

  useEffect(() => {
    // Run audit after page loads
    const timer = setTimeout(() => {
      runAccessibilityAudit()
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (process.env.NODE_ENV !== 'development') {
    return null // Only show in development
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] max-w-md">
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-semibold text-sm">Accessibility Audit</h3>
          <button
            onClick={runAccessibilityAudit}
            disabled={isAuditing}
            className="bg-violet-600 text-white px-2 py-1 rounded text-xs hover:bg-violet-700 disabled:opacity-50"
          >
            {isAuditing ? 'Auditing...' : 'Re-run'}
          </button>
        </div>
        
        {issues.length === 0 ? (
          <p className="text-green-400 text-sm">✅ No accessibility issues found!</p>
        ) : (
          <div className="max-h-64 overflow-y-auto">
            <p className="text-yellow-400 text-sm mb-2">
              Found {issues.length} issue{issues.length !== 1 ? 's' : ''}:
            </p>
            {issues.slice(0, 5).map((issue, index) => (
              <div key={index} className="mb-2 p-2 bg-gray-800 rounded text-xs">
                <div className={`font-semibold ${
                  issue.type === 'error' ? 'text-red-400' : 
                  issue.type === 'warning' ? 'text-yellow-400' : 'text-blue-400'
                }`}>
                  {issue.type.toUpperCase()}: {issue.element}
                </div>
                <div className="text-gray-300">{issue.issue}</div>
                <div className="text-gray-400 italic">{issue.suggestion}</div>
              </div>
            ))}
            {issues.length > 5 && (
              <p className="text-gray-400 text-xs">
                ... and {issues.length - 5} more issues
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}