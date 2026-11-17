import { Router } from './router/Router.tsx';
import { useRouter } from './router/useRouter.ts';
import { Navbar } from './components/layout/Navbar.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { Home } from './pages/Home.tsx';
import { ProjectDetails } from './pages/ProjectDetails.tsx';
import { NotFound } from './pages/NotFound.tsx';

function RouteSwitch() {
  const { currentPath } = useRouter();

  // Match /projects/:slug
  if (currentPath.startsWith('/projects/')) {
    return <ProjectDetails />;
  }

  // Match Home / or anchor links
  if (currentPath === '/' || currentPath === '' || currentPath.startsWith('/#')) {
    return <Home />;
  }

  // 404 Fallback
  return <NotFound />;
}

export default function App() {
  return (
    <Router>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'var(--bg-main)',
        }}
      >
        <Navbar />
        <div style={{ flex: 1 }}>
          <RouteSwitch />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
