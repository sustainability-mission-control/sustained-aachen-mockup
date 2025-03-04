// src/app/page.tsx (continued)
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import ProjectCard from '@/components/ui/ProjectCard'
import EventCard from '@/components/ui/EventCard'
import QuadraticFundingExplainer from '@/components/ui/QuadraticFundingExplainer'
import ImpactMetric from '@/components/ui/ImpactMetric'
import { projects } from '@/lib/data/projects'
import { events } from '@/lib/data/events'
import { communityImpacts } from '@/lib/data/impacts'
import { fundingRounds } from '@/lib/data/governance'

export default function Home() {
  // Get active funding round
  const activeFundingRound = fundingRounds.find(round => round.status === 'Active')
  
  // Get featured projects (first 3)
  const featuredProjects = projects.slice(0, 3)
  
  // Get upcoming events (first 3)
  const upcomingEvents = events
    .slice()
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .filter(event => new Date(event.date) >= new Date())
    .slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="primary" className="pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-neutral-800 leading-tight">
              Sustained Aachen: Amplifying Individual Actions for Collective Impact
            </h1>
            <p className="mb-8 text-lg text-neutral-700">
              A community-driven platform connecting sustainability initiatives, tracking impact, 
              and powering change through quadratic funding in Aachen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/projects" size="lg">
                Explore Projects
              </Button>
              <Button href="/marketplace" variant="outline" size="lg">
                Take Action
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Image 
                src="/images/placeholder-map.jpg" 
                alt="Aachen sustainability map" 
                width={600} 
                height={400}
                className="rounded-lg"
              />
              <div className="absolute top-10 left-10 bg-primary-500 text-white p-3 rounded-full shadow-lg">
                <span className="text-xl font-bold">{communityImpacts.totalParticipants}</span>
                <span className="text-sm block">Participants</span>
              </div>
              <div className="absolute bottom-20 right-20 bg-secondary-500 text-white p-3 rounded-full shadow-lg">
                <span className="text-xl font-bold">{communityImpacts.totalProjects}</span>
                <span className="text-sm block">Projects</span>
              </div>
              <div className="absolute top-32 right-32 bg-accent-500 text-white p-3 rounded-full shadow-lg">
                <span className="text-xl font-bold">{communityImpacts.co2Reduced}</span>
                <span className="text-sm block">Tons CO2</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Individual Impact Section */}
      <Section backgroundColor="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Actions Matter</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Every sustainable choice creates ripples of positive change. Track your impact, 
            earn rewards, and see how your individual actions contribute to Aachen's 
            sustainability goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ImpactMetric
            title="CO2 Reduced"
            value={communityImpacts.co2Reduced}
            unit="tons"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
              </svg>
            }
            change={12}
          />
          
          <ImpactMetric
            title="Waste Collected"
            value={communityImpacts.wasteCollected}
            unit="tons"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            }
            change={18}
          />
          
          <ImpactMetric
            title="Trees Planted"
            value={communityImpacts.treesPlanted}
            unit=""
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            }
            change={8}
          />
          
          <ImpactMetric
            title="Sustainable Meals"
            value={communityImpacts.sustainableMeals}
            unit=""
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            }
            change={25}
          />
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button href="/impact" variant="secondary">
            Explore Community Impact
          </Button>
        </div>
      </Section>

      {/* Community Impact Section */}
      <Section backgroundColor="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Community Impact Observatory</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Watch as individual actions aggregate into meaningful change across Aachen. 
              Our impact dashboard visualizes real-time sustainability metrics and progress 
              toward city-wide goals.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-neutral-700">
                  <strong>District-level comparisons</strong> to track neighborhood engagement
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-neutral-700">
                  <strong>SDG alignment tracking</strong> to measure progress toward global goals
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-neutral-700">
                  <strong>Temporal analysis</strong> showing growth and trend patterns
                </p>
              </li>
            </ul>
            <div className="mt-6">
              <Button href="/impact">
                View Impact Dashboard
              </Button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-neutral-100 rounded-lg flex items-center justify-center">
              <p className="text-neutral-500 text-center p-8">Interactive Impact Dashboard Preview</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-neutral-50 p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Top District</p>
                <p className="text-lg font-bold">{communityImpacts.districtParticipation[0].name}</p>
              </div>
              <div className="bg-neutral-50 p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Top SDG</p>
                <p className="text-lg font-bold">SDG {Object.entries(communityImpacts.sdgImpact).sort((a, b) => b[1] - a[1])[0][0]}</p>
              </div>
              <div className="bg-neutral-50 p-3 rounded-lg">
                <p className="text-sm text-neutral-500">Growth</p>
                <p className="text-lg font-bold text-green-600">+{Math.round((communityImpacts.monthlyGrowth[5].participants - communityImpacts.monthlyGrowth[4].participants) / communityImpacts.monthlyGrowth[4].participants * 100)}%</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quadratic Funding Section */}
      <Section backgroundColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <QuadraticFundingExplainer />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quadratic Funding</h2>
            <p className="text-lg text-neutral-700 mb-6">
              We use an innovative funding mechanism that amplifies the power of small contributions 
              and values the number of contributors over large donations. This gives the community 
              true democratic power over resource allocation.
            </p>
            
            {activeFundingRound && (
              <Card className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{activeFundingRound.title}</h3>
                <p className="text-neutral-700 mb-4">{activeFundingRound.description}</p>
                <div className="flex justify-between items-center text-sm text-neutral-500 mb-2">
                  <span>Matching Pool</span>
                  <span>Progress</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-bold">€{activeFundingRound.matchingPool.toLocaleString()}</span>
                  <span className="text-xl font-bold">{Math.round(activeFundingRound.totalRaised / (activeFundingRound.matchingPool / 100))}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2.5 mb-4">
                  <div 
                    className="bg-primary-500 h-2.5 rounded-full" 
                    style={{ width: `${Math.min(100, Math.round(activeFundingRound.totalRaised / (activeFundingRound.matchingPool / 100)))}%` }}
                  ></div>
                </div>
                <Button href="/projects" className="w-full">
                  Support Projects
                </Button>
              </Card>
            )}
            
            <div className="flex items-center space-x-2 text-neutral-700">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>
                Learn more about <Link href="/governance" className="text-primary-500 hover:underline">how funding decisions are made</Link>.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section backgroundColor="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Discover sustainability initiatives making a difference in Aachen.
            Support them through contributions, volunteering, or spreading the word.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
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
        
        <div className="mt-12 flex justify-center">
          <Button href="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
      </Section>

      {/* Governance & Participation Section */}
      <Section backgroundColor="light">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Community Governance</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Sustained Aachen is governed by its community. Decision-making power is distributed 
              among participants, ensuring that the platform evolves according to the needs and 
              values of the people it serves.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-neutral-700">
                  <strong>Transparent proposals</strong> that anyone can create or vote on
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-neutral-700">
                  <strong>Participatory decision-making</strong> on platform development and funding allocations
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-neutral-700">
                  <strong>Evolving system</strong> that adapts to community needs and feedback
                </p>
              </li>
            </ul>
            
            <Button href="/governance">
              Explore Governance
            </Button>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Active Proposals</h3>
              <div className="space-y-4">
                <div className="border-b border-neutral-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-medium">Add Biodiversity Impact Metrics</h4>
                    <span className="bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded-full">
                      System Improvement
                    </span>
                  </div>
                  <p className="text-neutral-700 text-sm mb-3">
                    Implement a new set of metrics to track biodiversity impacts of projects, including species preservation, habitat restoration, and green space creation.
                  </p>
                  <div className="flex items-center text-sm text-neutral-500">
                    <span className="text-green-600 font-medium">{145} for</span>
                    <span className="mx-2">•</span>
                    <span className="text-red-600 font-medium">{12} against</span>
                    <span className="mx-2">•</span>
                    <span>{8} abstain</span>
                    <span className="ml-auto">Ends: March 15, 2025</span>
                  </div>
                </div>
                
                <div className="border-b border-neutral-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-medium">Cross-Border Euregio Expansion</h4>
                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                      Strategic
                    </span>
                  </div>
                  <p className="text-neutral-700 text-sm mb-3">
                    Expand platform functionality to include projects from Maastricht (NL) and Liège (BE) to create a cross-border sustainability ecosystem within the Euregio Meuse-Rhine.
                  </p>
                  <div className="flex items-center text-sm text-neutral-500">
                    <span className="text-green-600 font-medium">{187} for</span>
                    <span className="mx-2">•</span>
                    <span className="text-red-600 font-medium">{45} against</span>
                    <span className="mx-2">•</span>
                    <span>{23} abstain</span>
                    <span className="ml-auto">Ends: March 15, 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <span className="text-sm text-neutral-500">3 active proposals</span>
                <Link href="/governance" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                  View all proposals →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Upcoming Events Section */}
      <Section backgroundColor="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Upcoming Events</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Join workshops, meetups, and activities organized by sustainability initiatives in Aachen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map(event => (
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
        
        <div className="mt-12 flex justify-center">
          <Button href="/events" variant="secondary">
            View All Events
          </Button>
        </div>
      </Section>

      {/* Call to Action */}
      <Section backgroundColor="secondary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join the Movement</h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Ready to make a difference? Join Sustained Aachen and help create a more sustainable future for our city.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/projects" size="lg" variant="primary" className="bg-white text-secondary-600 hover:bg-neutral-100">
              Support Projects
            </Button>
            <Button href="/marketplace" size="lg" variant="outline" className="border-white text-white hover:bg-secondary-600">
              Take Action
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}