export interface Proposal {
  id: number;
  title: string;
  description: string;
  status: 'Active' | 'Completed';
  creator: string;
  dateCreated: string;
  votingEnds: string;
  votes: {
    for: number;
    against: number;
    abstain: number;
  };
  tags: string[];
  category: string;
  result?: 'Approved' | 'Rejected';
  implementation?: 'Not Started' | 'In Progress' | 'Scheduled' | 'Completed';
}

export interface FundingRound {
  id: number;
  title: string;
  status: 'Active' | 'Upcoming' | 'Completed';
  startDate: string;
  endDate: string;
  matchingPool: number;
  projects: number;
  contributors: number;
  totalRaised: number;
  description: string;
}

export const proposals: Proposal[] = [
  {
    id: 1,
    title: "Add Biodiversity Impact Metrics",
    description: "Implement a new set of metrics to track biodiversity impacts of projects, including species preservation, habitat restoration, and green space creation.",
    status: "Active",
    creator: "0x89f...c3A7",
    dateCreated: "2025-02-28",
    votingEnds: "2025-03-15",
    votes: {
      for: 145,
      against: 12,
      abstain: 8
    },
    tags: ["Platform", "Metrics", "Biodiversity"],
    category: "System Improvement"
  },
  {
    id: 2,
    title: "Cross-Border Euregio Expansion",
    description: "Expand platform functionality to include projects from Maastricht (NL) and Liège (BE) to create a cross-border sustainability ecosystem within the Euregio Meuse-Rhine.",
    status: "Active",
    creator: "0x72b...a42D",
    dateCreated: "2025-03-01",
    votingEnds: "2025-03-15",
    votes: {
      for: 187,
      against: 45,
      abstain: 23
    },
    tags: ["Expansion", "Euregio", "International"],
    category: "Strategic"
  },
  {
    id: 3,
    title: "Education Institution Partnership Program",
    description: "Create a formal partnership program for schools and universities to integrate the platform into education and research activities.",
    status: "Active",
    creator: "0x46d...8bE2",
    dateCreated: "2025-03-02",
    votingEnds: "2025-03-16",
    votes: {
      for: 98,
      against: 5,
      abstain: 12
    },
    tags: ["Education", "Partnerships", "Academic"],
    category: "Partnership"
  },
  {
    id: 4,
    title: "District Challenge Framework",
    description: "Implement a competitive framework for Aachen's districts to compete in sustainability challenges, with district-level metrics and incentives.",
    status: "Completed",
    creator: "0x2e7...9B12",
    dateCreated: "2025-02-10",
    votingEnds: "2025-02-25",
    votes: {
      for: 214,
      against: 32,
      abstain: 18
    },
    result: "Approved",
    implementation: "In Progress",
    tags: ["Community", "Competition", "Districts"],
    category: "Engagement"
  },
  {
    id: 5,
    title: "Local Business Reward System",
    description: "Develop a system for local sustainable businesses to offer rewards and discounts to active platform participants based on their impact points.",
    status: "Completed",
    creator: "0x93c...67F1",
    dateCreated: "2025-02-15",
    votingEnds: "2025-03-01",
    votes: {
      for: 276,
      against: 14,
      abstain: 23
    },
    result: "Approved",
    implementation: "Scheduled",
    tags: ["Local Economy", "Rewards", "Business"],
    category: "Incentives"
  }
];

export const fundingRounds: FundingRound[] = [
  {
    id: 1,
    title: "Aachen Sustainability QF",
    status: "Active",
    startDate: "2025-03-01",
    endDate: "2025-03-31",
    matchingPool: 15000,
    projects: 18,
    contributors: 324,
    totalRaised: 8420.15,
    description: "This funding round will allocate resources to support contributions to sustainability projects in Aachen, focusing on enhancing community engagement, local food systems, climate action, and urban ecology."
  },
  {
    id: 2,
    title: "Education Innovation Round",
    status: "Upcoming",
    startDate: "2025-04-15",
    endDate: "2025-05-15",
    matchingPool: 10000,
    projects: 0,
    contributors: 0,
    totalRaised: 0,
    description: "Supporting projects that innovate in sustainability education, from school programs to public awareness campaigns and hands-on learning experiences."
  },
  {
    id: 3,
    title: "Aachen Winter Round 2024",
    status: "Completed",
    startDate: "2024-12-01",
    endDate: "2024-12-31",
    matchingPool: 12000,
    projects: 15,
    contributors: 287,
    totalRaised: 7865.40,
    description: "The inaugural funding round for Aachen sustainability initiatives, focusing on pilot projects and establishing the community framework."
  },
  {
    id: 4,
    title: "Q1 2025 Funding Round",
    status: "Active",
    startDate: "2025-01-01T00:00:00.000Z",
    endDate: "2025-03-31T23:59:59.000Z",
    matchingPool: 25000,
    projects: 12,
    contributors: 348,
    totalRaised: 0,
    description: ""
  },
  {
    id: 5,
    title: "Q2 2025 Funding Round",
    status: "Upcoming",
    startDate: "2025-04-01T00:00:00.000Z",
    endDate: "2025-06-30T23:59:59.000Z",
    matchingPool: 30000,
    projects: 0,
    contributors: 0,
    totalRaised: 0,
    description: ""
  },
  {
    id: 6,
    title: "Q4 2024 Funding Round",
    status: "Completed",
    startDate: "2024-10-01T00:00:00.000Z",
    endDate: "2024-12-31T23:59:59.000Z",
    matchingPool: 20000,
    projects: 10,
    contributors: 276,
    totalRaised: 0,
    description: ""
  }
];
