
import { ExperienceItem, EducationItem, ProjectItem, AwardItem } from './types.ts';

// The profile image provided in the chat
export const PROFILE_IMAGE_URL = "https://media.licdn.com/dms/image/v2/C4D03AQFpBwJynBn6zg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1619697162708?e=1772668800&v=beta&t=v3cUAfO9bnK03vxMHcKroE8KYG1axdW_QWAre2kz1iY";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Human Resources Consultant (GS-13)",
    company: "Office of Personnel Management (OPM)",
    period: "June 2024 – December 2024",
    description: [
      "Served as project lead on diverse workforce planning HR projects, facilitating focus groups with senior leadership.",
      "Designed and administered electronic data collection tools to obtain workforce information from federal customers.",
      "Analyzed qualitative and quantitative data focusing on skill gaps, retention, and retirement forecasting to drive executive decision-making.",
      "Produced advanced visualization reports, charts, and tables to communicate complex workforce findings."
    ]
  },
  {
    role: "Program Analyst / Lead HR Specialist (GS-14)",
    company: "Drug Enforcement Administration (DEA)",
    period: "September 2020 – June 2024",
    description: [
      "Spearheaded major organizational strategic initiatives and defined mission-critical parameters for the Human Resources Division.",
      "Developed Power BI Dashboards and Microsoft Excel Pivot models focusing on position management and organizational design.",
      "Managed and oversaw the Classification Team (contractors and federal specialists), providing technical supervision and quality control.",
      "Maintained data integrity of 6,000+ billets by merging complex manpower data sources (T/O, Onboard Report, and Personnel Systems).",
      "Consulted with DEA Managers on complex organizational design and controversial classification requirements."
    ]
  },
  {
    role: "Management Analyst (GS-13)",
    company: "Deputy Commandant for Information (DC I), HQMC Pentagon",
    period: "October 2018 – September 2020",
    description: [
      "Served as primary HR Liaison and Manpower Analyst for the Deputy Commandant for Information.",
      "Expert at utilizing Marine Corps Management Information Systems (TFSMS, TWMS, DCPDS) to evaluate manpower allowances.",
      "Processed all Requests for Personnel Action (RPA) and advised on recruitment sources and direct hiring authorities.",
      "Developed organizational charts and provided recommendations for optimal department realignment and function structure."
    ]
  },
  {
    role: "Management Analyst (GS-13)",
    company: "Navy Total Force Manpower (OPNAV N12)",
    period: "December 2016 – September 2018",
    description: [
      "Accounting Manager and technical expert for Navy Total Force Military end-strength controls, managing 400,000+ records.",
      "Implemented force structure changes within TFMMS to match control numbers in the Program Budget Information System (PBIS).",
      "Created and distributed End Strength Control Memos and budget exhibits for the Secretary of the Navy and Secretary of Defense (OSD).",
      "Developed weekly 'quan/qual' analytic reports distributed to Requirement Officers and Resource Sponsors."
    ]
  },
  {
    role: "Management Analyst (GS-12)",
    company: "HQ Marine Corps, Pentagon",
    period: "February 2009 – December 2016",
    description: [
      "Responsible for the management and oversight of HQMC Tables of Organization (T/O) for over 6,000 billets.",
      "Collaborated with Fiscal and outside agencies to prepare manpower documents and TOECR packages.",
      "Automated hiring action validation using SharePoint forms, improving data element accuracy prior to recruitment.",
      "Served as HQMC Combined Federal Campaign (CFC) Manager, facilitating the fundraising of over $1.4M across seven campaigns."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Florida Atlantic University",
    degree: "Master's in Business Analytics",
    period: "January 2025 – Present",
    honors: "Anticipated Graduation: May 2026"
  },
  {
    institution: "George Mason University",
    degree: "Bachelor of Science, Management",
    period: "Graduated May 2016",
    honors: "Magna Cum Laude"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "AI-Driven Workforce Forecasting Model",
    role: "Lead Strategist & Analyst",
    challenge: "Federal agencies often lack real-time visibility into future retirement waves and skill-gap vulnerabilities.",
    approach: "Utilized predictive modeling and Power BI to create a dynamic dashboard that merges disparate manpower data sources for proactive hiring.",
    impact: "Provided senior leadership with actionable insights that reduced mission-critical position vacancy duration.",
    tags: ["Power BI", "Predictive Analytics", "Workforce Intelligence"],
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    title: "SharePoint Automated Manpower Tracker",
    role: "System Architect",
    challenge: "Manual tracking of classification reviews and T/O updates caused significant bottlenecks in the recruitment cycle.",
    approach: "Established an internal SharePoint tracker with automated workflows to monitor actions and track metrics across multiple federal systems.",
    impact: "Expedited the review of classification requests and significantly reduced data discrepancies between T/O and Onboard reports.",
    tags: ["SharePoint", "Automation", "Process Engineering"],
    image: "https://picsum.photos/800/600?random=2"
  }
];

export const AWARDS_DATA: AwardItem[] = [
  { year: "2023", title: "Performance Plan – Rating 4.8 Outstanding" },
  { year: "2022", title: "Nominated for DEA HR Employee of the Year" },
  { year: "2022", title: "Performance Plan – Rating 5.0 Outstanding" },
  { year: "2022", title: "DEA On the Spot Cash Award" },
  { year: "2021", title: "Performance Plan – Rating 4.2 Excellent" },
  { year: "2020", title: "Dept of Navy Civilian Service Commendation Medal" },
  { year: "2020", title: "Navy Marine Corps Achievement Medal (x2)" },
  { year: "2019", title: "Certificate of Commendations (x3)" }
];
