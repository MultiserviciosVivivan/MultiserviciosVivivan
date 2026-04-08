import { Menu, Phone } from 'lucide-react';
import { useState } from 'react';

type Section = 'inicio' | 'servicios' | 'nosotros' | 'contacto';

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: Section) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button
              onClick={() => onSectionChange('inicio')}
              className="text-2xl font-bold transition hover:scale-105"
            >
              <span className="bg-gradient-to-r from-[#2F7DBD] to-[#5DA9DD] bg-clip-text text-transparent">
                Multiservicios Vivivan
              </span>
            </button>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onSectionChange('inicio')}
              data-section="inicio"
              className={`transition ${activeSection === 'inicio' ? 'text-[#2F7DBD] font-semibold' : 'text-gray-700 hover:text-[#2F7DBD]'}`}
            >
              Inicio
            </button>
            <button
              onClick={() => onSectionChange('servicios')}
              data-section="servicios"
              className={`transition ${activeSection === 'servicios' ? 'text-[#2F7DBD] font-semibold' : 'text-gray-700 hover:text-[#2F7DBD]'}`}
            >
              Servicios
            </button>
            <button
              onClick={() => onSectionChange('nosotros')}
              data-section="nosotros"
              className={`transition ${activeSection === 'nosotros' ? 'text-[#2F7DBD] font-semibold' : 'text-gray-700 hover:text-[#2F7DBD]'}`}
            >
              Nosotros
            </button>
            <button
              onClick={() => onSectionChange('contacto')}
              data-section="contacto"
              className={`transition ${activeSection === 'contacto' ? 'text-[#2F7DBD] font-semibold' : 'text-gray-700 hover:text-[#2F7DBD]'}`}
            >
              Contacto
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+34678995784" className="flex items-center text-[#2F7DBD] hover:text-[#5DA9DD]">
              <Phone className="w-4 h-4 mr-2" />
              <span>678 995 784</span>
            </a>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('inicio')}
                data-section="inicio"
                className={`text-left ${activeSection === 'inicio' ? 'text-[#2F7DBD] font-semibold' : 'text-gray-700 hover:text-[#2F7DBD]'}`}
              >
                Inicio
              </button>
              <button
                onClick={() => handleNavClick('servicios')}
                data-section="servicios"
                className={`text-left ${activeSection === 'servicios' ? 'text-[#2F7DBD] font-semibold' : 'text-gray-700 hover:text-[#2F7DBD]'}`}
              >
                Servicios
              </button>
              <button
                onClick={() => handleNavClick('nosotros')}
                data-section="nosotros"
                className={`text-left ${activeSection === 'nosotros' ? 'text-[#2F7DBD] font-semibold' : 'text-gray-700 hover:text-[#2F7DBD]'}`}
              >
                Nosotros
              </button>
              <button
                onClick={() => handleNavClick('contacto')}
                data-section="contacto"
                className={`text-left ${activeSection === 'contacto' ? 'text-[#2F7DBD] font-semibold' : 'text-gray-700 hover:text-[#2F7DBD]'}`}
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
