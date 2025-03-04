// src/app/impact/page.tsx (continued)
import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import ImpactMetric from '@/components/ui/ImpactMetric'
import { communityImpacts } from '@/lib/data/impacts'

export const metadata: Metadata = {
  title: 'Community Impact - Sustained Aachen',
  description: 'Visualize the collective sustainability impact of the Aachen community',
}

export default function ImpactPage() {
  // Calculate the total actions
  const totalActions = communityImpacts.monthlyGrowth.reduce((sum, month) => sum + month.actions, 0)
  
  // Get top district
  const topDistrict = [...communityImpacts.districtParticipation].sort((a, b) => b.actions - a.actions)[0]
  
  // Get top SDG
  const topSdgEntry = Object.entries(communityImpacts.sdgImpact).sort((a, b) => b[1] - a[1])[0]
  const topSdg = {
    number: parseInt(topSdgEntry[0]),
    score: topSdgEntry[1]
  }
  
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
      <Section backgroundColor="primary" className="pt-16 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Impact Observatory</h1>
          <p className="text-lg text-neutral-700 mb-8">
            Visualize the collective impact of sustainability actions across Aachen.
            Watch how individual contributions add up to create meaningful change in our city.
          </p>
        </div>
      </Section>
      
      <Section backgroundColor="white">
        <h2 className="text-2xl font-bold mb-6">Impact Overview</h2>
        
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <ImpactMetric
            title="Bike Trips"
            value={communityImpacts.bikeTrips}
            unit=""
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            change={15}
          />
          
          <ImpactMetric
            title="Volunteers"
            value={communityImpacts.volunteersEngaged}
            unit=""
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
            change={32}
          />
          
          <ImpactMetric
            title="Total Participants"
            value={communityImpacts.totalParticipants}
            unit=""
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            change={16}
          />
          
          <ImpactMetric
            title="Total Actions"
            value={totalActions}
            unit=""
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            }
            change={23}
          />
        </div>
      </Section>
      
      <Section backgroundColor="light">
        <h2 className="text-2xl font-bold mb-6">Growth Over Time</h2>
        
        <Card>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Monthly Participation</h3>
            <div className="aspect-w-16 aspect-h-9 bg-neutral-100 rounded-lg flex items-center justify-center">
              <p className="text-neutral-500 text-center p-8">
                Interactive chart showing growth in participants and actions over time
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {communityImpacts.monthlyGrowth.map((month, index) => (
              <div key={index} className="bg-neutral-50 p-3 rounded-lg">
                <p className="text-sm font-medium">{month.month}</p>
                <p className="text-lg font-bold">{month.participants}</p>
                <div className="flex items-center text-xs text-neutral-500">
                  <span>{month.actions}</span>
                  <span className="ml-1">actions</span>
                </div>
                
                {index > 0 && (
                  <div className="mt-2 flex items-center text-xs">
                    <span 
                      className={`font-medium ${
                        month.participants > communityImpacts.monthlyGrowth[index - 1].participants
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {month.participants > communityImpacts.monthlyGrowth[index - 1].participants ? '+' : ''}
                      {Math.round((month.participants - communityImpacts.monthlyGrowth[index - 1].participants) / communityImpacts.monthlyGrowth[index - 1].participants * 100)}%
                    </span>
                    <span className="ml-1 text-neutral-500">from {communityImpacts.monthlyGrowth[index - 1].month}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </Section>
      
      <Section backgroundColor="white">
        <h2 className="text-2xl font-bold mb-6">District Participation</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold mb-4">Aachen District Map</h3>
            <div className="aspect-w-4 aspect-h-3 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
              <p className="text-neutral-500 text-center p-8">
                Interactive map of Aachen showing participation by district
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-primary-200 mr-1"></span>
                <span className="text-xs text-neutral-500">Low</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-primary-400 mr-1"></span>
                <span className="text-xs text-neutral-500">Medium</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-primary-600 mr-1"></span>
                <span className="text-xs text-neutral-500">High</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-primary-800 mr-1"></span>
                <span className="text-xs text-neutral-500">Very High</span>
              </div>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-xl font-semibold mb-4">District Comparison</h3>
            
            <div className="space-y-4">
              {communityImpacts.districtParticipation.map((district, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{district.name}</span>
                    <span className="text-sm text-neutral-500">
                      {district.participants} participants / {district.actions} actions
                    </span>
                  </div>
                  <div className="w-full flex h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary-500" 
                      style={{ width: `${Math.round(district.participants / topDistrict.participants * 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800">Most Active District</h4>
                  <p className="text-sm text-primary-700">
                    {topDistrict.name} is leading with {topDistrict.actions} sustainability actions
                    from {topDistrict.participants} active participants.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
      
      <Section backgroundColor="light">
        <h2 className="text-2xl font-bold mb-6">SDG Alignment</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <Card>
              <h3 className="text-xl font-semibold mb-4">Sustainable Development Goals Impact</h3>
              <div className="aspect-w-16 aspect-h-9 bg-neutral-100 rounded-lg flex items-center justify-center">
                <p className="text-neutral-500 text-center p-8">
                  Interactive chart showing SDG impact scores
                </p>
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <h3 className="text-xl font-semibold mb-4">Top SDG Contributions</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 rounded-md bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                      {topSdg.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">{sdgNames[topSdg.number]}</h4>
                      <div className="text-sm text-blue-700">
                        Impact Score: {topSdg.score}/10
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-blue-700">
                    This goal has the highest impact score in Aachen, 
                    showing strong community commitment to {sdgNames[topSdg.number].toLowerCase()}.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">SDG Impact Distribution</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {Object.entries(communityImpacts.sdgImpact)
                      .sort((a, b) => b[1] - a[1])
                      .slice(0, 8)
                      .map(([sdgNumber, score]) => (
                        <div key={sdgNumber} className="flex items-center">
                          <div className="h-8 w-8 rounded-md bg-neutral-100 text-neutral-700 flex items-center justify-center font-medium text-sm mr-2">
                            {sdgNumber}
                          </div>
                          <div className="text-sm">
                            <div className="font-medium truncate" style={{ maxWidth: '100px' }}>
                              {sdgNames[parseInt(sdgNumber)].split(' ')[0]}
                            </div>
                            <div className="text-neutral-500">{score}/10</div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
      
      <Section backgroundColor="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Make Your Impact</h2>
          <p className="text-lg text-neutral-700 mb-6">
            Every action counts! Join the community and start contributing to Aachen's sustainability goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/marketplace" 
              className="px-6 py-3 bg-primary-500 text-white font-medium rounded-lg shadow hover:bg-primary-600 transition-colors duration-200"
            >
              Take Action Now
            </a>
            <a 
              href="/dashboard" 
              className="px-6 py-3 border border-primary-500 text-primary-500 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-200"
            >
              View Personal Impact
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}