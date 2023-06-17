import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const ItemDetails = ({ items }) => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>No se encontró el item</div>;
  }

  const handleIncrement = () => {
    setQuantity(quantity => quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity => quantity - 1);
    }
  };
  return (
    <div className='details'>
      <h2>Detalles del Destino</h2>
      <h3>{item.name}</h3>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <h3>{item.price} USD (Promoción Ida y vuelta por persona)</h3>
      <div className='carrito'>
      <p>Cantidad : {quantity}</p>
      <Button className="btn btn-primary" onClick={handleIncrement}>Agregar</Button>
      <Button className="btn btn-danger" onClick={handleDecrement}>Quitar</Button>
      
      </div>
      <sub>Promoción = 1 pasaje de ida y vuelta</sub>
    </div>
  );
};

export default ItemDetails;
