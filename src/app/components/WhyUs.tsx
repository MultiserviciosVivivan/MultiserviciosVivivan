import { CheckCircle, Clock, Award, Users, Star, Shield, TrendingUp, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    icon: CheckCircle,
    title: 'Calidad Garantizada',
    description: 'Trabajos realizados con los más altos estándares de calidad. Garantía en todos nuestros servicios.',
  },
  {
    icon: Clock,
    title: 'Puntualidad',
    description: 'Cumplimos con los plazos establecidos sin excepciones. Tu tiempo es valioso para nosotros.',
  },
  {
    icon: Award,
    title: 'Experiencia Profesional',
    description: 'Equipo de profesionales cualificados y comprometidos con la calidad en cada detalle.',
  },
  {
    icon: Users,
    title: 'Atención Personalizada',
    description: 'Asesoramiento y seguimiento personalizado en cada proyecto que realizamos.',
  },
  {
    icon: Shield,
    title: 'Seguros y Certificaciones',
    description: 'Todos nuestros trabajos cuentan con seguro de responsabilidad civil.',
  },
  {
    icon: TrendingUp,
    title: 'Mejor Relación Calidad-Precio',
    description: 'Presupuestos competitivos sin comprometer la calidad del servicio.',
  },
];

const testimonials = [
  {
    name: 'María González',
    role: 'Reforma de cocina',
    content: 'Excelente trabajo en la reforma de mi cocina. Profesionales, puntuales y muy limpios. Totalmente recomendables.',
    rating: 5,
  },
  {
    name: 'Carlos Ruiz',
    role: 'Instalación eléctrica',
    content: 'Hicieron toda la instalación eléctrica de mi local. Muy satisfecho con el resultado y el precio.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    role: 'Reforma integral',
    content: 'Reformaron mi piso completo. Muy profesionales y el resultado superó mis expectativas. Gran equipo.',
    rating: 5,
  },
];

type Section = 'inicio' | 'servicios' | 'nosotros' | 'contacto';

interface WhyUsProps {
  onSectionChange: (section: Section) => void;
}

export default function WhyUs({ onSectionChange }: WhyUsProps) {
  return (
    <section id="nosotros" className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#D9D9D9] px-4 py-2 rounded-full mb-4">
            <span className="text-[#2F7DBD] font-semibold">Conócenos</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En Multiservicios Vivivan nos comprometemos a ofrecer soluciones integrales
            para tu hogar o negocio con la máxima profesionalidad y dedicación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#2F7DBD]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#5DA9DD]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1664902578190-ec984429fabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzU1NzI2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Equipo de trabajo"
              className="rounded-2xl shadow-2xl w-full relative"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="bg-gradient-to-br from-[#2F7DBD] to-[#5DA9DD] p-3 rounded-lg flex-shrink-0 w-fit mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Testimonials section removed as per user request */}
        <div className="bg-gradient-to-r from-[#2F7DBD] to-[#1E5D8F] rounded-2xl p-12 text-center text-white shadow-2xl">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-4xl font-bold mb-4 text-white">
            Compromiso con la Excelencia
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-50">
            Construyendo confianza y transformando espacios en Fuengirola. Cada proyecto es único
            y nos dedicamos a hacerlo realidad con pasión y profesionalidad.
          </p>
          <button
            onClick={() => onSectionChange('contacto')}
            className="bg-gradient-to-r from-[#5DA9DD] to-white hover:from-white hover:to-[#5DA9DD] text-[#2F7DBD] px-10 py-4 rounded-lg transition transform hover:scale-105 shadow-xl font-bold"
          >
            Solicitar Presupuesto
          </button>
        </div>
      </div>
    </section>
  );
}
