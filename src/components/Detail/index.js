import React, { Component } from 'react';
import './index.css';
import axios from "axios";

class Detail extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:[],
	  	isShow:true
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
					<div id="back"></div>
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
					<div className="fixed">
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
								<img src={this.state.list.actorList[0].actorImg} alt=""/>
								<p>{this.state.list.actorList[0].actor}</p>
								<p>{this.state.list.actorList[0].actorEn}</p>
							</li>
							<li>
								<img src={this.state.list.actorList[1].actorImg} alt=""/>
								<p>{this.state.list.actorList[1].actor}</p>
								<p>{this.state.list.actorList[1].actorEn}</p>
							</li>
						</ul>
					</dd>
				</dl>
        	</div>:null
        	}
        	
			
        </div>
      </div>
    );
  }
  componentDidMount(){
	axios.get(`/Service/callback.mi/movie/Detail.api?movieId=223748&locationId=290&t=2018717835526507`).then(res=>{
		this.setState({
			list:res.data
		})
		console.log(res.data.release.date)
	})
  }
  headleClick(){
  	this.setState({
  		isShow:!this.state.isShow
  	})
  }
}

export default Detail;
//https://m.mtime.cn/Service/callback.mi/movie/Detail.api?movieId=223748&locationId=290&t=2018717835526507
