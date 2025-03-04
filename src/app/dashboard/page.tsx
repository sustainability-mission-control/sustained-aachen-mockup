// src/app/dashboard/page.tsx (continued)
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ImpactMetric from '@/components/ui/ImpactMetric'
import { personalImpacts } from '@/lib/data/impacts'
import { projects } from '@/lib/data/projects'

export const metadata: Metadata = {
  title: 'Personal Dashboard - Sustained Aachen',
  description: 'Track your sustainability actions and see your impact on Aachen',
}

export default function DashboardPage() {
  // Get user's supported projects
  const supportedProjects = projects.slice(0, personalImpacts.projectsSupported)
  
  return (
    <>
      <Section backgroundColor="primary" className="pt-16 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Your Impact Dashboard</h1>
              <p className="text-lg text-neutral-700">
                Track your sustainability journey and see how your actions contribute to a better Aachen.
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button href="/marketplace">Log New Action</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ImpactMetric
              title="Impact Points"
              value={personalImpacts.impactPoints}
              unit=""
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              change={12}
            />
            
            <ImpactMetric
              title="Actions Completed"
              value={personalImpacts.totalActions}
              unit=""
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              }
              change={8}
            />
            
            <ImpactMetric
              title="CO₂ Reduced"
              value={personalImpacts.carbonReduced}
              unit="kg"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                </svg>
              }
              change={14}
            />
            
            <ImpactMetric
              title="Badges Earned"
              value={personalImpacts.badges.filter(b => b.achieved).length}
              unit=""
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
              change={5}
            />
          </div>
        </div>
      </Section>
      
      <Section backgroundColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
                
                <div className="space-y-6">
                  {personalImpacts.actionHistory.map((action, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 w-12 text-center">
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-primary-600 font-bold">{action.points}</span>
                        </div>
                        {index < personalImpacts.actionHistory.length - 1 && (
                          <div className="w-px h-full bg-neutral-200 mx-auto my-2"></div>
                        )}
                      </div>
                      <div className="ml-4 flex-grow pb-6">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-neutral-900">{action.action}</h3>
                          <span className="text-sm text-neutral-500">
                            {new Date(action.date).toLocaleDateString('de-DE')}
                          </span>
                        </div>
                        <p className="text-neutral-700 mt-1">{action.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-neutral-200 text-center">
                  <Button href="/marketplace" variant="outline">
                    View All Actions
                  </Button>
                </div>
              </Card>
              
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Impact Breakdown</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <h3 className="text-lg font-semibold mb-4">Mobility</h3>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">🚲</span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{personalImpacts.bikeTrips}</p>
                        <p className="text-neutral-700">Sustainable trips</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-neutral-600">CO₂ saved from transportation</span>
                          <span className="text-sm font-medium">42 kg</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-neutral-600">Kilometers traveled sustainably</span>
                          <span className="text-sm font-medium">175 km</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card>
                    <h3 className="text-lg font-semibold mb-4">Food</h3>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">🥗</span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{personalImpacts.sustainableMeals}</p>
                        <p className="text-neutral-700">Sustainable meals</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-neutral-600">CO₂ saved from food choices</span>
                          <span className="text-sm font-medium">80.5 kg</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-neutral-600">Local food purchases</span>
                          <span className="text-sm font-medium">14</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card>
                    <h3 className="text-lg font-semibold mb-4">Waste</h3>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">♻️</span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{personalImpacts.wasteReducedKg} kg</p>
                        <p className="text-neutral-700">Waste reduced</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-neutral-600">Zero-waste shopping trips</span>
                          <span className="text-sm font-medium">8</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-neutral-600">Items repaired or upcycled</span>
                          <span className="text-sm font-medium">3</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card>
                    <h3 className="text-lg font-semibold mb-4">Community</h3>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">🤝</span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{personalImpacts.volunteerHours}</p>
                        <p className="text-neutral-700">Volunteer hours</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-neutral-600">Events attended</span>
                          <span className="text-sm font-medium">{personalImpacts.eventsAttended}</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-neutral-600">Projects supported</span>
                          <span className="text-sm font-medium">{personalImpacts.projectsSupported}</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="mb-6">
                <h2 className="text-xl font-bold mb-4">Achievement Badges</h2>
                
                <div className="grid grid-cols-2 gap-3">
                  {personalImpacts.badges.map(badge => (
                    <div 
                      key={badge.id} 
                      className={`p-3 rounded-lg text-center ${
                        badge.achieved 
                          ? 'bg-primary-50 border border-primary-200' 
                          : 'bg-neutral-50 border border-neutral-200 opacity-60'
                      }`}
                    >
                      <div className="text-3xl mb-2">{badge.icon}</div>
                      <h4 className="font-medium text-neutral-800 text-sm">{badge.name}</h4>
                      <p className="text-xs text-neutral-600 mt-1">{badge.description}</p>
                      {!badge.achieved && (
                        <span className="inline-block mt-2 text-xs bg-neutral-200 px-2 py-0.5 rounded-full">
                          Locked
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">
                      {personalImpacts.badges.filter(b => b.achieved).length} of {personalImpacts.badges.length} badges earned
                    </span>
                    <Link 
                      href="#" 
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      View all badges
                    </Link>
                  </div>
                </div>
              </Card>
              
              <Card>
                <h2 className="text-xl font-bold mb-4">Projects You Support</h2>
                
                <div className="space-y-4">
                  {supportedProjects.map(project => (
                    <div key={project.id} className="flex items-center">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center mr-3" 
                        style={{ backgroundColor: `${project.logoColor}15` }}
                      >
                        <span className="font-bold" style={{ color: project.logoColor }}>{project.logo}</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{project.title}</h3>
                        <div className="flex items-center text-sm text-neutral-500">
                          <span>€25 contributed</span>
                          <span className="mx-2">•</span>
                          <span>2 hours volunteered</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <Button href="/projects" variant="outline" className="w-full">
                    Discover More Projects
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
      
      <Section backgroundColor="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Your Impact Growth</h2>
          
          <Card>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Activity Trend</h3>
              <div className="aspect-w-16 aspect-h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
                <p className="text-neutral-500 text-center p-8">
                  Interactive chart showing your activity and impact over time
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-neutral-50 p-3 rounded-lg">
                <p className="text-sm text-neutral-500">This Week</p>
                <p className="text-xl font-bold">135</p>
                <p className="text-xs text-green-600">+15% from last week</p>
              </div>
              
              <div className="bg-neutral-50 p-3 rounded-lg">
                <p className="text-sm text-neutral-500">This Month</p>
                <p className="text-xl font-bold">520</p>
                <p className="text-xs text-green-600">+32% from last month</p>
              </div>
              
              <div className="bg-neutral-50 p-3 rounded-lg">
                <p className="text-sm text-neutral-500">CO₂ This Month</p>
                <p className="text-xl font-bold">45.2 kg</p>
                <p className="text-xs text-green-600">+18% from last month</p>
              </div>
              
              <div className="bg-neutral-50 p-3 rounded-lg">
                <p className="text-sm text-neutral-500">City Ranking</p>
                <p className="text-xl font-bold">#142</p>
                <p className="text-xs text-green-600">Up 24 places</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
      
      <Section backgroundColor="white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Take Your Next Step</h2>
          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Continue your sustainability journey by discovering new actions, supporting projects, or learning about sustainability topics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Take New Actions</h3>
                <p className="text-neutral-700 mb-4">
                  Find new sustainable actions to take in your daily life and earn impact points.
                </p>
                <Button href="/marketplace" className="w-full">
                  Explore Actions
                </Button>
              </div>
            </Card>
            
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Support Projects</h3>
                <p className="text-neutral-700 mb-4">
                  Contribute to local sustainability projects through quadratic funding.
                </p>
                <Button href="/projects" className="w-full">
                  Browse Projects
                </Button>
              </div>
            </Card>
            
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Learn & Grow</h3>
                <p className="text-neutral-700 mb-4">
                  Expand your knowledge with sustainability resources and courses.
                </p>
                <Button href="/learning" className="w-full">
                  Learning Hub
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}