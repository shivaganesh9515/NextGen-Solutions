'use client'
import { motion } from 'framer-motion'
import { memo, useState, useCallback } from 'react'

interface ExpandableListProps<T> {
  items: readonly T[]
  renderItem: (item: T, index: number) => React.ReactNode
  initialDisplayCount?: number
  showMoreText?: string
  showLessText?: string
  className?: string
  itemClassName?: string
  buttonClassName?: string
  animation?: {
    duration?: number
    stagger?: number
  }
  ariaLabel?: string
}

function ExpandableList<T>({
  items,
  renderItem,
  initialDisplayCount = 2,
  showMoreText = 'more',
  showLessText = 'Show less',
  className = '',
  itemClassName = '',
  buttonClassName = 'text-xs text-violet-400 font-medium hover:text-violet-300 transition-colors cursor-pointer bg-white/5 hover:bg-white/10 px-2 py-1 rounded-full',
  animation = { duration: 0.2, stagger: 0.05 },
  ariaLabel
}: ExpandableListProps<T>) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = useCallback(() => {
    setIsExpanded(prev => !prev)
  }, [])

  const displayedItems = isExpanded ? items : items.slice(0, initialDisplayCount)
  const remainingCount = items.length - initialDisplayCount

  if (items.length <= initialDisplayCount) {
    return (
      <div className={className} aria-label={ariaLabel}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={itemClassName}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: animation.duration, delay: index * (animation.stagger || 0) }}
          >
            {renderItem(item, index)}
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <div className={className} aria-label={ariaLabel}>
      {displayedItems.map((item, index) => (
        <motion.div
          key={index}
          className={itemClassName}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ 
            duration: animation.duration, 
            delay: index * (animation.stagger || 0)
          }}
        >
          {renderItem(item, index)}
        </motion.div>
      ))}
      
      {remainingCount > 0 && (
        <motion.button
          onClick={handleToggle}
          className={buttonClassName}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={
            isExpanded 
              ? `${showLessText}` 
              : `Show ${remainingCount} ${showMoreText}`
          }
          aria-expanded={isExpanded}
        >
          {isExpanded ? showLessText : `+${remainingCount} ${showMoreText}`}
        </motion.button>
      )}
    </div>
  )
}

const MemoizedExpandableList = memo(ExpandableList) as typeof ExpandableList

export default MemoizedExpandableList
export type { ExpandableListProps }