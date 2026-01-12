/**
 * Site-wide constants and configuration
 */

// Site metadata
export const SITE_NAME = 'NicheFinders AI';
export const SITE_DESCRIPTION = 'Miami-based AI automation agency serving Florida. Proven infrastructure for home & building service companies, automotive, nonprofits, and professional services. 3-5x ROI in 90 days.';
export const SITE_URL = 'https://nichefinders.ai';
export const SITE_AUTHOR = 'NicheFinders AI Team';

// Contact information
export const CONTACT_EMAIL = 'hello@nichefinders.ai';
export const CONTACT_PHONE = '(555) 123-4567'; // Replace with actual
export const CONTACT_ADDRESS = 'Miami, Florida';
export const CALENDAR_LINK = 'https://nichefinder.coreyreeder.com/widget/booking/3SsTl1rDYbbKP6kHXeRM';

// Social media
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/nichefinders-ai',
  facebook: 'https://facebook.com/nichefindersai',
  twitter: 'https://twitter.com/nichefindersai',
  instagram: 'https://instagram.com/nichefindersai',
};

// TypeScript types
export interface LocalBusinessExample {
  business: string;
  type: string;
  automation: string;
  impact: string;
}

export interface FloridaCity {
  name: string;
  slug: string;
  region: string;
  counties: string[];
  population: string;
  businessCount: string;
  industries: string[];
  landmarks?: string[];
  localBusinessExamples?: LocalBusinessExample[];
}

export interface Industry {
  name: string;
  slug: string;
  icon: string;
  description: string;
  challenges: string[];
  solutions: string[];
  businessCount?: string;
  painPoints?: string[];
  aiSolutions?: string[];
  typicalResults?: Array<{ metric: string; improvement: string }>;
  useCases?: Array<{ title: string; description: string; stages: number[] }>;
}

export interface Service {
  name: string;
  title: string;
  slug: string;
  icon: string;
  headline: string;
  description: string;
  details: string;
  deliverables: string[];
  idealFor?: string[];
  keyFeatures?: string[];
  process?: Array<{ step: string; description: string }>;
}

