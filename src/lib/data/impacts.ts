export interface CommunityImpact {
  totalParticipants: number;
  totalProjects: number;
  totalEvents: number;
  totalFunding: number;
  co2Reduced: number; // in tons
  wasteCollected: number; // in tons
  treesPlanted: number;
  sustainableMeals: number;
  bikeTrips: number;
  volunteersEngaged: number;
  districtsEngaged: number;
  sdgImpact: {
    [key: number]: number; // SDG number: impact score (1-10)
  };
  monthlyGrowth: {
    month: string;
    participants: number;
    actions: number;
  }[];
  districtParticipation: {
    name: string;
    participants: number;
    actions: number;
  }[];
}

export interface PersonalImpact {
  totalActions: number;
  impactPoints: number;
  carbonReduced: number; // in kg
  sustainableMeals: number;
  wasteReducedKg: number;
  bikeTrips: number;
  volunteerHours: number;
  eventsAttended: number;
  projectsSupported: number;
  badges: {
    id: number;
    name: string;
    description: string;
    icon: string;
    achieved: boolean;
  }[];
  actionHistory: {
    date: string;
    action: string;
    points: number;
    impact: string;
  }[];
}

export const communityImpacts: CommunityImpact = {
  totalParticipants: 3246,
  totalProjects: 18,
  totalEvents: 53,
  totalFunding: 24635.50,
  co2Reduced: 14.2, // in tons
  wasteCollected: 5.8, // in tons
  treesPlanted: 145,
  sustainableMeals: 2865,
  bikeTrips: 12540,
  volunteersEngaged: 587,
  districtsEngaged: 7,
  sdgImpact: {
    // SDG number: impact score (1-10)
    1: 4,
    2: 7,
    3: 6,
    4: 8,
    5: 5,
    6: 3,
    7: 6,
    8: 4,
    9: 3,
    10: 4,
    11: 9,
    12: 8,
    13: 7,
    14: 2,
    15: 6,
    16: 3,
    17: 7
  },
  monthlyGrowth: [
    { month: "Oct", participants: 1200, actions: 560 },
    { month: "Nov", participants: 1450, actions: 640 },
    { month: "Dec", participants: 1650, actions: 720 },
    { month: "Jan", participants: 2100, actions: 920 },
    { month: "Feb", participants: 2800, actions: 1240 },
    { month: "Mar", participants: 3246, actions: 1520 }
  ],
  districtParticipation: [
    { name: "Aachen-Mitte", participants: 1245, actions: 5432 },
    { name: "Laurensberg", participants: 452, actions: 1876 },
    { name: "Eilendorf", participants: 325, actions: 1435 },
    { name: "Haaren", participants: 287, actions: 1256 },
    { name: "Brand", participants: 412, actions: 1765 },
    { name: "Kornelimünster/Walheim", participants: 298, actions: 1342 },
    { name: "Richterich", participants: 227, actions: 978 }
  ]
};

export const personalImpacts: PersonalImpact = {
  totalActions: 48,
  impactPoints: 1240,
  carbonReduced: 84.5, // in kg
  sustainableMeals: 23,
  wasteReducedKg: 12.5,
  bikeTrips: 35,
  volunteerHours: 12,
  eventsAttended: 6,
  projectsSupported: 4,
  badges: [
    { id: 1, name: "Climate Champion", description: "Reduced 50+ kg of CO2", icon: "🌍", achieved: true },
    { id: 2, name: "Local Food Hero", description: "Logged 20+ sustainable meals", icon: "🥗", achieved: true },
    { id: 3, name: "Waste Warrior", description: "Reduced 10+ kg of waste", icon: "♻️", achieved: true },
    { id: 4, name: "Mobility Master", description: "Logged 30+ bike trips", icon: "🚲", achieved: true },
    { id: 5, name: "Community Connector", description: "Supported 3+ projects", icon: "🤝", achieved: true },
    { id: 6, name: "Knowledge Seeker", description: "Completed 5+ learning modules", icon: "📚", achieved: false },
    { id: 7, name: "Governance Guru", description: "Participated in 3+ proposals", icon: "🏛️", achieved: false }
  ],
  actionHistory: [
    { date: "2025-03-01", action: "Bike commute", points: 15, impact: "1.2kg CO2 saved" },
    { date: "2025-03-01", action: "Plant-based meal", points: 10, impact: "3.5kg CO2 saved" },
    { date: "2025-03-02", action: "Zero-waste shopping", points: 25, impact: "0.5kg waste reduced" },
    { date: "2025-03-03", action: "Volunteered at Farmers Market", points: 50, impact: "3 hours" },
    { date: "2025-03-04", action: "Bike commute", points: 15, impact: "1.2kg CO2 saved" },
    { date: "2025-03-05", action: "Attended Climate Forum", points: 30, impact: "Knowledge gained" },
    { date: "2025-03-05", action: "Plant-based meal", points: 10, impact: "3.5kg CO2 saved" }
  ]
};
