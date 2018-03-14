import React from 'react';
import './Battery.css';



const Battery = ({battery}) => (
  <div className="wrapper-card">
    <div className="inner-wrapper">
      <div className="Battery-card">
        <img src={battery.img} alt=""/>

        <h2>{battery.brand + ' ' + battery.name}</h2>
        <ul>
          <li>{battery.size}</li>
          <li>{battery.capacity}</li>
          <li>{battery.cdr}</li>
        </ul>
      </div>
    </div>
  </div>
)


export default Battery;
