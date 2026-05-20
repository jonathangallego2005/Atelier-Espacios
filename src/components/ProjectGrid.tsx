import React, { useState } from 'react';

interface Project {
  id: string;
  name: string;
  location: string;
  image: string;
  category: string;
}

interface ProjectGridProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: '1',
    name: 'Residencia en Retiro',
    location: 'Buenos Aires, Argentina',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=500&fit=crop',
    category: 'Residencial',
  },
  {
    id: '2',
    name: 'Oficinas Corporativas',
    location: 'CABA, Argentina',
    image: 'https://images.unsplash.com/photo-1600607687644-c173fc2e48c1?w=500&h=500&fit=crop',
    category: 'Comercial',
  },
  {
    id: '3',
    name: 'Centro Cultural',
    location: 'La Plata, Argentina',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=500&fit=crop',
    category: 'Cultural',
  },
  {
    id: '4',
    name: 'Vivienda Sustentable',
    location: 'Zona Norte, Argentina',
    image: 'https://images.unsplash.com/photo-1600585154297-0eb8c582a7b7?w=500&h=500&fit=crop',
    category: 'Residencial',
  },
  {
    id: '5',
    name: 'Hotel Boutique',
    location: 'Mendoza, Argentina',
    image: 'https://images.unsplash.com/photo-1578683800627-d0b7f8b82b78?w=500&h=500&fit=crop',
    category: 'Hotelería',
  },
  {
    id: '6',
    name: 'Espacio de Co-working',
    location: 'San Telmo, Argentina',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=500&fit=crop',
    category: 'Comercial',
  },
];

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects = defaultProjects }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="w-full bg-atelier-bg py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl font-light text-atelier-text mb-4 tracking-tight">
            Proyectos Destacados
          </h2>
          <div className="w-12 h-px bg-atelier-accent" />
          <p className="text-atelier-text text-opacity-70 mt-6 text-base lg:text-lg font-light max-w-2xl">
            Cada proyecto es una oportunidad para explorar nuevas posibilidades en el diseño arquitectónico.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden aspect-square cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative w-full h-full bg-atelier-container shadow-subtle overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-atelier-cta bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500" />

                {/* Content */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <h3 className="text-atelier-container text-lg lg:text-xl font-light tracking-wide mb-2">
                    {project.name}
                  </h3>
                  <p className="text-atelier-container text-sm font-light opacity-90">
                    {project.location}
                  </p>
                  <p className="text-atelier-accent text-xs tracking-widest mt-4 uppercase">
                    {project.category}
                  </p>
                </div>

                {/* Static Content (visible always on mobile, hidden on hover on desktop) */}
                {hoveredId !== project.id && (
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:opacity-0">
                    <p className="text-atelier-text text-xs tracking-widest uppercase">
                      {project.category}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
