import React, { Component } from 'react';
import './index.css';

class Signin extends Component {
	constructor(props){
		super(props);
		this.state = {
			isShow:true
		}
	}
	render() {
	    return (
	     	<div className="signin">
	       		<div>
		       		<span className="iconfont icon-bussinessman"></span>
		       		<input type="text" placeholder="登录邮箱/手机号码"/>
		       	</div>
		       	<div className="password">
		       		<span className="iconfont icon-bags"></span>
		       		<input type={this.state.isShow?"password":"text"} placeholder="密码"/>
		       		<span className="xianshi" onClick={
		       			this.myevent.bind(this)
		       		}>{this.state.isShow?"显示密码":"隐藏密码"}</span>
		       	</div>
		       	<div className="but">
		       		<button>登陆</button>
		       	</div>
			       	<b><a href="/proving/signup">免费注册</a></b>
			       	<a href="">找回密码</a>
			       	<div className="sb">使用第三方登陆</div>
			</div>
		);
	}


	myevent(){
		this.setState({
			isShow:!this.state.isShow
		})

	  }
}

export default Signin;