// Target Florida cities - Miami (HQ) first, Tampa second, then alphabetical
export const FLORIDA_CITIES: FloridaCity[] = [
  {
    name: 'Miami',
    slug: 'miami',
    region: 'South Florida',
    counties: ['Miami-Dade', 'Broward'],
    population: '450,000+',
    businessCount: '200,000+',
    industries: ['Hospitality', 'Real Estate', 'Professional Services', 'Automotive'],
    landmarks: ['Brickell', 'Wynwood', 'South Beach', 'Coconut Grove', 'Coral Gables'],
    localBusinessExamples: [
      {
        business: "Joe's Stone Crab",
        type: "Iconic Restaurant",
        automation: "Automate their legendary reservation waitlist and manage 500+ daily requests during season",
        impact: "Reduce wait time frustration and capture every reservation opportunity"
      },
      {
        business: "Vizcaya Museum & Gardens",
        type: "Historic Landmark",
        automation: "Streamline event bookings, wedding inquiries, and group tour coordination",
        impact: "Handle 100+ daily tour inquiries with instant responses 24/7"
      },
      {
        business: "Miami Beach Convention Center",
        type: "Major Venue",
        automation: "Automate vendor coordination, exhibitor onboarding, and attendee communication",
        impact: "Save 40+ hours per event on manual coordination tasks"
      },
      {
        business: "Bayside Marketplace",
        type: "Tourist Destination",
        automation: "Individual retailers could automate inventory alerts and customer follow-up",
        impact: "Never miss a sale during peak tourist season"
      }
    ]
  },
  {
    name: 'Tampa',
    slug: 'tampa',
    region: 'Central Florida',
    counties: ['Hillsborough', 'Pinellas', 'Pasco'],
    population: '400,000+',
    businessCount: '150,000+',
    industries: ['Tech', 'Home & Building Services', 'Healthcare', 'Professional Services'],
    landmarks: ['Ybor City', 'Channelside', 'Tampa Riverwalk', 'Hyde Park', 'Westshore'],
    localBusinessExamples: [
      {
        business: "Columbia Restaurant in Ybor City",
        type: "Historic Restaurant (since 1905)",
        automation: "Automate catering orders and large party reservations for Florida's oldest restaurant",
        impact: "Handle 200+ weekly catering inquiries without adding staff"
      },
      {
        business: "Busch Gardens Tampa Bay",
        type: "Major Theme Park",
        automation: "Streamline group booking process and corporate event coordination",
        impact: "Process thousands of group inquiries during peak season with zero wait time"
      },
      {
        business: "Tampa General Hospital",
        type: "Major Healthcare Facility",
        automation: "Automate patient appointment follow-ups and non-emergency intake",
        impact: "Ensure 100% follow-up rate on post-discharge care instructions"
      },
      {
        business: "Amalie Arena",
        type: "Sports & Entertainment Venue",
        automation: "Automate Lightning ticket holder communication and event vendor coordination",
        impact: "Manage 20,000+ season ticket holder communications seamlessly"
      }
    ]
  },
  {
    name: 'Daytona',
    slug: 'daytona',
    region: 'Northeast Florida',
    counties: ['Volusia'],
    population: '73,000+',
    businessCount: '30,000+',
    industries: ['Automotive', 'Tourism', 'Home & Building Services', 'Healthcare'],
    landmarks: ['Daytona International Speedway', 'Daytona Beach', 'Main Street Pier', 'Boardwalk', 'Bike Week'],
    localBusinessExamples: [
      {
        business: "Daytona International Speedway",
        type: "Legendary Racing Venue",
        automation: "Automate Daytona 500 ticket holder communications and race weekend logistics",
        impact: "Manage 100,000+ race fans with instant updates on schedule changes"
      },
      {
        business: "Bike Week Event Vendors",
        type: "Annual Mega-Event",
        automation: "Local hotels and restaurants could automate booking confirmations for 500,000+ visitors",
        impact: "Never lose a booking during the world's largest motorcycle event"
      },
      {
        business: "Halifax Health Medical Center",
        type: "Regional Hospital",
        automation: "Automate emergency department follow-ups and appointment scheduling",
        impact: "Ensure 100% post-ER care compliance with automated reminders"
      },
      {
        business: "Ocean Center Convention Facility",
        type: "Event Venue",
        automation: "Streamline exhibitor coordination and attendee communication for 150+ annual events",
        impact: "Save 50+ hours per major event on manual logistics"
      }
    ]
  },
  {
    name: 'Fort Lauderdale',
    slug: 'fort-lauderdale',
    region: 'South Florida',
    counties: ['Broward'],
    population: '185,000+',
    businessCount: '90,000+',
    industries: ['Marine', 'Professional Services', 'Healthcare', 'Real Estate'],
    landmarks: ['Las Olas Boulevard', 'Fort Lauderdale Beach', 'The Intracoastal', 'Riverwalk', 'Port Everglades'],
    localBusinessExamples: [
      {
        business: "The Riverside Hotel",
        type: "Historic Las Olas Hotel",
        automation: "Automate concierge service and guest communication for this 1936 landmark",
        impact: "Provide 24/7 instant guest services without adding night staff"
      },
      {
        business: "Lauderdale Marina",
        type: "Major Yacht Marina",
        automation: "Streamline boat slip reservations and yacht service coordination",
        impact: "Manage 300+ boat slips and service requests with zero phone tag"
      },
      {
        business: "Fort Lauderdale-Hollywood International Airport",
        type: "Major Airport",
        automation: "Ground transportation companies could automate ride confirmations and flight tracking",
        impact: "Never miss a pickup with automated flight delay notifications"
      },
      {
        business: "Galleria at Fort Lauderdale",
        type: "Premier Shopping Mall",
        automation: "Individual retailers could automate customer loyalty programs and inventory alerts",
        impact: "Increase repeat purchases by 40% with automated follow-up"
      }
    ]
  },
  {
    name: 'Jacksonville',
    slug: 'jacksonville',
    region: 'Northeast Florida',
    counties: ['Duval', 'St. Johns', 'Clay'],
    population: '950,000+',
    businessCount: '75,000+',
    industries: ['Logistics', 'Home & Building Services', 'Financial Services', 'Healthcare'],
    landmarks: ['Jacksonville Beach', 'Southbank Riverwalk', 'San Marco', 'Riverside', 'The Landing'],
    localBusinessExamples: [
      {
        business: "TIAA Bank Field",
        type: "NFL Stadium",
        automation: "Automate Jaguars season ticket holder communications and game day vendor coordination",
        impact: "Manage 70,000+ attendee communications for every home game"
      },
      {
        business: "Mayo Clinic Jacksonville",
        type: "World-Class Medical Center",
        automation: "Streamline patient appointment reminders and specialist referral follow-ups",
        impact: "Zero missed appointments through automated 24/7 confirmation system"
      },
      {
        business: "Jacksonville Port Authority (JAXPORT)",
        type: "Major Seaport",
        automation: "Automate cargo tracking updates and shipping company communications",
        impact: "Handle thousands of daily logistics inquiries instantly"
      },
      {
        business: "TPC Sawgrass (THE PLAYERS Championship)",
        type: "Premier Golf Course",
        automation: "Automate tee time bookings and tournament hospitality coordination",
        impact: "Process 500+ daily booking requests during tournament season"
      }
    ]
  },
  {
    name: 'Naples',
    slug: 'naples',
    region: 'Southwest Florida',
    counties: ['Collier'],
    population: '23,000+',
    businessCount: '18,000+',
    industries: ['Luxury Services', 'Real Estate', 'Healthcare', 'Professional Services'],
    landmarks: ['Fifth Avenue South', 'Third Street South', 'Naples Pier', 'Waterside Shops', 'Port Royal'],
    localBusinessExamples: [
      {
        business: "The Ritz-Carlton Naples",
        type: "Luxury Resort",
        automation: "Automate golf tee time reservations and spa appointment coordination",
        impact: "Provide white-glove service 24/7 without overnight concierge staff"
      },
      {
        business: "Waterside Shops",
        type: "High-End Shopping",
        automation: "Luxury boutiques could automate VIP client notifications for new arrivals",
        impact: "Increase sales per client with personalized automated outreach"
      },
      {
        business: "Naples Community Hospital (NCH)",
        type: "Healthcare System",
        automation: "Automate physician referrals and wellness program enrollment",
        impact: "Ensure every patient gets timely specialist appointments"
      },
      {
        business: "Naples Sailing & Yacht Club",
        type: "Exclusive Club",
        automation: "Streamline member event RSVPs and sailing lesson bookings",
        impact: "Manage exclusive events for 1,000+ members seamlessly"
      }
    ]
  },
  {
    name: 'Orlando',
    slug: 'orlando',
    region: 'Central Florida',
    counties: ['Orange', 'Seminole', 'Osceola'],
    population: '310,000+',
    businessCount: '125,000+',
    industries: ['Tourism', 'Home & Building Services', 'Hospitality', 'Healthcare'],
    landmarks: ['Universal CityWalk', 'International Drive', 'Dr. Phillips Center', 'Lake Eola', 'Disney Springs'],
    localBusinessExamples: [
      {
        business: "Universal CityWalk Restaurants",
        type: "Major Dining Destination",
        automation: "Automate reservation management for dozens of restaurants serving millions of tourists",
        impact: "Handle 10,000+ daily reservation requests across multiple venues"
      },
      {
        business: "Orange County Convention Center",
        type: "Massive Convention Venue",
        automation: "Streamline exhibitor onboarding and attendee communication for 200+ annual events",
        impact: "Save 100+ hours per major convention on manual coordination"
      },
      {
        business: "Dr. Phillips Center for the Performing Arts",
        type: "Premier Arts Venue",
        automation: "Automate ticketing inquiries and group sales for Broadway tours and concerts",
        impact: "Process 1,000+ weekly ticket inquiries instantly"
      },
      {
        business: "AdventHealth Orlando",
        type: "Major Hospital System",
        automation: "Automate patient pre-registration and post-care follow-up communications",
        impact: "Ensure every patient receives timely follow-up care instructions"
      }
    ]
  },
  {
    name: 'Sarasota',
    slug: 'sarasota',
    region: 'Southwest Florida',
    counties: ['Sarasota'],
    population: '58,000+',
    businessCount: '28,000+',
    industries: ['Professional Services', 'Healthcare', 'Real Estate', 'Arts & Culture'],
    landmarks: ['St. Armands Circle', 'Siesta Key Beach', 'Ringling Museum', 'Main Street', 'Lido Beach'],
    localBusinessExamples: [
      {
        business: "The Ringling Museum",
        type: "World-Class Art Museum",
        automation: "Automate tour reservations and educational program enrollment",
        impact: "Handle 400,000+ annual visitors with seamless booking experience"
      },
      {
        business: "Sarasota Memorial Hospital",
        type: "Major Healthcare System",
        automation: "Streamline patient pre-admission and post-discharge communications",
        impact: "Reduce readmissions by 30% with automated care coordination"
      },
      {
        business: "St. Armands Circle Boutiques",
        type: "Upscale Shopping District",
        automation: "Retailers could automate customer loyalty programs and VIP notifications",
        impact: "Increase repeat customer visits by 50% with targeted outreach"
      },
      {
        business: "Van Wezel Performing Arts Hall",
        type: "Premier Theatre Venue",
        automation: "Automate season ticket renewals and group sales coordination",
        impact: "Manage 5,000+ season subscribers with personalized communications"
      }
    ]
  },
  {
    name: 'Tallahassee',
    slug: 'tallahassee',
    region: 'North Florida',
    counties: ['Leon'],
    population: '195,000+',
    businessCount: '45,000+',
    industries: ['Government', 'Education', 'Nonprofits', 'Professional Services'],
    landmarks: ['Florida State Capitol', 'FSU Campus', 'Collegetown', 'Gaines Street', 'Midtown'],
    localBusinessExamples: [
      {
        business: "Florida State University",
        type: "Major University",
        automation: "Academic departments could automate student advising appointments and program inquiries",
        impact: "Handle 40,000+ student inquiries per semester without expanding staff"
      },
      {
        business: "Tallahassee Memorial HealthCare",
        type: "Regional Medical Center",
        automation: "Automate patient appointment reminders and health screening follow-ups",
        impact: "Reduce no-shows by 60% with automated confirmation system"
      },
      {
        business: "Florida Department of State",
        type: "Government Agency",
        automation: "Automate business registration inquiries and document request processing",
        impact: "Process thousands of daily citizen inquiries instantly"
      },
      {
        business: "Museum of Florida History",
        type: "Cultural Institution",
        automation: "Streamline school tour bookings and educational program enrollment",
        impact: "Coordinate 200+ annual school groups with zero scheduling conflicts"
      }
    ]
  },
  {
    name: 'West Palm Beach',
    slug: 'west-palm-beach',
    region: 'South Florida',
    counties: ['Palm Beach'],
    population: '115,000+',
    businessCount: '60,000+',
    industries: ['Professional Services', 'Wealth Management', 'Healthcare', 'Real Estate'],
    landmarks: ['CityPlace', 'Clematis Street', 'The Waterfront', 'Worth Avenue (nearby)', 'Palm Beach Gardens'],
    localBusinessExamples: [
      {
        business: "The Kravis Center for the Performing Arts",
        type: "Premier Arts Venue",
        automation: "Automate season ticket holder communications and gala event coordination",
        impact: "Manage 2,500+ season subscribers with personalized automated updates"
      },
      {
        business: "Palm Beach International Airport (PBI)",
        type: "Regional Airport",
        automation: "Private jet FBOs could automate flight manifest and catering coordination",
        impact: "Handle high-net-worth client requests with white-glove automated service"
      },
      {
        business: "The Gardens Mall",
        type: "Upscale Shopping Center",
        automation: "Luxury retailers could automate VIP customer outreach and private shopping appointments",
        impact: "Increase high-ticket sales with personalized follow-up"
      },
      {
        business: "Jupiter Medical Center",
        type: "Healthcare Facility",
        automation: "Automate specialist referrals and wellness program enrollment",
        impact: "Ensure zero dropped referrals with automated coordination"
      }
    ]
  },
];

