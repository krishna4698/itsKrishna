interface ProjectPreviewGraphicProps {
  slug: string;
  category?: string;
  title?: string;
  previewImage?: string;
}

export function ProjectPreviewGraphic({ slug, previewImage, title }: ProjectPreviewGraphicProps) {
  // If an actual screenshot or image is provided by the user, render it directly
  if (previewImage) {
    return (
      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: 'var(--bg-main)',
          borderBottom: '1px solid var(--border-subtle)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={previewImage}
          alt={title || 'Project screenshot'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          loading="lazy"
        />
      </div>
    );
  }

  // Fallback: Custom editorial architectural schematics tailored to each system
  switch (slug) {
    case 'llm-gateway':
      return (
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: 'var(--bg-main)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <svg viewBox="0 0 460 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid-gw" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--border-subtle)" strokeWidth="0.8" />
            </pattern>
            <rect width="460" height="160" fill="url(#grid-gw)" opacity="0.6" />

            {/* Inbound Client Node */}
            <rect x="15" y="55" width="85" height="50" rx="4" fill="var(--bg-surface)" stroke="var(--border-default)" strokeWidth="1.5" />
            <text x="57" y="77" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600" fill="var(--text-primary)" textAnchor="middle">CODING AGENT</text>
            <text x="57" y="92" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-muted)" textAnchor="middle">Cursor / Cline / Aider</text>

            {/* Arrow 1 */}
            <path d="M 100 80 L 135 80" stroke="var(--accent-primary)" strokeWidth="1.5" strokeDasharray="3 3" />
            <polygon points="135,80 129,76 129,84" fill="var(--accent-primary)" />

            {/* Gateway Proxy Node */}
            <rect x="140" y="35" width="140" height="90" rx="6" fill="var(--bg-surface)" stroke="var(--accent-primary)" strokeWidth="1.5" />
            <rect x="150" y="43" width="120" height="18" rx="2" fill="var(--accent-light)" />
            <text x="210" y="56" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="var(--accent-primary)" textAnchor="middle">TURBOREPO GATEWAY</text>
            <text x="210" y="78" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-secondary)" textAnchor="middle">SHA-256 Key TTL Cache (&gt;95%)</text>
            <text x="210" y="94" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-secondary)" textAnchor="middle">Smart / Fast Model Router</text>
            <text x="210" y="110" fontFamily="var(--font-mono)" fontSize="7" fill="var(--accent-primary)" textAnchor="middle">BullMQ Async Telemetry</text>

            {/* Arrow 2 */}
            <path d="M 280 80 L 315 80" stroke="var(--accent-primary)" strokeWidth="1.5" strokeDasharray="3 3" />
            <polygon points="315,80 309,76 309,84" fill="var(--accent-primary)" />

            {/* Provider Cluster */}
            <rect x="320" y="35" width="125" height="90" rx="4" fill="var(--bg-surface)" stroke="var(--border-default)" strokeWidth="1.5" />
            <text x="382" y="52" fontFamily="var(--font-mono)" fontSize="8" fontWeight="600" fill="var(--text-muted)" textAnchor="middle">PROVIDER POOL</text>
            
            <rect x="330" y="60" width="105" height="22" rx="2" fill="var(--bg-surface-elevated)" stroke="var(--border-subtle)" />
            <text x="382" y="74" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-primary)" textAnchor="middle">Groq (Ultra-Fast)</text>

            <rect x="330" y="88" width="105" height="22" rx="2" fill="var(--bg-surface-elevated)" stroke="var(--border-subtle)" />
            <text x="382" y="102" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-primary)" textAnchor="middle">Gemini (Failover)</text>
          </svg>
        </div>
      );

    case 'gps-fleet-tracking':
      return (
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: 'var(--bg-main)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <svg viewBox="0 0 460 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid-gps" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--border-subtle)" strokeWidth="0.8" />
            </pattern>
            <rect width="460" height="160" fill="url(#grid-gps)" opacity="0.6" />

            {/* Vehicles Node */}
            <rect x="15" y="45" width="100" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--border-default)" strokeWidth="1.5" />
            <text x="65" y="70" fontFamily="var(--font-mono)" fontSize="8" fontWeight="700" fill="var(--text-primary)" textAnchor="middle">MUNICIPAL FLEET</text>
            <text x="65" y="85" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-muted)" textAnchor="middle">15+ City Projects</text>
            <text x="65" y="99" fontFamily="var(--font-mono)" fontSize="7" fill="var(--accent-primary)" textAnchor="middle">GPS Sensor Coordinates</text>

            <path d="M 115 80 L 150 80" stroke="var(--accent-primary)" strokeWidth="1.5" />
            <polygon points="150,80 144,76 144,84" fill="var(--accent-primary)" />

            {/* Ingestion & Telemetry Engine */}
            <rect x="155" y="35" width="150" height="90" rx="6" fill="var(--bg-surface)" stroke="var(--accent-primary)" strokeWidth="1.5" />
            <rect x="165" y="43" width="130" height="18" rx="2" fill="var(--accent-light)" />
            <text x="230" y="56" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="var(--accent-primary)" textAnchor="middle">TELEMETRY INGESTION</text>
            <text x="230" y="78" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-secondary)" textAnchor="middle">Distance Calculation Engine</text>
            <text x="230" y="93" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-secondary)" textAnchor="middle">Running vs. Stopped State</text>
            <text x="230" y="108" fontFamily="var(--font-mono)" fontSize="7" fill="var(--accent-primary)" textAnchor="middle">Route Coverage Verification</text>

            <path d="M 305 80 L 340 80" stroke="var(--accent-primary)" strokeWidth="1.5" />
            <polygon points="340,80 334,76 334,84" fill="var(--accent-primary)" />

            {/* Storage Node */}
            <rect x="345" y="45" width="100" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--border-default)" strokeWidth="1.5" />
            <text x="395" y="68" fontFamily="var(--font-mono)" fontSize="8" fontWeight="700" fill="var(--text-primary)" textAnchor="middle">MSSQL & REDIS</text>
            <text x="395" y="85" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-muted)" textAnchor="middle">Tenant Isolation</text>
            <text x="395" y="99" fontFamily="var(--font-mono)" fontSize="7" fill="var(--accent-primary)" textAnchor="middle">ProjectID Scoping</text>
          </svg>
        </div>
      );

    case 'ucc-billing-engine':
      return (
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: 'var(--bg-main)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <svg viewBox="0 0 460 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid-ucc" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--border-subtle)" strokeWidth="0.8" />
            </pattern>
            <rect width="460" height="160" fill="url(#grid-ucc)" opacity="0.6" />

            {/* Property Assessment */}
            <rect x="15" y="45" width="105" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--border-default)" strokeWidth="1.5" />
            <text x="67" y="68" fontFamily="var(--font-mono)" fontSize="8" fontWeight="700" fill="var(--text-primary)" textAnchor="middle">PROPERTY AUDIT</text>
            <text x="67" y="85" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-muted)" textAnchor="middle">Commercial / Residential</text>
            <text x="67" y="99" fontFamily="var(--font-mono)" fontSize="7" fill="var(--accent-primary)" textAnchor="middle">Tariff Calculation Rules</text>

            <path d="M 120 80 L 155 80" stroke="var(--accent-primary)" strokeWidth="1.5" />
            <polygon points="155,80 149,76 149,84" fill="var(--accent-primary)" />

            {/* UCC Engine Box */}
            <rect x="160" y="35" width="145" height="90" rx="6" fill="var(--bg-surface)" stroke="var(--accent-primary)" strokeWidth="1.5" />
            <rect x="170" y="43" width="125" height="18" rx="2" fill="var(--accent-light)" />
            <text x="232" y="56" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="var(--accent-primary)" textAnchor="middle">UCC BILLING ENGINE</text>
            <text x="232" y="78" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-secondary)" textAnchor="middle">Ledger & Arrears Tracker</text>
            <text x="232" y="93" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-secondary)" textAnchor="middle">Razorpay & UPI Webhooks</text>
            <text x="232" y="108" fontFamily="var(--font-mono)" fontSize="7" fill="var(--accent-primary)" textAnchor="middle">Digital Receipt Generation</text>

            <path d="M 305 80 L 340 80" stroke="var(--accent-primary)" strokeWidth="1.5" />
            <polygon points="340,80 334,76 334,84" fill="var(--accent-primary)" />

            {/* Payment & Receipts */}
            <rect x="345" y="45" width="100" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--border-default)" strokeWidth="1.5" />
            <text x="395" y="68" fontFamily="var(--font-mono)" fontSize="8" fontWeight="700" fill="var(--text-primary)" textAnchor="middle">SETTLEMENT</text>
            <text x="395" y="85" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-muted)" textAnchor="middle">Automated Webhook</text>
            <text x="395" y="99" fontFamily="var(--font-mono)" fontSize="7" fill="var(--accent-primary)" textAnchor="middle">SMS Confirmation</text>
          </svg>
        </div>
      );

    default:
      return (
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: 'var(--bg-main)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <svg viewBox="0 0 460 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid-hrms" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--border-subtle)" strokeWidth="0.8" />
            </pattern>
            <rect width="460" height="160" fill="url(#grid-hrms)" opacity="0.6" />

            {/* Field App */}
            <rect x="15" y="45" width="105" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--border-default)" strokeWidth="1.5" />
            <text x="67" y="68" fontFamily="var(--font-mono)" fontSize="8" fontWeight="700" fill="var(--text-primary)" textAnchor="middle">FIELD MOBILE APP</text>
            <text x="67" y="85" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-muted)" textAnchor="middle">Facial Photo + GPS</text>
            <text x="67" y="99" fontFamily="var(--font-mono)" fontSize="7" fill="var(--accent-primary)" textAnchor="middle">Ward Geo-Boundary</text>

            <path d="M 120 80 L 155 80" stroke="var(--accent-primary)" strokeWidth="1.5" />
            <polygon points="155,80 149,76 149,84" fill="var(--accent-primary)" />

            {/* AWS S3 & API Core */}
            <rect x="160" y="35" width="145" height="90" rx="6" fill="var(--bg-surface)" stroke="var(--accent-primary)" strokeWidth="1.5" />
            <rect x="170" y="43" width="125" height="18" rx="2" fill="var(--accent-light)" />
            <text x="232" y="56" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="var(--accent-primary)" textAnchor="middle">HRMS PIPELINE</text>
            <text x="232" y="78" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-secondary)" textAnchor="middle">AWS S3 Pre-Signed URLs</text>
            <text x="232" y="93" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-secondary)" textAnchor="middle">Facial Verification Validation</text>
            <text x="232" y="108" fontFamily="var(--font-mono)" fontSize="7" fill="var(--accent-primary)" textAnchor="middle">Shift Scheduling Workflow</text>

            <path d="M 305 80 L 340 80" stroke="var(--accent-primary)" strokeWidth="1.5" />
            <polygon points="340,80 334,76 334,84" fill="var(--accent-primary)" />

            {/* Audit & Compliance */}
            <rect x="345" y="45" width="100" height="70" rx="4" fill="var(--bg-surface)" stroke="var(--border-default)" strokeWidth="1.5" />
            <text x="395" y="68" fontFamily="var(--font-mono)" fontSize="8" fontWeight="700" fill="var(--text-primary)" textAnchor="middle">AUDIT & PAYROLL</text>
            <text x="395" y="85" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-muted)" textAnchor="middle">Verified Clock-ins</text>
            <text x="395" y="99" fontFamily="var(--font-mono)" fontSize="7" fill="var(--accent-primary)" textAnchor="middle">MSSQL Historical Logs</text>
          </svg>
        </div>
      );
  }
}
