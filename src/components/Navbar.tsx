import React, { useState } from 'react';

interface NavbarProps {
  onBookingClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookingClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-atelier-container border-b border-atelier-border">
      <div className="max-w-7xl mx-auto px-6 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo-atelier.png" 
              alt="Atelier Espacios"
              className="h-8 lg:h-10 w-auto"
            />
            <span className="text-atelier-text font-light tracking-wide hidden sm:inline">
              Atelier • Espacios
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#projects" className="text-atelier-text hover:text-atelier-accent transition-colors text-sm tracking-wide">
              Proyectos
            </a>
            <a href="#services" className="text-atelier-text hover:text-atelier-accent transition-colors text-sm tracking-wide">
              Servicios
            </a>
            <a href="#about" className="text-atelier-text hover:text-atelier-accent transition-colors text-sm tracking-wide">
              Nosotros
            </a>
            <a href="#contact" className="text-atelier-text hover:text-atelier-accent transition-colors text-sm tracking-wide">
              Contacto
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={onBookingClick}
            className="px-6 py-2 bg-atelier-cta text-atelier-container text-sm font-medium tracking-wide hover:bg-atelier-text transition-colors duration-300"
          >
            Agendar Sesión
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 ml-4"
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-atelier-text transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-atelier-text transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-atelier-text transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4 border-t border-atelier-border pt-4">
            <a href="#projects" className="block text-atelier-text hover:text-atelier-accent text-sm tracking-wide">
              Proyectos
            </a>
            <a href="#services" className="block text-atelier-text hover:text-atelier-accent text-sm tracking-wide">
              Servicios
            </a>
            <a href="#about" className="block text-atelier-text hover:text-atelier-accent text-sm tracking-wide">
              Nosotros
            </a>
            <a href="#contact" className="block text-atelier-text hover:text-atelier-accent text-sm tracking-wide">
              Contacto
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
