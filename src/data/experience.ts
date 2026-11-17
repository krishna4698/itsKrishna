import type { ExperienceItem } from '../types/index.ts';

export const experienceData: ExperienceItem[] = [
  {
    id: 'jd-infotech',
    company: 'JD Infotech Solutions',
    role: 'Full Stack Developer',
    period: 'Jan 2026 — Present',
    location: 'India',
    type: 'Full-time',
    description:
      'Engineering mission-critical multi-tenant backends, real-time GPS telemetry pipelines, municipal billing automation, and field staff management systems for municipal waste management operations deployed across 15+ cities.',
    contributions: [
      'Multi-Tenant SaaS Backend: Developed and maintained core RESTful APIs in Node.js, Express.js, and MSSQL, implementing strict tenant isolation via ProjectID to support waste management operations across 15+ city projects.',
      'GPS & Fleet Tracking Service: Built background telemetry ingestion pipelines processing real-time vehicle coordinates from third-party vendor APIs, calculating distance traveled, running/stopped states, and route coverage.',
      'UCC Billing Engine: Engineered the municipal User Charge Collection (UCC) module to automate property tariff calculations, customer ledger tracking, digital receipt generation, and online payments via Razorpay and UPI.',
      'HRMS: Implemented field staff management features, including geo-tagged facial recognition attendance, shift scheduling, leave approval workflows, and secure image uploads using AWS S3.',
    ],
    technologies: ['Node.js', 'Express.js', 'MSSQL', 'AWS (EC2, S3)', 'Redis', 'Razorpay', 'REST APIs', 'JWT'],
  },
  {
    id: 'bringletech',
    company: 'Bringletech Pvt Ltd',
    role: 'MERN Stack Intern',
    period: 'Nov 2025 — Jan 2026',
    location: 'India',
    type: 'Internship',
    description:
      'Contributed to the development of responsive full-stack web applications, authentication security modules, and backend API performance optimizations.',
    contributions: [
      'Contributed to development of full-stack web applications using MongoDB, Express.js, React.js, and Node.js in a collaborative team environment.',
      'Designed and implemented RESTful APIs for authentication, user management, and CRUD operations following clean MVC architecture patterns.',
      'Implemented JWT-based authentication and role-based access control (RBAC) to ensure secure API endpoints across application surfaces.',
      'Collaborated actively with engineering teams using Git and GitHub for version control, rigorous code reviews, and feature branch integration.',
      'Participated in profiling, debugging, and performance optimization of backend services, enhancing response reliability and database query efficiency.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs', 'Git', 'GitHub'],
  },
];