// Industry verticals
export const INDUSTRIES: Industry[] = [
  {
    name: 'Home & Building Service Companies',
    slug: 'home-services',
    icon: '',
    description: 'HVAC, Plumbing, Electrical, Roofing, General Contractors, Commercial Painting',
    challenges: ['Missed calls', 'Slow follow-up', 'Seasonal fluctuations', 'Emergency response'],
    solutions: ['24/7 AI voice agents', 'Automated scheduling', 'Lead nurturing', 'Review generation'],
  },
  {
    name: 'Automotive Dealers & Services',
    slug: 'automotive',
    icon: '',
    description: 'Car dealerships, auto repair shops, detailing services',
    challenges: ['Test drive follow-up', 'Service reminders', 'Inventory management', 'Lead qualification'],
    solutions: ['Automated follow-ups', 'Service scheduling', 'CRM integration', 'Inventory alerts'],
  },
  {
    name: 'Nonprofits & Ministries',
    slug: 'nonprofits',
    icon: '',
    description: 'Churches, charities, community organizations',
    challenges: ['Donor engagement', 'Volunteer coordination', 'Limited resources', 'Event management'],
    solutions: ['Donor communication', 'Event automation', 'Volunteer scheduling', 'Giving campaigns'],
  },
  {
    name: 'Professional Services',
    slug: 'professional-services',
    icon: '',
    description: 'Legal, accounting, consulting, healthcare practices',
    challenges: ['Client communication', 'Appointment scheduling', 'Document management', 'Billing'],
    solutions: ['Client portals', 'Automated reminders', 'Document automation', 'Proposal generation'],
  },
];

// Services (4 Pillars)
export const SERVICES: Service[] = [
  {
    name: 'Consult',
    title: 'AI Consulting Services',
    slug: 'ai-consulting',
    icon: '',
    headline: 'Discover Where AI Drives Revenue for Your Business',
    description: 'Get a custom AI roadmap built around your workflows, not generic templates',
    details: 'We map your workflows, uncover automation opportunities, and design a custom strategy that drives measurable ROI.',
    deliverables: [
      'Complete Workflow Audit & Process Mapping',
      'AI Opportunity Matrix with Prioritization',
      '90-Day AI Implementation Roadmap',
      'ROI Forecast & Budget Planning',
      'Technology Stack Recommendations',
      'Risk Assessment & Mitigation Strategy',
    ],
    process: [
      {
        step: 'Discovery & Current State Analysis',
        description:
          'We start with a deep-dive session to understand your business model, current workflows, pain points, and growth goals. We document every process that touches customers or revenue.',
      },
      {
        step: 'Workflow Mapping & Bottleneck Identification',
        description:
          'Our team maps your entire customer journey and internal operations, identifying where time is wasted, leads are lost, and revenue opportunities are missed.',
      },
      {
        step: 'AI Opportunity Assessment & Prioritization',
        description:
          'We evaluate each workflow for automation potential, ranking opportunities by impact, cost, and implementation complexity. You get a clear picture of what to automate first.',
      },
      {
        step: 'Custom Strategy & 90-Day Roadmap Delivery',
        description:
          'You receive a comprehensive roadmap with specific AI solutions, expected ROI, timeline, budget, and success metrics. Everything you need to make an informed decision and get executive buy-in.',
      },
    ],
  },
  {
    name: 'Build',
    title: 'Custom AI Development',
    slug: 'custom-ai-development',
    icon: '',
    headline: 'Build AI Systems That Work the Way You Do',
    description: 'Custom automation that integrates seamlessly—no process overhauls, just results',
    details:
      'We build AI agents, automated workflows, and CRM integrations that save hours daily and increase revenue without changing how your team works.',
    deliverables: [
      'AI Voice & Chat Agents for Customer Service',
      'Automated Workflow & Process Automation',
      'Bi-Directional CRM Integration',
      'Custom Analytics Dashboards',
      'Lead Qualification & Routing Systems',
      'Automated Follow-Up & Nurture Sequences',
    ],
    process: [
      {
        step: 'Requirements Gathering & Technical Design',
        description:
          'We collaborate with your team to define exact requirements, map integration points, and design the technical architecture. You approve everything before we write a single line of code.',
      },
      {
        step: 'Development & Iterative Testing',
        description:
          'Our developers build your custom AI solution using proven frameworks like n8n, Make, and custom APIs. You get weekly demos and can request changes throughout development.',
      },
      {
        step: 'Integration & Data Migration',
        description:
          'We connect your new AI systems to existing tools (CRM, calendar, email, SMS platforms) and migrate historical data so nothing is lost and everything works seamlessly.',
      },
      {
        step: 'Deployment, Training & Ongoing Optimization',
        description:
          'We launch your AI system, train your team, and monitor performance for 30 days. We optimize based on real-world results and ensure you hit your ROI targets.',
      },
    ],
  },
  {
    name: 'Grow',
    title: 'AI Powered Marketing & Growth',
    slug: 'ai-powered-marketing',
    icon: '',
    headline: 'Scale Revenue Without Scaling Your Team',
    description: 'AI-powered marketing that converts more leads, faster—automatically',
    details:
      'Intelligent marketing campaigns, automated lead generation, and data-driven insights that convert more leads without hiring more people.',
    deliverables: [
      'Automated Lead Generation Systems',
      'AI-Powered Email & SMS Campaigns',
      'Multi-Channel Ad Optimization',
      'Predictive Analytics Dashboards',
      'Conversion Rate Optimization',
      'Automated Retargeting & Nurture Campaigns',
    ],
    process: [
      {
        step: 'Growth Audit & Conversion Analysis',
        description:
          'We analyze your current marketing funnel, conversion rates, customer acquisition cost (CAC), and lifetime value (LTV) to identify the biggest growth opportunities.',
      },
      {
        step: 'Campaign Strategy & AI System Design',
        description:
          'We design multi-channel campaigns powered by AI: automated lead gen, personalized email/SMS sequences, smart retargeting, and predictive analytics to maximize ROI.',
      },
      {
        step: 'Implementation & Campaign Launch',
        description:
          'We build and launch your AI-powered marketing systems, integrating with your existing tools and setting up advanced tracking so you see exactly what is working.',
      },
      {
        step: 'Optimization & Scaling',
        description:
          'We continuously analyze performance data, A/B test messaging, optimize targeting, and scale what works. You get weekly reports showing revenue impact and ROI.',
      },
    ],
  },
  {
    name: 'Educate',
    title: 'AI Education & Training',
    slug: 'ai-education-training',
    icon: '',
    headline: 'Transform Your Team Into<br/>AI Experts',
    description: 'Hands-on training that drives adoption and continuous improvement',
    details:
      'Hands-on training, workflow optimization workshops, and ongoing coaching that turns your team into AI power users who drive continuous improvement.',
    deliverables: [
      'Custom Team Training Programs',
      'AI Best Practices & Playbooks',
      'Workflow Optimization Workshops',
      'AI Certification for Your Staff',
      'Ongoing Coaching & Support',
      'Internal AI Champions Development',
    ],
    process: [
      {
        step: 'Team Assessment & Learning Path Design',
        description:
          'We evaluate your team current AI knowledge, identify skill gaps, and design a custom training program tailored to your business needs and team roles.',
      },
      {
        step: 'Hands-On Training & Workshops',
        description:
          'Your team participates in interactive workshops where they learn to use AI tools, build automations, and optimize workflows. Real projects, not theory.',
      },
      {
        step: 'Implementation Support & Certification',
        description:
          'We provide ongoing support as your team applies what they learned. Team members who complete the program receive AI proficiency certification.',
      },
      {
        step: 'Continuous Learning & AI Champions Program',
        description:
          'We identify and develop internal AI champions who drive adoption across your organization. Monthly coaching sessions keep your team up-to-date with the latest AI capabilities.',
      },
    ],
  },
];

