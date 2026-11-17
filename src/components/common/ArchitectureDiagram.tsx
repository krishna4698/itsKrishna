import type { ProjectArchitecture } from '../../types/index.ts';

interface ArchitectureDiagramProps {
  architecture: ProjectArchitecture;
}

export function ArchitectureDiagram({ architecture }: ArchitectureDiagramProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        padding: '1.75rem',
        margin: '1.5rem 0 2rem 0',
      }}
    >
      {/* Top Banner: Flow Summary */}
      {architecture.diagramNote && (
        <div
          style={{
            padding: '0.85rem 1.15rem',
            backgroundColor: 'var(--bg-surface-subtle)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            color: 'var(--text-primary)',
            lineHeight: 1.5,
            marginBottom: '1.75rem',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ color: 'var(--accent-primary)', fontWeight: 600, marginRight: '0.5rem' }}>
            FLOW:
          </span>
          {architecture.diagramNote}
        </div>
      )}

      {/* Narrative Description */}
      <p
        style={{
          fontSize: '0.975rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          marginBottom: '2rem',
        }}
      >
        {architecture.flowDescription}
      </p>

      {/* Responsive Step Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {architecture.steps.map((step, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'var(--bg-main)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.25rem',
              position: 'relative',
            }}
          >
            {/* Header: Step Number & Role */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.75rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--accent-primary)',
                  backgroundColor: 'var(--accent-light)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '3px',
                }}
              >
                STEP 0{idx + 1}
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                {step.role}
              </span>
            </div>

            {/* Name */}
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              {step.name}
            </h4>

            {/* Details */}
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.55,
                marginTop: 'auto',
              }}
            >
              {step.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
