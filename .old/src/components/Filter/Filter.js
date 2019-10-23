import React  from 'react';
import './Filter.css';


class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  selected: false };
    }


    handleClickFilter = () => {
        this.setState({selected: !this.state.selected});
    }



    render(){
        
        return (
            <button className={this.state.selected ? 'empty' : 'full'} onClick={(e) => this.props.filterBy()}>
                {this.props.label}
            </button>
        )
    }
}

export default Filter;