import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../src/Components/About';
import Contact from './Components/Contact';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './Components/ItemList';
import ItemDetails from './Components/ItemDetails';
import Hoteles from './Components/Hoteles';



const App = () => {
  let items = [
    { id: 1, name: 'Francia', image: '../francia.jpg', description: ' El atractivo turístico de Francia se debe a la gran cantidad y variedad de puntos de interés, a la diversidad de paisajes, a la riqueza vinícola y gastronómica, al patrimonio histórico, cultural y artístico, al clima templado y a la facilidad de acceso y de infraestructuras de transporte, así como a la amplia y variada oferta del país (hoteles, restaurantes, parques de atracciones, etc.). Así, cada departamento francés es un departamento turístico con varios puntos de interés.', price: 1999.99 },
    { id: 2, name: 'Japón', image: '../japon.jpg', description: 'Japón se ha posicionado como un país digno de visitar y conocer a profundidad. Es por esto que la mayoría de gente que lo visita de turismo, anhela vivir aquí. Igual sucede con quienes se empapan de esta cultura, ¡es simplemente cautivante! La gastronomía nipona, por ejemplo, se ha popularizado en todo el mundo, puesto que no solamente es súper rica, también es bastante sana. También sus expresiones artísticas conquistan a cualquiera, como el Teatro Kabuki, que con su drama estilizado y el maquillaje tan estilizado de los actores, es un imperdible a la hora de ir a Japón.', price: 2490.99 },
    { id: 3, name: 'Miami', image: '../miami.jpg', description: 'Viajar a Miami ofrece al turista una experiencia multicultural: es una ciudad llena de sabores distintos, gente de todo el mundo, playas hermosas, estilos de música de cualquier tipo… es un lugar lleno de vida y movimiento capaz de cautivar a cualquier visitante.', price: 1490.99 },
  ];

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemList items={items} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/items" element={<ItemList items={items} />} />
          <Route path="/items/:id" element={<ItemDetails items={items} />} />
          <Route path="/hoteles/3estrellas" component={Hoteles} />
          <Route path="/hoteles/4estrellas" component={Hoteles} />
          <Route path="/components/hoteles/5estrellas" component={Hoteles} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;