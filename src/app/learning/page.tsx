// src/app/learning/page.tsx
'use client'

import { useState } from 'react'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ResourceCard from '@/components/learning/ResourceCard'
import { learningResources } from '@/lib/data/learning'
import { personalImpacts } from '@/lib/data/impacts'

export default function LearningPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  const [selectedTopic, setSelectedTopic] = useState<string>('all')
  
  // Get all unique topics from resources
  const topics = [...new Set(learningResources.flatMap(resource => resource.topics))].sort()
  
  // Filter resources based on selected category, level, and topic
  const filteredResources = learningResources.filter(resource => {
    if (selectedCategory !== 'all' && resource.category !== selectedCategory) {
      return false
    }
    
    if (selectedLevel !== 'all' && resource.level !== selectedLevel) {
      return false
    }
    
    if (selectedTopic !== 'all' && !resource.topics.includes(selectedTopic)) {
      return false
    }
    
    return true
  })
  
  // Get popular resources (those with highest completions)
  const popularResources = [...learningResources]
    .sort((a, b) => b.completions - a.completions)
    .slice(0, 3)
  
  // Get recommended resources (those with highest ratings)
  const recommendedResources = [...learningResources]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
  
  return (
    <>
      <Section backgroundColor="primary" className="pt-16 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Hub</h1>
          <p className="text-lg text-neutral-700 mb-8">
            Explore educational resources to build your sustainability knowledge and skills.
            From beginner guides to advanced courses, find the content that matches your interests.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-primary-200 mb-8">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-primary-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Find Learning Resources</h2>
                <p className="text-neutral-600">Filter by category, level, or topic to find the perfect resources</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="category-filter" className="block text-sm font-medium text-neutral-700 mb-1">
                  Resource Type
                </label>
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Types</option>
                  <option value="Course">Courses</option>
                  <option value="Guide">Guides</option>
                  <option value="Toolkit">Toolkits</option>
                  <option value="Article">Articles</option>
                  <option value="Video">Videos</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="level-filter" className="block text-sm font-medium text-neutral-700 mb-1">
                  Difficulty Level
                </label>
                <select
                  id="level-filter"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="topic-filter" className="block text-sm font-medium text-neutral-700 mb-1">
                  Topic
                </label>
                <select
                  id="topic-filter"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Topics</option>
                  {topics.map(topic => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Learning Resources</h2>
          
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">No Resources Found</h3>
              <p className="text-neutral-600 mb-6">There are no resources matching your selected filters.</p>
              <Button onClick={() => {
                setSelectedCategory('all');
                setSelectedLevel('all');
                setSelectedTopic('all');
              }}>
                Reset Filters
              </Button>
            </Card>
          )}
        </div>
      </Section>
      
      {popularResources.length > 0 && (
        <Section backgroundColor="light">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Popular Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        </Section>
      )}
      
      <Section backgroundColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Learning Progress</h2>
            
            <Card>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Learning Stats</h3>
                  <p className="text-neutral-600">Track your educational journey</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-sm text-neutral-500">Completed</p>
                  <p className="text-xl font-bold">3</p>
                </div>
                
                <div>
                  <p className="text-sm text-neutral-500">In Progress</p>
                  <p className="text-xl font-bold">2</p>
                </div>
                
                <div>
                  <p className="text-sm text-neutral-500">Hours Spent</p>
                  <p className="text-xl font-bold">8.5</p>
                </div>
                
                <div>
                  <p className="text-sm text-neutral-500">Knowledge Points</p>
                  <p className="text-xl font-bold">350</p>
                </div>
              </div>
              
              <h4 className="font-semibold mb-3">Current Learning</h4>
              <div className="space-y-4 mb-6">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium">Sustainability Fundamentals</h5>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Beginner
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-neutral-600 mb-2">
                    <span>Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium">Measuring Your Carbon Footprint</h5>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                      Intermediate
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-neutral-600 mb-2">
                    <span>Progress</span>
                    <span>30%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button href="/dashboard/learning">
                  View Learning Dashboard
                </Button>
              </div>
            </Card>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Recommended For You</h2>
            
            <div className="space-y-4">
              {recommendedResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} compact />
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <div className="flex items-start">
                <div className="p-2 bg-primary-100 rounded-full mr-3">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800">Knowledge Badges</h4>
                  <p className="text-sm text-primary-700 mb-2">
                    Complete learning resources to earn badges and showcase your expertise.
                  </p>
                  <div className="flex space-x-2">
                    {personalImpacts.badges
                      .filter(badge => badge.id === 6)
                      .map(badge => (
                        <div 
                          key={badge.id} 
                          className={`p-2 rounded-lg text-center ${
                            badge.achieved 
                              ? 'bg-primary-100 border border-primary-200' 
                              : 'bg-neutral-100 border border-neutral-200 opacity-60'
                          }`}
                        >
                          <div className="text-2xl mb-1">{badge.icon}</div>
                          <p className="text-xs font-medium">{badge.name}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section backgroundColor="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Knowledge</h2>
          <p className="text-lg text-neutral-700 mb-8">
            Have expertise in sustainability? Create and share educational resources
            with the community to help others learn and grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Create Learning Resource
            </Button>
            <Button variant="outline" size="lg">
              Become a Mentor
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}