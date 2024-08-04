import React from 'react'
import "./style.css";
import casual from './images/image 11.png';
import formal from './images/image 13.png';
import party from './images/image 12.png';
import gym from './images/image 14.png';

const Style = () => {
  return (

    <div className='style__container'>
        <div className="style__box">
            <div className="box__title">BROWSE BY dress STYLE</div>
            <div className="box__images1">
             <div className="box__casual">
                <div className="box__text">Casual</div>
                <img src={casual} alt="" />
            </div>
             <div className="box__formal">
                <div className="box__text">Formal</div>
                <img src={formal} alt="" />
            </div>
            </div>

            <div className="box__images2">
            <div className="box__party">
                <div className="box__text">Party</div>
                <img src={party} alt="" />
            </div>
             <div className="box__gym">
                <div className="box__text">Gym</div>
                <img src={gym} alt="" />
            </div>
            </div>
        </div>
    </div>

  )
}

export default Style