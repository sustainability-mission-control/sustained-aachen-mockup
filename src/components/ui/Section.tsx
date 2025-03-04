import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  backgroundColor?: 'white' | 'light' | 'primary' | 'secondary'
}

export default function Section({ 
  children, 
  className = '', 
  id, 
  backgroundColor = 'white' 
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-neutral-50',
    primary: 'bg-primary-50',
    secondary: 'bg-secondary-50',
  }
  
  return (
    <section 
      id={id} 
      className={`py-12 md:py-20 ${bgColors[backgroundColor]} ${className}`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
