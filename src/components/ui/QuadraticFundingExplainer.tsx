'use client'

import { useState } from 'react'
import Card from './Card'

export default function QuadraticFundingExplainer() {
  const [contributionAmount, setContributionAmount] = useState(10)
  const [contributors, setContributors] = useState(20)
  
  // Calculate traditional matching (1:1)
  const traditionalMatching = contributionAmount
  
  // Calculate quadratic funding matching
  // Formula: (√Σci)² - Σci
  const totalContributions = contributionAmount * contributors
  const matchingAmount = Math.pow(Math.sqrt(contributors) * Math.sqrt(contributionAmount), 2) - totalContributions
  
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-4">How Quadratic Funding Works</h3>
      <p className="mb-6 text-neutral-700">
        Quadratic funding prioritizes the number of contributors over the size of contributions, 
        making small donations more powerful when many people participate.
      </p>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          Contribution Amount (€)
        </label>
        <input 
          type="range" 
          min="1" 
          max="100" 
          value={contributionAmount} 
          onChange={(e) => setContributionAmount(parseInt(e.target.value))}
          className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-1">
          <span className="text-xs text-neutral-500">€1</span>
          <span className="text-sm font-medium">€{contributionAmount}</span>
          <span className="text-xs text-neutral-500">€100</span>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          Number of Contributors
        </label>
        <input 
          type="range" 
          min="1" 
          max="100" 
          value={contributors} 
          onChange={(e) => setContributors(parseInt(e.target.value))}
          className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-1">
          <span className="text-xs text-neutral-500">1</span>
          <span className="text-sm font-medium">{contributors}</span>
          <span className="text-xs text-neutral-500">100</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-neutral-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-neutral-700 mb-2">Traditional 1:1 Matching</h4>
          <p className="text-2xl font-bold text-neutral-800">
            €{traditionalMatching.toFixed(2)}
          </p>
          <p className="text-xs text-neutral-500 mt-1">
            Matching equals your contribution
          </p>
        </div>
        
        <div className="bg-primary-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-primary-700 mb-2">Quadratic Funding Matching</h4>
          <p className="text-2xl font-bold text-primary-800">
            €{matchingAmount.toFixed(2)}
          </p>
          <p className="text-xs text-primary-600 mt-1">
            (√Σci)² - Σci = Matching Amount
          </p>
        </div>
      </div>
      
      <div className="bg-secondary-50 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-secondary-700 mb-2">Impact of your €{contributionAmount}</h4>
        <p className="text-2xl font-bold text-secondary-800">
          €{(contributionAmount + matchingAmount / contributors).toFixed(2)}
        </p>
        <p className="text-xs text-secondary-600 mt-1">
          Your contribution + share of matching
        </p>
      </div>
      
      <p className="mt-6 text-sm text-neutral-600">
        With quadratic funding, many small contributions can generate more matching funds than a few large ones.
        This democratizes funding by prioritizing community support over wealthy donors.
      </p>
    </Card>
  )
}
