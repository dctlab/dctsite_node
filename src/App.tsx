import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Why from './components/Why';
import Docs from './components/Docs';
import './modern-normalize.css';
import './styles/app.css';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.documentElement.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className={`min-h-full md:static ${menuOpen ? 'overflow-hidden' : ''}`}>
        <nav className="header-x-margin header-y-padding static absolute md:fixed z-50 max-w-min select-none w-full">
          <div className="container flex justify-between items-center">
            <div className="logo-vertical pointer-events-none hidden md:block z-40">
              <a href="/" className="pointer-events-auto border-none">
                <img src="/src/assets/images/directcybertech-vertical.svg" alt="DirectCyberTech" className="inline dark:hidden" />
                <img src="/src/assets/images/directcybertech-vertical-cream-hover.svg" alt="DirectCyberTech" className="hidden dark:inline" />
              </a>
            </div>

            <div className="logo-horizontal pointer-events-none block md:hidden z-40">
              <a href="/" className="pointer-events-auto border-none">
                <img src="/src/assets/images/directcybertech-horizontal.svg" alt="DirectCyberTech" className="logo-dark" />
                <img src="/src/assets/images/directcybertech-horizontal-cream-hover.svg" alt="DirectCyberTech" className="logo-light" />
              </a>
            </div>

            <div
              ref={menuRef}
              id="nav-menu"
              className="z-10 fixed top-0 left-0 h-full w-full bg-black dark:bg-cream-hover bg-opacity-40 dark:bg-opacity-40 transition-all duration-300 ease-in-out"
              style={{
                display: menuOpen ? 'block' : 'none',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
              }}
            >
              <div className="h-full w-screen sm:w-2/3 md:w-3/4 bg-cream dark:bg-black">
                <div id="nav-menu-contents" className="h-full overflow-y-auto md:top-0 md:left-0 font-bold p-4">
                  <div id="nav-items" className="h-full w-full max-w-full flex flex-col space-y-4">
                    <div><Link to="/" onClick={toggleMenu}>Home</Link></div>
                    <div><Link to="/about" onClick={toggleMenu}>About</Link></div>
                    <div><Link to="/services" onClick={toggleMenu}>Services</Link></div>
                    <div><Link to="/why" onClick={toggleMenu}>Why us?</Link></div>
                    <div><Link to="/docs" onClick={toggleMenu}>Docs</Link></div>
                    <div><Link to="/contact/" onClick={toggleMenu}>Contact</Link></div>
                  </div>
                </div>
              </div>
            </div>

            <button
              id="hide-nav-button"
              onClick={toggleMenu}
              style={{ display: menuOpen ? 'block' : 'none' }}
              className="z-50 relative"
              aria-label="Close Menu"
            >
              <svg className="inline text-black dark:text-cream-hover fill-current cursor-pointer align-top" width="34" height="32" viewBox="0 0 34 32" xmlns="http://www.w3.org/2000/svg">
                <title>Menu Close</title>
                <rect x="3.33008" y="0.667969" width="40.7291" height="4.52546" transform="rotate(42 3.33008 0.667969)" fill="currentColor"></rect>
                <rect x="33.3867" y="3.34204" width="40.7291" height="4.52546" transform="rotate(137 33.3867 3.34204)" fill="currentColor"></rect>
              </svg>
            </button>

            <button
              id="show-nav-button"
              onClick={toggleMenu}
              style={{ display: menuOpen ? 'none' : 'block' }}
              className="z-50 relative"
              aria-label="Open Menu"
            >
              <svg className="inline fill-current cursor-pointer align-top" width="32" height="30" viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
                <rect y="0" width="32" height="4" fill="currentColor"></rect>
                <rect y="12" width="32" height="4" fill="currentColor"></rect>
                <rect y="24" width="32" height="4" fill="currentColor"></rect>
              </svg>
            </button>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why" element={<Why />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </main>

        <footer className={`bg-blue pt-8 pt-10 text-cream ${menuOpen ? 'hidden sm:block' : ''}`}>
          <div className="content-x-margin">
            <div className="container">
              <div className="pt-1.5 sm:pt-0 md:pt-19 md:flex md:justify-between">
                <div className="mt-9 sm:mt-8 lg:mt-0.5">
                  <a href="/" className="link-bold">Home</a>
                </div>
                <div className="mt-9 sm:mt-8 lg:mt-0.5">
                  <a href="/services/" className="link-bold">Services</a>
                </div>
                <div className="mt-9 sm:mt-8 lg:mt-0.5">
                  <a href="/why/" className="link-bold">Why us?</a>
                </div>
                <div className="mt-9 sm:mt-8 lg:mt-0.5">
                  <a href="/about/" className="link-bold">About</a>
                </div>
                <div className="mt-9 sm:mt-8 lg:mt-0.5">
                  <a href="/docs/" className="link-bold">Docs</a>
                </div>
                <div className="mt-9 sm:mt-8 lg:mt-0.5">
                  <a href="/contact/" className="link-bold">Contact</a>
                </div>
                <div className="mt-9 sm:mt-8 lg:mt-0.5">
                  <a href="/careers/" className="link-bold">Careers</a>
                </div>
                <div className="mt-9 sm:mt-8 lg:mt-0.5">
                  <a href="/journal/" className="link-bold">Journal</a>
                </div>
                <div className="mt-9 sm:mt-8 lg:mt-0.5">
                  <a href="/press/" className="link-bold">Press</a>
                </div>
              </div>

              <div className="para-sm leading-none mb-0 pb-16 sm:pb-19 mt-16 sm:mt-20 md:pb-11 md:mt-24 flex md:items-end md:align-end md:content-end md:justify-end">
                <div>
                  <span onClick={toggleDarkMode}>©</span> DirectCyberTech
                </div>
                <a href="/legal/terms/" className="inline-block ml-6 md:mr-6 md:order-first">
                  Terms & Legal
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
