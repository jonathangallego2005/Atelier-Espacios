import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
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
    <footer className="w-full bg-atelier-text text-atelier-container">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12 lg:mb-16">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo-atelier.png"
                alt="Atelier Espacios"
                className="h-8 w-auto invert"
              />
              <span className="text-lg font-light tracking-wide">Atelier • Espacios</span>
            </div>
            <p className="text-atelier-container text-opacity-60 text-sm font-light leading-relaxed">
              Diseño arquitectónico de excelencia para espacios que inspiran.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-light tracking-widest uppercase mb-6 text-atelier-accent">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-sm font-light hover:text-atelier-accent transition-colors duration-300"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                  className="text-sm font-light hover:text-atelier-accent transition-colors duration-300"
                >
                  {contactPhone}
                </a>
              </li>
              <li className="text-sm font-light text-atelier-container text-opacity-70">
                {location}
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-light tracking-widest uppercase mb-6 text-atelier-accent">
              Síguenos
            </h3>
            <ul className="space-y-3 flex flex-col">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light hover:text-atelier-accent transition-colors duration-300 inline-flex items-center gap-2"
                >
                  Instagram
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light hover:text-atelier-accent transition-colors duration-300 inline-flex items-center gap-2"
                >
                  LinkedIn
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-atelier-container border-opacity-20 py-8 lg:py-12">
          {/* Legal Links */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <ul className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-xs font-light text-atelier-container text-opacity-60 hover:text-atelier-accent transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <p className="text-xs font-light text-atelier-container text-opacity-50 text-center md:text-left">
            © {currentYear} Atelier • Espacios. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
