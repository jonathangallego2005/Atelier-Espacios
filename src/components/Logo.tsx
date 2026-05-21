import React, { useState } from 'react';

export interface LogoProps {
  className?: string;
  inverted?: boolean;
}

const LOGO_PNG = '/logo-atelier.png';
const LOGO_SVG = '/logo-atelier.svg';

export const Logo: React.FC<LogoProps> = ({
  className = 'h-6 sm:h-7 lg:h-8 w-auto object-contain',
  inverted = false,
}) => {
  const [src, setSrc] = useState(LOGO_PNG);

  return (
    <img
      src={src}
      alt="Atelier • Espacios"
      className={`${className}${inverted ? ' brightness-0 invert' : ''}`.trim()}
      onError={() => {
        if (src !== LOGO_SVG) setSrc(LOGO_SVG);
      }}
    />
  );
};

export default Logo;
