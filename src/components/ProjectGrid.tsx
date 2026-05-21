import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECT_IMAGES } from '../data/images';
import { ProjectImage } from './ProjectImage';

export interface Project {
  id: string;
  name: string;
  location: string;
  image: string;
  category: string;
}

export interface ProjectGridProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: '1',
    name: 'Residencia en Retiro',
    location: 'Buenos Aires, Argentina',
    image: PROJECT_IMAGES.residencial1,
    category: 'Residencial',
  },
  {
    id: '2',
    name: 'Oficinas Corporativas',
    location: 'CABA, Argentina',
    image: PROJECT_IMAGES.comercial1,
    category: 'Comercial',
  },
  {
    id: '3',
    name: 'Centro Cultural',
    location: 'La Plata, Argentina',
    image: PROJECT_IMAGES.cultural1,
    category: 'Cultural',
  },
  {
    id: '4',
    name: 'Vivienda Sustentable',
    location: 'Zona Norte, Argentina',
    image: PROJECT_IMAGES.residencial2,
    category: 'Residencial',
  },
  {
    id: '5',
    name: 'Hotel Boutique',
    location: 'Mendoza, Argentina',
    image: PROJECT_IMAGES.hoteleria1,
    category: 'Hotelería',
  },
  {
    id: '6',
    name: 'Espacio de Co-working',
    location: 'San Telmo, Argentina',
    image: PROJECT_IMAGES.comercial2,
    category: 'Comercial',
  },
];

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects = defaultProjects }) => {
  return (
    <section id="projects" className="w-full bg-[#F4F4F4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <header className="mb-16 lg:mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          <div>
            <span className="atelier-eyebrow block mb-5">Portafolio</span>
            <h2 className="atelier-section-title">Proyectos Destacados</h2>
          </div>
          <p className="atelier-body atelier-body--muted atelier-body--lg max-w-xl lg:ml-auto lg:pt-8">
            Cada proyecto es una oportunidad para explorar nuevas posibilidades en el diseño
            arquitectónico. Espacios que trascienden lo ordinario.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group transition-transform duration-300 ease-out hover:-translate-y-1.5"
            >
              <div className="atelier-project-card">
                <ProjectImage src={project.image} alt={project.name} />

                <div className="atelier-project-card__shade" aria-hidden="true" />

                <div className="atelier-project-card__overlay">
                  <span className="atelier-card-eyebrow">{project.category}</span>
                  <h3 className="atelier-card-title">{project.name}</h3>
                  <p className="atelier-card-meta">{project.location}</p>
                </div>

                <div className="atelier-project-card__action" aria-hidden="true">
                  <ArrowUpRight className="w-4 h-4 text-[#0A0A0A]" strokeWidth={1.5} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
