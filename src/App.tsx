import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HashScrollManager from './components/HashScrollManager';
import RouteSeo from './components/RouteSeo';
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import IcuAtHomePage from './pages/IcuAtHomePage';
import FoundersPage from './pages/FoundersPage';
import InvestorsAndPartnersPage from './pages/InvestorsAndPartnersPage';
import FaqsPage from './pages/FaqsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

function App() {
  return (
    <BrowserRouter>
      <RouteSeo />
      <HashScrollManager />
      <div
        id="app-root"
        className="min-h-screen bg-white"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          overflowX: 'hidden',
          position: 'relative',
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/founders" element={<FoundersPage />} />
          <Route path="/investors-partners" element={<InvestorsAndPartnersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/icu-at-home" element={<IcuAtHomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
