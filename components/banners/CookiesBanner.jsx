

import Link from 'next/link';
import React from 'react';

// components/CookieConsentBanner.js

export default function CookiesBanner({ onAccept }) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 text-center p-4">
        <p className="text-sm">
          Este sitio utiliza cookies para mejorar la experiencia de usuario. 
          <a href="/politica-de-cookies" className="text-blue-600 hover:text-blue-800"> Más información</a>.
        </p>
        <button 
          onClick={onAccept} 
          className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Aceptar
        </button>
      </div>
    );
  }
  