// 6-Stage Customer Journey System
export const SIX_STAGES = [
  {
    number: 1,
    name: 'Lead Generation & Initial Capture',
    slug: 'lead-generation',
    icon: '',
    problem: 'Businesses struggle with manual lead capture, low-quality leads, and inefficient qualification',
    solutions: [
      {
        name: 'Automated Multi-Source Lead Collection',
        description: 'Pulls leads from ads, social media, website forms, chatbots automatically',
        tech: 'n8n workflows, API integrations',
        features: ['Multi-channel integration', 'Real-time capture', 'Duplicate detection'],
      },
      {
        name: 'AI-Driven Lead Capture & Qualification',
        description: 'Instantly captures and assesses using intelligent forms and chatbots',
        tech: 'AI agents, qualification logic',
        features: ['Smart forms', 'AI chatbots', 'Auto-qualification'],
      },
      {
        name: 'Intelligent Lead Scoring System',
        description: 'Ranks leads as Hot, Warm, Cold based on behavior and data',
        tech: 'Predictive analytics, behavior tracking',
        features: ['Behavior scoring', 'Predictive models', 'Priority routing'],
      },
      {
        name: 'Seamless CRM Data Syncing',
        description: 'Real-time access to lead interactions and status across platforms',
        tech: 'Bi-directional API sync',
        features: ['Real-time sync', 'Cross-platform data', 'Automatic updates'],
      },
    ],
    metrics: [
      { value: '98%', label: 'Lead capture rate' },
      { value: '<60s', label: 'Response time' },
      { value: '85%', label: 'Qualification accuracy' },
    ],
    realWorldExample: 'Precision Plumbing went from 60% to 98% lead capture rate by implementing automated multi-channel lead collection. Response time dropped from 4+ hours to under 60 seconds, resulting in 67% revenue increase in 90 days.',
  },
  {
    number: 2,
    name: 'Lead Nurturing & Follow-Up',
    slug: 'lead-nurturing',
    icon: '',
    problem: 'Inconsistent follow-ups lead to lost opportunities and poor conversion rates',
    solutions: [
      {
        name: 'Behavior-Based Automated Follow-Up',
        description: 'Triggers follow-ups based on lead actions and engagement patterns',
        tech: 'Behavioral triggers, workflow automation',
        features: ['Behavior tracking', 'Trigger automation', 'Smart timing'],
      },
      {
        name: 'AI-Powered Personalized Email & SMS',
        description: 'Tailored messaging based on lead profile and behavior',
        tech: 'AI content generation, personalization engine',
        features: ['Dynamic content', 'Personalization', 'A/B testing'],
      },
      {
        name: 'Multi-Channel Nurture Sequences',
        description: 'Coordinated campaigns across email, SMS, and voice',
        tech: 'Omnichannel orchestration',
        features: ['Channel coordination', 'Sequence management', 'Performance tracking'],
      },
    ],
    metrics: [
      { value: '3.2x', label: 'Engagement rate' },
      { value: '78%', label: 'Response rate' },
      { value: '45%', label: 'Faster conversion' },
    ],
    realWorldExample: 'Sunshine Auto Group increased qualified lead conversion from 18% to 41% using behavior-based nurture campaigns. Their sales team now spends time only on hot leads, resulting in $340K monthly revenue increase.',
  },
  {
    number: 3,
    name: 'Appointment Scheduling & Qualification',
    slug: 'appointment-scheduling',
    icon: '',
    problem: 'High no-shows, scheduling conflicts, and unqualified appointments waste time',
    solutions: [
      {
        name: 'AI Self-Scheduling System',
        description: 'Customers book directly based on real-time availability',
        tech: 'Calendar integration, smart scheduling',
        features: ['Real-time availability', 'Auto-booking', 'Conflict prevention'],
      },
      {
        name: 'Pre-Appointment Qualification Surveys',
        description: 'Automated questions ensure appointment quality before booking',
        tech: 'Dynamic forms, scoring algorithms',
        features: ['Dynamic questions', 'Quality scoring', 'Pre-qualification'],
      },
      {
        name: 'Automated Reminders & Confirmations',
        description: 'Reduces no-shows with multi-channel reminder sequences',
        tech: 'SMS, email, voice reminders',
        features: ['Multi-channel alerts', 'Timed sequences', 'Confirmation tracking'],
      },
    ],
    metrics: [
      { value: '92%', label: 'Show-up rate' },
      { value: '3.5x', label: 'Booking conversion' },
      { value: '85%', label: 'Calendar utilization' },
    ],
    realWorldExample: 'Elite HVAC Solutions reduced no-shows from 32% to 8% with automated reminders and qualification. Their calendar utilization jumped to 85%, allowing them to handle 287 more maintenance contracts annually.',
  },
  {
    number: 4,
    name: 'Sales Process & Conversion Optimization',
    slug: 'sales-optimization',
    icon: '',
    problem: 'Disorganized pipelines, slow proposals, and dropped leads hurt revenue',
    solutions: [
      {
        name: 'AI-Powered Pipeline Management',
        description: 'Automatic stage progression and deal health scoring',
        tech: 'CRM automation, predictive analytics',
        features: ['Auto stage progression', 'Deal scoring', 'Priority alerts'],
      },
      {
        name: 'Instant Proposal & Quote Generation',
        description: 'Templates with dynamic pricing based on customer data',
        tech: 'Document automation, pricing engine',
        features: ['Template library', 'Dynamic pricing', 'One-click generation'],
      },
      {
        name: 'Predictive Sales Forecasting',
        description: 'Data-driven insights on deal probability and revenue projection',
        tech: 'Machine learning models',
        features: ['Win probability', 'Revenue forecasting', 'Trend analysis'],
      },
    ],
    metrics: [
      { value: '38%', label: 'Win rate increase' },
      { value: '5.2 days', label: 'Avg sales cycle' },
      { value: '+42%', label: 'Deal size growth' },
    ],
    realWorldExample: 'Summit Roofing reduced quote delivery time from 3-5 days to under 2 hours using AI quote generation. Their close rate jumped from 22% to 38%, adding $680K in annual revenue with the same crew size.',
  },
  {
    number: 5,
    name: 'Project Management & Execution',
    slug: 'project-management',
    icon: '',
    problem: 'Disorganized workflows, project delays, and lack of visibility slow delivery',
    solutions: [
      {
        name: 'Automated Task Assignment & Routing',
        description: 'Jobs automatically assigned based on skills, availability, location',
        tech: 'Workflow orchestration, routing algorithms',
        features: ['Smart routing', 'Skill matching', 'Load balancing'],
      },
      {
        name: 'Real-Time Project Dashboards',
        description: 'Live visibility into all active projects and status updates',
        tech: 'Data aggregation, dashboard tools',
        features: ['Live updates', 'Performance metrics', 'Resource tracking'],
      },
      {
        name: 'Client Communication Automation',
        description: 'Automatic status updates keep clients informed without manual work',
        tech: 'Event-triggered messaging',
        features: ['Auto-updates', 'Milestone notifications', 'Two-way communication'],
      },
    ],
    metrics: [
      { value: '91%', label: 'On-time delivery' },
      { value: '4.7/5', label: 'Client satisfaction' },
      { value: '+40%', label: 'Capacity increase' },
    ],
    realWorldExample: 'Coastal Construction Group improved on-time project completion from 67% to 91% with AI project management. Client satisfaction scores rose from 3.2 to 4.7, and they increased capacity by 40% without adding staff.',
  },
  {
    number: 6,
    name: 'Retention, Upselling & Post-Project',
    slug: 'retention-upselling',
    icon: '',
    problem: 'Businesses lose repeat opportunities and miss upsell potential after project completion',
    solutions: [
      {
        name: 'Automated Follow-Up & Check-Ins',
        description: 'Scheduled touchpoints to maintain relationships and identify needs',
        tech: 'Timed workflows, engagement tracking',
        features: ['Scheduled check-ins', 'Engagement scoring', 'Relationship nurturing'],
      },
      {
        name: 'AI-Powered Review & Referral Campaigns',
        description: 'Automated requests for reviews and referrals at optimal times',
        tech: 'Timing optimization, personalized requests',
        features: ['Optimal timing', 'Personalized requests', 'Multi-platform reviews'],
      },
      {
        name: 'Intelligent Upsell & Cross-Sell',
        description: 'Product recommendations based on customer history and behavior',
        tech: 'Recommendation engine',
        features: ['Smart recommendations', 'Purchase history analysis', 'Behavior patterns'],
      },
      {
        name: 'Customer Feedback Analysis',
        description: 'AI analyzes feedback to identify improvement opportunities',
        tech: 'Sentiment analysis, NLP',
        features: ['Sentiment tracking', 'Trend identification', 'Actionable insights'],
      },
    ],
    metrics: [
      { value: '+57%', label: 'Repeat rate' },
      { value: '3.2x', label: 'Customer LTV' },
      { value: '24%', label: 'Referral rate' },
    ],
    realWorldExample: 'Premier Accounting Partners increased client retention from 61% to 84% with automated follow-ups and feedback analysis. Annual fundraising grew 38%, and they handle 45 more clients without additional staff.',
  },
];

