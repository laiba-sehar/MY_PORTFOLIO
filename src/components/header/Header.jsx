import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const navRef = useRef(null);
  const navbarHeight = 70; // Adjust this to match your navbar height

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const sectionPosition = section.offsetTop - navbarHeight;

    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
    });

    setActiveItem(sectionId);
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className='navbar' ref={navRef}>
      <img src={logo} alt="Logo" className='logo' />
      <div className='hamburger' onClick={toggleNav}>
        {isOpen ? '✖' : '☰'}
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li
          className={activeItem === 'about' ? 'active' : ''}
          onClick={() => scrollToSection('about')}
        >
          About
        </li>
        <li
          className={activeItem === 'projects' ? 'active' : ''}
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </li>
        <li
          className={activeItem === 'skills' ? 'active' : ''}
          onClick={() => scrollToSection('skills')}
        >
          Skills
        </li>
        <li
          className={activeItem === 'links' ? 'active' : ''}
          onClick={() => scrollToSection('links')}
        >
          Links
        </li>
      </ul>
    </nav>
  );
}

export default Header;
