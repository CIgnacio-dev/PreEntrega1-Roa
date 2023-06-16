import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../src/Components/About';
import Contact from './Components/Contact';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './Components/ItemList';
import ItemDetails from './Components/ItemDetails';



let App= () => {
  let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  return (
    
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemList items={items} />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="./Components/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="./Components/items" element={<ItemList items={items} />} />
          
        </Routes>
       
      </div>
    </BrowserRouter>
    
  );
  
}

export default App;
