import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface ServiceAccordionProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    id: '1',
    title: 'Consultoría Arquitectónica',
    description: 'Análisis integral de tu proyecto y planificación estratégica.',
    details: [
      'Evaluación de viabilidad técnica y comercial',
      'Planificación de presupuestos y tiempos',
      'Asesoramiento en normativas y regulaciones',
      'Estudio de factibilidad de proyectos',
    ],
  },
  {
    id: '2',
    title: 'Diseño Arquitectónico',
    description: 'Desarrollo conceptual y ejecución de diseños innovadores.',
    details: [
      'Diseño conceptual y esquemático',
      'Desarrollo de planos técnicos detallados',
      'Renderizados y visualizaciones 3D',
      'Coordinación con especialidades (MEP)',
    ],
  },
  {
    id: '3',
    title: 'Dirección de Obra',
    description: 'Supervisión integral durante la ejecución del proyecto.',
    details: [
      'Control de calidad en obra',
      'Seguimiento de cronograma',
      'Resolución de inconvenientes técnicos',
      'Coordinación con contratistas',
    ],
  },
];

export const ServiceAccordion: React.FC<ServiceAccordionProps> = ({
  services = defaultServices,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(services[0]?.id ?? null);

  const toggleAccordion = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section id="services" className="w-full bg-white py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <header className="mb-16 lg:mb-24">
          <span className="atelier-eyebrow block mb-4">Servicios</span>
          <h2 className="atelier-section-title">Nuestros Servicios</h2>
        </header>

        <div className="border-t border-gray-200">
          {services.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div key={service.id} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full py-8 lg:py-10 flex items-center justify-between gap-6 text-left group"
                  aria-expanded={isExpanded}
                >
                  <h3 className="atelier-accordion-title">{service.title}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C99C70] shrink-0 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </button>

                {isExpanded && (
                  <div className="pb-10 lg:pb-12 space-y-6">
                    <p className="atelier-body atelier-body--muted max-w-2xl">{service.description}</p>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="atelier-body atelier-body--muted text-sm flex items-start gap-3"
                        >
                          <span className="text-[#C99C70] mt-0.5 shrink-0">—</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceAccordion;
