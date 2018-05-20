import React from 'react';
import './Battery.css';



class Battery extends React.Component {
  render() {
    return (
      <div className="wrapper-card">
        <div className="inner-wrapper">
          <div className="Battery-card">

            <img src={this.props.battery.img} alt=""/>

            <h2>{this.props.battery.brand + ' ' + this.props.battery.name}</h2>
            <h3>Size: {this.props.battery.size}</h3>
        
            <p className="specs"><span>Capacity:</span> {this.props.battery.mah} mAh</p>
            <p className="specs"><span>CDR:</span> {this.props.battery.cdr} A</p>
            <p className="specs"><span>Performance Specs:</span></p>
            <p className="specs"><span>DC IR:</span> {this.props.battery.DCIR} mOhms</p>

          </div>
        </div>
      </div>
    )
    
  }
};


export default Battery;
