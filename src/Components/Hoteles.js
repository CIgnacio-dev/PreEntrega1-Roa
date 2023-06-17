import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

let Hoteles = () => {
  let location = useLocation();
  let [categoria, setCategoria] = useState('');

  useEffect(() => {
    // Extraer la categoría de la ruta actual
    let path = location.pathname;
    let pathParts = path.split('/');
    let currentCategoria = pathParts[pathParts.length - 1];

    // Actualizar la categoría en el estado
    setCategoria(currentCategoria);
  }, [location]);

  return (
    <div>
      <h2>Hoteles</h2>
      <h3>3 Estrellas</h3>
      {categoria === '3estrellas' && (
        <p>Mostrar aquí los hoteles de 3 estrellas</p>
      )}

      <h3>4 Estrellas</h3>
      {categoria === '4estrellas' && (
        <p>Mostrar aquí los hoteles de 4 estrellas</p>
      )}

      <h3>5 Estrellas</h3>
      {categoria === '5estrellas' && (
        <p>Mostrar aquí los hoteles de 5 estrellas</p>
      )}
    </div>
  );
};

export default Hoteles;
