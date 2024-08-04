import React from 'react';
import stars from './images/Frame 10.png';

const SellingCard = ({ product }) => {
  return (

    <div className="product__container">
        <div className="product-card">
         <img id='product' src={product.thumbnail} alt={product.title} />
         <div className="product-details">
          <h3>{product.title}</h3>
          <div className="product__rating">
           <div><img src={stars} alt="" /> </div>
           <p>{product.rating}</p>
          </div>
          <div className="product__price">
            <p>${product.price}</p>
          </div>

         </div>
        </div>
        
        
    </div>
    

  );
};

export default SellingCard;