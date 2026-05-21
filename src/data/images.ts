/** URLs de imágenes del sitio */

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const picsum = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const HERO_IMAGE = unsplash('1600585154340-be6161a56a0c', 1600, 1000);

export const IMAGE_FALLBACK = picsum('atelier-fallback', 800, 800);

/** Hotel Boutique — imagen proporcionada */
export const HOTEL_BOUTIQUE_IMAGE =
  'https://hotelresortdesign-south.com/wp-content/uploads/2024/04/LVSMA-credit-Andre-Araiz-Grounds-872A2001-Edit-1024x682.jpg';

export const PROJECT_IMAGES = {
  residencial1: unsplash('1600585154340-be6161a56a0c', 800, 800),
  comercial1: picsum('atelier-comercial-1', 800, 600),
  cultural1: picsum('atelier-cultural-1', 800, 800),
  residencial2: picsum('atelier-residencial-2', 800, 600),
  hoteleria1: HOTEL_BOUTIQUE_IMAGE,
  comercial2: picsum('atelier-comercial-2', 800, 600),
} as const;
