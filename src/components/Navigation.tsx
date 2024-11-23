import { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import throttle from 'lodash/throttle';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => setIsOpen(false));

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 20);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const menuItems = [
    { href: '#', label: 'Accueil' },
    { href: '#services', label: 'Nos Services' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed w-screen lg:px-12 top-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#" 
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <img 
                src="https://www.netplus-parebrise.com/images/logo.png" 
                alt="Net Pare-Brise Logo"
                className="h-16 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`nav-link relative ${
                  activeLink === href ? 'text-brand-blue' : ''
                }`}
                onClick={() => handleLinkClick(href)}
              >
                {label}
                {activeLink === href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-blue"
                    initial={false}
                  />
                )}
              </a>
            ))}
            <a href="#contact" className="nav-cta group">
              <span>Demande de Devis</span>
              <FileText className="group-hover:rotate-6 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-brand-blue transition-colors duration-200"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col space-y-4 p-4">
                {menuItems.map(({ href, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    className={`nav-link ${
                      activeLink === href ? 'text-brand-blue' : ''
                    }`}
                    onClick={() => handleLinkClick(href)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  className="nav-cta w-full justify-center"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Demande de Devis</span>
                  <FileText />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}