export interface Action {
    id: number;
    title: string;
    description: string;
    category: 'Consumption' | 'Transportation' | 'Energy' | 'Waste' | 'Community' | 'Food';
    points: number;
    impact: string;
    verificationMethod: 'Photo' | 'Geo' | 'Receipt' | 'Honor' | 'Partner';
    duration: 'Instant' | 'Day' | 'Week' | 'Month' | 'Ongoing';
    difficulty: 'Easy' | 'Medium' | 'Challenging';
    popularityScore: number;
  }
  
  export const actions: Action[] = [
    {
      id: 1,
      title: "Bike to Work/School",
      description: "Leave your car at home and cycle to your workplace or school instead.",
      category: "Transportation",
      points: 15,
      impact: "~1.2kg CO2 saved per 5km trip",
      verificationMethod: "Geo",
      duration: "Day",
      difficulty: "Easy",
      popularityScore: 95
    },
    {
      id: 2,
      title: "Plant-Based Meal",
      description: "Choose a fully plant-based meal instead of one containing animal products.",
      category: "Food",
      points: 10,
      impact: "~3.5kg CO2 saved per meal",
      verificationMethod: "Photo",
      duration: "Instant",
      difficulty: "Easy",
      popularityScore: 87
    },
    {
      id: 3,
      title: "Zero-Waste Shopping",
      description: "Use your own containers and bags for a shopping trip, avoiding single-use packaging.",
      category: "Consumption",
      points: 25,
      impact: "~0.5kg plastic waste reduced",
      verificationMethod: "Photo",
      duration: "Instant",
      difficulty: "Medium",
      popularityScore: 78
    },
    {
      id: 4,
      title: "Volunteer for Local Project",
      description: "Contribute your time to one of the sustainability projects on the platform.",
      category: "Community",
      points: 50,
      impact: "Strengthens community initiatives",
      verificationMethod: "Partner",
      duration: "Day",
      difficulty: "Medium",
      popularityScore: 92
    },
    {
      id: 5,
      title: "Collect Litter",
      description: "Spend 30 minutes collecting litter in your neighborhood or local park.",
      category: "Waste",
      points: 30,
      impact: "Cleaner environment, reduced wildlife harm",
      verificationMethod: "Photo",
      duration: "Instant",
      difficulty: "Easy",
      popularityScore: 84
    },
    {
      id: 6,
      title: "Repair Instead of Replace",
      description: "Fix a broken item instead of buying a new one. Visit a repair café or learn DIY repair skills.",
      category: "Consumption",
      points: 40,
      impact: "Extends product lifecycle, reduces waste",
      verificationMethod: "Photo",
      duration: "Instant",
      difficulty: "Medium",
      popularityScore: 72
    },
    {
      id: 7,
      title: "Install Home Energy Monitor",
      description: "Set up a device to track your home energy usage and identify opportunities to reduce consumption.",
      category: "Energy",
      points: 60,
      impact: "Up to 15% energy savings potential",
      verificationMethod: "Photo",
      duration: "Ongoing",
      difficulty: "Medium",
      popularityScore: 68
    },
    {
      id: 8,
      title: "Start Composting",
      description: "Begin composting your food scraps either at home or by joining a community composting program.",
      category: "Waste",
      points: 35,
      impact: "Reduces methane from landfills, creates soil",
      verificationMethod: "Photo",
      duration: "Ongoing",
      difficulty: "Medium",
      popularityScore: 74
    },
    {
      id: 9,
      title: "Attend Sustainability Workshop",
      description: "Participate in an educational event to learn new sustainability skills.",
      category: "Community",
      points: 30,
      impact: "Knowledge building, community connection",
      verificationMethod: "Partner",
      duration: "Day",
      difficulty: "Easy",
      popularityScore: 89
    },
    {
      id: 10,
      title: "Local Food Shopping",
      description: "Buy your groceries from local producers at a farmers market or through a CSA.",
      category: "Food",
      points: 20,
      impact: "Reduces food miles, supports local economy",
      verificationMethod: "Receipt",
      duration: "Week",
      difficulty: "Easy",
      popularityScore: 91
    }
  ];
  
  