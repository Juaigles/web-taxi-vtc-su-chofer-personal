'use client';

import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

export const Selector = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Lista de idiomas soportados
  const locales = ['en', 'es', 'fr', 'de'];

  // Obtén el idioma actual desde la ruta
  const currentLocale = pathname.split('/')[1];

  const handleChange = (e) => {
    const selectedLocale = e.target.value;
    // Reemplaza el idioma en la ruta y navega a la nueva ruta
    const newPathname = `/${selectedLocale}${pathname.slice(currentLocale.length + 1)}`;
    router.push(newPathname);
  };

  return (
    <select onChange={handleChange} value={currentLocale}>
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
