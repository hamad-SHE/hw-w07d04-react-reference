import React, { Component } from 'react';
import HeaderR from './components/HeaderR';
import './App.css';
import Maincontenar from './components/Maincontenar';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderR/>
        <Maincontenar/>
        <Footer/>

        
      </div>
    );
  }
}

export default App;
