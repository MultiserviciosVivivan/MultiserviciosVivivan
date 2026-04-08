import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Section = 'inicio' | 'servicios' | 'nosotros' | 'contacto';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('inicio');

  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return <Hero onSectionChange={setActiveSection} />;
      case 'servicios':
        return <Services onSectionChange={setActiveSection} />;
      case 'nosotros':
        return <WhyUs onSectionChange={setActiveSection} />;
      case 'contacto':
        return <Contact onSectionChange={setActiveSection} />;
      default:
        return <Hero onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main>
        {renderContent()}
      </main>
      <Footer onSectionChange={setActiveSection} />
    </div>
  );
}