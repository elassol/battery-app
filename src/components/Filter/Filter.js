import React  from 'react';
import './Filter.css';


class Filter extends React.Component {
    render(){
        return (
            <div className="filter">
                {this.props.label}
            </div>
        )
    }
}

export default Filter;