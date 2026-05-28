import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CollegeCollaboration from './components/CollegeCollaboration';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  useScrollReveal();

  return (
    <>
      <FloatingButtons />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Clients />
        <Testimonials />
        <Gallery />
        <CollegeCollaboration />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
