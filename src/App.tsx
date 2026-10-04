import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Intro from './components/Intro/Intro';

import Experience from './components/Experience/Experience';
import ImpactStats from './components/ImpactStats/ImpactStats';
import Projects from './components/Projects/Projects';
import Exploratory from './components/Exploratory/Exploratory';
import TheDump from './components/TheDump/TheDump';
import Education from './components/Education/Education';
import Connect from './components/Connect/Connect';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';

export default function App() {
  return (
    <>
      {/* Global scroll progress bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 00: Hero — cinematic opening */}
        <Hero />

        {/* 01: Who am I — identity */}
        <Intro />



        {/* 03: Experience — professional work */}
        <Experience />

        {/* Impact numbers — pull-out stat section */}
        <ImpactStats />

        {/* 04: Projects — selected case studies */}
        <Projects />

        {/* 05: Exploratory — experimental projects */}
        <Exploratory />

        {/* 06: The Dump — notebook of curiosity */}
        <TheDump />

        {/* 07: Education / Origin — geographic journey */}
        <Education />

        {/* 08: Connect — how to reach */}
        <Connect />
      </main>

      {/* Footer — film credits */}
      <Footer />
    </>
  );
}
