import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export interface NavbarProps {
  onBookingClick?: () => void;
}

const navLinks = [
  { href: '#projects', label: 'Proyectos' },
  { href: '#services', label: 'Servicios' },
  { href: '#booking', label: 'Contacto' },
] as const;

export const Navbar: React.FC<NavbarProps> = ({ onBookingClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-white border-b border-gray-100 shadow-sm'
          : 'bg-white/90 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 lg:py-5">
        <div className="flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <Logo className="h-6 sm:h-7 lg:h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80" />
            <span className="atelier-nav-brand hidden sm:inline">Atelier • Espacios</span>
          </a>

          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="atelier-nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBookingClick}
              className="atelier-btn-cta hidden sm:inline-flex px-8 py-3"
            >
              Agendar Sesión
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#0A0A0A]"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-gray-100 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="atelier-nav-link block text-sm"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                closeMenu();
                onBookingClick?.();
              }}
              className="atelier-btn-cta w-full mt-4 px-8 py-4"
            >
              Agendar Sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
