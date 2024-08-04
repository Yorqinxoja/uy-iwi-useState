import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.jsx';
import './product.css';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        const firstFourProducts = data.products.slice(0, 4);
        setProducts(firstFourProducts);
      })
      .catch(error => console.error('Mahsulotlarni olishda xato:', error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
