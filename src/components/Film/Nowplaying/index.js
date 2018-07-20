import React, { Component } from 'react';
// import './index.css';
import axios from 'axios';
import './index.css';

class Nowplaying extends Component {
	constructor(props){
		super(props)
		this.state={
			datalist:[]
		}
	}
  render() {
    return (
      <div id="now">
        {
        	this.state.datalist.map((item,index)=>
        		<div className="product" key={item.id} onClick={this.handleClick.bind(this,item.id)}>
        			<img src={item.img} alt="" className="l"/>
        			<div className="r">
              <h3><b>{item.t}</b>
                {item.r>0?
                  <span>{item.r}</span>:null
                }
              </h3>
                <p className="commonSpecial">
                    {item.commonSpecial}
                </p>
                <div className="content">
                  {item.is3D?
                    <span>3D</span>:null
                  }
                  {item.isDMAX?
                      <span>中国巨幕</span>
                    :null
                  }
                  </div>
                <p className="Cinema">
                <span>{item.NearestCinemaCount}</span>家影院上映<span>{item.NearestShowtimeCount}场</span>
                </p>
                <a href="../../Buy" className="ticket">购票</a>
        			</div>
        		</div>
        		)
        }
      </div>
    );
  }
  // https://m.mtime.cn/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20187162034967642
  componentWillMount(){
  	axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20187162034967642').then(res=>{
  		this.setState({
  			datalist:res.data.ms
  		})
  		console.log(this.state.datalist)
  	})
  }
  handleClick(item){
        localStorage.setItem("id",item);
    this.props.history.push(`/detail/${item}`)
  }
}

export default Nowplaying;
