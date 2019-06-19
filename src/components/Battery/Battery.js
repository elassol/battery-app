import React from 'react';
import './Battery.css';



class Battery extends React.Component {
  render() {
    return (
      <div className="wrapper-card" key={this.props.battery.name}>
        <div className="inner-wrapper">
          <div className="Battery-card">

            <img src={this.props.battery.img} alt=""/>

            <h2>{this.props.battery.brand + ' ' + this.props.battery.name + ' ' + this.props.battery.size}</h2>
        
            <p className="specs"><span>Capacity:</span> {this.props.battery.mah} mAh</p>
            <p className="specs"><span>CDR:</span> {this.props.battery.CDR} A</p>
            <p className="specs"><span>Performance Specs:</span></p>
            <p className="specs"><span>DC IR:</span> {this.props.battery.DCIR} mOhms</p>

          </div>
        </div>
      </div>
    )
    
  }
};


export default Battery;
