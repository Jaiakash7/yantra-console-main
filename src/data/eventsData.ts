export type EventType = 'technical' | 'non-technical';
export type EventCategory = 'flagship' | 'special' | 'standard' | 'none';

export interface EventCoordinator {
  name: string;
  phone: string;
}

export interface EventData {
  id: string;
  title: string;
  type: EventType;
  category: EventCategory;
  icon: string; // Lucide icon name
  duration: string;
  venue: string;
  teamSize: string;
  description: string;
  guidelines: string[];
  coordinators: EventCoordinator[];
}

export const eventsData: EventData[] = [
  // --- TECHNICAL EVENTS ---
  {
    id: "dynamicad",
    title: "DyanamiCAD",
    type: "technical",
    category: "flagship",
    icon: "MonitorPlay",
    duration: "TBD",
    venue: "TBD",
    teamSize: "TEAM OF 2–3",
    description: "DyanamiCAD is a technical event that tests participants’ skills in mechanical engineering concepts, CAD modeling, and engineering analysis. Participants will work in teams to design and analyze a mechanical component using engineering tools.",
    guidelines: [
      "Each team must consist of 2–3 members only.",
      "Participants must bring their own laptops with SolidWorks and ANSYS installed.",
      "Systems will not be provided by the organizers.",
      "All participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators, and the judges’ decision will be final."
    ],
    coordinators: []
  },
  {
    id: "paper-presentation",
    title: "PAPER PRESENTATION",
    type: "technical",
    category: "special",
    icon: "FileText",
    duration: "TBD",
    venue: "TBD",
    teamSize: "TEAM OF 2–3",
    description: "The Paper Presentation event provides a platform for participants to present their ideas, research, and innovative concepts related to core engineering fields such as Electronics and Communication Engineering (ECE), Electrical and Electronics Engineering (EEE), and Mechanical Engineering (MECH).",
    guidelines: [
      "Each team must consist of 2–3 participants.",
      "Topics must be related to core engineering fields such as ECE, EEE, or Mechanical Engineering.",
      "Participants must wear their college ID card during the event.",
      "Participants must be on time and follow the schedule given by the coordinators.",
      "Participants must cooperate with the event coordinators, and the judges’ decision will be final."
    ],
    coordinators: []
  },
  {
    id: "brain-sparks",
    title: "BRAIN SPARKS",
    type: "technical",
    category: "standard",
    icon: "Lightbulb",
    duration: "TBD",
    venue: "TBD",
    teamSize: "INDIVIDUAL",
    description: "Brain Sparks is an exciting quiz event designed to test participants’ knowledge, logical thinking, and understanding of mechanical engineering concepts. The event challenges individuals to think quickly, solve technical questions, and demonstrate their knowledge.",
    guidelines: [
      "This event is only for solo participants.",
      "Participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators.",
      "Participants must cooperate with the event coordinators throughout the competition."
    ],
    coordinators: []
  },
  {
    id: "component-meshing",
    title: "COMPONENT MESHING",
    type: "technical",
    category: "standard",
    icon: "Settings",
    duration: "TBD",
    venue: "TBD",
    teamSize: "TEAM OF 1–2",
    description: "Component Meshing is an engaging technical quiz event that tests participants’ knowledge of mechanical components and assembly concepts. The event challenges participants to identify different mechanical parts and understand how they fit together in a system.",
    guidelines: [
      "Each team can have 1–2 participants only.",
      "Participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators.",
      "Participants must cooperate with the event coordinators throughout the event.",
      "Judges’/coordinators’ decisions will be final."
    ],
    coordinators: []
  },
  {
    id: "retro-racers",
    title: "RETRO RACERS",
    type: "technical",
    category: "standard",
    icon: "Car",
    duration: "TBD",
    venue: "TBD",
    teamSize: "TEAM OF 2–3",
    description: "Retro Racers is an engaging event for automobile enthusiasts that focuses on vintage and classic cars. Participants will test their knowledge of automobiles in the first round and then receive a vintage car model to create a voiceover video explaining the car’s features.",
    guidelines: [
      "Each team must consist of 2–3 participants.",
      "Participants must bring their own laptops for creating the voiceover video.",
      "Participants must wear their college ID card during the event.",
      "Participants must follow instructions and cooperate with the coordinators.",
      "Judges’/coordinators’ decision will be final."
    ],
    coordinators: []
  },

  // --- NON-TECHNICAL EVENTS ---
  {
    id: "cricket-arena",
    title: "CRICKET ARENA",
    type: "non-technical",
    category: "none",
    icon: "Target",
    duration: "TBD",
    venue: "TBD",
    teamSize: "TEAM OF 2",
    description: "Cricket Arena is an exciting cricket-themed event designed to test participants’ knowledge of international cricket, famous players, records, and playing styles. The event combines guessing rounds, action-based challenges, and statistics-based questions.",
    guidelines: [
      "This event is only for two participants per team.",
      "Participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators during each round.",
      "Participants must cooperate with the event coordinators.",
      "Judges’/coordinators’ decisions will be final."
    ],
    coordinators: []
  },
  {
    id: "frame-flux",
    title: "FRAME FLUX",
    type: "non-technical",
    category: "none",
    icon: "Film",
    duration: "TBD",
    venue: "TBD",
    teamSize: "TEAM OF 2",
    description: "Frame Flux is a fun and engaging non-technical event based on Kollywood movies and songs, designed to test participants’ observation skills, movie knowledge, and quick thinking. Participants will identify movie scenes, decode famous dialogues, and recognize songs.",
    guidelines: [
      "This event is only for two participants per team.",
      "Participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators during each round.",
      "Participants must cooperate with the event coordinators throughout the competition.",
      "Judges’/coordinators’ decisions will be final in all rounds."
    ],
    coordinators: []
  },
  {
    id: "otaku-clash",
    title: "OTAKU CLASH",
    type: "non-technical",
    category: "none",
    icon: "Sparkles",
    duration: "TBD",
    venue: "TBD",
    teamSize: "TEAM OF 2",
    description: "Otaku Clash is an exciting anime-based fun event designed for participants who love anime and enjoy testing their knowledge of famous characters, scenes, and dialogues. The event challenges teams to identify visuals, answer interesting trivia, and recognize iconic anime dialogues.",
    guidelines: [
      "This event is only for two participants per team.",
      "Participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators during each round.",
      "Participants must cooperate with the event coordinators throughout the competition.",
      "Judges’/coordinators’ decisions will be final in all rounds."
    ],
    coordinators: []
  },
  {
    id: "rapid-rumble",
    title: "RAPID RUMBLE",
    type: "non-technical",
    category: "none",
    icon: "Zap",
    duration: "TBD",
    venue: "CLASSROOM",
    teamSize: "INDIVIDUAL",
    description: "Rapid Rumble is an energetic and entertaining event consisting of a series of quick and fun mini-games conducted inside the classroom. Participants will compete in simple yet exciting challenges such as Flip the Bottle and other quick-fire tasks.",
    guidelines: [
      "Participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators for each game.",
      "Participants must cooperate with the event coordinators throughout the event.",
      "Fair play must be maintained during all games.",
      "Judges’/coordinators’ decisions will be final."
    ],
    coordinators: []
  }
];

export const contacts = [
  { name: "SYED NAYEM", phone: "9042818580" },
  { name: "SENTHIL", phone: "9080191348" },
  { name: "MR. CHIDAMBARAM", phone: "9751894475" },
];

export const prizeMap: Record<string, { first: string; second: string; third: string }> = {
  flagship: { first: "₹1,500", second: "₹1,000", third: "₹750" },
  special: { first: "₹1,000", second: "₹750", third: "₹500" },
  standard: { first: "₹750", second: "₹500", third: "₹250" },
};

export const techEvents = eventsData.filter((e) => e.type === "technical");
export const nonTechEvents = eventsData.filter((e) => e.type === "non-technical");