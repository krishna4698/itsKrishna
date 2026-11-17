import type { PersonalInfo } from '../types/index.ts';

export const personalData: PersonalInfo = {
  name: 'Krishna Joshi',
  roleLabel: 'FULL STACK DEVELOPER',
  tagline: 'Designing resilient multi-tenant SaaS backends, high-throughput telemetry pipelines, and developer-first architectures.',
  shortBio:
    'I am a Full Stack Developer specializing in Node.js, TypeScript, Next.js, and distributed backend architectures. I have engineered production systems supporting waste management operations across 15+ cities, real-time GPS fleet tracking telemetry, and automated municipal billing engines.',
  fullBio: [
    'My software engineering background centers on designing robust, high-availability backend systems and clean, responsive web applications. At JD Infotech Solutions, I engineer core RESTful APIs, multi-tenant isolation layers, real-time vehicle telemetry pipelines, and secure municipal financial billing modules.',
    'I care deeply about system reliability, asynchronous processing, and minimal latency overhead. Whether building zero-overhead telemetry queues with Redis and BullMQ, implementing strict tenant isolation in MSSQL/PostgreSQL, or designing OpenAI-compatible inference proxies with automated failover, I focus on clean architecture, verifiable security, and predictable performance.',
    'Day-to-day, I work across the full stack with TypeScript, Node.js, Express, React, Next.js, PostgreSQL, Redis, MSSQL, Docker, and AWS (EC2, S3, CloudFront).',
  ],
  technicalInterests: [
    'Multi-Tenant SaaS Backends',
    'Asynchronous Telemetry & Queues',
    'LLM Gateway & Inference Routing',
    'Database Optimization (SQL/NoSQL)',
    'Distributed Caching (Redis)',
    'Cloud & Container Architecture',
  ],
  engineeringStatement:
    'I enjoy solving engineering problems around high throughput, data consistency, asynchronous queue offloading, and reliable multi-tenant isolation. I prioritize pragmatic, well-tested code over unnecessary abstractions.',
  currentLearning: [
    'Deepening expertise in distributed event-driven microservices with Kafka & BullMQ',
    'Exploring LLM agentic tool-calling protocols and structured inference normalization',
    'Advanced PostgreSQL query plan tuning and partitioning for high-volume telemetry',
  ],
  githubUrl: 'https://github.com/krishna4698',
  linkedinUrl: 'https://linkedin.com/in/krishna9987',
  email: 'krishna99874698@gmail.com',
  phone: '+91-94640-52201',
  location: 'India',
  status: 'Available for Full Stack & Backend Engineering roles',
  education: {
    institution: 'Punjab Technical University',
    degree: 'B.Tech',
    field: 'Computer Science and Engineering',
    period: '2022 — 2026',
    location: 'India',
    grade: 'CGPA: 7.7',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Object-Oriented Programming (OOP)',
      'Computer Networks',
    ],
  },
};
