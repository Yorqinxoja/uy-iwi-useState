import React from 'react'
import "./Nav.css";
import navbarLogo from './images/SHOP.CO.svg';
import present from './images/Vector.svg';
import notifications from './images/Vector (1).svg';


export const Nav = () => {
  return (
    <nav className='nav'>

    <div className="container">

      <div className="nav__wrapper">
        <img className='nav__logo' src={navbarLogo} alt="" />

        <div className="nav__links">
          <a href="">Shop ∨</a>
          <a href="">On Sale</a>
          <a href="">New Arrivals</a>
          <a href="">Brands</a>
        </div>

          <input required type="search"  placeholder='🔍 Search for products...' />

        <div className="nav__right">
          <div className="nav__extra">
            <a className='nav__prize' href="#"><img src={present}/></a>
            <a className='nav__notifications' href="#"><img src={notifications}/></a>
          </div>
        </div>

      </div>
    </div>
  </nav>
  )
}
export default Nav
