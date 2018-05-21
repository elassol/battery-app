import React  from 'react';
import './Filter.css';


class Filter extends React.Component {

    handleClickFilter = () => {
        console.log("works");
    }


    render(){
        return (
            <button className="filter" onClick={(e) => this.handleClickFilter(this.props.filter, e)}>
                {this.props.label}
            </button>
        )
    }
}

export default Filter;