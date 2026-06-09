import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Product from './pages/Product';
import Careers from './pages/Careers';
import About from './pages/About';
import Partner from './pages/Partner';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/919328525395"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:bg-[#20BA56] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute right-14 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none whitespace-nowrap border border-white/10">
        Chat with us
      </span>
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.233-1.371a9.92 9.92 0 004.775 1.22c5.507 0 9.991-4.479 9.992-9.986C22.002 6.478 17.518 2 12.012 2zm5.794 14.51c-.248.697-1.229 1.28-1.783 1.348-.48.058-1.107.25-3.218-.622-2.701-1.117-4.437-3.874-4.571-4.053-.134-.179-1.097-1.458-1.097-2.78 0-1.323.692-1.973.938-2.235.247-.262.538-.328.718-.328.18 0 .359.006.516.012.162.006.381-.06.596.457.221.53.757 1.848.822 1.98.066.133.11.288.021.464-.088.176-.133.287-.265.441-.133.155-.279.348-.398.469-.133.133-.272.279-.117.545.155.266.69 1.136 1.48 1.842.818.728 1.506.953 1.72.11.215.156.48.332.695.176.216-.156.48-.458.72-.782.242-.324.484-.227.81-.1.326.126 2.066 1.026 2.42 1.203.354.178.59.263.678.414.088.15.088.875-.16 1.572z" />
      </svg>
    </a>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-bg-light">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/product" element={<Product />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/partner" element={<Partner />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
