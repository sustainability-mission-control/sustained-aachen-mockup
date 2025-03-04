'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Card from './Card'

interface EventCardProps {
  id: number
  title: string
  date: string
  time: string
  location: string
  type: 'in-person' | 'virtual'
  project: string
  projectId: number
  attendees?: number
}

export default function EventCard({
  id,
  title,
  date,
  time,
  location,
  type,
  project,
  projectId,
  attendees
}: EventCardProps) {
  // Use state to store formatted date
  const [formattedDate, setFormattedDate] = useState('')
  
  // Format date on client side only
  useEffect(() => {
    const eventDate = new Date(date)
    setFormattedDate(eventDate.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }))
  }, [date])
  
  return (
    <Card className="flex flex-col h-full">
      <div className="mb-4">
        <span className={`text-xs px-2 py-1 rounded-full ${type === 'in-person' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
          {type === 'in-person' ? 'In Person' : 'Virtual'}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-neutral-600 mb-4">by {project}</p>
      
      <div className="flex items-center mb-2">
        <svg className="w-4 h-4 mr-2 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-sm text-neutral-700">{formattedDate || date}</span>
      </div>
      
      <div className="flex items-center mb-2">
        <svg className="w-4 h-4 mr-2 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-sm text-neutral-700">{time}</span>
      </div>
      
      <div className="flex items-center mb-4">
        <svg className="w-4 h-4 mr-2 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-sm text-neutral-700">{location}</span>
      </div>
      
      {attendees && (
        <div className="mb-4">
          <span className="text-sm text-neutral-600">{attendees} attendees</span>
        </div>
      )}
      
      <div className="mt-auto">
        <Link 
          href={`/events/${id}`}
          className="block w-full text-center py-2 bg-secondary-500 text-white rounded-md hover:bg-secondary-600 transition-colors duration-200"
        >
          Join Event
        </Link>
      </div>
    </Card>
  )
}