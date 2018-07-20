import React, { Component } from 'react';
import './index.css';
import axios from "axios";
import ReactSwipe from "react-swipe";
import Navbar from '../common/navbar/index.js';
import Footbar from '../common/footbar/index.js';

class Shopping extends Component {
	constructor(props){
		super(props);
		this.state={
			looplist:null,
			navigatorIcon:null,
			alllist:[],
			alllist1:[],
			alllist2:[]
		}
	}
	render() {
	    return (
		    <div className="shopping">
		 
			<Navbar/>
		    <div className="shopping-search">
		    	<div>
		    		<span className="iconfont icon-search"></span>
		    		<input type="text" ref="mysearch" placeholder="搜索正版电影周边"/>
		    	</div>
		    	<span className="iconfont icon-cart"></span>
		    </div>    


		        <ul className="reactswipe">
					<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:3000}} key={this.state.looplist}>
			        	{
			        	this.state.looplist?
			        	this.state.looplist.map(item=>
			        		<li key={item.image}><img src={item.image} alt={item.url}/></li>)
			        	:null
			        	}
		        	</ReactSwipe>
		        </ul>


		        
		        <ul className="navigatorIcon">
		        	{
		        		this.state.navigatorIcon?
		        		this.state.navigatorIcon.map(item=>
		        			<li key={item.image}>
		        			<a href={item.url}>
		        				<img src={item.image} alt={item.image}/>
		        				<p>{item.iconTitle}</p>
		        			</a>
		        			</li>)
		        		:null
		        	}
		        </ul>
		        <div className="backgg">
		        {
		        	this.state.alllist2?
		        	<a href={this.state.alllist.url}><img src={this.state.alllist.img} alt={this.state.alllist.img} className="backggA"/></a>
	    			:null
		        }
		        {
		        	this.state.alllist2.map(item=>
						<a href={item.url}  key={item.image}><li><img src={item.image} alt={item.image} /></li></a>
		        		)
		        }
		        {
		        	<a href={this.state.alllist1.url}><img src={this.state.alllist1.img} alt={this.state.alllist1.img} className="backggB"/></a>
		        }

		        	
		        </div>
		        <Footbar/>
		    </div>
	    );
	}
	//https://m.mtime.cn/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=201871718473517642
	//https://m.mtime.cn/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=201871718473517642
	componentDidMount() {
		axios.get("/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=201871718473517642").then(res=>{
			console.log(res.data.cellC.list);

			this.setState({
				looplist:res.data.scrollImg,
				navigatorIcon:res.data.navigatorIcon,
				alllist:res.data.cellA,
				alllist1:res.data.cellB,
				alllist2:res.data.cellC.list
				
			})
		})
	}
}

export default Shopping;

