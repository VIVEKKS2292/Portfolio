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
import SectionScrollController, { SectionDef } from './components/SectionScrollController/SectionScrollController';

const sections: SectionDef[] = [
  {
    id: 'hero',
    label: 'HOME',
    element: <Hero />,
  },
  {
    id: 'about',
    label: 'ABOUT',
    element: <Intro />,
  },
  {
    id: 'work',
    label: 'EXPERIENCE',
    allowInnerScroll: true,
    element: <Experience />,
  },
  {
    id: 'impact',
    label: 'NUMBERS',
    element: <ImpactStats />,
  },
  {
    id: 'projects',
    label: 'PROJECTS',
    allowInnerScroll: true,
    element: <Projects />,
  },
  {
    id: 'experiments',
    label: 'EXPLORATORY',
    allowInnerScroll: true,
    element: <Exploratory />,
  },
  {
    id: 'dump',
    label: 'THE DUMP',
    allowInnerScroll: true,
    element: <TheDump />,
  },
  {
    id: 'education',
    label: 'ORIGIN',
    element: <Education />,
  },
  {
    id: 'connect',
    label: 'CONNECT',
    element: <Connect />,
  },
];

export default function App() {
  return (
    <SectionScrollController
      sections={sections}
      footer={<Footer />}
    >
      {/* Top scroll progress indicator */}
      <ScrollProgress />

      {/* Global persistent header navigation */}
      <Navbar />
    </SectionScrollController>
  );
}
