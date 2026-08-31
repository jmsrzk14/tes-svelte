import type { Member } from './types';

export const members: Member[] = [
  {
    id: 'alina-peterson',
    name: 'Alina Peterson',
    title: 'Senior Product Designer',
    email: 'alina.peterson@example.com',
    phone: '+65 8123 4567',
    location: 'Singapore',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    bio: 'Product designer with 7+ years of experience shaping intuitive digital experiences across fintech, SaaS, and e-commerce. Passionate about design systems, research, and translating complex workflows into elegant user experiences.',
    education: [
      {
        institution: 'National University of Singapore',
        degree: 'B.A.',
        field: 'Interaction Design',
        startDate: '2013',
        endDate: '2017',
        description: 'Focused on user-centered design, visual systems, and human-computer interaction.'
      }
    ],
    experience: [
      {
        company: 'Northstar Studio',
        position: 'Senior Product Designer',
        startDate: '2022',
        endDate: 'Present',
        description: 'Leading end-to-end redesign of the onboarding and analytics experience for B2B clients.',
        achievements: [
          'Reduced onboarding friction by 28% through usability research and iterative prototyping.',
          'Built a scalable design system adopted by 4 product squads.',
          'Partnered with PMs and engineers to ship 3 major platform initiatives.'
        ]
      },
      {
        company: 'PixelForge',
        position: 'UX Designer',
        startDate: '2019',
        endDate: '2022',
        description: 'Designed dashboards and customer journeys for SaaS products serving enterprise teams.',
        achievements: [
          'Improved feature adoption by 19% after redesigning the core workflow.',
          'Ran usability interviews and synthesized insights into actionable design recommendations.'
        ]
      }
    ],
    skills: [
      { name: 'UX Research', level: 'Advanced', category: 'Research' },
      { name: 'Figma', level: 'Advanced', category: 'Design Tools' },
      { name: 'Design Systems', level: 'Advanced', category: 'Product Design' },
      { name: 'User Flows', level: 'Advanced', category: 'Strategy' }
    ],
    projects: [
      {
        name: 'Fintech Dashboard Redesign',
        description: 'Reimagined the customer analytics dashboard for clearer decision-making and lower cognitive load.',
        technologies: ['Figma', 'Notion', 'Maze'],
        link: 'https://example.com/fintech-dashboard'
      },
      {
        name: 'Marketplace UX Audit',
        description: 'Mapped friction points across the buying journey and proposed a research-driven retention strategy.',
        technologies: ['FigJam', 'Google Analytics', 'Hotjar'],
        link: 'https://example.com/marketplace-ux'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/alinapeterson',
      github: 'https://github.com/alinapeterson',
      website: 'https://alinapeterson.design'
    }
  },
  {
    id: 'daniel-cho',
    name: 'Daniel Cho',
    title: 'Full-Stack Engineer',
    email: 'daniel.cho@example.com',
    phone: '+1 415 555 0188',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    bio: 'Full-stack engineer focused on building reliable product systems, developer experience, and scalable web platforms. Enjoys turning architectural ideas into products that move fast and stay maintainable.',
    education: [
      {
        institution: 'University of California, Berkeley',
        degree: 'B.S.',
        field: 'Computer Science',
        startDate: '2012',
        endDate: '2016',
        description: 'Emphasis on distributed systems, human-centered computing, and software engineering.'
      }
    ],
    experience: [
      {
        company: 'Bright Labs',
        position: 'Senior Full-Stack Engineer',
        startDate: '2021',
        endDate: 'Present',
        description: 'Building internal tooling and customer-facing features for a developer workflow platform.',
        achievements: [
          'Reduced release incidents by 35% with stronger observability and CI improvements.',
          'Led migration from a legacy monolith to a modular service architecture.',
          'Mentored 3 engineers and improved team delivery throughput.'
        ]
      },
      {
        company: 'Stackwell',
        position: 'Software Engineer',
        startDate: '2018',
        endDate: '2021',
        description: 'Built commerce infrastructure and API services that supported rapid product iteration.',
        achievements: [
          'Optimized API latency by 42% through caching and query improvements.',
          'Implemented automated testing to support safe releases across multiple teams.'
        ]
      }
    ],
    skills: [
      { name: 'TypeScript', level: 'Advanced', category: 'Frontend' },
      { name: 'Node.js', level: 'Advanced', category: 'Backend' },
      { name: 'PostgreSQL', level: 'Advanced', category: 'Data' },
      { name: 'System Design', level: 'Intermediate', category: 'Architecture' }
    ],
    projects: [
      {
        name: 'Developer Productivity Suite',
        description: 'Created an internal dashboard helping engineering teams monitor incidents, analytics, and release health.',
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        link: 'https://example.com/productivity-suite'
      },
      {
        name: 'API Gateway Upgrade',
        description: 'Modernized a legacy gateway with better routing, observability, and security controls.',
        technologies: ['Go', 'Redis', 'Kubernetes'],
        link: 'https://example.com/api-gateway'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/danielcho',
      github: 'https://github.com/danielcho',
      website: 'https://danielcho.dev'
    }
  },
  {
    id: 'maya-rahman',
    name: 'Maya Rahman',
    title: 'Data & Insights Lead',
    email: 'maya.rahman@example.com',
    phone: '+44 20 7946 0958',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    bio: 'Analytics leader who helps teams turn ambiguity into action through strong measurement, experimentation, and stakeholder alignment. Skilled at translating data into business decisions and product momentum.',
    education: [
      {
        institution: 'London School of Economics',
        degree: 'M.Sc.',
        field: 'Data Science',
        startDate: '2015',
        endDate: '2016',
        description: 'Focused on statistical modeling, experiment design, and data storytelling.'
      }
    ],
    experience: [
      {
        company: 'Northlane Analytics',
        position: 'Data & Insights Lead',
        startDate: '2020',
        endDate: 'Present',
        description: 'Owns the analytics roadmap and drives experimentation for customer acquisition and retention teams.',
        achievements: [
          'Increased conversion by 26% after redesigning the acquisition funnel based on cohort analysis.',
          'Built dashboards used by leadership to make weekly product decisions.',
          'Partnered with product and marketing to define a unified KPI framework.'
        ]
      },
      {
        company: 'Crest Advisory',
        position: 'Senior Analyst',
        startDate: '2017',
        endDate: '2020',
        description: 'Delivered forecasting models and business intelligence solutions for digital health and retail programs.',
        achievements: [
          'Reduced time-to-insight by 40% using a more scalable reporting workflow.',
          'Created a modeling framework used across three different client verticals.'
        ]
      }
    ],
    skills: [
      { name: 'SQL', level: 'Advanced', category: 'Analytics' },
      { name: 'Python', level: 'Advanced', category: 'Data Science' },
      { name: 'Experiment Design', level: 'Advanced', category: 'Research' },
      { name: 'Storytelling', level: 'Intermediate', category: 'Communication' }
    ],
    projects: [
      {
        name: 'Retention Cohort Analysis',
        description: 'Designed a scalable cohort framework to identify churn risk and test interventions with measurable business impact.',
        technologies: ['SQL', 'Python', 'Tableau'],
        link: 'https://example.com/retention-analysis'
      },
      {
        name: 'Executive KPI Dashboard',
        description: 'Built a board-ready dashboard translating product and growth performance into clear strategic narratives.',
        technologies: ['Looker', 'BigQuery', 'Google Sheets'],
        link: 'https://example.com/kpi-dashboard'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/mayarahman',
      github: 'https://github.com/mayarahman',
      website: 'https://mayarahman.io'
    }
  }
];

export function getMember(id: string): Member | undefined {
  return members.find((member) => member.id === id);
}
