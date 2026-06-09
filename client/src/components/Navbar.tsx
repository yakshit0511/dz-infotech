import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Product', path: '/product' },
    { name: 'Careers', path: '/careers' },
    { name: 'About', path: '/about' },
  ];

  const activeStyle = "text-accent border-b-2 border-accent pb-1 font-semibold";
  const inactiveStyle = "text-white/80 hover:text-white font-medium transition-colors duration-300 pb-1 border-b-2 border-transparent";
 
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-primary shadow-lg border-b border-white/5 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo className="h-10 sm:h-12" light />
          </Link>
 
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
 
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link to="/partner">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(232, 98, 42, 0.25)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent text-white font-medium px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-accent/90 transition-all duration-300"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
 
          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent p-1 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[280px] bg-white shadow-2xl z-50 p-6 flex flex-col justify-between md:hidden"
            >
              <div>
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                  <Logo className="h-10" iconOnly />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-primary hover:text-accent p-1"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `text-lg py-2 border-b border-gray-100 ${
                          isActive ? 'text-accent font-semibold' : 'text-primary/80 font-medium'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </nav>
              </div>

              <div className="mt-auto pt-6 border-t">
                <Link to="/partner" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-primary text-white font-medium py-3 rounded-full flex items-center justify-center gap-2 hover:bg-primary/95 transition-all">
                    Partner With Us
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
