import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import ReactSwipe from 'react-swipe';
class Comingsoon extends Component {
	constructor(){
		super();
		this.state={
			looplist:[],
			datalist:[]
		}
	}

  render() {
    return (
      	<div id="comingsoon">
	      	<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 3000}} key={this.state.looplist.length}>
				{
					this.state.looplist.map(item=>
						<div key={item.id}>
							<img src={item.image} alt="" className="l"/>
							<div className="r">
								<h3>{item.title}</h3>
								<p>
									{item.wantedCount}人想看
								</p>
								<p>
									{item.type}
								</p>
								<p>
									{item.actor1}
								</p>
								<p className="root">
									<a href="/buy">超前预售</a>
									<a href="/buy" className="green">预告片</a>
								</p>
							</div>
						</div>
						)
				}
	      	</ReactSwipe>
	      	<div className="content">
		      	<p className="title">
		      		即将上映
		      		<span>
		      			({this.state.datalist.length}部)
		      		</span>
		      	</p>
	      		<ul>{
	      			
	      			this.state.datalist.map(item =>
	      				<li className="tiao" key={item.id} onClick={this.handleclick.bind(this,item.id)}>
	      					<div className="shu">{item.releaseDate}<span className="shu-span"></span></div>	      					
		      				<img src={item.image} alt=""/>
		      				<div className="article">
			      				<p>{item.title}</p>
			      				<p>{item.wantedCount}人想看</p>
			      				<p>{item.type}</p>
			      				<p>{item.director}</p>
			      				<p className="root">
			      					<a href="/buy">超前预售</a>
			      					<a href="/buy" className="green">预告片</a>
			      				</p>
			      			</div>
	      				</li>

	      			)
	      		}</ul>
	      	</div>
      	</div>
    );
  }
  componentWillMount(){
  	axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=201871715142353321').then(res=>{
  		this.setState({
  			looplist:res.data.attention
  		})
  	})
  	axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=201871715525610509').then(res=>{
  		console.log(res.data.moviecomings)
  		this.setState({
  			datalist:res.data.moviecomings
  		})
  	})
  }
  handleclick(item){
  	localStorage.setItem("id",item);
  	this.props.history.push(`/detail/${item}`)
  }
}

export default Comingsoon;
