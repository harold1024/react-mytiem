import React, { Component } from 'react';
import "./index.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import moment from 'moment';
import Navbar from '../common/navbar/index.js';
import Footbar from '../common/footbar/index.js';

class Find extends Component {
		constructor(props){
		super(props);

		this.state = {
			datalist:[],
			looplist:[]

		}
	}	
  render() {
    return (

      <div id = "find">
      <Navbar/>
      	<ul>
      		<li className = "topbar">
	      		<NavLink to = "#">新闻</NavLink>
	      		<NavLink to = "#">预告片</NavLink>
	      		<NavLink to = "#">排行榜</NavLink>
	      		<NavLink to = "#">影评</NavLink>
      		</li>	
      </ul>
      <ul>

            		<li className = "topic">
	      	      		<a href = ""><h2>{this.state.datalist.title}</h2></a>
	      	      		<img src={this.state.datalist.imageUrl} alt=""/>
            	 	</li>
	  </ul>
	  <ul className = "table">
	  		
	  			{
	  				this.state.looplist.map((item,index)=>
	  					<li key = {item.id} className = "mynewslist">
		  					<h3>{item.title}</h3>
		  					<div className="imgs" >
			  					<img src = {item.image} alt=""/>
			  					{
			  						item.images.map((aaa,bbb)=>
			  								<img src={aaa.url1} alt = "" key = {aaa.url1}/>
			  							)
			  					}
		  					</div>
		  					<h4><span>发表时间：{moment(item.publishTime).format("HH")}小时前</span>  <span>评论：{item.commentCount}</span></h4>
	  					</li>
	  				)
	  			}
	  		
	  </ul>
	  <Footbar/>
      </div>
    );
  }
  componentWillMount(){
  	axios.get("/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20187181815172697").then(res=>{
  		this.setState({
  			datalist:res.data.news
  		})
  	})
  	axios.get("/Service/callback.mi/News/NewsList.api?t=20187198113489399&pageIndex=1").then(res=>{

  		this.setState({
  			looplist:res.data.newsList
  		})

  	})
  }
}

export default Find;

