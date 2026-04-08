import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

type Section = 'inicio' | 'servicios' | 'nosotros' | 'contacto';

interface ContactProps {
  onSectionChange: (section: Section) => void;
}

export default function Contact({ onSectionChange }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    website_url: '', // Honeypot field (hidden)
    privacyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check legal consents
    if (!formData.privacyAccepted) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Preparation for Web3Forms
    const accessKey = "e0d4c966-26c0-46a6-8326-f8d996b41f56";
    const web3FormData = {
      ...formData,
      access_key: accessKey,
      subject: `Nuevo mensaje de ${formData.name} - Multiservicios Vivivan`,
      from_name: "Web Multiservicios Vivivan",
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(web3FormData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          service: '', 
          message: '', 
          website_url: '', 
          privacyAccepted: false 
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#D9D9D9] px-4 py-2 rounded-full mb-4">
            <span className="text-[#2F7DBD] font-semibold">Hablemos</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Solicita tu presupuesto sin compromiso y te responderemos lo antes posible
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Solicita tu Presupuesto
              </h3>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-semibold" htmlFor="name">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-semibold" htmlFor="email">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-semibold" htmlFor="phone">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="678 995 784"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-semibold" htmlFor="service">
                  Tipo de servicio
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="construccion">Construcción</option>
                  <option value="electricidad">Electricidad</option>
                  <option value="pladur">Pladur</option>
                  <option value="pintura">Pintura</option>
                  <option value="fontaneria">Fontanería</option>
                  <option value="carpinteria">Carpintería</option>
                  <option value="reforma">Reforma Integral</option>
                  <option value="mantenimiento">Mantenimiento</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-semibold" htmlFor="message">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                ></textarea>
              </div>

              {/* Legal Checkboxes */}
              <div className="mb-6 space-y-3">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacyAccepted"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    required
                    className="mt-1 h-4 w-4 text-[#2F7DBD] focus:ring-[#2F7DBD] border-gray-300 rounded cursor-pointer"
                  />
                  <div className="ml-2 text-sm text-gray-600">
                    <label htmlFor="privacyAccepted" className="cursor-pointer">
                      He leído y acepto la{' '}
                    </label>
                    <a
                      href="/privacidad.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2F7DBD] underline hover:text-[#5DA9DD] transition-colors"
                    >
                      política de privacidad
                    </a>{' '}
                    *
                  </div>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="cookiesAccepted"
                    required
                    className="mt-1 h-4 w-4 text-[#2F7DBD] focus:ring-[#2F7DBD] border-gray-300 rounded cursor-pointer"
                  />
                  <div className="ml-2 text-sm text-gray-600">
                    <label htmlFor="cookiesAccepted" className="cursor-pointer">
                      Acepto el{' '}
                    </label>
                    <a
                      href="/cookies.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2F7DBD] underline hover:text-[#5DA9DD] transition-colors"
                    >
                      uso de cookies
                    </a>{' '}
                    *
                  </div>
                </div>
              </div>

              {/* Honeypot field - Hidden from users */}
              <div className="hidden">
                <input
                  type="text"
                  name="website_url"
                  value={formData.website_url}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[#2F7DBD] to-[#5DA9DD] hover:from-[#5DA9DD] hover:to-[#2F7DBD] text-white py-4 rounded-lg transition transform hover:scale-105 shadow-lg font-bold flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : 'Enviar Solicitud'}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center font-semibold border border-green-200">
                  ¡Gracias! Hemos recibido tu solicitud correctamente. Te responderemos en breve.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center font-semibold border border-red-200">
                  Vaya, algo ha fallado al enviar. Por favor, inténtalo de nuevo o llámanos directamente.
                </div>
              )}

              <p className="text-sm text-gray-500 mt-4 text-center">
                * Nos pondremos en contacto contigo lo antes posible
              </p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-[#2F7DBD]/10 rounded-lg border border-[#2F7DBD]/20">
                  <div className="bg-[#2F7DBD] p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Teléfono</h4>
                    <a href="tel:+34678995784" className="text-[#2F7DBD] hover:text-[#5DA9DD] block font-semibold">+34 678 995 784</a>
                    <a href="tel:+34636504876" className="text-[#2F7DBD] hover:text-[#5DA9DD] block font-semibold">+34 636 504 876</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[#2F7DBD]/10 rounded-lg border border-[#2F7DBD]/20 shadow-sm hover:shadow-glow-secondary transition-shadow">
                  <div className="bg-[#2F7DBD] p-3 rounded-lg flex-shrink-0 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                    <a href="mailto:multiservicios@solucionesvivivan.es" className="text-[#2F7DBD] hover:text-[#5DA9DD] block text-sm font-semibold">multiservicios@solucionesvivivan.es</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[#2F7DBD]/10 rounded-lg border border-[#2F7DBD]/20 shadow-sm hover:shadow-glow-secondary transition-shadow">
                  <div className="bg-[#2F7DBD] p-3 rounded-lg flex-shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Dirección</h4>
                    <p className="text-gray-600 font-semibold">Calle Miguel Bueno, 14</p>
                    <p className="text-gray-600">29640 Fuengirola, Málaga</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[#2F7DBD]/10 rounded-lg border border-[#2F7DBD]/20 shadow-sm hover:shadow-glow-secondary transition-shadow">
                  <div className="bg-[#2F7DBD] p-3 rounded-lg flex-shrink-0 shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Horario de Atención</h4>
                    <p className="text-gray-600 font-semibold">Lunes - Viernes: 9:00 - 17:00</p>
                    <p className="text-gray-500 text-sm mt-2">Sábados y Domingos: Cerrados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
