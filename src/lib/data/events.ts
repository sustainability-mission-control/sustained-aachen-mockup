export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    type: 'in-person' | 'virtual';
    description: string;
    projectId: number;
    project: string;
    image: string;
    attendees: number;
  }
  
  export const events: Event[] = [
    {
      id: 1,
      title: "Local Farmers Market",
      date: "2025-03-12",
      time: "09:00-14:00",
      location: "Markt, Aachen",
      type: "in-person",
      description: "A showcase of local sustainable food producers from the Aachen region. Connect directly with farmers and learn about sustainable agriculture practices.",
      projectId: 1,
      project: "Ernährungsrat Aachen",
      image: "/images/farmers-market.jpg",
      attendees: 87
    },
    {
      id: 2,
      title: "Sustainable Nutrition Workshop",
      date: "2025-03-18",
      time: "18:00-20:00",
      location: "Volkshochschule Aachen",
      type: "in-person",
      description: "Learn how to create healthy, sustainable meals using local and seasonal ingredients. Includes cooking demonstrations and tasting.",
      projectId: 1,
      project: "Ernährungsrat Aachen",
      image: "/images/nutrition-workshop.jpg",
      attendees: 45
    },
    {
      id: 3,
      title: "Platform Onboarding Workshop",
      date: "2025-03-10",
      time: "17:00-19:00",
      location: "Digital Hub, Jülicher Straße",
      type: "in-person",
      description: "A hands-on workshop for initiative leaders to learn how to effectively use the Bewegungsmelder platform to engage volunteers and promote events.",
      projectId: 2,
      project: "Bewegungsmelder Aachen",
      image: "/images/digital-workshop.jpg",
      attendees: 32
    },
    {
      id: 4,
      title: "Sustainability Events Showcase",
      date: "2025-03-15",
      time: "14:00-17:00",
      location: "Ludwig Forum",
      type: "in-person",
      description: "Discover the diverse range of sustainability initiatives happening in Aachen. Meet organizers, sign up for events, and learn how to get involved.",
      projectId: 3,
      project: "Aachen Was Geht",
      image: "/images/events-showcase.jpg",
      attendees: 120
    },
    {
      id: 5,
      title: "School Sustainability Champions Workshop",
      date: "2025-03-20",
      time: "14:00-16:00",
      location: "Couven Gymnasium",
      type: "in-person",
      description: "Training session for student sustainability leaders to implement SDG projects in their schools. Covers project planning, team building, and impact measurement.",
      projectId: 4,
      project: "ACtive for Future",
      image: "/images/school-workshop.jpg",
      attendees: 38
    },
    {
      id: 6,
      title: "Climate Policy Forum",
      date: "2025-03-25",
      time: "18:30-20:30",
      location: "Rathaus Aachen",
      type: "in-person",
      description: "Open discussion on Aachen's climate policies and the path to carbon neutrality. City representatives and experts will present current initiatives and answer questions.",
      projectId: 5,
      project: "Klimaentscheid Aachen",
      image: "/images/climate-forum.jpg",
      attendees: 65
    },
    {
      id: 7,
      title: "Campus Cleanup Day",
      date: "2025-03-14",
      time: "10:00-14:00",
      location: "RWTH Main Campus",
      type: "in-person",
      description: "Join fellow students for a day of campus beautification and waste collection. Equipment provided. Data collected will contribute to the campus waste audit.",
      projectId: 6,
      project: "SEK Müll",
      image: "/images/campus-cleanup.jpg",
      attendees: 54
    },
    {
      id: 8,
      title: "Sustainability in the Euregio Webinar",
      date: "2025-03-22",
      time: "11:00-12:30",
      location: "Online",
      type: "virtual",
      description: "Learn about cross-border sustainability initiatives in the Aachen-Maastricht-Liège region and opportunities for collaboration.",
      projectId: 1,
      project: "Ernährungsrat Aachen",
      image: "/images/euregio-webinar.jpg",
      attendees: 95
    }
  ];