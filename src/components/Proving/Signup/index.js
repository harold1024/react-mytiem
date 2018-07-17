import React, { Component } from 'react';
import './index.css';

class Signup extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
  render() {
    return (
     	 <div className="signup">
	     	 <from method="post">
	     	 	<div className="tel">
	     	 		<span>手机号:</span>
	     	 		<input type="text" placeholder="请输入手机号" vaule=""/>
	     	 		<a href="#" onClick={this.harold.bind(this)}>获取验证码</a>
	     	 	</div>
	     	 	<div className="yanzheng">
	     	 		<span>验证码:</span>
	     	 		<input type="text"/>
	     	 	</div>
	     	 	<div className="password">
	     	 		<span>密码:</span>
	     	 		<input type="text" placeholder="6-20位字母,数字，符号组成"/>
	     	 	</div>
	     	 	<div className="check">
	     	 		<input type="checkbox"/>我已阅读并同意
	     	 		<a href="">《Mtime时光网服务条款》</a>
	     	 	</div>
	        	<button>注册</button>
	        </from>	
      	</div>
    );
  }
  harold(){
  	var Num=""; 
	for(var i=0;i<6;i++){ 
		Num+=Math.floor(Math.random()*10); 
  		}
  		alert(Num)
	}
}

export default Signup;
