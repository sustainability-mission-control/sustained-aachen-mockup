// src/app/projects/page.tsx (continued)
import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/data/projects'
import { fundingRounds } from '@/lib/data/governance'

export const metadata: Metadata = {
  title: 'Projects - Sustained Aachen',
  description: 'Support and explore sustainability projects in Aachen through our quadratic funding platform',
}

export default function ProjectsPage() {
  // Get active funding round
  const activeFundingRound = fundingRounds.find(round => round.status === 'Active')
  
  return (
    <>
      <Section backgroundColor="primary" className="pt-16 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainability Projects</h1>
          <p className="text-lg text-neutral-700 mb-8">
            Discover and support community-driven initiatives making Aachen more sustainable.
            Your contributions are matched through quadratic funding to maximize impact.
          </p>
          
          {activeFundingRound && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-primary-200 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{activeFundingRound.title}</h2>
                  <p className="text-neutral-700 mb-4">{activeFundingRound.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-neutral-500">Matching Pool</p>
                      <p className="text-xl font-bold">€{activeFundingRound.matchingPool.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Projects</p>
                      <p className="text-xl font-bold">{activeFundingRound.projects}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Contributors</p>
                      <p className="text-xl font-bold">{activeFundingRound.contributors}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">End Date</p>
                      <p className="text-xl font-bold">{new Date(activeFundingRound.endDate).toLocaleDateString('de-DE')}</p>
                    </div>
                  </div>
                  
                  <div className="w-full bg-neutral-200 rounded-full h-2.5 mb-2">
                    <div 
                      className="bg-primary-500 h-2.5 rounded-full" 
                      style={{ width: `${Math.min(100, Math.round(activeFundingRound.totalRaised / (activeFundingRound.matchingPool / 100)))}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-neutral-500 text-right">
                    €{activeFundingRound.totalRaised.toLocaleString()} raised ({Math.round(activeFundingRound.totalRaised / (activeFundingRound.matchingPool / 100))}%)
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="relative">
              <select 
                className="appearance-none block w-full bg-white border border-neutral-300 hover:border-neutral-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:border-primary-500"
                defaultValue=""
              >
                <option value="" disabled>Filter by category</option>
                <option value="food">Food Systems</option>
                <option value="education">Education</option>
                <option value="community">Community</option>
                <option value="waste">Waste</option>
                <option value="climate">Climate Action</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select 
                className="appearance-none block w-full bg-white border border-neutral-300 hover:border-neutral-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:border-primary-500"
                defaultValue=""
              >
                <option value="" disabled>Sort by</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="most-funded">Most Funded</option>
                <option value="most-contributors">Most Contributors</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search projects..."
                className="appearance-none block w-full bg-white border border-neutral-300 hover:border-neutral-500 px-4 py-2 rounded-lg leading-tight focus:outline-none focus:border-primary-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section backgroundColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
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