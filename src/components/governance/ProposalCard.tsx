// src/components/governance/ProposalCard.tsx
import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Proposal } from '@/lib/data/governance';

// Helper function to format dates
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Helper function to get styles for different categories
function getCategoryStyles(category: string): string {
  switch (category) {
    case 'System Improvement':
      return 'bg-blue-100 text-blue-800';
    case 'Strategic':
      return 'bg-purple-100 text-purple-800';
    case 'Partnership':
      return 'bg-green-100 text-green-800';
    case 'Engagement':
      return 'bg-yellow-100 text-yellow-800';
    case 'Incentives':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-neutral-100 text-neutral-800';
  }
}

interface ProposalCardProps {
  proposal: Proposal;
  showVotingButtons?: boolean;
}

export default function ProposalCard({ proposal, showVotingButtons = true }: ProposalCardProps) {
  // Calculate approval percentage
  const totalVotes = proposal.votes.for + proposal.votes.against + proposal.votes.abstain;
  const approvalPercentage = totalVotes > 0 
    ? Math.round((proposal.votes.for / totalVotes) * 100) 
    : 0;
  
  return (
    <Card>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{proposal.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${getCategoryStyles(proposal.category)}`}>
          {proposal.category}
        </span>
      </div>
      
      <p className="text-neutral-700 mb-4">{proposal.description}</p>
      
      <div className="flex flex-wrap items-center text-sm text-neutral-500 mb-6">
        <span>Proposed by {proposal.creator}</span>
        <span className="mx-2">•</span>
        <span>Created on {formatDate(proposal.dateCreated)}</span>
        <span className="mx-2">•</span>
        {proposal.status === 'Active' ? (
          <span>Voting ends on {formatDate(proposal.votingEnds)}</span>
        ) : (
          <span className={`font-medium ${proposal.result === 'Approved' ? 'text-green-600' : 'text-red-600'}`}>
            {proposal.result}
          </span>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 p-3 rounded-lg text-center">
          <p className="text-green-800 font-semibold text-lg">{proposal.votes.for}</p>
          <p className="text-green-700 text-sm">For</p>
        </div>
        
        <div className="bg-red-50 p-3 rounded-lg text-center">
          <p className="text-red-800 font-semibold text-lg">{proposal.votes.against}</p>
          <p className="text-red-700 text-sm">Against</p>
        </div>
        
        <div className="bg-neutral-50 p-3 rounded-lg text-center">
          <p className="text-neutral-800 font-semibold text-lg">{proposal.votes.abstain}</p>
          <p className="text-neutral-700 text-sm">Abstain</p>
        </div>
      </div>
      
      {proposal.status === 'Active' && showVotingButtons ? (
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            Vote For
          </Button>
          
          <Button variant="outline" className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
            </svg>
            Vote Against
          </Button>
          
          <Button variant="outline" className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            Abstain
          </Button>
          
          <Button variant="text" className="ml-auto flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            Discuss
          </Button>
        </div>
      ) : proposal.status === 'Completed' && proposal.implementation ? (
        <div className="mt-4 pt-4 border-t border-neutral-200">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm font-medium text-neutral-700">Implementation Status:</span>
              <span className={`ml-2 text-sm px-2 py-1 rounded-full ${
                proposal.implementation === 'Completed' 
                  ? 'bg-green-100 text-green-800' 
                  : proposal.implementation === 'In Progress'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
              }`}>
                {proposal.implementation}
              </span>
            </div>
            
            <Button variant="text" className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              View Details
            </Button>
          </div>
        </div>
      ) : null}
      
      <div className="flex flex-wrap gap-2 mt-4">
        {proposal.tags.map(tag => (
          <span 
            key={tag} 
            className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}