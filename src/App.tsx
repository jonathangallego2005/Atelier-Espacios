import React, { useCallback } from 'react';
import {
  Navbar,
  Hero,
  ProjectGrid,
  ServiceAccordion,
  BookingCTA,
  Footer,
} from './components';
import './App.css';

function App(): React.ReactElement {
  const handleBookingClick = useCallback(() => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleBookingSubmit = useCallback((email: string) => {
    console.log('Booking request from:', email);
    // Handle booking submission here (API call, etc.)
  }, []);

  return (
    <div className="min-h-screen bg-atelier-bg">
      {/* Navigation */}
      <Navbar onBookingClick={handleBookingClick} />

      {/* Hero Section */}
      <Hero
        title="Espacios que Inspiran"
        subtitle="Diseño arquitectónico de excelencia. Proyectos que transforman."
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=800&fit=crop"
      />

      {/* Projects Grid */}
      <ProjectGrid />

      {/* Services Accordion */}
      <ServiceAccordion />

      {/* Booking CTA */}
      <BookingCTA onSubmit={handleBookingSubmit} />

      {/* Footer */}
      <Footer
        contactEmail="contacto@atelierespcios.com"
        contactPhone="+54 11 1234-5678"
        location="Buenos Aires, Argentina"
      />
    </div>
  );
}

export default App;
