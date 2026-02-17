
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  honors?: string;
}

export interface ProjectItem {
  title: string;
  role: string;
  challenge: string;
  approach: string;
  impact: string;
  tags: string[];
  image: string;
}

export interface AwardItem {
  year: string;
  title: string;
}
