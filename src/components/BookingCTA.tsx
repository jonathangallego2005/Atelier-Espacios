import React, { useState } from 'react';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';

export interface BookingCTAProps {
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
    if (!email.trim()) return;

    onSubmit?.(email);
    setSubmitted(true);
    setEmail('');

    window.setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="booking" className="w-full bg-[#F4F4F4] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <span className="atelier-eyebrow block mb-6">Consultoría</span>

        <h2 className="atelier-section-title mb-8">Transformá tu Espacio</h2>

        <p className="atelier-body atelier-body--muted atelier-body--lg mb-16 lg:mb-20 max-w-2xl mx-auto">
          Agenda una sesión de consultoría con nuestro equipo. Sin compromiso, con visión
          arquitectónica clara desde el primer encuentro.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-10"
        >
          <label htmlFor="booking-email" className="sr-only">
            Correo electrónico
          </label>
          <input
            type="email"
            id="booking-email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="atelier-input flex-1 px-6 py-4 bg-white border border-gray-100 shadow-sm focus:outline-none focus:border-[#C99C70] transition-colors duration-300"
          />
          <button type="submit" className="atelier-btn-cta inline-flex items-center justify-center gap-2 px-8 py-4 shrink-0">
            {submitted ? (
              <>
                <Check className="w-4 h-4" strokeWidth={1.5} />
                <span>Enviado</span>
              </>
            ) : (
              <>
                <span>Solicitar Consulta</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </>
            )}
          </button>
        </form>

        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="atelier-body text-sm inline-flex items-center gap-2 text-[#0A0A0A]/60 hover:text-[#C99C70] uppercase tracking-wide transition-colors duration-300"
        >
          <span>Reservar en Calendly</span>
          <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
        </a>

        <div className="mt-24 lg:mt-32 pt-16 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-12">
          {[
            { value: '15+', label: 'Años de experiencia' },
            { value: '100+', label: 'Proyectos completados' },
            { value: '45+', label: 'Clientes satisfechos' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="atelier-stat-value">{stat.value}</p>
              <p className="atelier-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