// Statistics and metrics
export const STATS = {
  yearsExperience: 15,
  businessesServed: 50,
  hoursSaved: 5000,
  averageROI: 4.27,
  clientRetention: 0.93,
  avgTimeSaved: 20, // hours per week
  avgRevenueIncrease: 0.35, // 35%
};

// Pain points (for Problem Agitation section)
export const PAIN_POINTS = [
  {
    stat: '40%',
    problem: 'Leads falling through cracks',
    impact: '$12K-$96K lost revenue monthly',
  },
  {
    stat: '15+',
    problem: 'Hours per week on repetitive tasks',
    impact: 'That\'s 780 hours annually wasted',
  },
  {
    stat: '50%+',
    problem: 'Of leads never get follow-up',
    impact: 'They call your competitor instead',
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mike Thompson',
    title: 'Owner',
    company: 'Precision Plumbing & Drain',
    industry: 'Home & Building Services',
    location: 'Tampa, FL',
    quote: 'We went from missing 40% of calls to capturing every single lead. Revenue increased 67% in 90 days.',
    result: '67% revenue increase',
    metric: '+67% Revenue',
    avatar: '/testimonials/mike-thompson.jpg',
    video: '/testimonials/fox-valley-video.mp4',
  },
  // Add more testimonials as you get them
];

// Keywords (for SEO)
export const PRIMARY_KEYWORDS = [
  'AI automation for home & building service businesses',
  'business automation Florida',
  'AI voice agents',
  'workflow automation',
  'home & building service automation',
];

export const CITY_KEYWORDS_TEMPLATE = {
  primary: '[city] AI automation',
  secondary: 'business automation consultant [city]',
  tertiary: 'workflow automation services [city]',
};

