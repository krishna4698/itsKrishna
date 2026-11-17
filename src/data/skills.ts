import type { SkillGroup } from '../types/index.ts';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    description: 'Core programming and scripting languages used in production backends and services.',
    skills: [
      { name: 'TypeScript', primary: true, note: 'Strict typing, interfaces, generic utility types' },
      { name: 'JavaScript', primary: true, note: 'Asynchronous event loop, promises, V8 runtime' },
      { name: 'SQL', primary: true, note: 'Complex joins, indexing, query optimization, MSSQL & Postgres' },
      { name: 'C++', primary: false, note: 'Core computer science fundamentals, DSA, memory concepts' },
    ],
  },
  {
    category: 'Backend & APIs',
    description: 'API development, multi-tenant architectures, and asynchronous processing.',
    skills: [
      { name: 'Node.js', primary: true, note: 'Runtime architecture, event-driven I/O, streams' },
      { name: 'Express.js', primary: true, note: 'RESTful API routing, middleware chaining, controllers' },
      { name: 'REST APIs', primary: true, note: 'Contract design, status handling, versioning' },
      { name: 'JWT Authentication', primary: true, note: 'Stateless auth, RBAC permissions, token refresh' },
      { name: 'MVC Architecture', primary: true, note: 'Decoupled controllers, service models, clean boundaries' },
      { name: 'BullMQ', primary: false, note: 'Asynchronous task queues, background workers, retry policies' },
    ],
  },
  {
    category: 'Frontend Engineering',
    description: 'High-performance user interfaces and responsive web applications.',
    skills: [
      { name: 'React.js', primary: true, note: 'Hooks, state management, component lifecycles' },
      { name: 'Next.js (App Router)', primary: true, note: 'Server rendering, dynamic routing, high-density UIs' },
      { name: 'Tailwind CSS', primary: true, note: 'Design systems, responsive utilities, custom tokens' },
      { name: 'HTML5 & Modern Web', primary: false, note: 'Semantic markup, accessible standards, DOM APIs' },
    ],
  },
  {
    category: 'Databases & In-Memory Stores',
    description: 'Relational data modeling, tenant isolation, and low-latency caching.',
    skills: [
      { name: 'PostgreSQL', primary: true, note: 'Relational modeling, JSONB fields, indexing strategies' },
      { name: 'Redis', primary: true, note: 'In-memory caching, rate-limiting, pub/sub, TTL keys' },
      { name: 'MSSQL', primary: true, note: 'Enterprise multi-tenant data storage, ACID compliance' },
      { name: 'MongoDB', primary: false, note: 'Document schemas, aggregation pipelines, Mongoose' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    description: 'Containerized deployment, cloud infrastructure, and automated delivery pipelines.',
    skills: [
      { name: 'AWS (EC2, S3, CloudFront)', primary: true, note: 'VM instances, pre-signed upload pipelines, CDN' },
      { name: 'Docker', primary: true, note: 'Containerization, multi-stage builds, Docker Compose' },
      { name: 'CI/CD Pipelines', primary: false, note: 'Continuous integration, automated builds, release flows' },
      { name: 'GitHub Actions', primary: true, note: 'Automated test runners, linting, deployment workflows' },
    ],
  },
  {
    category: 'Tools & Architecture',
    description: 'Developer tooling, monorepo architectures, and computer science foundations.',
    skills: [
      { name: 'Git & GitHub', primary: true, note: 'Feature branch workflows, PR reviews, interactive rebase' },
      { name: 'Prisma ORM', primary: true, note: 'Type-safe schema definitions, database migrations' },
      { name: 'Turborepo', primary: true, note: 'Monorepo task orchestration, pipeline caching' },
      { name: 'Monorepo Architecture', primary: true, note: 'Shared TypeScript configs, packages, unified builds' },
      { name: 'Data Structures & Algorithms', primary: true, note: 'Time/space complexity analysis, optimization' },
      { name: 'Object-Oriented Programming (OOP)', primary: true, note: 'Encapsulation, SOLID principles, design patterns' },
    ],
  },
];
