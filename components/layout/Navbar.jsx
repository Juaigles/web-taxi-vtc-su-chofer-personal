"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import Link from 'next/link';



import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
    { link: '/vtc-salamanca', name: 'VTC SALAMANCA' },
    { link: '/taxi-salamanca', name: 'TAXI SALAMANCA' },
    { link: '/transfer-salamanca', name: 'TRANSFER SALAMANCA' },
    { link: '/alquiler-con-conductor', name: 'ALQUILER CON CONDUCTOR' },
    { link: '/chofer-privado', name: 'CHÓFER PRIVADO' },
    { link: '/blog', name: 'BLOG' },
    { link: '/contacto', name: 'CONTACTO' },]


function Navbar() {
    const [navbar, setNavbar] = useState(false);
        // Initialize selectedLink with a state that will not cause re-render
    const [selectedLink, setSelectedLink] = useState(undefined);

    useEffect(() => {
        // This code runs only on the client side
        const storedSelectedLink = window.localStorage.getItem('selectedLink');
        if (storedSelectedLink !== null) {
            setSelectedLink(storedSelectedLink);
        } else {
            setSelectedLink(null); // Set to null if there's no stored value
        }
    }, []);

    useEffect(() => {
        // Update localStorage when selectedLink changes and is not undefined
        if (selectedLink !== undefined && selectedLink !== null) {
            window.localStorage.setItem('selectedLink', selectedLink);
        }
    }, [selectedLink]);

    function handleClick(link) {
        setNavbar(!navbar)

        setSelectedLink(link)
    }

    return (
        <div className='navcontainer '>
            <div className=''>

                <Link href="/" onClick={()=> setSelectedLink(null)} className='logo'>SuChóferPersonal</Link>
                <div className="icons">
                    <button
                        className="p-2"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <FaTimes size={30} className='text-[var(--primary-color)] hover:text-[var(--secondary-color)]' />
                        ) : (
                            <FaBars size={30} className='text-[var(--primary-color)] hover:text-[var(--secondary-color)]' />

                        )}
                    </button>
                </div>
            </div>

            <nav className={`ml-4 ${navbar ? '' : 'hidden'} lg:flex `}>
                <div className='grid md:flex md:flex-wrap  gap-x-2 md:gap-x-4 lg:gap-x-6 text-[var(--secondary-color)] nav'>
                    {links.map((link, index) => (
                        <Link key={index}  href={link.link} onClick={() => handleClick(index)} className={`hover:text-[var(--third-color)] ${selectedLink==index ? 'text-[var(--fourth-color)]': ''} my-2 lg:my-0`}>{link.name}</Link>
                    ))}
                    {/* <Link href="/vtc-salamanca" onClick={() => handleClick()} className='hover:text-[var(--third-color)] my-2 lg:my-0'>VTC SALAMANCA</Link>
                          <Link href="/taxi-salamanca" onClick={() => handleClick()} className='hover:text-[var(--third-color)] my-2 lg:my-0'>TAXI SALAMANCA</Link>
                    <Link href="/transfer-salamanca" onClick={() => handleClick()} className='hover:text-[var(--third-color)] my-2 lg:my-0'>TRANSFER SALAMANCA</Link>
                    <Link href="/alquiler-con-conductor" onClick={() => handleClick()} className='hover:text-[var(--third-color)] my-2 lg:my-0'>ALQUILER CON CONDUCTOR</Link>
                    <Link href="/chofer-privado" onClick={() => handleClick()} className='hover:text-[var(--third-color)] my-2 lg:my-0'>CHÓFER PRIVADO</Link>
                    <Link href="/contacto" onClick={() => handleClick()} className='hover:text-[var(--third-color)] my-2 lg:my-0'>CONTACTO</Link> */}
                </div>
            </nav>

        </div>
    )
}

export default Navbar;
