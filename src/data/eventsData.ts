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
  registrationLink: string; // Added the registration link property
}

export const eventsData: EventData[] = [
  // --- TECHNICAL EVENTS ---
  {
    id: "dynamicad",
    title: "DyanamiCAD",
    type: "technical",
    category: "flagship",
    icon: "MonitorPlay",
    duration: "10:00 AM - 1:00 PM",
    venue: "CAD LAB",
    teamSize: "TEAM OF 2–3",
    description: "DyanamiCAD is a technical event that tests participants’ skills in mechanical engineering concepts, CAD modeling, and engineering analysis. Participants will work in teams to design and analyze a mechanical component using engineering tools.",
    guidelines: [
      "Each team must consist of 2–3 members only.",
      "Participants must bring their own laptops with SolidWorks and ANSYS installed.",
      "Systems will not be provided by the organizers.",
      "All participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators, and the judges’ decision will be final."
    ],
    coordinators: [
      { name: "Deepak M", phone: "7401220642" },
      { name: "NaveenKumar P", phone: "6374840438" }
    ],
    registrationLink: ""
  },
  {
    id: "paper-presentation",
    title: "PAPER PRESENTATION",
    type: "technical",
    category: "special",
    icon: "FileText",
    duration: "9:30 AM - 12:00 PM",
    venue: "CAD LAB: CONFERENCE HALL",
    teamSize: "TEAM OF 2–3",
    description: "The Paper Presentation event provides a platform for participants to present their ideas, research, and innovative concepts related to core engineering fields such as Electronics and Communication Engineering (ECE), Electrical and Electronics Engineering (EEE), and Mechanical Engineering (MECH).",
    guidelines: [
      "Each team must consist of 2–3 participants.",
      "Topics must be related to core engineering fields such as ECE, EEE, or Mechanical Engineering.",
      "Participants must wear their college ID card during the event.",
      "Participants must be on time and follow the schedule given by the coordinators.",
      "Participants must cooperate with the event coordinators, and the judges’ decision will be final."
    ],
    coordinators: [
      { name: "VenuAravind S", phone: "866747389"},
      { name: "Sanjay Lakshmanan", phone: "6374009179" }
    ],
    registrationLink: ""
  },
  {
    id: "brain-sparks",
    title: "BRAIN SPARKS",
    type: "technical",
    category: "standard",
    icon: "Lightbulb",
    duration: "2:00 PM - 3:00 PM",
    venue: "MECH BLOCK 2ND FLOOR (S1)",
    teamSize: "INDIVIDUAL (SOLO)",
    description: "Brain Sparks is an exciting quiz event designed to test participants’ knowledge, logical thinking, and understanding of mechanical engineering concepts. The event challenges individuals to think quickly, solve technical questions, and demonstrate their knowledge.",
    guidelines: [
      "This event is only for solo participants.",
      "Participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators.",
      "Participants must cooperate with the event coordinators throughout the competition."
    ],
    coordinators: [
      { name: "Syed Nayemudeen B ", phone: "9042818580" },
      { name: "Mohana Sundaram", phone: "9710109701" }
    ],
    registrationLink: ""
  },
  {
    id: "component-meshing",
    title: "COMPONENT MESHING",
    type: "technical",
    category: "standard",
    icon: "Settings",
    duration: "9:30 AM - 11:00 AM",
    venue: "MECH BLOCK 2ND FLOOR (S1)",
    teamSize: "TEAM OF 1–2",
    description: "Component Meshing is an engaging technical quiz event that tests participants’ knowledge of mechanical components and assembly concepts. The event challenges participants to identify different mechanical parts and understand how they fit together in a system.",
    guidelines: [
      "Each team can have 1–2 participants only.",
      "Participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators.",
      "Participants must cooperate with the event coordinators throughout the event.",
      "Judges’/coordinators’ decisions will be final."
    ],
    coordinators: [
      { name: "Aadhitya Narayanan KS", phone: "8754153904" },
      { name: "Sommer", phone: "8610306857" }
    ],
    registrationLink: ""
  },
  {
    id: "retro-racers",
    title: "RETRO RACERS",
    type: "technical",
    category: "standard",
    icon: "Car",
    duration: "2:00 PM - 3:30 PM",
    venue: "MECH BLOCK 2ND FLOOR (S5)",
    teamSize: "TEAM OF 2–3",
    description: "Retro Racers is an engaging event for automobile enthusiasts that focuses on vintage and classic cars. Participants will test their knowledge of automobiles in the first round and then receive a vintage car model to create a voiceover video explaining the car’s features.",
    guidelines: [
      "Each team must consist of 2–3 participants.",
      "Participants must bring their own laptops for creating the voiceover video.",
      "Participants must wear their college ID card during the event.",
      "Participants must follow instructions and cooperate with the coordinators.",
      "Judges’/coordinators’ decision will be final."
    ],
    coordinators: [
      { name: "Hariharan A", phone: "9445338220" },
      { name: "Arun B", phone: "8122728338" }
    ],
    registrationLink: ""
  },

  // --- NON-TECHNICAL EVENTS ---
  {
    id: "cricket-arena",
    title: "CRICKET ARENA",
    type: "non-technical",
    category: "none",
    icon: "Target",
    duration: "2:00 PM - 2:30 PM",
    venue: "MECH BLOCK (S4)",
    teamSize: "TEAM OF 2",
    description: "Cricket Arena is an exciting cricket-themed event designed to test participants’ knowledge of international cricket, famous players, records, and playing styles. The event combines guessing rounds, action-based challenges, and statistics-based questions.",
    guidelines: [
      "This event is only for two participants per team.",
      "Participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators during each round.",
      "Participants must cooperate with the event coordinators.",
      "Judges’/coordinators’ decisions will be final."
    ],
    coordinators: [
      { name: "Senthil Ramanan V", phone: "9080191348"},
      { name: "Rudhran S", phone: "9498324617" }
    ],
    registrationLink: ""
  },
  {
    id: "frame-flux",
    title: "FRAME FLUX ( kollywood connection)",
    type: "non-technical",
    category: "none",
    icon: "Film",
    duration: "10:00 AM - 12:00 PM",
    venue: "MECH BLOCK 2ND FLOOR (S2)",
    teamSize: "TEAM OF 2",
    description: "Frame Flux is a fun and engaging non-technical event based on Kollywood movies and songs, designed to test participants’ observation skills, movie knowledge, and quick thinking. Participants will identify movie scenes, decode famous dialogues, and recognize songs.",
    guidelines: [
      "This event is only for two participants per team.",
      "Participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators during each round.",
      "Participants must cooperate with the event coordinators throughout the competition.",
      "Judges’/coordinators’ decisions will be final in all rounds."
    ],
    coordinators: [
      { name: "Sriram Kannan", phone: "7871759996" },
      { name: "Prajan", phone: "7824008565" }
    ],
    registrationLink: ""
  },
  {
    id: "otaku-clash",
    title: "OTAKU CLASH",
    type: "non-technical",
    category: "none",
    icon: "Sparkles",
    duration: "2:00 PM - 3:30 PM",
    venue: "CAD LAB",
    teamSize: "TEAM OF 2",
    description: "Otaku Clash is an exciting anime-based fun event designed for participants who love anime and enjoy testing their knowledge of famous characters, scenes, and dialogues. The event challenges teams to identify visuals, answer interesting trivia, and recognize iconic anime dialogues.",
    guidelines: [
      "This event is only for two participants per team.",
      "Participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators during each round.",
      "Participants must cooperate with the event coordinators throughout the competition.",
      "Judges’/coordinators’ decisions will be final in all rounds."
    ],
    coordinators: [
      { name: "Riyaz R", phone: "8122770124" },
      { name: "Karthick P", phone: "7305298694" }
    ],
    registrationLink: ""
  },
  {
    id: "rapid-rumble",
    title: "RAPID RUMBLE",
    type: "non-technical",
    category: "none",
    icon: "Zap",
    duration: "9:30 AM - 11:30 AM",
    venue: "MECH BLOCK 2ND FLOOR (S4)",
    teamSize: "INDIVIDUAL",
    description: "Rapid Rumble is an energetic and entertaining event consisting of a series of quick and fun mini-games conducted inside the classroom. Participants will compete in simple yet exciting challenges such as Flip the Bottle and other quick-fire tasks.",
    guidelines: [
      "Participants must wear their college ID card during the event.",
      "Participants must follow the instructions given by the coordinators for each game.",
      "Participants must cooperate with the event coordinators throughout the event.",
      "Fair play must be maintained during all games.",
      "Judges’/coordinators’ decisions will be final."
    ],
    coordinators: [
      { name: "Abishek", phone: "9384668834" },
      { name: "Karthikayan K", phone: "8939058717" }
    ],
    registrationLink: ""
  }
];

export const contacts = [
  { name: "SYED NAYEM", phone: "9042818580" },
  { name: "SENTHIL", phone: "9080191348" },

];

export const prizeMap: Record<string, { first: string; second: string; third: string }> = {
  flagship: { first: "₹2000", second: "₹1,000", third: "₹750" },
  special: { first: "₹1500", second: "₹1,000", third: "₹750" },
  standard: { first: "₹1000", second: "₹750", third: "₹500" },
};

export const techEvents = eventsData.filter((e) => e.type === "technical");
export const nonTechEvents = eventsData.filter((e) => e.type === "non-technical");
