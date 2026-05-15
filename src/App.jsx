import SEO from './components/SEO';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Recipes from './sections/Recipes';
import Pillars from './sections/Pillars';
import FoundersCircle from './sections/FoundersCircle';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <SEO />
      <Nav />
      <main>
        <Hero />
        <Story />
        <Recipes />
        <Pillars />
        <FoundersCircle />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
