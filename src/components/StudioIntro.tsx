import React from 'react';

export interface StudioIntroProps {
  label?: string;
  title?: string;
  description?: string;
}

export const StudioIntro: React.FC<StudioIntroProps> = ({
  label = 'El Estudio',
  title = 'Arquitectura con intención',
  description =
    'En Atelier • Espacios diseñamos desde la materialidad, la luz y la escala humana. Cada proyecto es un diálogo entre contexto, función y permanencia.',
}) => {
  return (
    <section className="w-full bg-white py-24 lg:py-32 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <span className="atelier-eyebrow block mb-4">{label}</span>
            <h2 className="atelier-section-title atelier-section-title--sm">{title}</h2>
          </div>
          <p className="lg:col-span-8 atelier-body atelier-body--muted atelier-body--lg max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudioIntro;
