import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import OurPartners from './components/OurPartners';
import Footer from './components/Footer';
import FloatingPhone from './components/FloatingPhone';
import HashScrollManager from './components/HashScrollManager';
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import IcuAtHomePage from './pages/IcuAtHomePage';

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/icu-at-home" element={<IcuAtHomePage />} />
        </Routes>
        <OurPartners />
        <Footer />
        <FloatingPhone />
      </div>
    </BrowserRouter>
  );
}

export default App;
