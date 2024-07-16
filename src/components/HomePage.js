import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/HomePageStyle.css';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    }
    fetchProducts();
  }, []);

  return (
    <div className='BodyHome'>
      <div style={{ height: '125px' }} />
      <div style={{ height: "100%", width: "100%" }}>
        <h2 className='Wtitles' style={{ fontSize: '52px', paddingTop: '5px', paddingLeft: '5px' }}>
          Product Dashboard
        </h2>
        <div className='product-grid'>
          {products.map(product => (
            <div key={product.id} className='product-card'>
              <img src={product.image} alt={product.title} className='product-image' />
              <h2 className='product-title'>{product.title}</h2>
              <p className='product-price'>${product.price}</p>
              <p className='product-category'>{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
