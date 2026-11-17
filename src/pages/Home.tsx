import { useEffect } from 'react';
import { Hero } from '../components/sections/Hero.tsx';
// import { About } from '../components/sections/About.tsx';
import { Skills } from '../components/sections/Skills.tsx';
import { Experience } from '../components/sections/Experience.tsx';
import { Projects } from '../components/sections/Projects.tsx';
import { Contact } from '../components/sections/Contact.tsx';
import { personalData } from '../data/personal.ts';

export function Home() {
  useEffect(() => {
    document.title = `${personalData.name} — Software Developer & Systems Engineer`;
  }, []);

  return (
    <main>
      <Hero />
      {/* <About /> */}
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
