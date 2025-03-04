'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EventCard from '@/components/ui/EventCard';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Event } from '@/lib/data/events';

interface EventListProps {
  events: Event[];
  view?: 'grid' | 'list' | 'calendar';
  limit?: number;
  showLoadMore?: boolean;
}

// Client-side date formatter
function useFormattedDate(dateString: string) {
  const [formatted, setFormatted] = useState(dateString);
  
  useEffect(() => {
    try {
      const date = new Date(dateString);
      setFormatted(date.toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    } catch (error) {
      // Fallback to original string if formatting fails
      console.error('Date formatting error:', error);
    }
  }, [dateString]);
  
  return formatted;
}

export default function EventList({ 
  events, 
  view = 'grid', 
  limit, 
  showLoadMore = false 
}: EventListProps) {
  // State to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Apply limit if specified
  const displayEvents = limit ? events.slice(0, limit) : events;
  
  // Only group events on client side
  const [eventsByDate, setEventsByDate] = useState<{[key: string]: Event[]}>({});
  
  useEffect(() => {
    if (!isMounted) return;
    
    // Group events by date for calendar view
    const grouped = displayEvents.reduce((groups: {[key: string]: Event[]}, event) => {
      const date = event.date;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(event);
      return groups;
    }, {});
    
    setEventsByDate(grouped);
  }, [displayEvents, isMounted]);
  
  if (view === 'grid') {
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayEvents.map(event => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              type={event.type}
              project={event.project}
              projectId={event.projectId}
              attendees={event.attendees}
            />
          ))}
        </div>
        
        {showLoadMore && events.length > displayEvents.length && (
          <div className="mt-8 text-center">
            <Button variant="outline">
              Load More Events
            </Button>
          </div>
        )}
      </div>
    );
  }
  
  if (view === 'list') {
    return (
      <div>
        <div className="space-y-4">
          {displayEvents.map(event => {
            const formattedDate = useFormattedDate(event.date);
            
            return (
              <Card key={event.id} className="flex flex-col md:flex-row">
                <div className="md:w-1/4 h-48 md:h-auto relative rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden">
                  <Image
                    src={event.image || '/images/event-placeholder.jpg'}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${event.type === 'in-person' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {event.type === 'in-person' ? 'In Person' : 'Virtual'}
                    </span>
                  </div>
                  
                  <p className="text-neutral-600 mb-4">{event.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-neutral-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-neutral-700">{formattedDate}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-neutral-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-neutral-700">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-neutral-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-neutral-700">{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-sm text-neutral-600">By {event.project}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm text-neutral-600">{event.attendees} attendees</span>
                    </div>
                    <Button href={`/events/${event.id}`}>
                      View Event
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {showLoadMore && events.length > displayEvents.length && (
          <div className="mt-8 text-center">
            <Button variant="outline">
              Load More Events
            </Button>
          </div>
        )}
      </div>
    );
  }
  
  if (view === 'calendar' && isMounted) {
    return (
      <div>
        <div className="space-y-8">
          {Object.keys(eventsByDate).sort().map(date => {
            const formattedDate = useFormattedDate(date);
            
            return (
              <div key={date}>
                <h3 className="text-xl font-semibold mb-4 bg-neutral-100 px-4 py-2 rounded-lg">
                  {formattedDate}
                </h3>
                
                <div className="space-y-3">
                  {eventsByDate[date].map(event => (
                    <Card key={event.id} className="flex items-center p-4">
                      <div className="w-20 text-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">{event.time}</span>
                      </div>
                      
                      <div className="ml-2 flex-grow">
                        <h4 className="font-semibold">{event.title}</h4>
                        <div className="flex flex-wrap items-center text-sm text-neutral-600">
                          <span>{event.project}</span>
                          <span className="mx-2">•</span>
                          <span>{event.location}</span>
                          <span className="mx-2">•</span>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${event.type === 'in-person' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                            {event.type === 'in-person' ? 'In Person' : 'Virtual'}
                          </span>
                        </div>
                      </div>
                      
                      <Button variant="outline" href={`/events/${event.id}`} className="ml-4">
                        View
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {showLoadMore && events.length > displayEvents.length && (
          <div className="mt-8 text-center">
            <Button variant="outline">
              Load More Events
            </Button>
          </div>
        )}
      </div>
    );
  }
  
  // Default empty view during server rendering for calendar
  if (view === 'calendar' && !isMounted) {
    return <div>Loading calendar view...</div>;
  }
  
  return null;
}