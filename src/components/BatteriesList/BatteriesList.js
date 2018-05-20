import React from 'react';
import './BatteriesList.css';
import Battery from '../Battery/Battery';


class BatteriesList extends React.Component {

    render(){
        return (
            <div className="content-wrapper">
              {
                this.props.batterylist.map(battery => {
                  return <Battery battery={battery} />
                })
              }
            </div>
        );
    }
}

export default BatteriesList;
