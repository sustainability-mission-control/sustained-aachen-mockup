
import React from 'react'

interface ImpactMetricProps {
  title: string
  value: number | string
  unit?: string
  icon?: React.ReactNode
  change?: number
  className?: string
}

export default function ImpactMetric({
  title,
  value,
  unit,
  icon,
  change,
  className = ''
}: ImpactMetricProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border border-neutral-200 ${className}`}>
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-neutral-500">{title}</h3>
        {icon && <div className="text-primary-500">{icon}</div>}
      </div>
      
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-neutral-900">
          {value}
          {unit && <span className="ml-1 text-sm text-neutral-500">{unit}</span>}
        </p>
      </div>
      
      {change !== undefined && (
        <div className="mt-2">
          <span className={`inline-flex items-center text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? (
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
            {Math.abs(change)}%
          </span>
          <span className="text-sm text-neutral-500 ml-1">from last month</span>
        </div>
      )}
    </div>
  )
}