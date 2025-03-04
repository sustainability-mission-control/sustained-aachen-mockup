// src/lib/data/projects.ts
export interface Project {
    id: number;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    logo: string;
    logoColor: string;
    owner: string;
    created: string;
    amountRaised: number;
    contributors: number;
    matchingEstimate: number;
    tags: string[];
    sdgs: number[];
    expectedOutcomes: string[];
    events: {
      id: number;
      title: string;
      date: string;
      time: string;
      location: string;
      type: 'in-person' | 'virtual';
    }[];
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Ernährungsrat Aachen",
      slug: "ernahrungsrat-aachen",
      shortDescription: "Regional food hub connecting local farmers with urban consumers to create a sustainable food system.",
      description: "The Ernährungsrat Aachen & Region (Food Policy Council) works to create a sustainable food system in the Aachen region. This funding will support the development of a regional food hub connecting local producers with urban consumers, educational workshops on sustainable nutrition, and collaborative projects with neighboring regions.",
      logo: "ER",
      logoColor: "#4ade80",
      owner: "0x72b...a42D",
      created: "2025-02-15",
      amountRaised: 1427.50,
      contributors: 42,
      matchingEstimate: 3218.75,
      tags: ["Food Systems", "Education", "Regional Economy"],
      sdgs: [2, 3, 4, 12, 15],
      expectedOutcomes: [
        "Connect 25+ local farmers to urban markets",
        "Conduct 12 educational workshops on nutrition",
        "Reduce food transport emissions by 15%",
        "Launch collaborative Euregio food network"
      ],
      events: [
        {
          id: 1,
          title: "Local Farmers Market",
          date: "2025-03-12",
          time: "09:00-14:00",
          location: "Markt, Aachen",
          type: "in-person"
        },
        {
          id: 2,
          title: "Sustainable Nutrition Workshop",
          date: "2025-03-18",
          time: "18:00-20:00",
          location: "Volkshochschule Aachen",
          type: "in-person"
        }
      ]
    },
    {
      id: 2,
      title: "Bewegungsmelder Aachen",
      slug: "bewegungsmelder-aachen",
      shortDescription: "Platform connecting people with social and environmental initiatives through events and volunteer opportunities.",
      description: "Bewegungsmelder Aachen is an online platform that connects people with various social, environmental, and cultural initiatives in Aachen. It helps users find local groups, events, and volunteer opportunities to get involved in areas like sustainability, activism, and community development.",
      logo: "BM",
      logoColor: "#3b82f6",
      owner: "0x93c...67F1",
      created: "2025-01-20",
      amountRaised: 2184.75,
      contributors: 78,
      matchingEstimate: 4573.20,
      tags: ["Community", "Volunteering", "Digital Platform"],
      sdgs: [11, 12, 13, 17],
      expectedOutcomes: [
        "Onboard 30 new sustainability initiatives",
        "Generate 500+ volunteer connections",
        "Develop cross-platform notification system",
        "Create initiative impact tracking tools"
      ],
      events: [
        {
          id: 3,
          title: "Platform Onboarding Workshop",
          date: "2025-03-10",
          time: "17:00-19:00",
          location: "Digital Hub, Jülicher Straße",
          type: "in-person"
        }
      ]
    },
    {
      id: 3,
      title: "Aachen Was Geht",
      slug: "aachen-was-geht",
      shortDescription: "Local platform highlighting sustainable events and community initiatives throughout Aachen.",
      description: "AachenWasGeht is a local platform that highlights events, initiatives, and projects happening in and around Aachen, ranging from cultural meetups and creative workshops to community engagement and environmental activities.",
      logo: "AW",
      logoColor: "#f59e0b",
      owner: "0x46d...8bE2",
      created: "2025-02-01",
      amountRaised: 1865.22,
      contributors: 63,
      matchingEstimate: 3952.14,
      tags: ["Events", "Community", "Local Culture"],
      sdgs: [11, 12, 17],
      expectedOutcomes: [
        "Feature 100+ sustainability events",
        "Create neighborhood activity hubs",
        "Develop community feedback loops",
        "Bridge university and city initiatives"
      ],
      events: [
        {
          id: 4,
          title: "Sustainability Events Showcase",
          date: "2025-03-15",
          time: "14:00-17:00",
          location: "Ludwig Forum",
          type: "in-person"
        }
      ]
    },
    {
      id: 4,
      title: "ACtive for Future",
      slug: "active-for-future",
      shortDescription: "School initiative promoting sustainability education and practical SDG implementation in Aachen schools.",
      description: "ACtive for Future is a school initiative promoting sustainability by engaging with the 17 Sustainable Development Goals (SDGs). It encourages schools to adopt eco-friendly practices, such as promoting sustainable transport, reducing meat consumption, and creating green spaces.",
      logo: "AF",
      logoColor: "#10b981",
      owner: "0x89f...c3A7",
      created: "2025-01-15",
      amountRaised: 956.40,
      contributors: 31,
      matchingEstimate: 2365.80,
      tags: ["Education", "Youth", "SDGs"],
      sdgs: [4, 11, 12, 13],
      expectedOutcomes: [
        "Engage 15 schools in sustainability programs",
        "Create 10 school gardens",
        "Reduce school food waste by 25%",
        "Develop SDG curriculum materials"
      ],
      events: [
        {
          id: 5,
          title: "School Sustainability Champions Workshop",
          date: "2025-03-20",
          time: "14:00-16:00",
          location: "Couven Gymnasium",
          type: "in-person"
        }
      ]
    },
    {
      id: 5,
      title: "Klimaentscheid Aachen",
      slug: "klimaentscheid-aachen",
      shortDescription: "Citizen initiative working to accelerate Aachen's path to climate neutrality through policy change and community action.",
      description: "A non-partisan climate action group working toward making Aachen climate-neutral by 2030 through citizen petitions and local initiatives.",
      logo: "KA",
      logoColor: "#6366f1",
      owner: "0x2e7...9B12",
      created: "2025-01-10",
      amountRaised: 1243.80,
      contributors: 47,
      matchingEstimate: 2764.45,
      tags: ["Climate Action", "Policy", "Advocacy"],
      sdgs: [7, 11, 13],
      expectedOutcomes: [
        "Gather 5,000 petition signatures",
        "Develop climate action roadmap",
        "Conduct 8 neighborhood climate workshops",
        "Create building emission reduction plan"
      ],
      events: [
        {
          id: 6,
          title: "Climate Policy Forum",
          date: "2025-03-25",
          time: "18:30-20:30",
          location: "Rathaus Aachen",
          type: "in-person"
        }
      ]
    },
    {
      id: 6,
      title: "SEK Müll",
      slug: "sek-mull",
      shortDescription: "Student cleanup initiative organizing waste collection events and environmental awareness campaigns around Aachen.",
      description: "A volunteer initiative that organizes cleanups around RWTH Aachen University, removing litter and promoting environmental awareness.",
      logo: "SM",
      logoColor: "#ec4899",
      owner: "0x54a...7fE9",
      created: "2025-02-05",
      amountRaised: 742.25,
      contributors: 23,
      matchingEstimate: 1865.60,
      tags: ["Waste", "Students", "Cleanup"],
      sdgs: [11, 12, 14, 15],
      expectedOutcomes: [
        "Conduct 15 cleanup events",
        "Collect 1 ton of recyclable waste",
        "Engage 200 student volunteers",
        "Create waste audit methodology"
      ],
      events: [
        {
          id: 7,
          title: "Campus Cleanup Day",
          date: "2025-03-14",
          time: "10:00-14:00",
          location: "RWTH Main Campus",
          type: "in-person"
        }
      ]
    }
  ];