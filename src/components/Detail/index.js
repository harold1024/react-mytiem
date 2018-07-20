import React, { Component } from 'react';
import './index.css';
import axios from "axios";
<<<<<<< HEAD
import Footbar from '../common/footbar/index.js';

=======
>>>>>>> 960be32fb3938608933fe59dce1ff8b95786af6d

class Detail extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:[],
<<<<<<< HEAD
	  	isShow:true,
	  	back:"",
	  	activeList:[],
	  	swipe:[],
	  	message:[],
	  	searchBarFixed:true
=======
	  	isShow:true
>>>>>>> 960be32fb3938608933fe59dce1ff8b95786af6d
	  };
	}
  render() {
    return (
      <div id="del">
        <header>
        	<div className="head" >
				<div className="center">
					<a href=""><i className="iconfont icon-back"></i></a>
					<a href=""><i className="iconfont icon-share"></i></a>
					<a href=""><i className="iconfont icon-favorite"></i></a>
<<<<<<< HEAD
					<div id="back" style={{background:this.state.back}}></div>
=======
					<div id="back"></div>
>>>>>>> 960be32fb3938608933fe59dce1ff8b95786af6d
				</div>
				<section>
					<div className="img">
						<img src={this.state.list.image} alt=""/>
					</div>
					{
						this.state.list.release?
						<div className="connect">
							<h2>{this.state.list.titleCn}</h2>
							<h4>{this.state.list.titleEn}</h4>
							<p>{this.state.list.runTime}</p><i>{this.state.list.rating}</i>
							<p>{this.state.list.type}</p>
							<p>{this.state.list.release.date}</p>
							<aside>
								<a href=""><span>我想看</span></a>
								<a href=""><span>我要评分</span></a>
							</aside>
						</div>:null
					}
					<h3>{this.state.list.commonSpecial}</h3>
<<<<<<< HEAD
					<div className={this.state.searchBarFixed?"fixed":"isFixed"} onScroll={this.scroll.bind(this)}>
=======
					<div className="fixed">
>>>>>>> 960be32fb3938608933fe59dce1ff8b95786af6d
						<a href=""><span>查影讯/购票</span></a>
					</div>
				</section>
        	</div>
        </header>
        <div className="less">
			<div className={this.state.isShow?"change":"more"}>{this.state.list.content}</div>
			<i onClick={this.headleClick.bind(this)}></i>
        </div>
        <div className="actor">
        	<div className="title">
				<h2>{this.state.list.personCount}位演职员</h2>
        	</div>
        	{
        		this.state.list.director?
        		<div className="table">
				<dl>
					<dt>导演</dt>
					<dd>
						<img src={this.state.list.director.directorImg} alt=""/>
						<p>{this.state.list.director.directorName}</p>
						<p>{this.state.list.director.directorNameEn}</p>
					</dd>
				</dl>
				<dl>
					<dt>主要演员</dt>
					<dd>
						<ul>
							<li>
<<<<<<< HEAD
								<a href=""><img src={this.state.list.actorList[0].actorImg} alt=""/></a>
=======
								<img src={this.state.list.actorList[0].actorImg} alt=""/>
>>>>>>> 960be32fb3938608933fe59dce1ff8b95786af6d
								<p>{this.state.list.actorList[0].actor}</p>
								<p>{this.state.list.actorList[0].actorEn}</p>
							</li>
							<li>
<<<<<<< HEAD
								<a href=""><img src={this.state.list.actorList[1].actorImg} alt=""/></a>
=======
								<img src={this.state.list.actorList[1].actorImg} alt=""/>
>>>>>>> 960be32fb3938608933fe59dce1ff8b95786af6d
								<p>{this.state.list.actorList[1].actor}</p>
								<p>{this.state.list.actorList[1].actorEn}</p>
							</li>
						</ul>
					</dd>
				</dl>
        	</div>:null
        	}
      	</div>
      	<div className="pic">
<<<<<<< HEAD
      		<h2>{this.state.list.imageCount}张图片</h2>
      		
				{
					this.state.list.images?
					<ul>
					<li>
	      				<img src={this.state.list.images[0]} alt=""/>
	      			</li>
	       			<li>
	      				<img src={this.state.list.images[1]} alt=""/>
	      			</li>
	       			<li>
	      				<img src={this.state.list.images[2]} alt=""/>
	      			</li>
	       			<li>
	      				<img src={this.state.list.images[3]} alt=""/>
	      			</li></ul>:null
				}
      	</div>
      	{
      		this.state.activeList.comments?
		      	<div className="active">
					<h2>精选影评（{this.state.activeList.totalCount}）</h2>
					<h2>{this.state.activeList.comments[0].title}</h2>
					<p>{this.state.activeList.comments[0].content}</p>
					<div className="person">
						<img src={this.state.activeList.comments[0].headurl} alt=""/>
						<div className="talk">
							<p>{this.state.activeList.comments[0].nickname}</p>
							<span>{(new Date(new Date()-this.state.activeList.comments[0].modifyTime)).getFullYear()}-
							{(new Date(new Date()-this.state.activeList.comments[0].modifyTime)).getMonth()}-
							{(new Date(new Date()-this.state.activeList.comments[0].modifyTime)).getDate()}-
							{(new Date(new Date()-this.state.activeList.comments[0].modifyTime)).getHours()}</span>
							<i>{this.state.activeList.comments[0].rating}</i>
						</div>
		      		</div>
		      	</div>:null
		      }
		      {
		      	this.state.swipe[0]?
		      	<div className="swipe">
		      		<iframe src={this.state.swipe[0].url} ></iframe>
		      	</div>:null
		      }
		      <div className="message">
				<h2>网友短评（{this.state.message.totalCommentCount}）</h2>
				{
					this.state.message.cts?
					<ul>
						{
							this.state.message.cts.map((item)=>
								<li key={item.tweetId}>
									<div className="text">
										<div className="tp">
											<img src={item.caimg} alt=""/>					
										</div>
										<dl>
											<dt>{item.ca}</dt><span>{item.lcd/1000/60/60/60}</span>
											<dd>
												<p>{item.ce}</p>
											</dd>
											<dd>
												<a href="">
													<i className="iconfont icon-good"></i>
													<span>点赞</span>
												</a>
												<a href="">
													<i className="iconfont icon-comments"></i>
													<span>回复</span>
												</a>
											</dd>
										</dl>
									</div>
								</li>
								)
						}
					</ul>:null
				}
				
		      </div>
		      <Footbar></Footbar>
=======
      		<ul>
      			<li>
      				<img src={this.state.} alt=""/>
      			</li>
      		</ul>
      	</div>
>>>>>>> 960be32fb3938608933fe59dce1ff8b95786af6d
      </div>
    );
  }
  componentDidMount(){
<<<<<<< HEAD
	axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.props.match.params.myid}&locationId=290&t=2018717835526507`).then(res=>{
		this.setState({
			list:res.data,
			back:"url("+res.data.image+") no-repeat top center"
		})
	})
	axios.get(`/Service/callback.mi/Movie/HotLongComments.api?movieId=${this.props.match.params.myid}&pageIndex=1&t=201871717113884891`).then(res=>{
		this.setState({
			activeList:res.data
		})
	})
	axios.get(`/Service/callback.mi/Advertisement/MovieDetailAdvertisement.api?locationId=290&movieId=${this.props.match.params.myid}&t=201871717592096364`).then(res=>{
		this.setState({
			swipe:res.data.advList
		})
	})
	axios.get(`/Service/callback.mi/Showtime/MovieComments.api?movieId=${this.props.match.params.myid}&pageIndex=1&t=20187172023246277`).then(res=>{
		this.setState({
			message:res.data
		})
	})

=======
	axios.get(`/Service/callback.mi/movie/Detail.api?movieId=223748&locationId=290&t=2018717835526507`).then(res=>{
		this.setState({
			list:res.data
		})
		console.log(res.data.release.date)
	})
>>>>>>> 960be32fb3938608933fe59dce1ff8b95786af6d
  }
  headleClick(){
  	this.setState({
  		isShow:!this.state.isShow
  	})
  }
<<<<<<< HEAD
  scroll(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
 			// console.log(scrollTop);
 			// var offsetTop = document.querySelector('#fixed').offsetTop;
 			// console.log(scrollTop);
 			if(scrollTop > 290){
 				this.setState({
 					searchBarFixed:!this.state.searchBarFixed
 				})
 			} else {
 				this.setState({
 					searchBarFixed:!this.state.searchBarFixed
 				})
 			}
  }
=======
>>>>>>> 960be32fb3938608933fe59dce1ff8b95786af6d
}

export default Detail;
//https://m.mtime.cn/Service/callback.mi/movie/Detail.api?movieId=223748&locationId=290&t=2018717835526507
