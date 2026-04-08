import { Facebook, Instagram } from 'lucide-react';

type Section = 'inicio' | 'servicios' | 'nosotros' | 'contacto';

interface FooterProps {
  onSectionChange: (section: Section) => void;
}

export default function Footer({ onSectionChange }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#2F7DBD] to-[#5DA9DD] bg-clip-text text-transparent">
                Multiservicios Vivivan
              </span>
            </h3>
            <p className="text-gray-400">
              Tu empresa de confianza para construcción, reformas y servicios profesionales.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios" className="hover:text-white transition">Construcción</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Electricidad</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Pladur</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Pintura</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Fontanería</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => onSectionChange('nosotros')} className="hover:text-white transition">Sobre Nosotros</button></li>
              <li><button onClick={() => onSectionChange('contacto')} className="hover:text-white transition">Contacto</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-[#1877F2] p-3 rounded-lg transition" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#E4405F] p-3 rounded-lg transition" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-black p-3 rounded-lg transition" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Multiservicios Vivivan. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
