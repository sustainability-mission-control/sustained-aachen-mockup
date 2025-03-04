// src/app/governance/page.tsx
import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import ProposalCard from '@/components/governance/ProposalCard'
import FundingRoundCard from '@/components/governance/FundingRoundCard'
import { proposals, fundingRounds } from '@/lib/data/governance'

export const metadata: Metadata = {
  title: 'Community Governance - Sustained Aachen',
  description: 'Participate in the governance of the Sustained Aachen platform',
}

export default function GovernancePage() {
  // Get active and completed proposals
  const activeProposals = proposals.filter(proposal => proposal.status === 'Active')
  const completedProposals = proposals.filter(proposal => proposal.status === 'Completed')
  
  // Get active, upcoming, and completed funding rounds
  const activeFundingRound = fundingRounds.find(round => round.status === 'Active')
  const upcomingFundingRounds = fundingRounds.filter(round => round.status === 'Upcoming')
  const completedFundingRounds = fundingRounds.filter(round => round.status === 'Completed')
  
  return (
    <>
      <Section backgroundColor="primary" className="pt-16 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Governance</h1>
          <p className="text-lg text-neutral-700 mb-8">
            Sustained Aachen is governed by its community through transparent proposals and participatory decision-making. 
            Get involved in shaping the future of our platform.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Create Proposal
            </Button>
            <Button variant="outline" size="lg">
              View Your Voting Power
            </Button>
          </div>
        </div>
      </Section>
      
      <Section backgroundColor="white">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6">Active Proposals</h2>
            
            <div className="space-y-6">
              {activeProposals.map(proposal => (
                <ProposalCard key={proposal.id} proposal={proposal} />
              ))}
            </div>
            
            {activeProposals.length === 0 && (
              <Card className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">No Active Proposals</h3>
                <p className="text-neutral-600 mb-6">There are currently no active proposals to vote on.</p>
                <Button>Create a Proposal</Button>
              </Card>
            )}
            
            <h2 className="text-2xl font-bold mt-12 mb-6">Recently Completed Proposals</h2>
            
            <div className="space-y-6">
              {completedProposals.map(proposal => (
                <ProposalCard key={proposal.id} proposal={proposal} showVotingButtons={false} />
              ))}
            </div>
            
            {completedProposals.length > 0 && (
              <div className="mt-8 text-center">
                <Button variant="outline">
                  View All Proposals
                </Button>
              </div>
            )}
          </div>
          
          <div className="lg:w-1/3">
            <div className="sticky top-6">
              <h2 className="text-2xl font-bold mb-6">Funding Rounds</h2>
              
              {activeFundingRound && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Active Round</h3>
                  <FundingRoundCard round={activeFundingRound} />
                </div>
              )}
              
              {upcomingFundingRounds.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Upcoming Rounds</h3>
                  <div className="space-y-4">
                    {upcomingFundingRounds.map(round => (
                      <FundingRoundCard key={round.id} round={round} compact />
                    ))}
                  </div>
                </div>
              )}
              
              {completedFundingRounds.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Past Rounds</h3>
                  <div className="space-y-4">
                    {completedFundingRounds.map(round => (
                      <FundingRoundCard key={round.id} round={round} compact />
                    ))}
                  </div>
                  
                  {completedFundingRounds.length > 2 && (
                    <div className="mt-4 text-right">
                      <Button variant="text" className="text-sm">
                        View All Rounds
                      </Button>
                    </div>
                  )}
                </div>
              )}
              
              <Card className="mt-8 bg-neutral-50">
                <h3 className="text-lg font-semibold mb-3">How Governance Works</h3>
                <div className="space-y-4 text-neutral-700">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white mt-0.5">
                      <span className="text-sm font-medium">1</span>
                    </div>
                    <p className="ml-3 text-sm">
                      <strong>Propose:</strong> Any community member can create a proposal to improve the platform or allocate resources.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white mt-0.5">
                      <span className="text-sm font-medium">2</span>
                    </div>
                    <p className="ml-3 text-sm">
                      <strong>Discuss:</strong> Community members debate proposals, ask questions, and suggest improvements.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white mt-0.5">
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <p className="ml-3 text-sm">
                      <strong>Vote:</strong> All community members can vote on proposals, with voting power based on participation.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white mt-0.5">
                      <span className="text-sm font-medium">4</span>
                    </div>
                    <p className="ml-3 text-sm">
                      <strong>Implement:</strong> Approved proposals are implemented by the community and tracked for transparency.
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <Button variant="outline" className="w-full text-sm">
                    Learn More About Governance
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
      
      <Section backgroundColor="light">
        <h2 className="text-2xl font-bold mb-8 text-center">Governance Statistics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              {proposals.length}
            </div>
            <p className="text-neutral-700">Total Proposals</p>
          </Card>
          
          <Card className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              {proposals.filter(p => p.status === 'Active').length}
            </div>
            <p className="text-neutral-700">Active Proposals</p>
          </Card>
          
          <Card className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              {fundingRounds.length}
            </div>
            <p className="text-neutral-700">Funding Rounds</p>
          </Card>
          
          <Card className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              {proposals.filter(p => p.status === 'Completed' && p.result === 'Approved').length}
            </div>
            <p className="text-neutral-700">Implemented Proposals</p>
          </Card>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Get Involved in Governance</h3>
          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Every community member has a voice in the future of Sustained Aachen.
            Start participating today by creating or voting on proposals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Create Proposal
            </Button>
            <Button variant="outline" size="lg">
              Join Discussion Forum
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}