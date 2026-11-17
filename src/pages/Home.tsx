import { useEffect } from 'react';
import { Hero } from '../components/sections/Hero.tsx';
import { Projects } from '../components/sections/Projects.tsx';
import { Skills } from '../components/sections/Skills.tsx';
import { Experience } from '../components/sections/Experience.tsx';
import { Contact } from '../components/sections/Contact.tsx';
import { personalData } from '../data/personal.ts';

export function Home() {
  useEffect(() => {
    document.title = `${personalData.name} — Full Stack Developer & Systems Engineer`;
  }, []);

  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
