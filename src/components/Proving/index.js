import React, { Component } from 'react';
import './index.css';
import dataImg from "./logo_mtime.png"

class Proving extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  }
  render() {
    return (
      <div className="proving">
      	<div className="header">
      		<span className="iconfont icon-back" ></span>
      		<img src={dataImg} alt="网真垃圾"/>
      	</div>
        {this.props.children}
      </div>
    )
  }
}

export default Proving;


