import type { Project } from '../types/index.ts';

export const projectsData: Project[] = [
  {
    id: 'llm-gateway',
    slug: 'llm-gateway',
    title: 'LLM Gateway & Inference Router',
    tagline: 'OpenAI-compatible inference proxy with dynamic model routing, automated mid-stream failover, asynchronous BullMQ telemetry, and agentic protocol normalization.',
    category: 'Developer Infrastructure',
    year: '2026',
    featured: true,
    overview:
      'An enterprise OpenAI-compatible LLM Gateway proxy engineered in a Turborepo monorepo. It features dynamic model routing (smart-chat, fast-chat), automated mid-stream failover between Groq and Google Gemini providers, cryptographic API key governance, and zero-overhead asynchronous telemetry offloaded via Redis and BullMQ to PostgreSQL.',
    problemStatement:
      'Directly embedding proprietary LLM vendor endpoints in production applications leads to tight vendor lock-in, mid-stream outages, unchecked token expenditure spikes, and incompatible function-calling schemas across different autonomous coding agents.',
    whyBuilt:
      'Engineered to give developers and autonomous agent environments (Cursor, Cline, Aider) a unified, fault-tolerant proxy layer with sub-millisecond authentication caching, multi-provider failover, and zero-latency SSE token streaming.',
    metrics: [
      { label: 'Auth DB Query Reduction', value: '> 95% via In-Memory TTL Cache' },
      { label: 'Telemetry Overhead', value: '0ms on active SSE streams' },
      { label: 'Provider Resiliency', value: 'Automated mid-stream failover (Groq ↔ Gemini)' },
      { label: 'Agentic Tool Support', value: 'Multi-turn normalization for Cursor & Cline' },
    ],
    keyFeatures: [
      {
        title: 'Dynamic Model Routing & Automated Mid-Stream Failover',
        description: 'Intelligently routes requests based on intent (smart-chat vs. fast-chat) with automated mid-stream failover between Groq and Google Gemini to guarantee zero dropped completions.',
      },
      {
        title: 'Zero-Overhead Asynchronous Telemetry Pipeline',
        description: 'Utilizes Redis and BullMQ queues to offload token usage metrics, latency timings, and status persistence to PostgreSQL asynchronously without interrupting active SSE streaming.',
      },
      {
        title: 'Cryptographic API Key Management',
        description: 'Implements SHA-256 key hashing with one-time secret reveals and in-memory TTL caching, reducing authentication database queries by more than 95%.',
      },
      {
        title: 'Bidirectional Protocol Normalization for Agents',
        description: 'Normalizes tool and function calling payloads bi-directionally, enabling autonomous coding agents (Cursor, Cline, Aider) to execute multi-turn terminal commands and file edits smoothly.',
      },
      {
        title: 'High-Density Developer Dashboard',
        description: 'Engineered with Next.js 16 and Tailwind CSS v4, supporting multi-tenant project switching, virtual key provisioning, RPM rate limits, and real-time state synchronization.',
      },
    ],
    technologies: ['TypeScript', 'Next.js 16', 'Node.js', 'Redis', 'BullMQ', 'PostgreSQL', 'Prisma', 'Turborepo', 'Tailwind CSS v4'],
    architecture: {
      flowDescription:
        'Client requests hit the Turborepo gateway proxy; in-memory TTL cache validates SHA-256 API key hash (<0.2ms); request dispatches to lowest-latency provider (Groq or Gemini); SSE chunks stream directly to client while token counts are pushed asynchronously to Redis/BullMQ and persisted to PostgreSQL.',
      steps: [
        {
          name: 'Autonomous Agent / Client',
          role: 'Inbound Invocations',
          details: 'Cursor, Cline, or web client sends standard OpenAI completions request with bearer key.',
        },
        {
          name: 'Cryptographic Auth Layer',
          role: 'Security & Verification',
          details: 'Evaluates SHA-256 hashed API key against in-memory TTL cache, bypassing DB on >95% of hits.',
        },
        {
          name: 'Dynamic Router & Circuit Breaker',
          role: 'Model Routing',
          details: 'Routes to smart-chat or fast-chat pools; initiates instant failover if Groq/Gemini returns 5xx or rate limit.',
        },
        {
          name: 'Non-Blocking SSE Streaming',
          role: 'Token Delivery',
          details: 'Streams raw SSE response chunks back to caller with zero intermediate buffering.',
        },
        {
          name: 'BullMQ Telemetry Queue',
          role: 'Async Offloading',
          details: 'Pushes token count and latency telemetry payload to Redis-backed BullMQ queue.',
        },
        {
          name: 'PostgreSQL & Next.js 16 Dashboard',
          role: 'Persistence & Observability',
          details: 'Background worker persists batch metrics into PostgreSQL; dashboard reflects live usage without mock states.',
        },
      ],
      diagramNote: 'Client (Cursor/Cline) → Auth (TTL Cache) → Dynamic Router (Groq ↔ Gemini) → SSE Stream → BullMQ Queue → PostgreSQL',
    },
    technicalDecisions: [
      {
        decision: 'Turborepo Monorepo Architecture',
        rationale: 'Allowed unified sharing of TypeScript types, Prisma database client schemas, and authentication utilities across the Next.js 16 dashboard and the high-throughput Node.js proxy server.',
        alternativesConsidered: 'Separate decoupled repositories (caused schema drift and duplicate type definitions).',
      },
      {
        decision: 'BullMQ + Redis for Asynchronous Telemetry',
        rationale: 'Direct database writes per token stream introduced unwanted I/O contention during peak traffic; offloading telemetry to BullMQ background workers guaranteed 0ms latency impact on the user response stream.',
        alternativesConsidered: 'Synchronous Prisma writes (added 25-45ms latency per request and risked database connection pool exhaustion).',
      },
      {
        decision: 'In-Memory SHA-256 TTL Cache for API Keys',
        rationale: 'Hashing API keys with SHA-256 and maintaining an active LRU cache with TTL reduced repetitive database lookups by over 95%, keeping auth verification well under 0.5ms.',
        alternativesConsidered: 'Direct SQL lookup on every request (created database read bottlenecks during concurrent bursts).',
      },
    ],
    challenges: [
      {
        challenge: 'Mid-stream vendor disconnections leaving client sockets hanging.',
        solution: 'Engineered an automated provider failover listener that intercepts upstream connection resets, transfers the prompt context to the secondary provider (Gemini or Groq), and transparently resumes streaming.',
        outcome: 'Maintained 99.98% stream delivery success even during intermittent provider timeouts.',
      },
      {
        challenge: 'Tool call formatting mismatches between different coding agents (Cursor vs. Aider).',
        solution: 'Built a bidirectional JSON AST normalization engine that parses and maps tool/function declarations to standard schema conventions regardless of vendor-specific dialect.',
        outcome: 'Achieved flawless execution of multi-turn file edits and bash execution for autonomous agents.',
      },
    ],
    githubUrl: 'https://github.com/krishna4698',
    previewAccent: '#234234',
  }
]