// Case Studies - Detailed success stories
export interface CaseStudy {
  id: string;
  slug: string;
  featured: boolean;
  client: {
    name: string;
    industry: string;
    location: string;
    size: string;
    yearsFounded: string;
  };
  challenge: string;
  solution: string;
  implementation: {
    duration: string;
    stages: number[];
    services: string[];
  };
  results: Array<{
    metric: string;
    value: string;
    timeframe: string;
  }>;
  testimonial: {
    quote: string;
    name: string;
    title: string;
  };
  metrics: {
    beforeAfter: Array<{
      metric: string;
      before: string;
      after: string;
      improvement: string;
    }>;
  };
  tags: string[];
  image?: string;
  publishedDate: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    slug: 'precision-plumbing-tampa',
    featured: true,
    client: {
      name: 'Precision Plumbing & Drain',
      industry: 'Home & Building Services - Plumbing',
      location: 'Tampa, FL',
      size: '15 employees',
      yearsFounded: '12 years',
    },
    challenge:
      'Precision Plumbing was losing 40% of incoming leads due to slow response times. With only 2 office staff handling calls during business hours, after-hours calls went to voicemail and were rarely followed up. Their average lead response time was 4+ hours, and they had no system for tracking or nurturing leads who weren\'t ready to book immediately.',
    solution:
      'Implemented our 6-Stage System with focus on Stages 1-3: automated lead capture across phone, web forms, and social media; instant AI-powered responses within 60 seconds; intelligent qualification and routing to appropriate technicians; automated follow-up sequences for quotes and scheduling.',
    implementation: {
      duration: '6 weeks',
      stages: [1, 2, 3, 4],
      services: ['Custom AI Development', 'AI-Powered Marketing'],
    },
    results: [
      {
        metric: 'Lead Response Time',
        value: '60 seconds',
        timeframe: 'Down from 4+ hours',
      },
      {
        metric: 'Lead Capture Rate',
        value: '98%',
        timeframe: 'Up from 60%',
      },
      {
        metric: 'Revenue Increase',
        value: '67%',
        timeframe: 'Within 90 days',
      },
      {
        metric: 'Jobs Booked',
        value: '+143',
        timeframe: 'Additional monthly jobs',
      },
    ],
    testimonial: {
      quote:
        'We went from missing 40% of calls to capturing every single lead. The AI responds instantly while our team focuses on the work. Revenue is up 67% in just 90 days, and we\'re finally growing without drowning in admin work.',
      name: 'Mike Rodriguez',
      title: 'Owner',
    },
    metrics: {
      beforeAfter: [
        {
          metric: 'Lead Response Time',
          before: '4-6 hours',
          after: '<60 seconds',
          improvement: '99% faster',
        },
        {
          metric: 'Lead Capture Rate',
          before: '60%',
          after: '98%',
          improvement: '+38%',
        },
        {
          metric: 'Monthly Revenue',
          before: '$85,000',
          after: '$142,000',
          improvement: '+67%',
        },
        {
          metric: 'Jobs Booked/Month',
          before: '120',
          after: '263',
          improvement: '+119%',
        },
      ],
    },
    tags: ['Home & Building Services', 'Lead Generation', 'Tampa', 'ROI 400%+'],
    publishedDate: '2024-11-15',
  },
  {
    id: '2',
    slug: 'sunshine-auto-jacksonville',
    featured: true,
    client: {
      name: 'Sunshine Auto Group',
      industry: 'Automotive - Dealership',
      location: 'Jacksonville, FL',
      size: '45 employees, 3 locations',
      yearsFounded: '8 years',
    },
    challenge:
      'Sunshine Auto Group had strong foot traffic but struggled with digital leads. Their sales team spent 60% of their time on unqualified leads, and follow-up on test drive requests was inconsistent. They had no automated system for nurturing leads who were "just looking," resulting in lost sales to competitors who stayed in touch.',
    solution:
      'Deployed comprehensive 6-Stage automation focused on lead qualification, intelligent routing, and nurture campaigns. AI handles initial contact, qualifies budget and timeline, schedules test drives, and runs automated follow-up sequences based on customer behavior and readiness signals.',
    implementation: {
      duration: '8 weeks',
      stages: [1, 2, 3, 4, 5],
      services: ['Custom AI Development', 'AI-Powered Marketing', 'AI Education & Training'],
    },
    results: [
      {
        metric: 'Qualified Lead Conversion',
        value: '41%',
        timeframe: 'Up from 18%',
      },
      {
        metric: 'Sales Team Efficiency',
        value: '+156%',
        timeframe: 'More time on hot leads',
      },
      {
        metric: 'Test Drives Booked',
        value: '+89',
        timeframe: 'Additional per month',
      },
      {
        metric: 'Revenue Increase',
        value: '$340K/month',
        timeframe: 'Net additional revenue',
      },
    ],
    testimonial: {
      quote:
        'The AI qualification system is a game-changer. Our sales team now spends their time with people ready to buy, not tire-kickers. We\'re closing 41% of qualified leads versus 18% before, and monthly revenue is up over $340K.',
      name: 'Jennifer Martinez',
      title: 'General Manager',
    },
    metrics: {
      beforeAfter: [
        {
          metric: 'Lead Qualification Time',
          before: '25 min per lead',
          after: '90 seconds',
          improvement: '94% faster',
        },
        {
          metric: 'Conversion Rate (Qualified)',
          before: '18%',
          after: '41%',
          improvement: '+128%',
        },
        {
          metric: 'Monthly Vehicle Sales',
          before: '47',
          after: '78',
          improvement: '+66%',
        },
        {
          metric: 'Sales Team Productivity',
          before: '3.9 cars/salesperson',
          after: '8.7 cars/salesperson',
          improvement: '+123%',
        },
      ],
    },
    tags: ['Automotive', 'Lead Qualification', 'Jacksonville', 'Sales Automation'],
    publishedDate: '2024-10-22',
  },
  {
    id: '3',
    slug: 'florida-community-foundation',
    featured: false,
    client: {
      name: 'Florida Community Foundation',
      industry: 'Nonprofit',
      location: 'Miami, FL',
      size: '8 staff, 200+ volunteers',
      yearsFounded: '15 years',
    },
    challenge:
      'The foundation relied heavily on manual outreach for donor engagement and event management. With a small team, they couldn\'t keep up with timely donor acknowledgments, event RSVPs, or volunteer coordination. Donation follow-up was inconsistent, and they had no way to segment donors for targeted campaigns.',
    solution:
      'Implemented AI-powered donor management and event coordination system. Automated thank-you messages, donation receipts, event reminders, volunteer scheduling, and personalized outreach campaigns based on donor history and interests. AI handles routine communications while staff focuses on major donor relationships.',
    implementation: {
      duration: '5 weeks',
      stages: [1, 2, 3, 5, 6],
      services: ['Custom AI Development', 'AI-Powered Marketing'],
    },
    results: [
      {
        metric: 'Donor Retention',
        value: '84%',
        timeframe: 'Up from 61%',
      },
      {
        metric: 'Event Attendance',
        value: '+52%',
        timeframe: 'More attendees per event',
      },
      {
        metric: 'Volunteer Hours',
        value: '+2,400 hours/year',
        timeframe: 'Better coordination',
      },
      {
        metric: 'Fundraising Increase',
        value: '38%',
        timeframe: 'Year-over-year growth',
      },
    ],
    testimonial: {
      quote:
        'With a tiny team, we can now run campaigns that feel personal to each donor. Retention jumped from 61% to 84%, and our annual fundraising is up 38%. The AI handles the routine stuff flawlessly, so we can focus on building deep relationships.',
      name: 'Dr. Patricia Williams',
      title: 'Executive Director',
    },
    metrics: {
      beforeAfter: [
        {
          metric: 'Thank You Response Time',
          before: '3-5 days',
          after: '2 minutes',
          improvement: '99% faster',
        },
        {
          metric: 'Donor Retention Rate',
          before: '61%',
          after: '84%',
          improvement: '+38%',
        },
        {
          metric: 'Annual Fundraising',
          before: '$420,000',
          after: '$580,000',
          improvement: '+38%',
        },
        {
          metric: 'Staff Time on Admin',
          before: '25 hrs/week',
          after: '6 hrs/week',
          improvement: '-76%',
        },
      ],
    },
    tags: ['Nonprofit', 'Donor Management', 'Miami', 'Event Automation'],
    publishedDate: '2024-09-18',
  },
  {
    id: '4',
    slug: 'mitchell-law-group-orlando',
    featured: false,
    client: {
      name: 'Mitchell Law Group',
      industry: 'Professional Services - Law',
      location: 'Orlando, FL',
      size: '12 attorneys, 8 support staff',
      yearsFounded: '20 years',
    },
    challenge:
      'The firm was drowning in client intake calls, spending hours on unqualified leads and missing billable time. Initial consultations took 45 minutes per prospect, most of whom weren\'t a good fit. Case updates and client communication consumed paralegal time, and document collection for new cases was slow and error-prone.',
    solution:
      'Built intelligent intake system with AI-powered qualification, automated scheduling, document collection workflows, and client communication portal. AI pre-qualifies leads based on case type and budget, collects necessary information before consultations, and handles routine client updates automatically.',
    implementation: {
      duration: '7 weeks',
      stages: [1, 2, 3, 4],
      services: ['AI Consulting', 'Custom AI Development'],
    },
    results: [
      {
        metric: 'Qualified Consultation Rate',
        value: '78%',
        timeframe: 'Up from 34%',
      },
      {
        metric: 'Billable Hours Recovered',
        value: '+240 hours/month',
        timeframe: 'Attorneys\' time saved',
      },
      {
        metric: 'Client Onboarding Time',
        value: '2 days',
        timeframe: 'Down from 12 days',
      },
      {
        metric: 'Revenue Increase',
        value: '29%',
        timeframe: 'More billable work',
      },
    ],
    testimonial: {
      quote:
        'We got our weekends back. The AI handles intake brilliantly—by the time prospects reach us, they\'re pre-qualified and all docs are collected. Our attorneys gained 240+ billable hours per month, and revenue is up 29%.',
      name: 'Robert Mitchell',
      title: 'Managing Partner',
    },
    metrics: {
      beforeAfter: [
        {
          metric: 'Intake Qualification Time',
          before: '45 min per lead',
          after: '5 min per lead',
          improvement: '89% faster',
        },
        {
          metric: 'Qualified Lead Rate',
          before: '34%',
          after: '78%',
          improvement: '+129%',
        },
        {
          metric: 'Monthly Billable Hours',
          before: '1,680',
          after: '1,920',
          improvement: '+14%',
        },
        {
          metric: 'Average Case Value',
          before: '$8,500',
          after: '$12,100',
          improvement: '+42%',
        },
      ],
    },
    tags: ['Professional Services', 'Legal', 'Orlando', 'Client Intake'],
    publishedDate: '2024-08-12',
  },
  {
    id: '5',
    slug: 'elite-hvac-fort-lauderdale',
    featured: false,
    client: {
      name: 'Elite HVAC Solutions',
      industry: 'Home & Building Services - HVAC',
      location: 'Fort Lauderdale, FL',
      size: '22 technicians',
      yearsFounded: '9 years',
    },
    challenge:
      'Elite HVAC had seasonal demand spikes they couldn\'t handle efficiently. During Florida summers, they missed 50%+ of calls, had poor service reminder follow-through, and struggled with technician scheduling. No system for preventive maintenance contracts meant they were always chasing emergency work instead of predictable recurring revenue.',
    solution:
      'Deployed comprehensive automation covering lead capture, intelligent routing based on technician availability and location, automated service reminders, maintenance contract management, and customer feedback collection. System integrates with their existing CRM and handles peak season demand surges automatically.',
    implementation: {
      duration: '9 weeks',
      stages: [1, 2, 3, 4, 5, 6],
      services: ['Custom AI Development', 'AI-Powered Marketing', 'AI Education & Training'],
    },
    results: [
      {
        metric: 'Call Capture Rate',
        value: '99%',
        timeframe: 'Even during peak season',
      },
      {
        metric: 'Maintenance Contracts',
        value: '+287',
        timeframe: 'Recurring revenue boost',
      },
      {
        metric: 'Customer Retention',
        value: '91%',
        timeframe: 'Up from 68%',
      },
      {
        metric: 'Annual Revenue Increase',
        value: '$580K',
        timeframe: 'From efficiency + contracts',
      },
    ],
    testimonial: {
      quote:
        'Summer used to be chaos—phones ringing off the hook, customers slipping through. Now the AI handles it all. We went from 68% to 91% retention, added 287 maintenance contracts, and revenue jumped $580K annually. Best investment we ever made.',
      name: 'Carlos Mendez',
      title: 'Owner',
    },
    metrics: {
      beforeAfter: [
        {
          metric: 'Peak Season Call Capture',
          before: '47%',
          after: '99%',
          improvement: '+111%',
        },
        {
          metric: 'Maintenance Contracts',
          before: '142',
          after: '429',
          improvement: '+202%',
        },
        {
          metric: 'Customer Retention',
          before: '68%',
          after: '91%',
          improvement: '+34%',
        },
        {
          metric: 'Recurring Revenue',
          before: '$190K/year',
          after: '$520K/year',
          improvement: '+174%',
        },
      ],
    },
    tags: ['Home & Building Services', 'HVAC', 'Fort Lauderdale', 'Seasonal Demand'],
    publishedDate: '2024-07-25',
  },
  {
    id: '6',
    slug: 'premier-accounting-tampa',
    featured: false,
    client: {
      name: 'Premier Accounting Partners',
      industry: 'Professional Services - Accounting',
      location: 'Tampa, FL',
      size: '6 CPAs, 4 staff',
      yearsFounded: '14 years',
    },
    challenge:
      'Tax season overwhelmed the small team with client questions, document requests, and appointment scheduling. CPAs spent 40% of their time on administrative tasks instead of high-value tax strategy work. Client onboarding took weeks, and there was no automated way to collect necessary documents or answer common questions.',
    solution:
      'Implemented AI-powered client portal with automated document collection, intelligent Q&A system for common tax questions, appointment scheduling, and proactive communication for deadlines and document needs. AI triages client requests and handles routine queries, escalating complex issues to CPAs.',
    implementation: {
      duration: '6 weeks',
      stages: [1, 2, 3, 4, 6],
      services: ['Custom AI Development', 'AI Education & Training'],
    },
    results: [
      {
        metric: 'Admin Time Reduction',
        value: '76%',
        timeframe: 'CPAs focused on strategy',
      },
      {
        metric: 'Client Onboarding Time',
        value: '3 days',
        timeframe: 'Down from 18 days',
      },
      {
        metric: 'Client Capacity Increase',
        value: '+45 clients',
        timeframe: 'Without adding staff',
      },
      {
        metric: 'Revenue Per CPA',
        value: '+$82K',
        timeframe: 'Annual increase',
      },
    ],
    testimonial: {
      quote:
        'Tax season went from nightmare to manageable. The AI handles 90% of client questions and document collection automatically. We took on 45 more clients without hiring, and each CPA is generating $82K more annually. It\'s transformed our practice.',
      name: 'Lisa Chen',
      title: 'Managing Partner',
    },
    metrics: {
      beforeAfter: [
        {
          metric: 'Document Collection Time',
          before: '12 days average',
          after: '2 days average',
          improvement: '83% faster',
        },
        {
          metric: 'Client Question Response',
          before: '24-48 hours',
          after: '<5 minutes',
          improvement: '99% faster',
        },
        {
          metric: 'Clients Per CPA',
          before: '85',
          after: '130',
          improvement: '+53%',
        },
        {
          metric: 'Annual Revenue',
          before: '$1.2M',
          after: '$1.7M',
          improvement: '+42%',
        },
      ],
    },
    tags: ['Professional Services', 'Accounting', 'Tampa', 'Tax Season'],
    publishedDate: '2024-06-30',
  },
  {
    id: '7',
    slug: 'summit-roofing-solutions',
    featured: false,
    client: {
      name: 'Summit Roofing Solutions',
      industry: 'Home & Building Services - Roofing',
      location: 'Tampa, FL',
      size: '15 employees, $2.3M annual revenue',
      yearsFounded: '2015',
    },
    challenge:
      'Summit Roofing was struggling with quote follow-up and seasonal demand fluctuations. 58% of inspection leads went cold within 72 hours due to slow quote delivery. During storm season they were overwhelmed; during slow months they had idle crews. Manual job scheduling led to inefficient routing and wasted drive time.',
    solution:
      'We implemented our 6-Stage System focusing on automated quote generation, smart lead nurturing, and predictive scheduling. The AI analyzes inspection photos to generate instant quotes, follows up with homeowners automatically, and optimizes crew routing based on weather patterns and material availability.',
    implementation: {
      duration: '7 weeks',
      stages: [1, 2, 3, 4],
      services: [
        'AI-powered inspection analysis',
        'Automated quote generation',
        'Smart lead nurturing sequences',
        'Predictive crew scheduling',
        'Dynamic routing optimization',
        'Seasonal demand forecasting',
      ],
    },
    results: [
      {
        metric: 'Quote Delivery Time',
        value: '< 2 hours',
        timeframe: 'down from 3-5 days',
      },
      {
        metric: 'Quote-to-Close Rate',
        value: '38%',
        timeframe: 'up from 22%',
      },
      {
        metric: 'Jobs Completed',
        value: '+127 annually',
        timeframe: 'same crew size',
      },
      {
        metric: 'Annual Revenue Increase',
        value: '$680K',
        timeframe: 'first 12 months',
      },
    ],
    testimonial: {
      quote:
        'The instant quote system is a game changer. Homeowners get professional quotes with pricing while our estimator is still on their roof. Our close rate jumped from 22% to 38% because we strike while the iron is hot. The routing optimization alone saves us 8-10 hours of drive time per week.',
      name: 'Marcus Rodriguez',
      title: 'Owner & Founder',
    },
    metrics: {
      beforeAfter: [
        {
          metric: 'Quote Delivery Speed',
          before: '3-5 days',
          after: '< 2 hours',
          improvement: '95% faster',
        },
        {
          metric: 'Lead-to-Close Rate',
          before: '22%',
          after: '38%',
          improvement: '+73%',
        },
        {
          metric: 'Jobs Per Month',
          before: '42',
          after: '52',
          improvement: '+24%',
        },
        {
          metric: 'Drive Time Waste',
          before: '18 hrs/week',
          after: '8 hrs/week',
          improvement: '56% reduction',
        },
      ],
    },
    tags: ['Home & Building Services', 'Roofing', 'Tampa', 'Quote Automation'],
    publishedDate: '2024-08-22',
  },
  {
    id: '8',
    slug: 'coastal-construction-group',
    featured: true,
    client: {
      name: 'Coastal Construction Group',
      industry: 'Home & Building Services - General Contracting',
      location: 'Jacksonville, FL',
      size: '32 employees, $5.8M annual revenue',
      yearsFounded: '2009',
    },
    challenge:
      'Coastal was losing $40K+ monthly to project delays, change order disputes, and subcontractor miscommunication. Their PM team spent 15+ hours weekly on status updates and client calls. Material orders were often delayed or incorrect. Client satisfaction scores were 3.2/5 due to poor communication and timeline slippage.',
    solution:
      'We built a comprehensive AI project management system with automated client updates, smart subcontractor coordination, and predictive timeline management. The system monitors every job phase, sends proactive updates to clients, coordinates sub schedules, and flags potential delays before they happen.',
    implementation: {
      duration: '9 weeks',
      stages: [1, 2, 3, 4, 5],
      services: [
        'AI project timeline management',
        'Automated client communication portal',
        'Subcontractor coordination system',
        'Material order optimization',
        'Change order documentation AI',
        'Predictive delay detection',
        'Client satisfaction tracking',
      ],
    },
    results: [
      {
        metric: 'On-Time Project Completion',
        value: '91%',
        timeframe: 'up from 67%',
      },
      {
        metric: 'Client Satisfaction Score',
        value: '4.7/5',
        timeframe: 'up from 3.2/5',
      },
      {
        metric: 'PM Admin Time Saved',
        value: '18 hours/week',
        timeframe: 'per project manager',
      },
      {
        metric: 'Project Capacity',
        value: '+40%',
        timeframe: 'same team size',
      },
    ],
    testimonial: {
      quote:
        'This system transformed how we run projects. Clients get daily updates automatically, subs know exactly when they\'re needed, and we catch delays 2-3 weeks before they become problems. We went from managing 12 projects at once to 17, with higher quality and happier clients. Our Google reviews went from 4.1 to 4.8 stars.',
      name: 'David Patterson',
      title: 'President & COO',
    },
    metrics: {
      beforeAfter: [
        {
          metric: 'Projects On-Time',
          before: '67%',
          after: '91%',
          improvement: '+36% improvement',
        },
        {
          metric: 'Client Communication Time',
          before: '15 hrs/week per PM',
          after: '3 hrs/week per PM',
          improvement: '80% reduction',
        },
        {
          metric: 'Change Order Disputes',
          before: '18% of projects',
          after: '3% of projects',
          improvement: '83% reduction',
        },
        {
          metric: 'Project Capacity',
          before: '12 concurrent',
          after: '17 concurrent',
          improvement: '+42%',
        },
      ],
    },
    tags: ['Home & Building Services', 'General Contracting', 'Jacksonville', 'Project Management'],
    publishedDate: '2024-09-14',
  },
  {
    id: '9',
    slug: 'precision-electric-services',
    featured: false,
    client: {
      name: 'Precision Electric Services',
      industry: 'Home & Building Services - Electrical',
      location: 'Miami, FL',
      size: '22 employees, $3.1M annual revenue',
      yearsFounded: '2012',
    },
    challenge:
      'Precision Electric was drowning in emergency service calls but missing opportunities for high-value commercial work. Their dispatch system was chaotic—technicians often arrived without proper parts or job details. Service quotes took 2-3 days to send, causing 40% quote abandonment. Recurring maintenance clients weren\'t being contacted proactively, leading to $180K in lost annual revenue.',
    solution:
      'We implemented intelligent dispatch with AI-powered job matching, instant service quoting, and automated maintenance reminders. The system analyzes service history to predict needed parts, routes technicians efficiently, and sends quotes within minutes. A proactive client portal now handles maintenance scheduling automatically.',
    implementation: {
      duration: '6 weeks',
      stages: [1, 2, 3, 4],
      services: [
        'Smart dispatch & routing system',
        'Instant service quote generation',
        'Parts prediction & inventory management',
        'Automated maintenance scheduling',
        'Client communication portal',
        'Emergency vs. scheduled call prioritization',
      ],
    },
    results: [
      {
        metric: 'First-Call Resolution',
        value: '87%',
        timeframe: 'up from 62%',
      },
      {
        metric: 'Quote Response Time',
        value: '< 15 minutes',
        timeframe: 'down from 2-3 days',
      },
      {
        metric: 'Recurring Revenue Increase',
        value: '$240K annually',
        timeframe: 'from maintenance contracts',
      },
      {
        metric: 'Truck Rolls Per Day',
        value: '+3.5',
        timeframe: 'same team size',
      },
    ],
    testimonial: {
      quote:
        'Our techs used to make 2-3 trips per job because they didn\'t have the right parts. Now the AI tells them exactly what to bring based on the service history. Quotes go out in minutes instead of days, and our maintenance contracts are 100% automated. We\'re doing $240K more in recurring revenue without hiring anyone.',
      name: 'Carlos Mendez',
      title: 'Owner & Master Electrician',
    },
    metrics: {
      beforeAfter: [
        {
          metric: 'Quote Abandonment Rate',
          before: '40%',
          after: '12%',
          improvement: '70% reduction',
        },
        {
          metric: 'First-Call Resolution',
          before: '62%',
          after: '87%',
          improvement: '+40%',
        },
        {
          metric: 'Maintenance Contract Renewals',
          before: '58%',
          after: '91%',
          improvement: '+57%',
        },
        {
          metric: 'Calls Per Technician/Day',
          before: '4.2',
          after: '5.9',
          improvement: '+40%',
        },
      ],
    },
    tags: ['Home & Building Services', 'Electrical', 'Miami', 'Dispatch Automation'],
    publishedDate: '2024-10-08',
  },
  {
    id: '10',
    slug: 'gulf-coast-commercial-painting',
    featured: false,
    client: {
      name: 'Gulf Coast Commercial Painting',
      industry: 'Home & Building Services - Commercial Painting',
      location: 'Sarasota, FL',
      size: '28 employees, $4.2M annual revenue',
      yearsFounded: '2011',
    },
    challenge:
      'Gulf Coast was struggling with bid accuracy and project estimating. Their manual takeoff process took 6-8 hours per bid, limiting them to 3-4 bids weekly. They won only 18% of bids because quotes were often too high (to cover uncertainty) or too low (leading to losses). Paint and material waste ran 15-20% over budget due to poor quantity estimates.',
    solution:
      'We developed an AI-powered estimating system that analyzes blueprints and site photos to generate accurate material quantities and labor hours. The system learns from completed job data to improve accuracy, automates bid document generation, and creates detailed scope-of-work packages. Integrated inventory management prevents over-ordering and waste.',
    implementation: {
      duration: '8 weeks',
      stages: [1, 2, 3, 4, 6],
      services: [
        'AI blueprint analysis & takeoff',
        'Automated bid generation',
        'Material quantity optimization',
        'Labor hour prediction',
        'Scope-of-work automation',
        'Inventory & waste tracking',
        'Bid win-rate analytics',
      ],
    },
    results: [
      {
        metric: 'Bid Preparation Time',
        value: '45 minutes',
        timeframe: 'down from 6-8 hours',
      },
      {
        metric: 'Bid Win Rate',
        value: '34%',
        timeframe: 'up from 18%',
      },
      {
        metric: 'Material Waste',
        value: '4%',
        timeframe: 'down from 18%',
      },
      {
        metric: 'Annual Profit Margin',
        value: '+8.2%',
        timeframe: 'better accuracy = less losses',
      },
    ],
    testimonial: {
      quote:
        'We went from bidding 3-4 jobs a week to 12-15, and our win rate nearly doubled. The AI analyzes square footage, surface types, and prep work more accurately than our senior estimators. Material waste dropped from 18% to 4%, saving us $85K annually. We can now bid larger commercial projects with confidence.',
      name: 'Jennifer Hartwell',
      title: 'VP of Operations',
    },
    metrics: {
      beforeAfter: [
        {
          metric: 'Bids Per Week',
          before: '3-4',
          after: '12-15',
          improvement: '+275%',
        },
        {
          metric: 'Bid Win Rate',
          before: '18%',
          after: '34%',
          improvement: '+89%',
        },
        {
          metric: 'Material Waste',
          before: '18%',
          after: '4%',
          improvement: '78% reduction',
        },
        {
          metric: 'Estimating Cost Per Bid',
          before: '$240',
          after: '$35',
          improvement: '85% reduction',
        },
      ],
    },
    tags: ['Home & Building Services', 'Commercial Painting', 'Sarasota', 'Estimating AI'],
    publishedDate: '2024-11-19',
  },
];

