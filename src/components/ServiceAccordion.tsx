import React, { useState } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
}

interface ServiceAccordionProps {
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

export const ServiceAccordion: React.FC<ServiceAccordionProps> = ({ services = defaultServices }) => {
  const [expandedId, setExpandedId] = useState<string | null>(services[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="w-full bg-atelier-container py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl font-light text-atelier-text mb-4 tracking-tight">
            Nuestros Servicios
          </h2>
          <div className="w-12 h-px bg-atelier-accent" />
          <p className="text-atelier-text text-opacity-70 mt-6 text-base lg:text-lg font-light max-w-2xl">
            Ofrecemos soluciones integrales en arquitectura, desde la consultoría hasta la dirección de obra.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="border border-atelier-border transition-all duration-500"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(service.id)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-atelier-bg transition-colors duration-300 text-left"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <span className="text-atelier-accent text-sm font-light tracking-widest">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg lg:text-xl text-atelier-text font-light tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div
                  className={`flex-shrink-0 ml-4 transition-transform duration-500 ${
                    expandedId === service.id ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-atelier-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedId === service.id ? 'max-h-80' : 'max-h-0'
                }`}
              >
                <div className="px-8 py-6 border-t border-atelier-border bg-atelier-bg">
                  <p className="text-atelier-text text-opacity-70 mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-atelier-accent rounded-full mt-2" />
                        <span className="text-atelier-text text-sm font-light">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAccordion;
