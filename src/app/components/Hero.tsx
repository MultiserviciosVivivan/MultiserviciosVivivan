import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Award, Users, FileText } from 'lucide-react';

type Section = 'inicio' | 'servicios' | 'nosotros' | 'contacto';

interface HeroProps {
  onSectionChange: (section: Section) => void;
}

export default function Hero({ onSectionChange }: HeroProps) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1636790921342-cbdc4b783de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzU1NzI2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Construcción profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 py-20">
        <div className="inline-block bg-[#5DA9DD]/20 backdrop-blur-sm border border-[#5DA9DD]/30 px-6 py-2 rounded-full mb-6">
          <span className="text-[#5DA9DD] font-semibold">Profesionalidad y Garantía</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Tu Empresa de <span className="text-[#5DA9DD]">Multiservicios</span> en Fuengirola
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
          Especialistas en construcción, electricidad, pladur, reformas y mantenimiento en toda la Costa del Sol. Calidad y compromiso en cada proyecto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => onSectionChange('contacto')}
            className="bg-gradient-to-r from-[#2F7DBD] to-[#5DA9DD] hover:from-[#5DA9DD] hover:to-[#2F7DBD] text-white px-8 py-4 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg font-bold"
          >
            <FileText className="w-5 h-5" />
            Pedir Presupuesto
          </button>
          <button
            onClick={() => onSectionChange('servicios')}
            className="bg-white/10 backdrop-blur-md border-2 border-white/50 hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg transition shadow-lg"
          >
            Ver Servicios
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-[#2F7DBD] rounded-full p-3">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold mb-2">Máxima Calidad</div>
            <div className="text-gray-300">En todos nuestros trabajos</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-[#2F7DBD] rounded-full p-3 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold mb-2">Compromiso</div>
            <div className="text-gray-300">Satisfacción garantizada</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-[#2F7DBD] rounded-full p-3">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold mb-2">Lunes a Viernes</div>
            <div className="text-gray-300">Atención de 9:00 a 17:00</div>
          </div>
        </div>
      </div>
    </section>
  );
}
