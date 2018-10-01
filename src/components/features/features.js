import React, { Component } from 'react';

class Features extends Component {
    handleClick(e) {
        //e.preventDefault();
        console.log(e);
    }
    render() {
        const numbers = this.props.tags || [1,2,3];
        const listItems = numbers.map((number,i) =>
            <li onClick={() => this.handleClick(i)} key={i}>{number} => {Math.sin(number)}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default Features;
