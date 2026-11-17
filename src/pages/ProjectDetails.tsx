import { useEffect } from 'react';
import { useRouter } from '../router/useRouter.ts';
import { projectsData } from '../data/projects.ts';
import { personalData } from '../data/personal.ts';
import { ProjectHeader } from '../components/projects/ProjectHeader.tsx';
import { ProjectOverview } from '../components/projects/ProjectOverview.tsx';
import { ProjectTechStack } from '../components/projects/ProjectTechStack.tsx';
import { ProjectArchitectureSection } from '../components/projects/ProjectArchitectureSection.tsx';
import { ProjectDecisionsAndChallenges } from '../components/projects/ProjectDecisionsAndChallenges.tsx';
import { ProjectNavigation } from '../components/projects/ProjectNavigation.tsx';
import { Link } from '../router/Link.tsx';
import { ArrowLeftIcon } from '../components/common/Icons.tsx';

export function ProjectDetails() {
  const { params } = useRouter();
  const slug = params.slug;

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectIndex !== -1 ? projectsData[projectIndex] : null;

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : undefined;
  const nextProject =
    projectIndex !== -1 && projectIndex < projectsData.length - 1
      ? projectsData[projectIndex + 1]
      : undefined;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Case Study | ${personalData.name}`;
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      document.title = `Project Not Found | ${personalData.name}`;
    }
  }, [project]);

  if (!project) {
    return (
      <main style={{ padding: '6rem 0', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--accent-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            404 · CASE STUDY NOT FOUND
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}
          >
            Engineering Case Study Not Found
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              margin: '0 auto 2rem auto',
            }}
          >
            The project slug <code style={{ color: 'var(--text-primary)' }}>{slug}</code> could not be located in the current repository registry.
          </p>
          <Link
            to="/#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--accent-contrast)',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            <ArrowLeftIcon width="16" height="16" />
            <span>Return to Projects Listing</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ paddingBottom: '6rem' }}>
      <ProjectHeader project={project} />

      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <ProjectOverview project={project} />
          <ProjectTechStack project={project} />
          <ProjectArchitectureSection project={project} />
          <ProjectDecisionsAndChallenges project={project} />
          <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
        </div>
      </div>
    </main>
  );
}
