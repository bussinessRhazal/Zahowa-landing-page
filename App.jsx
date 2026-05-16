import { useState } from 'react';
import SEO from './components/SEO';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Recipes from './sections/Recipes';
import Pillars from './sections/Pillars';
import FoundersCircle from './sections/FoundersCircle';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import ContactModal from './components/ContactModal';
import LegalModal from './components/LegalModal';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();
  const [activeModal, setActiveModal] = useState(null);
  const openModal = (name) => setActiveModal(name);
  const closeModal = () => setActiveModal(null);

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
      <Footer onOpenModal={openModal} />
      <StickyCTA />

      {activeModal === 'contact' && (
        <ContactModal onClose={closeModal} />
      )}
      {activeModal === 'mentions' && (
        <LegalModal title="Mentions légales" type="mentions" onClose={closeModal} />
      )}
      {activeModal === 'confidentialite' && (
        <LegalModal title="Politique de confidentialité" type="confidentialite" onClose={closeModal} />
      )}
    </>
  );
}
