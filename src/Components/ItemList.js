import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Destinos disponibles: </h2>
      <div className="card-container">
        {items.map(item => (
          <Card key={item.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} alt={item.name}  />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Link to={`/items/${item.id}`}>
                <Button variant="primary">Ver Detalles</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}


export default ItemList;
