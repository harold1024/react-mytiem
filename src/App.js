import React, { Component } from 'react';
import './App.css';
import {NavLink } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        {
        	this.props.children
        }
      </div>
    );
  }
}

export default App;
