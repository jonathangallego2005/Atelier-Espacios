import React from 'react';
import { ExternalLink, Globe, Mail, MapPin, Phone, Share2 } from 'lucide-react';
import { Logo } from './Logo';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  contactEmail?: string;
  contactPhone?: string;
  location?: string;
  legalLinks?: FooterLink[];
}

const defaultLegalLinks: FooterLink[] = [
  { label: 'Términos de Servicio', href: '#' },
  { label: 'Política de Privacidad', href: '#' },
  { label: 'Cookies', href: '#' },
];

export const Footer: React.FC<FooterProps> = ({
  contactEmail = 'contacto@atelierespcios.com',
  contactPhone = '+54 11 1234-5678',
  location = 'Buenos Aires, Argentina',
  legalLinks = defaultLegalLinks,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Logo inverted className="h-6 sm:h-7 lg:h-8 w-auto object-contain" />
              <span className="atelier-nav-brand text-white">Atelier • Espacios</span>
            </div>
            <p className="atelier-footer-text max-w-xs">
              Diseño arquitectónico de excelencia para espacios que inspiran transformaciones.
            </p>
          </div>

          <div>
            <h3 className="atelier-footer-eyebrow">Contacto</h3>
            <ul className="space-y-5">
              <li>
                <a href={`mailto:${contactEmail}`} className="atelier-footer-link inline-flex items-center gap-3">
                  <Mail className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                  className="atelier-footer-link inline-flex items-center gap-3"
                >
                  <Phone className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  {contactPhone}
                </a>
              </li>
              <li className="atelier-footer-text inline-flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={1.5} />
                {location}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="atelier-footer-eyebrow">Servicios</h3>
            <ul className="space-y-4">
              {['Consultoría Arquitectónica', 'Diseño Arquitectónico', 'Dirección de Obra'].map(
                (service) => (
                  <li key={service}>
                    <a href="#services" className="atelier-footer-link">
                      {service}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="atelier-footer-eyebrow">Síguenos</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="atelier-footer-link inline-flex items-center gap-3"
                >
                  <Share2 className="w-4 h-4" strokeWidth={1.5} />
                  Instagram
                  <ExternalLink className="w-3 h-3 opacity-50" strokeWidth={1.5} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="atelier-footer-link inline-flex items-center gap-3"
                >
                  <Globe className="w-4 h-4" strokeWidth={1.5} />
                  LinkedIn
                  <ExternalLink className="w-3 h-3 opacity-50" strokeWidth={1.5} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="atelier-footer-legal">
            © {currentYear} Atelier • Espacios. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="atelier-footer-legal hover:text-[#C99C70] transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
