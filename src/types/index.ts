export interface ArchitectureStep {
  name: string;
  role: string;
  details: string;
}

export interface ProjectArchitecture {
  flowDescription: string;
  steps: ArchitectureStep[];
  diagramNote?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface TechnicalDecision {
  decision: string;
  rationale: string;
  alternativesConsidered: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
  outcome: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Distributed Systems' | 'Developer Infrastructure' | 'API & Backend' | 'Full-Stack' | 'Performance Engineering';
  year: string;
  featured: boolean;
  overview: string;
  problemStatement: string;
  whyBuilt: string;
  keyFeatures: ProjectFeature[];
  technologies: string[];
  architecture: ProjectArchitecture;
  technicalDecisions: TechnicalDecision[];
  challenges: ProjectChallenge[];
  githubUrl?: string;
  liveUrl?: string;
  previewImage?: string;
  metrics?: ProjectMetric[];
  previewAccent?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  grade?: string;
  coursework?: string[];
}

export interface SkillItem {
  name: string;
  note?: string;
  primary?: boolean;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface PersonalInfo {
  name: string;
  roleLabel: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  technicalInterests: string[];
  engineeringStatement: string;
  currentLearning: string[];
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  profileImage?: string;
  education: EducationItem;
}
