import React, { useState } from 'react';

const Product = ({ name, price, onAddToCart }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
    <p>Name: {name}</p>
    <p>Price: ${price.toFixed(2)}</p>
    <button onClick={onAddToCart}>Add to Cart</button>
  </div>
);

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Claasmate books', price: 19.99 },
    { id: 2, name: 'Totem pens', price: 29.99 },
    { id: 3, name: 'Alaram', price: 39.99 },
    
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
