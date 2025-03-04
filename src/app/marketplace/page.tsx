// src/app/marketplace/page.tsx (continued)
import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { actions } from '@/lib/data/marketplace'
import { personalImpacts } from '@/lib/data/impacts'

// Helper function to get category-specific styles
function getCategoryStyles(category: string) {
  switch (category) {
    case 'Transportation':
      return 'bg-blue-100 text-blue-800';
    case 'Food':
      return 'bg-green-100 text-green-800';
    case 'Waste':
      return 'bg-yellow-100 text-yellow-800';
    case 'Energy':
      return 'bg-purple-100 text-purple-800';
    case 'Community':
      return 'bg-pink-100 text-pink-800';
    case 'Consumption':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-neutral-100 text-neutral-800';
  }
}

// Helper function to get difficulty-specific styles
function getDifficultyStyles(difficulty: string) {
  switch (difficulty) {
    case 'Easy':
      return 'text-green-600';
    case 'Medium':
      return 'text-yellow-600';
    case 'Challenging':
      return 'text-orange-600';
    default:
      return 'text-neutral-600';
  }
}

export const metadata: Metadata = {
  title: 'Action Marketplace - Sustained Aachen',
  description: 'Find and take sustainable actions to contribute to a better Aachen',
}

export default function MarketplacePage() {
  return (
    <>
      <Section backgroundColor="primary" className="pt-16 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Action Marketplace</h1>
          <p className="text-lg text-neutral-700 mb-8">
            Find sustainable actions you can take in your daily life. Each action earns impact points
            and contributes to Aachen's sustainability goals.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-primary-200 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-primary-600 text-2xl">🏆</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Your Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-neutral-500">Total Points</p>
                    <p className="text-xl font-bold">{personalImpacts.impactPoints}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Actions Taken</p>
                    <p className="text-xl font-bold">{personalImpacts.totalActions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">CO₂ Reduced</p>
                    <p className="text-xl font-bold">{personalImpacts.carbonReduced} kg</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Badges Earned</p>
                    <p className="text-xl font-bold">{personalImpacts.badges.filter(b => b.achieved).length}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link 
                    href="/dashboard" 
                    className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                  >
                    View Dashboard
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="relative">
              <select 
                className="appearance-none block w-full bg-white border border-neutral-300 hover:border-neutral-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:border-primary-500"
                defaultValue=""
              >
                <option value="" disabled>Filter by category</option>
                <option value="transportation">Transportation</option>
                <option value="food">Food</option>
                <option value="waste">Waste</option>
                <option value="energy">Energy</option>
                <option value="community">Community</option>
                <option value="consumption">Consumption</option>
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
                <option value="" disabled>Filter by difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="challenging">Challenging</option>
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
                placeholder="Search actions..."
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
        <h2 className="text-2xl font-bold mb-6">Popular Actions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions
            .sort((a, b) => b.popularityScore - a.popularityScore)
            .slice(0, 6)
            .map(action => (
              <Card key={action.id} className="flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold">{action.title}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${getCategoryStyles(action.category)}`}>
                      {action.category}
                    </span>
                  </div>
                  <p className="text-neutral-700 mb-4">{action.description}</p>
                  
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-neutral-700 text-sm">
                      <span className="font-medium">Impact:</span> {action.impact}
                    </p>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-neutral-700 text-sm">
                      <span className="font-medium">Duration:</span> {action.duration}
                    </p>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-neutral-700 text-sm">
                      <span className="font-medium">Verification:</span> {action.verificationMethod}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-neutral-200">
                  <div>
                    <span className="inline-flex items-center bg-primary-100 text-primary-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                      <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {action.points} points
                    </span>
                    <span className={`inline-flex items-center ml-2 text-sm ${getDifficultyStyles(action.difficulty)}`}>
                      {action.difficulty}
                    </span>
                  </div>
                  <Button>
                    Log Action
                  </Button>
                </div>
              </Card>
            ))}
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Browse All Actions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actions
              .slice(6)
              .map(action => (
                <Card key={action.id} className="flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold">{action.title}</h3>
                      <span className={`text-sm px-2 py-1 rounded-full ${getCategoryStyles(action.category)}`}>
                        {action.category}
                      </span>
                    </div>
                    <p className="text-neutral-700 mb-4">{action.description}</p>
                    
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <p className="text-neutral-700 text-sm">
                        <span className="font-medium">Impact:</span> {action.impact}
                      </p>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-neutral-700 text-sm">
                        <span className="font-medium">Duration:</span> {action.duration}
                      </p>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <p className="text-neutral-700 text-sm">
                        <span className="font-medium">Verification:</span> {action.verificationMethod}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-neutral-200">
                    <div>
                      <span className="inline-flex items-center bg-primary-100 text-primary-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                        <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {action.points} points
                      </span>
                      <span className={`inline-flex items-center ml-2 text-sm ${getDifficultyStyles(action.difficulty)}`}>
                        {action.difficulty}
                      </span>
                    </div>
                    <Button>
                      Log Action
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </Section>
      
      <Section backgroundColor="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Action Impact</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Every sustainable choice you make contributes to building a better Aachen.
              Track your actions, earn points, and see your impact grow over time.
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Recent Activity</h3>
              <div className="bg-white rounded-lg shadow-sm p-4 border border-neutral-200">
                <div className="space-y-4">
                  {personalImpacts.actionHistory.slice(0, 4).map((action, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                        <span className="text-primary-600 text-sm font-bold">{action.points}</span>
                      </div>
                      <div>
                        <p className="font-medium">{action.action}</p>
                        <div className="flex items-center text-sm text-neutral-500">
                          <span>{new Date(action.date).toLocaleDateString('de-DE')}</span>
                          <span className="mx-2">•</span>
                          <span>{action.impact}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Button href="/dashboard">
              View Your Dashboard
            </Button>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-neutral-200">
              <h3 className="text-xl font-semibold mb-4">Achievement Badges</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {personalImpacts.badges.map(badge => (
                  <div 
                    key={badge.id} 
                    className={`p-4 rounded-lg text-center ${
                      badge.achieved 
                        ? 'bg-primary-50 border border-primary-200' 
                        : 'bg-neutral-50 border border-neutral-200 opacity-60'
                    }`}
                  >
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <h4 className="font-medium text-neutral-800 mb-1">{badge.name}</h4>
                    <p className="text-xs text-neutral-600">{badge.description}</p>
                    {!badge.achieved && (
                      <span className="inline-block mt-2 text-xs bg-neutral-200 px-2 py-1 rounded-full">
                        Locked
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}