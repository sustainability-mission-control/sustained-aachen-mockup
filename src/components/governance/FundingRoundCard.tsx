// src/components/governance/FundingRoundCard.tsx
import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FundingRound } from '@/lib/data/governance';

// Helper function to format dates
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Helper function to get status-specific styles
function getStatusStyles(status: string): string {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800';
    case 'Upcoming':
      return 'bg-blue-100 text-blue-800';
    case 'Completed':
      return 'bg-neutral-100 text-neutral-800';
    default:
      return 'bg-neutral-100 text-neutral-800';
  }
}

interface FundingRoundCardProps {
  round: FundingRound;
  compact?: boolean;
}

export default function FundingRoundCard({ round, compact = false }: FundingRoundCardProps) {
  // Calculate progress percentage
  const progressPercentage = Math.min(100, Math.round(round.totalRaised / (round.matchingPool / 100)));
  
  // Calculate days remaining for active rounds
  const daysRemaining = round.status === 'Active' 
    ? Math.ceil((new Date(round.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : 0;
  
  if (compact) {
    return (
      <Card>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{round.title}</h3>
          <span className={`px-2 py-1 text-xs rounded-full ${getStatusStyles(round.status)}`}>
            {round.status}
          </span>
        </div>
        
        <p className="text-sm text-neutral-700 mb-3">
          {round.status === 'Active' 
            ? `${daysRemaining} days remaining` 
            : round.status === 'Upcoming' 
              ? `Starts on ${formatDate(round.startDate)}` 
              : `Ended on ${formatDate(round.endDate)}`}
        </p>
        
        {round.status !== 'Upcoming' && (
          <>
            <div className="w-full bg-neutral-200 rounded-full h-2 mb-1">
              <div 
                className="bg-primary-500 h-2 rounded-full" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-neutral-600 mb-4">
              <span>€{round.totalRaised.toLocaleString()}</span>
              <span>{progressPercentage}%</span>
            </div>
          </>
        )}
        
        <Link 
          href={`/governance/rounds/${round.id}`}
          className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center"
        >
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </Card>
    );
  }
  
  return (
    <Card>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{round.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${getStatusStyles(round.status)}`}>
          {round.status}
        </span>
      </div>
      
      <p className="text-neutral-700 mb-4">{round.description}</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-neutral-50 p-3 rounded-lg">
          <p className="text-sm text-neutral-500">Matching Pool</p>
          <p className="text-xl font-bold">€{round.matchingPool.toLocaleString()}</p>
        </div>
        
        <div className="bg-neutral-50 p-3 rounded-lg">
          <p className="text-sm text-neutral-500">Projects</p>
          <p className="text-xl font-bold">{round.projects}</p>
        </div>
        
        <div className="bg-neutral-50 p-3 rounded-lg">
          <p className="text-sm text-neutral-500">Contributors</p>
          <p className="text-xl font-bold">{round.contributors}</p>
        </div>
        
        <div className="bg-neutral-50 p-3 rounded-lg">
          <p className="text-sm text-neutral-500">
            {round.status === 'Active' 
              ? 'Days Remaining' 
              : round.status === 'Upcoming' 
                ? 'Starts In' 
                : 'Duration'}
          </p>
          <p className="text-xl font-bold">
            {round.status === 'Active'
              ? daysRemaining
              : round.status === 'Upcoming'
                ? Math.ceil((new Date(round.startDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
                : Math.ceil((new Date(round.endDate).getTime() - new Date(round.startDate).getTime()) / (1000 * 60 * 60 * 24))}
          </p>
        </div>
      </div>
      
      {round.status !== 'Upcoming' && (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
            <span className="text-sm font-medium text-neutral-700 mb-1 sm:mb-0">Funding Progress</span>
            <span className="text-sm text-neutral-500">
              €{round.totalRaised.toLocaleString()} of €{round.matchingPool.toLocaleString()} ({progressPercentage}%)
            </span>
          </div>
          
          <div className="w-full bg-neutral-200 rounded-full h-2.5 mb-6">
            <div 
              className="bg-primary-500 h-2.5 rounded-full" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </>
      )}
      
      <div className="flex flex-wrap items-center text-sm text-neutral-500 mb-6">
        <span>Start Date: {formatDate(round.startDate)}</span>
        <span className="mx-3">•</span>
        <span>End Date: {formatDate(round.endDate)}</span>
      </div>
      
      <div className="flex justify-between items-center">
        <Link 
          href={`/governance/rounds/${round.id}`}
          className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
        >
          View Details
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        
        {round.status === 'Active' && (
          <Button href="/projects">
            Support Projects
          </Button>
        )}
      </div>
    </Card>
  );
}