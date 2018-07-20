import React, { Component } from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';
import Navbar from '../common/navbar/index.js';
import Footbar from '../common/footbar/index.js';
class Film extends Component {
  constructor(props){
    super(props);
    this.state ={
      
    }
  }
  render() {
    return (
      <div>
        <Navbar/>
        <div id="film">
         
          <div className="iconfont icon-back left" onClick={this.handleClick.bind(this)}></div>
          	<ul className="right">
          		<li>
     	     		<NavLink to="/film/nowplaying" className="ciname">正在热映</NavLink>
          		</li>
          		<li>
     		        <NavLink to="/film/comingsoon" className="ciname">即将上映</NavLink>
          		</li>
          	</ul>
            {
            	this.props.children
            }
            <Footbar/>
        </div>
      </div>
    )
  }
    handleClick(){
      // this.props.history.go(-1)
    }
    handleclick(item){
    localStorage.setItem("id",item);
    this.props.history.push(`/detail/${item}`)
  }
}

export default Film;

