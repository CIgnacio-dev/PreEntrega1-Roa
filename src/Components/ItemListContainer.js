import React from 'react';


let ItemListContainer = ({ greeting }) => {
    return (
      <div style={containerStyle}>
        <h2 style={headingStyle}>{greeting}</h2>
       
      </div>
    );
  }
  
  // CSS
  const containerStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  };
  
  const headingStyle = {
    fontSize: '24px',
    color: '#333',
  };

export default ItemListContainer;