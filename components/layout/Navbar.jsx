"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Selector } from './Selector';


function Navbar() {

  const [navbar, setNavbar] = useState(false);
  const [selectedLink, setSelectedLink] = useState(undefined);

  useEffect(() => {
    const storedSelectedLink = window.localStorage.getItem('selectedLink');
    if (storedSelectedLink !== null) {
      setSelectedLink(storedSelectedLink);
    } else {
      setSelectedLink(null);
    }
  }, []);

  useEffect(() => {
    if (selectedLink !== undefined && selectedLink !== null) {
      window.localStorage.setItem('selectedLink', selectedLink);
    }
  }, [selectedLink]);

  function handleClick(link) {
    setNavbar(!navbar);
    setSelectedLink(link);
  }

  // Si `t` aún no está definido, espera a que esté disponible antes de renderizar el contenido


  const links = [
    { link: '/vtc-salamanca', name: 'VTC Salamanca' },
    { link: '/taxi-salamanca', name: 'Taxi Salamanca' },
    { link: '/transfer-salamanca', name: 'Transfer Salamanca' },
    { link: '/alquiler-con-conductor', name: 'Alquiler con Conductor' },
    { link: '/chofer-privado', name: 'Chofer Privado' },
    { link: '/blog', name: 'Blog' },
    { link: '/contacto', name: 'Contacto' },
  ];

  return (
    <div className='navcontainer '>
      <div className=''>
        <Link href="/" onClick={() => setSelectedLink('logo')} className='logo'>
          SuChóferPersonal
        </Link>
        <div className="icons">
          <button className="p-2" onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <FaTimes size={30} className='text-[var(--primary-color)] hover:text-[var(--secondary-color)]' />
            ) : (
              <FaBars size={30} className='text-[var(--primary-color)] hover:text-[var(--secondary-color)]' />
            )}
          </button>
        </div>
      </div>

      <nav className={`ml-4 ${navbar ? '' : 'hidden'} lg:flex`}>
        <div className='grid md:flex md:flex-wrap gap-x-2 md:gap-x-4 lg:gap-x-6 text-[var(--secondary-color)] nav'>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              onClick={() => handleClick(index)}
              className={`hover:text-[var(--third-color)] ${selectedLink == index ? 'text-[var(--fourth-color)]' : ''} my-2 lg:my-0`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      
      </nav>
    </div>
  );
}

export default Navbar;
