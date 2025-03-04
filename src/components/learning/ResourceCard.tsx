// src/components/learning/ResourceCard.tsx (continued)
import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { LearningResource } from '@/lib/data/learning';

interface ResourceCardProps {
  resource: LearningResource;
  compact?: boolean;
}

// Helper function to get category-specific styles
function getCategoryStyles(category: string): string {
  switch (category) {
    case 'Course':
      return 'bg-blue-100 text-blue-800';
    case 'Guide':
      return 'bg-green-100 text-green-800';
    case 'Toolkit':
      return 'bg-purple-100 text-purple-800';
    case 'Article':
      return 'bg-yellow-100 text-yellow-800';
    case 'Video':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-neutral-100 text-neutral-800';
  }
}

// Helper function to get level-specific styles
function getLevelStyles(level: string): string {
  switch (level) {
    case 'Beginner':
      return 'bg-green-100 text-green-800';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800';
    case 'Advanced':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-neutral-100 text-neutral-800';
  }
}

// Helper function to get icon for resource category
function getCategoryIcon(category: string): React.ReactNode {
  switch (category) {
    case 'Course':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'Guide':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case 'Toolkit':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      );
    case 'Article':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      );
    case 'Video':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      );
  }
}

export default function ResourceCard({ resource, compact = false }: ResourceCardProps) {
  if (compact) {
    return (
      <Card className="h-full flex flex-col">
        <div className="flex items-start mb-4">
          <div className={`p-2 rounded-lg mr-3 ${getCategoryStyles(resource.category).replace('text-', 'bg-opacity-20 text-')}`}>
            {getCategoryIcon(resource.category)}
          </div>
          <div>
            <h3 className="font-semibold">{resource.title}</h3>
            <p className="text-sm text-neutral-600">by {resource.creator}</p>
          </div>
        </div>
        
        <p className="text-sm text-neutral-700 mb-4 line-clamp-3">{resource.description}</p>
        
        <div className="mt-auto pt-4 border-t border-neutral-200 flex items-center justify-between">
          <div className="flex items-center">
            <span className={`text-xs px-2 py-1 rounded-full ${getLevelStyles(resource.level)}`}>
              {resource.level}
            </span>
            <span className="text-xs text-neutral-500 ml-2">{resource.duration}</span>
          </div>
          
          <Link 
            href={`/learning/${resource.id}`}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            View
          </Link>
        </div>
      </Card>
    )
  }
  
  return (
    <Card className="h-full flex flex-col">
      <div className="flex items-start mb-4">
        <div className={`p-3 rounded-lg mr-4 ${getCategoryStyles(resource.category).replace('text-', 'bg-opacity-20 text-')}`}>
          {getCategoryIcon(resource.category)}
        </div>
        <div>
          <div className="flex items-center">
            <h3 className="text-lg font-semibold">{resource.title}</h3>
            <span className={`ml-3 text-xs px-2 py-1 rounded-full ${getCategoryStyles(resource.category)}`}>
              {resource.category}
            </span>
          </div>
          <p className="text-sm text-neutral-600">by {resource.creator}</p>
        </div>
      </div>
      
      <p className="text-neutral-700 mb-6">{resource.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {resource.topics.map(topic => (
          <span 
            key={topic} 
            className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-600"
          >
            {topic}
          </span>
        ))}
      </div>
      
      <div className="mt-auto pt-4 border-t border-neutral-200">
        <div className="flex items-center justify-between">
          <div className="space-x-4">
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 text-neutral-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-neutral-700">{resource.duration}</span>
            </span>
            
            <span className={`inline-flex items-center text-xs px-2 py-1 rounded-full ${getLevelStyles(resource.level)}`}>
              {resource.level}
            </span>
            
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 text-neutral-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-sm text-neutral-700">{resource.completions}</span>
            </span>
            
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm text-neutral-700">{resource.rating.toFixed(1)}</span>
            </span>
          </div>
          
          <Button href={`/learning/${resource.id}`}>
            Start Learning
          </Button>
        </div>
      </div>
    </Card>
  )
}