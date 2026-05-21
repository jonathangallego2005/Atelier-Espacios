import React, { useCallback } from 'react';
import {
  Navbar,
  Hero,
  StudioIntro,
  ProjectGrid,
  ServiceAccordion,
  BookingCTA,
  Footer,
} from './components';

function App(): React.ReactElement {
  const handleBookingClick = useCallback(() => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleBookingSubmit = useCallback((email: string) => {
    console.log('Booking request from:', email);
  }, []);

  return (
    <div className="atelier-page min-h-screen bg-[#F4F4F4] antialiased">
      <Navbar onBookingClick={handleBookingClick} />

      <Hero
        title="Espacios que Inspiran"
        subtitle="Diseño arquitectónico de excelencia. Proyectos que transforman."
      />

      <StudioIntro />

      <ProjectGrid />

      <ServiceAccordion />

      <BookingCTA onSubmit={handleBookingSubmit} />

      <Footer
        contactEmail="contacto@atelierespcios.com"
        contactPhone="+54 11 1234-5678"
        location="Buenos Aires, Argentina"
      />
    </div>
  );
}

export default App;
