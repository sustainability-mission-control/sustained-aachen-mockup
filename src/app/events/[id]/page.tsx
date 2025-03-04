// src/app/events/[id]/page.tsx (continued)
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import EventList from '@/components/events/EventList'
import { events } from '@/lib/data/events'
import { projects } from '@/lib/data/projects'

interface EventPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const event = events.find(e => e.id.toString() === params.id)
  
  if (!event) {
    return {
      title: 'Event Not Found - Sustained Aachen',
    }
  }
  
  return {
    title: `${event.title} - Events - Sustained Aachen`,
    description: event.description,
  }
}

export async function generateStaticParams() {
  return events.map(event => ({
    id: event.id.toString(),
  }))
}

// Helper function to format dates
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function EventPage({ params }: EventPageProps) {
  const event = events.find(e => e.id.toString() === params.id)
  
  if (!event) {
    notFound()
  }
  
  // Get the project details
  const project = projects.find(p => p.id === event.projectId)
  
  // Get similar events (from same project or same category)
  const similarEvents = events
    .filter(e => e.id !== event.id && e.projectId === event.projectId)
    .slice(0, 3)
  
  // Check if the event date is in the past
  const isPastEvent = new Date(event.date) < new Date()
  
  return (
    <>
      <Section backgroundColor="primary" className="pt-16 pb-16">
        <div className="flex items-center mb-8">
          <Link href="/events" className="text-neutral-600 hover:text-primary-600 flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Events
          </Link>
        </div>
        
        <div className="max-w-4xl">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
              <p className="text-lg text-neutral-700">
                Hosted by{' '}
                <Link href={`/projects/${project?.slug || '#'}`} className="text-primary-600 hover:underline">
                  {event.project}
                </Link>
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${event.type === 'in-person' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
              {event.type === 'in-person' ? 'In Person' : 'Virtual'}
            </span>
          </div>
        </div>
      </Section>
      
      <Section backgroundColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
              <Image
                src={event.image || '/images/event-placeholder.jpg'}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h2>About This Event</h2>
              <p>{event.description}</p>
              
              {/* This would be expanded with more content in a real event */}
              <p>
                Join us for this exciting sustainability event where you'll learn practical skills, 
                connect with like-minded individuals, and discover ways to contribute to a more 
                sustainable Aachen. This event is organized as part of our ongoing effort to 
                build a stronger community around environmental initiatives.
              </p>
              
              <h2>What You'll Learn</h2>
              <ul>
                <li>Practical sustainability skills and techniques</li>
                <li>How to get involved with local initiatives</li>
                <li>Ways to reduce your environmental footprint</li>
                <li>Networking with sustainability advocates</li>
              </ul>
              
              <h2>Who Should Attend</h2>
              <p>
                This event is suitable for anyone interested in sustainability, from beginners 
                to experienced advocates. No prior knowledge is required, just a passion for 
                making a positive impact!
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              {event.type === 'in-person' ? (
                <div>
                  <p className="text-neutral-700 mb-4">{event.location}</p>
                  <div className="aspect-w-16 aspect-h-9 bg-neutral-200 rounded-lg">
                    {/* This would be a real map in production */}
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-neutral-500">Interactive Map</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-neutral-700 mb-4">
                    This is a virtual event. Details for joining the event will be shared with 
                    registered participants via email.
                  </p>
                </div>
              )}
            </div>
            
            {project && (
              <Card>
                <h2 className="text-xl font-semibold mb-4">About the Organizer</h2>
                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4" 
                    style={{ backgroundColor: `${project.logoColor}15` }}
                  >
                    <span className="text-xl font-bold" style={{ color: project.logoColor }}>{project.logo}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-neutral-700 mb-4">{project.shortDescription}</p>
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
            )}
          </div>
          
          <div>
            <Card className="mb-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm text-neutral-500">Date</p>
                    <p className="font-medium">{formatDate(event.date)}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-neutral-500">Time</p>
                    <p className="font-medium">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-neutral-500">Location</p>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-neutral-500">Attendees</p>
                    <p className="font-medium">{event.attendees} people are going</p>
                  </div>
                </div>
              </div>
              
              {isPastEvent ? (
                <div className="bg-neutral-100 p-4 rounded-lg mb-6">
                  <p className="text-neutral-700 font-medium">This event has already taken place.</p>
                </div>
              ) : (
                <Button className="w-full mb-4">
                  Register for Event
                </Button>
              )}
              
              <div className="flex justify-between">
                <Button variant="outline" className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </Button>
                <Button variant="outline" className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Add to Calendar
                </Button>
              </div>
            </Card>
            
            <Card>
              <h2 className="text-xl font-semibold mb-4">Event Impact</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Sustainability Categories</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Education</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Community</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Knowledge Sharing</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Impact Points</p>
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-primary-800">Earn by attending</p>
                      <span className="font-bold text-primary-700">30 points</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-neutral-500 mb-1">SDG Alignment</p>
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs z-30">4</div>
                    <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs z-20">11</div>
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xs z-10">12</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
      
      {similarEvents.length > 0 && (
        <Section backgroundColor="light">
          <h2 className="text-2xl font-bold mb-8">Similar Events</h2>
          <EventList events={similarEvents} view="grid" />
        </Section>
      )}
      
      <Section backgroundColor="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Organize Your Own Event</h2>
          <p className="text-lg text-neutral-700 mb-8">
            Have an idea for a sustainability event in Aachen?
            Create your own and invite the community to participate.
          </p>
          <Button size="lg">
            Create Event
          </Button>
        </div>
      </Section>
    </>
  )
}