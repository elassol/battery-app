import React from 'react';
import './BatteriesList.css';
import Battery from '../Battery/Battery';


import data from '../../data/data.json';

class BatteriesList extends React.Component {

    displayList(){

    }

    render(){
        return (
            <div className="content-wrapper">
              {
                data.batteries.map(batteryindex => {
                  return (
                    <Battery
                      battery={batteryindex}
                    />
                  )
                })
              }
            </div>
        );
    }


}

export default BatteriesList;
