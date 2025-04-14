import React from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  const sneakers = [
    {
      name: "Nike Air Max 270",
      price: 70.00,
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png",
      onSale: true
    }
  ];

  return (
    <div className="App">
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ProductCard product={sneakers[0]} />
     </div>
    </div>

  );
}

export default App;