import React from 'react'
import "./Footer.css";
import shop from './images/SHOP.CO.svg';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg';
import be from './images/be.svg';
import visa from './images/Visa.svg';
import mastercard from './images/Mastercard.svg';
import paypal from './images/Paypal.svg';
import applepay from './images/A Pay.svg';
import gpay from './images/G Pay.svg';

export const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="offer__position">
        <div className="offer__box">
          <div className="offer__title">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
          <div className="offer__form">
             <form>
              <input type="email" required placeholder='📧 Enter your email address'/>
            </form>
            <button className='offer__button'>Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
        <div className="footer__top">
          <div className="container">
            <div className="footer__top__wrapper">

              <div className="footer__form">
                <img src={shop} alt="" />
                <div className='footer__form__title'>We have clothes that suits your style and which you’re proud to wear. From women to men.</div>
                
              <div className="footer__bottom__content">
               <div className="footer__bottom__webs">
                <a className='footer__bottom__web__link' href="#">
                  <img src={facebook} alt="" />
                </a>
                <a className='footer__bottom__web__link' href="#">
                  <img src={instagram} alt="" />
                </a>
                <a className='footer__bottom__web__link' href="#">
                  <img src={twitter} alt="" />
                </a>
                <a className='footer__bottom__web__link' href="#">
                  <img src={be} alt="" />
                </a>
              </div>
            </div>
              </div>

            <div className="footer__top__card">
              <div className="footer__col">
                <h4 className='footer__title'>Company</h4>
                <ul className='footer__list'>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">About</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Features</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Works</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Career</a>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <h4 className='footer__title'>Help</h4>
                <ul className='footer__list'>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Customer Support</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Delivery Details</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Terms & Conditions</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <h4 className='footer__title'>FAQ</h4>
                <ul className='footer__list'>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Account</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Manage Deliveries</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Orders</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Payments</a>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <h4 className='footer__title'>Resources</h4>
                <ul className='footer__list'>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Free eBooks</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Development Tutorial</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">How to - Blog</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Youtube Playlist</a>
                  </li>
                </ul>
              </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__bottom__content">
              <a className='footer__bottom__link' href="#">Shop.co © 2000-2023, All Rights Reserved</a>
              <div className="footer__bottom__webs">
                <a className='footer__bottom__web__link' href="#">
                  <img src={visa} alt="" />
                </a>
                <a className='footer__bottom__web__link' href="#">
                  <img src={mastercard} alt="" />
                </a>
                <a className='footer__bottom__web__link' href="#">
                  <img src={paypal} alt="" />
                </a>
                <a className='footer__bottom__web__link' href="#">
                  <img src={applepay} alt="" />
                </a>
                <a className='footer__bottom__web__link' href="#">
                  <img src={gpay} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer