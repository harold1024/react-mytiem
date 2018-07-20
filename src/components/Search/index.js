import React, { Component } from 'react';
import './index.css';
import axios from "axios"
import Footbar from '../common/footbar/index.js';



class Search extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	swipe:[],
	  	hot:[],
	  	movielist:[]
	  };
	}
  render() {
    return (
     <div>
         <div className="one">
         <input type="text" ref="Search"/>
         <button onClick={this.handleClick.bind(this)}>搜索</button>
         </div>
         {
         	this.state.swipe[0]?
         	<div className="swipe">
         		<iframe src={this.state.swipe[0].url} ></iframe>
         	</div>:null
         }
         <div className="hot">
			<h2>热门搜索</h2>
			<a href="">{this.state.hot[0]}</a>
			<a href="">{this.state.hot[1]}</a>
			<a href="">{this.state.hot[2]}</a>
			<a href="">{this.state.hot[3]}</a>
         </div>
         <ul className="two">
         {
			this.state.movielist.map(item=>
				<li key="item" onClick={this.push.bind(this,item.id)}>
					<img src={item.cover} alt={item.cover}/>
					<div className="zj">
					  <h3>{item.titlecn}</h3>
					  <p>{item.titleen}</p>
					  <p>{item.contentType}&nbsp;<b>{item.movieType} {item.rLocation}</b></p>
			    	</div>
			    </li>

				)
         }
        
    </ul>
    <Footbar></Footbar>
       </div>
    );
  }

  componentDidMount(){
	axios.get(`/Service/callback.mi/Advertisement/MobileAdvertisementInfo.api?locationId=290&t=201871818283911801`).then(res=>{
		this.setState({
			swipe:res.data.advList
		})
	})
	axios.get(`/Service/callback.mi/Search/HotKeyWords.api?t=201871818283961682`).then(res=>{
		this.setState({
			hot:res.data.keywords
		})
	})
  }

  handleClick(){
	  if (this.refs.Search.value==="") {
	  alert("警告内容不能为空")
	}else{
	        axios.post(`Service/callback.mi/Search/SearchSuggestionNew.api`,
	        	`t=20187710244718642&keyword=${this.refs.Search.value}&locationId=290`).then(res=>{
	        this.setState({
	        	movielist:res.data.suggestions
	        })
	        } 
	      )
	  }
  }
  push(item){
	localStorage.setItem("id",item);
	this.props.history.push(`/detail/${item}`)
  }
}

export default Search;
