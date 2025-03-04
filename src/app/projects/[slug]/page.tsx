// src/app/projects/[slug]/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import EventCard from '@/components/ui/EventCard'
import { projects } from '@/lib/data/projects'
import { events } from '@/lib/data/events'
import ProjectCard from '@/components/ui/ProjectCard'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found - Sustained Aachen',
    }
  }
  
  return {
    title: `${project.title} - Sustained Aachen`,
    description: project.shortDescription,
  }
}

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug)
  
  if (!project) {
    notFound()
  }
  
  // Get project events
  const projectEvents = events.filter(event => event.projectId === project.id)
  
  // Format the date
  const createdDate = new Date(project.created)
  const formattedDate = createdDate.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  // SDG names mapping
  const sdgNames: {[key: number]: string} = {
    1: "No Poverty",
    2: "Zero Hunger",
    3: "Good Health and Well-being",
    4: "Quality Education",
    5: "Gender Equality",
    6: "Clean Water and Sanitation",
    7: "Affordable and Clean Energy",
    8: "Decent Work and Economic Growth",
    9: "Industry, Innovation and Infrastructure",
    10: "Reduced Inequality",
    11: "Sustainable Cities and Communities",
    12: "Responsible Consumption and Production",
    13: "Climate Action",
    14: "Life Below Water",
    15: "Life on Land",
    16: "Peace, Justice and Strong Institutions",
    17: "Partnerships for the Goals"
  }
  
  return (
    <>
      <Section backgroundColor="primary" className="pt-16 pb-12">
        <div className="flex items-center mb-8">
          <Link href="/projects" className="text-neutral-600 hover:text-primary-600 flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
        
        <div className="flex items-center mb-6">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mr-4" 
            style={{ backgroundColor: `${project.logoColor}15` }}
          >
            <span className="text-2xl font-bold" style={{ color: project.logoColor }}>{project.logo}</span>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            <p className="text-neutral-600">by {project.owner} • Project created on {formattedDate}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 rounded-full bg-white text-neutral-800 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </Section>
      
      <Section backgroundColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none mb-8">
              <p>{project.description}</p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Expected Outcomes</h2>
              <ul className="space-y-2">
                {project.expectedOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-neutral-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">SDG Alignment</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {project.sdgs.map(sdg => (
                  <div key={sdg} className="flex flex-col items-center">
                    <div className="w-16 h-16 relative mb-2">
                      <Image 
                        src={`/images/sdgs/sdg-${sdg}.png`}
                        alt={`SDG ${sdg} - ${sdgNames[sdg]}`}
                        width={64}
                        height={64}
                        className="rounded-md"
                      />
                    </div>
                    <p className="text-xs text-center text-neutral-700">{sdgNames[sdg]}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {projectEvents.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectEvents.map(event => (
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
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div>
            <Card className="mb-6">
              <h2 className="text-xl font-bold mb-4">Support This Project</h2>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-neutral-500">Contribution Amount</span>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-700">€</span>
                  <input
                    type="number"
                    defaultValue="25"
                    min="1"
                    className="block w-full pl-8 pr-12 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mt-4 mb-2">
                  <span className="text-sm text-neutral-500">Or select an amount:</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <button className="py-2 px-3 border border-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-50">€5</button>
                  <button className="py-2 px-3 border border-primary-500 bg-primary-50 rounded-md text-primary-700 font-medium">€25</button>
                  <button className="py-2 px-3 border border-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-50">€50</button>
                  <button className="py-2 px-3 border border-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-50">€100</button>
                </div>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary-800">Quadratic Funding Boost</h3>
                    <p className="text-sm text-primary-700">Your €25 will be matched with approximately €{Math.round((Math.sqrt(project.contributors + 1) * Math.sqrt(25)) ** 2 - ((project.contributors) * 25) / (project.contributors + 1))} from the matching pool!</p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full">
                Contribute €25
              </Button>
              
              <p className="text-xs text-neutral-500 mt-4 text-center">
                By contributing, you agree to the platform's terms and conditions.
              </p>
            </Card>
            
            <Card className="mb-6">
              <h2 className="text-xl font-bold mb-4">Project Stats</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-neutral-500">Raised so far</span>
                    <span className="text-sm font-medium">€{project.amountRaised.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-neutral-500">Contributors</span>
                    <span className="text-sm font-medium">{project.contributors}</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-neutral-500">Estimated Matching</span>
                    <span className="text-sm font-medium">€{project.matchingEstimate.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-accent-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card>
              <h2 className="text-xl font-bold mb-4">Other Ways to Help</h2>
              
              <div className="space-y-4">
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share Project
                </Button>
                
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Volunteer
                </Button>
                
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Contact Project
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>
      
      <Section backgroundColor="light">
        <h2 className="text-2xl font-bold mb-6">Similar Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(p => p.id !== project.id && p.tags.some(tag => project.tags.includes(tag)))
            .slice(0, 3)
            .map(project => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                slug={project.slug}
                logo={project.logo}
                logoColor={project.logoColor}
                shortDescription={project.shortDescription}
                owner={project.owner}
                amountRaised={project.amountRaised}
                contributors={project.contributors}
                tags={project.tags}
              />
            ))}
        </div>
      </Section>
    </>
  )
}