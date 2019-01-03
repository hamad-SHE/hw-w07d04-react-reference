import React, { Component } from 'react';
 import logo  from '../logo.svg';

class HeaderR extends Component {
    render(){
        return (
            <div className="conter-headerR">
    
            <h1>React is A</h1>
            <img id="logo" src={logo} alt=""/>
            
            
            
            </div>
        )
    }
}

export default HeaderR;