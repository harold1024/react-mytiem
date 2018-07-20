import React,{Component} from "react";
import './index.css';
class Navbar extends Component{
	render(){
		return (
			<div>
				<nav id="navbar"> 
				<div className="img">
				{
					// <img src="./images/logo_mtime.png" alt="" className="logo"/>
				}
				</div>
				<ul className="list">
					<li className="todo">
						<a href='/home'>首页</a>
					</li>
					<li className="todo">
						<a href='/buy'>购票</a>
					</li>	
					<li className="todo">
						<a href='/shopping'>商城</a>
					</li>
					<li className="todo">
						<a href='/find'>发现</a>
					</li>
					<li className="todo">
						<a href='/proving' ><b className="iconfont icon-account"></b></a>
					</li>
				</ul>
			</nav>
			<div className="adress">	
		   			<div className="beijing">
		   				<b>北京</b>
						<i></i>
		   			</div>
					<p>
						<a href="/search"><span>影片/影院/影人，任你搜</span></a>
					</p>
		   		</div>
			</div>
			
		)
	}
}

export default Navbar;



