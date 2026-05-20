import React, { useState } from 'react';

interface BookingCTAProps {
  onSubmit?: (email: string) => void;
  calendlyUrl?: string;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({
  onSubmit,
  calendlyUrl = 'https://calendly.com/',
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      onSubmit?.(email);
      setSubmitted(true);
      setEmail('');

      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="booking" className="w-full bg-atelier-cta py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-atelier-container mb-4 tracking-tight">
            Transformá tu Espacio
          </h2>
          <div className="w-12 h-px bg-atelier-accent mx-auto mb-6" />
          <p className="text-atelier-container text-opacity-90 text-base lg:text-lg font-light max-w-2xl mx-auto">
            Agenda una sesión de consultoría gratuita con nuestro equipo de expertos.
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-atelier-container text-sm font-light tracking-wide mb-3">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-6 py-4 bg-atelier-container bg-opacity-95 text-atelier-text placeholder-atelier-text placeholder-opacity-40 border border-atelier-accent border-opacity-30 focus:outline-none focus:ring-2 focus:ring-atelier-accent focus:ring-opacity-50 transition-all duration-300 text-sm font-light"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-atelier-accent text-atelier-cta font-medium tracking-wide text-sm hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  Solicitud Enviada
                </>
              ) : (
                <>
                  <span>Solicitar Consulta</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Alternative CTA */}
          <div className="mt-8 text-center">
            <p className="text-atelier-container text-opacity-80 text-sm font-light mb-4">
              O reserva directamente en Calendly
            </p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-atelier-container text-atelier-cta font-medium tracking-wide text-sm hover:shadow-lg transition-all duration-300"
            >
              <span>Abrir Calendly</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 lg:mt-20 pt-12 lg:pt-16 border-t border-atelier-container border-opacity-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-light text-atelier-accent mb-2">15+</div>
              <p className="text-atelier-container text-opacity-70 text-sm font-light">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-atelier-accent mb-2">100+</div>
              <p className="text-atelier-container text-opacity-70 text-sm font-light">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-atelier-accent mb-2">45+</div>
              <p className="text-atelier-container text-opacity-70 text-sm font-light">Clientes Satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
