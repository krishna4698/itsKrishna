import { useState } from 'react';
import { projectsData } from '../../data/projects.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { ProjectCard } from '../projects/ProjectCard.tsx';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'API & Backend', 'Distributed Systems', 'Full-Stack'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      style={{
        paddingTop: 'clamp(4rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
        borderBottom: '1px solid var(--border-default)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          <SectionHeading
            kicker="04. Selected Work"
            title="Production Systems & Case Studies"
            description="Deep-dive engineering projects showcasing system design, throughput bottlenecks, concurrency management, and fault-tolerance patterns."
            className="projects-heading"
          />

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              marginBottom: '2.5rem',
            }}
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    backgroundColor: isSelected ? 'var(--accent-primary)' : 'var(--bg-surface)',
                    color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                    border: isSelected ? '1px solid var(--accent-primary)' : '1px solid var(--border-default)',
                    padding: '0.45rem 0.95rem',
                    borderRadius: 'var(--radius-xs)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
