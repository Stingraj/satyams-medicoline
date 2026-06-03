import AppointmentBooking from '../components/AppointmentBooking';
import ContactMapSection from '../components/ContactMapSection';

export default function ContactPage() {
  return (
    <main id="contact" className="pt-[72px] lg:pt-[104px]">
      <h1 className="sr-only">Contact Medicoline Healthcare for appointments and home healthcare support</h1>
      <AppointmentBooking />
      <ContactMapSection />
    </main>
  );
}
