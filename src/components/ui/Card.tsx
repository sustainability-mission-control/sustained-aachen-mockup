import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: boolean
}

export default function Card({ children, className = '', padding = true }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-card border border-neutral-200 hover:shadow-card-hover transition-shadow duration-200 ${padding ? 'p-6' : ''} ${className}`}>
      {children}
    </div>
  )
}
