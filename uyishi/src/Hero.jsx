import React from 'react'
import "./Hero.css";
import hero from './images/Rectangle 2.png';
import versaci from './images/Vector (4).svg';
import zara from './images/Vector (5).svg';
import gucci from './images/gucci-logo-1 1.svg';
import prada from './images/Vector (6).svg';
import calvin from './images/Vector (7).svg';

export const Hero = () => {
  return (
      
   
  <div className="hero__box">
   <section className="hero">
    <img src={hero} alt="" />

    <div className="container">
      <div className="hero__card">
        <div className="hero__card__wrapper">
          <h3 className='hero__card__title'>FIND CLOTHES THAT MATCHES YOUR STYLE</h3>
          <p className='card__text'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className='hero__button'>Shop Now</button>

          <div className="card__values">
            <div className="card__value">
              <div className="value">200+</div>
              <div className="value__title">International Brands</div>
            </div>

            <div className="card__value">
              <div className="value">2,000+</div>
              <div className="value__title">High-Quality Products</div>
            </div>

            <div className="card__value__noborder">
              <div className="value">30,000+</div>
              <div className="value__title">Happy Customers</div>
            </div>
          </div>

        </div>
      </div>
    </div>
   </section>

   <div className="hero__brands">

    <div className="brand__images">
    <div className="brand">
      <a href=""><img src={versaci} alt="" /></a>
    </div>

    <div className="brand">
      <a href=""><img src={zara} alt="" /></a>
    </div>

    <div className="brand">
      <a href=""><img src={gucci} alt="" /></a>
    </div>

    <div className="brand">
      <a href=""><img src={prada} alt="" /></a>
    </div>

    <div className="brand">
      <a href=""><img src={calvin} alt="" /></a>
    </div>
    </div>

   </div>

   <div className="product__title">NEW ARRIVALS</div>
</div>
  )
}

export default Hero