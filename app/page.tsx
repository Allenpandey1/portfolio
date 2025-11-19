'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import OpportunityModal from '@/components/OpportunityModal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <TechStack />
        <Projects />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <OpportunityModal />
    </>
  );
}

