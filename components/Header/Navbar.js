"use client";
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'About' },
    { label: 'Education' },
    { label: 'Experience' },
    { label: 'Skills' },
    { label: 'Projects' },
    { label: 'Reviews' },
    { label: 'Contact' },
  ];

  return (
    <header className='w-full fixed top-0 xl:px-6 xl:py-4 px-4 py-2 z-50 bg-transparent'>
      {isMobile ? (
        // Mobile Navbar
        <>
          <nav className='w-fit ml-auto px-4 py-3 flex justify-end items-center backdrop-blur-[241px] bg-white/10 border border-white/30 rounded-[40px] h-fit'>
            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className='text-white focus:outline-none'
              aria-label='Toggle menu'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
            <div className='absolute top-full right-4 mt-2 w-56 backdrop-blur-[241px] bg-white/10 border border-white/30 rounded-2xl overflow-hidden'>
              <ul className='py-2'>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.label.toLowerCase()}`}
                      className='block px-4 py-3 text-white text-center text-[1rem] font-semibold hover:bg-white hover:text-black transition-all duration-300 ease-in-out'
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        // Desktop Navbar (your original code)
        <nav className='w-fit mx-auto px-6 py-3 flex justify-between items-center backdrop-blur-[241px] bg-white/10 border border-white/30 rounded-[40px] h-fit'>
          <ul className='flex flex-nowrap justify-center items-center gap-4 w-full'>
            {navItems.map((item, index) => (
              <li
                key={index}
                className='inline-block px-3 py-1 text-white text-center text-[1.2rem] font-semibold hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-full'
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;