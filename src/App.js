
import React, { useState, useEffect } from 'react';
import Product from './product';

const App = () => {
  const [products, setProducts] = useState([]);
  const [topN, setTopN] = useState(10);

  useEffect(() => {
    const mockData = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
      { id: 4, name: 'Product 4', price: 40 },
      { id: 5, name: 'Product 5', price: 50 },
      { id: 6, name: 'Product 6', price: 60 },
      { id: 7, name: 'Product 7', price: 70 },
      { id: 7, name: 'Product 8', price: 80 },
      { id: 7, name: 'Product 9', price: 90 },
      { id: 7, name: 'Product 10', price: 100 },
      // Add more products...
    ];
    setProducts(mockData);
  }, []);

  const sortProductsByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const displayTopNProducts = () => {
    return products.slice(0, topN).map(product => (
      <Product key={product.id} product={product} />
    ));
  };

  return (
    <div>
      <h1>Top {topN} Products</h1>
      <button onClick={sortProductsByPrice}>Sort by Price</button>
      {displayTopNProducts()}
    </div>
  );
};

export default App;
