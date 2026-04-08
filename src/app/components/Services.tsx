import { Hammer, Zap, Square, Paintbrush, Wrench, Home, Drill, Warehouse, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Section = 'inicio' | 'servicios' | 'nosotros' | 'contacto';

interface ServicesProps {
  onSectionChange: (section: Section) => void;
}

const services = [
  {
    icon: Hammer,
    title: 'Construcción',
    description: 'Obras nuevas, ampliaciones y estructuras. Trabajamos con los mejores materiales y técnicas.',
    features: ['Obra nueva', 'Ampliaciones', 'Estructuras', 'Albañilería'],
  },
  {
    icon: Zap,
    title: 'Electricidad',
    description: 'Instalaciones eléctricas, boletines, reparaciones y mantenimiento. Electricistas certificados.',
    features: ['Instalaciones', 'Boletines', 'Domótica', 'Iluminación LED'],
  },
  {
    icon: Square,
    title: 'Pladur',
    description: 'Montaje de tabiques, techos, trasdosados y aislamientos. Acabados perfectos garantizados.',
    features: ['Tabiques', 'Techos', 'Trasdosados', 'Aislamientos'],
  },
  {
    icon: Paintbrush,
    title: 'Pintura',
    description: 'Pintura interior y exterior, revestimientos decorativos y acabados profesionales.',
    features: ['Interior', 'Exterior', 'Decorativa', 'Lacados'],
  },
  {
    icon: Wrench,
    title: 'Fontanería',
    description: 'Instalaciones sanitarias, reparaciones, calefacción y climatización.',
    features: ['Instalaciones', 'Calefacción', 'Climatización', 'Reparaciones'],
  },
  {
    icon: Home,
    title: 'Reformas Integrales',
    description: 'Reformas completas de viviendas, locales y oficinas. Llave en mano.',
    features: ['Viviendas', 'Locales', 'Oficinas', 'Cocinas y baños'],
  },
  {
    icon: Drill,
    title: 'Carpintería',
    description: 'Puertas, ventanas, armarios empotrados y muebles a medida.',
    features: ['Puertas', 'Ventanas', 'Armarios', 'Muebles a medida'],
  },
  {
    icon: Warehouse,
    title: 'Mantenimiento',
    description: 'Servicios de mantenimiento preventivo y correctivo para tu hogar o negocio.',
    features: ['Preventivo', 'Correctivo', 'Comunidades', 'Empresas'],
  },
];

export default function Services({ onSectionChange }: ServicesProps) {
  return (
    <section id="servicios" className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#D9D9D9] px-4 py-2 rounded-full mb-4">
            <span className="text-[#2F7DBD] font-semibold">¿Qué ofrecemos?</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios profesionales para cubrir todas tus necesidades. Desde pequeñas reparaciones hasta grandes proyectos de construcción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="bg-gradient-to-br from-[#2F7DBD] to-[#5DA9DD] w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <ArrowRight className="w-4 h-4 mr-2 text-[#5DA9DD]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#2F7DBD] to-[#1E5D8F] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">
                ¿Necesitas un presupuesto personalizado?
              </h3>
              <p className="text-xl mb-8 text-blue-100">
                Contacta con nosotros y te ofreceremos un presupuesto sin compromiso adaptado a tus necesidades y presupuesto.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-[#5DA9DD] rounded-full p-2 mr-4 text-white">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Respuesta lo antes posible</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#5DA9DD] rounded-full p-2 mr-4 text-white">
                    <Hammer className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Presupuestos detallados y transparentes</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#5DA9DD] rounded-full p-2 mr-4 text-white">
                    <Home className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Visita gratuita para evaluar el proyecto</span>
                </div>
              </div>
              <button
                onClick={() => onSectionChange('contacto')}
                className="mt-8 bg-gradient-to-r from-[#2F7DBD] to-[#5DA9DD] hover:from-[#5DA9DD] hover:to-[#2F7DBD] text-white px-8 py-4 rounded-lg transition transform hover:scale-105 shadow-lg font-bold"
              >
                Solicitar Presupuesto Gratis
              </button>
            </div>
            <div className="h-full hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Trabajador profesional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