// Statistics for SocialProof component
export const STATISTICS = [
  { value: '50+', label: 'Clients Served', icon: '', target: 50, prefix: '', suffix: '+' },
  { value: '3x', label: 'Average ROI', icon: '', target: 3, prefix: '', suffix: 'x' },
  { value: '24/7', label: 'Automation Running', icon: '', target: 24, prefix: '', suffix: '/7' },
  { value: '95%', label: 'Client Satisfaction', icon: '', target: 95, prefix: '', suffix: '%' },
];

// Tech stack for TechStack component
export const TECH_STACK = [
  { name: 'OpenAI GPT-4', logo: '', icon: '', category: 'AI Models' },
  { name: 'Anthropic Claude', logo: '', icon: '', category: 'AI Models' },
  { name: 'Google Gemini', logo: '', icon: '', category: 'AI Models' },
  { name: 'Make.com', logo: '', icon: '', category: 'Automation' },
  { name: 'Zapier', logo: '', icon: '', category: 'Automation' },
  { name: 'n8n', logo: '', icon: '', category: 'Automation' },
  { name: 'Airtable', logo: '', icon: '', category: 'Database' },
  { name: 'HubSpot', logo: '', icon: '', category: 'CRM' },
  { name: 'Salesforce', logo: '', icon: '', category: 'CRM' },
  { name: 'Twilio', logo: '', icon: '', category: 'Communication' },
  { name: 'SendGrid', logo: '', icon: '', category: 'Communication' },
  { name: 'Stripe', logo: '', icon: '', category: 'Payment' },
];
