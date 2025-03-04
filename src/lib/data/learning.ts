// src/lib/data/learning.ts
export interface LearningResource {
    id: number;
    title: string;
    description: string;
    category: 'Course' | 'Guide' | 'Toolkit' | 'Article' | 'Video';
    topics: string[];
    creator: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    completions: number;
    rating: number;
  }
  
  export const learningResources: LearningResource[] = [
    {
      id: 1,
      title: "Sustainability Fundamentals",
      description: "An introduction to key sustainability concepts, the SDGs, and local environmental challenges in Aachen.",
      category: "Course",
      topics: ["SDGs", "Local Context", "Climate Basics"],
      creator: "Sustained Learning Team",
      duration: "2 hours",
      level: "Beginner",
      completions: 472,
      rating: 4.8
    },
    {
      id: 2,
      title: "Sustainable Food Systems Guide",
      description: "Learn about food miles, seasonal eating, and how to support local food producers in the Aachen region.",
      category: "Guide",
      topics: ["Food", "Local Economy", "Consumption"],
      creator: "Ernährungsrat Aachen",
      duration: "45 minutes",
      level: "Beginner",
      completions: 298,
      rating: 4.7
    },
    {
      id: 3,
      title: "Community Organizing Toolkit",
      description: "Practical resources for launching and growing sustainability initiatives in your neighborhood.",
      category: "Toolkit",
      topics: ["Community Building", "Project Management", "Engagement"],
      creator: "Bewegungsmelder Aachen",
      duration: "3 hours",
      level: "Intermediate",
      completions: 134,
      rating: 4.5
    },
    {
      id: 4,
      title: "Waste Audit Methodology",
      description: "Step-by-step guide to conducting waste audits for schools, businesses, or community organizations.",
      category: "Guide",
      topics: ["Waste", "Data Collection", "Behavior Change"],
      creator: "SEK Müll",
      duration: "1.5 hours",
      level: "Intermediate",
      completions: 87,
      rating: 4.6
    },
    {
      id: 5,
      title: "Climate Policy in Aachen",
      description: "Overview of current climate policies, goals, and how citizens can engage with local government.",
      category: "Article",
      topics: ["Policy", "Governance", "Advocacy"],
      creator: "Klimaentscheid Aachen",
      duration: "30 minutes",
      level: "Intermediate",
      completions: 215,
      rating: 4.4
    },
    {
      id: 6,
      title: "Urban Gardening Basics",
      description: "Learn how to start a balcony garden or join community gardening initiatives in Aachen.",
      category: "Video",
      topics: ["Food", "Urban Space", "Biodiversity"],
      creator: "Urban Gardening Collective",
      duration: "55 minutes",
      level: "Beginner",
      completions: 352,
      rating: 4.9
    },
    {
      id: 7,
      title: "Measuring Your Carbon Footprint",
      description: "Tools and methodologies for calculating and understanding your personal environmental impact.",
      category: "Course",
      topics: ["Carbon", "Data", "Lifestyle"],
      creator: "Climate Science Team",
      duration: "2.5 hours",
      level: "Intermediate",
      completions: 173,
      rating: 4.3
    },
    {
      id: 8,
      title: "DIY Home Energy Efficiency",
      description: "Practical solutions for reducing energy consumption in your home without major renovations.",
      category: "Guide",
      topics: ["Energy", "DIY", "Housing"],
      creator: "Energy Transition Network",
      duration: "1 hour",
      level: "Beginner",
      completions: 264,
      rating: 4.7
    }
  ];