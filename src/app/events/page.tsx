// src/app/events/page.tsx
'use client'

import { useState } from 'react'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import EventList from '@/components/events/EventList'
import { events } from '@/lib/data/events'
import { projects } from '@/lib/data/projects'

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'calendar'>('grid')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  
  // Get upcoming events (future dates)
  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  
  // Get past events
  const pastEvents = events
    .filter(event => new Date(event.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  // Filter events based on selected category and type
  const filteredUpcomingEvents = upcomingEvents.filter(event => {
    if (selectedCategory !== 'all' && event.projectId.toString() !== selectedCategory) {
      return false
    }
    
    if (selectedType !== 'all' && event.type !== selectedType) {
      return false
    }
    
    return true
  })
  
  // Get unique project IDs for filtering
  const projectOptions = projects.map(project => ({
    id: project.id.toString(),
    name: project.title
  }))
  
  return (
    <>
      <Section backgroundColor="primary" className="pt-16 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainability Events</h1>
          <p className="text-lg text-neutral-700 mb-8">
            Discover workshops, meetups, and activities organized by sustainability initiatives in Aachen.
            Join the community and learn how you can contribute to a more sustainable city.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-primary-200 mb-8">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-primary-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Find Events</h2>
                <p className="text-neutral-600">Filter events by project, type, or browse the calendar</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-auto flex-grow">
                <label htmlFor="category-filter" className="block text-sm font-medium text-neutral-700 mb-1">
                  Project
                </label>
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Projects</option>
                  {projectOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="w-full md:w-auto md:min-w-[200px]">
                <label htmlFor="type-filter" className="block text-sm font-medium text-neutral-700 mb-1">
                  Event Type
                </label>
                <select
                  id="type-filter"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Types</option>
                  <option value="in-person">In Person</option>
                  <option value="virtual">Virtual</option>
                </select>
              </div>
              
              <div className="w-full md:w-auto md:flex-grow-0 self-end">
                <Button variant="outline" className="w-full md:w-auto">
                  Search
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            
            <div className="flex border border-neutral-300 rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 flex items-center ${viewMode === 'grid' ? 'bg-primary-100 text-primary-700' : 'bg-white text-neutral-700'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 flex items-center ${viewMode === 'list' ? 'bg-primary-100 text-primary-700' : 'bg-white text-neutral-700'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('calendar')}
                className={`px-3 py-2 flex items-center ${viewMode === 'calendar' ? 'bg-primary-100 text-primary-700' : 'bg-white text-neutral-700'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Section>
      
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto">
          {filteredUpcomingEvents.length > 0 ? (
            <EventList 
              events={filteredUpcomingEvents} 
              view={viewMode} 
              showLoadMore
            />
          ) : (
            <Card className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">No Events Found</h3>
              <p className="text-neutral-600 mb-6">There are no upcoming events matching your criteria.</p>
              <div className="flex justify-center gap-4">
                <Button onClick={() => {
                  setSelectedCategory('all');
                  setSelectedType('all');
                }}>
                  Reset Filters
                </Button>
                <Button variant="outline">
                  Create Event
                </Button>
              </div>
            </Card>
          )}
        </div>
      </Section>
      
      {pastEvents.length > 0 && (
        <Section backgroundColor="light">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Past Events</h2>
            
            <EventList 
              events={pastEvents} 
              view="list" 
              limit={3}
              showLoadMore
            />
          </div>
        </Section>
      )}
      
      <Section backgroundColor="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Create Your Own Event</h2>
          <p className="text-lg text-neutral-700 mb-8">
            Have an idea for a sustainability workshop, meetup, or activity?
            Create an event and invite the community to participate.
          </p>
          <Button size="lg">
            Create Event
          </Button>
        </div>
      </Section>
    </>
  )
}