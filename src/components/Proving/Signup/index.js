import React, { Component } from 'react';
import './index.css';

class Signup extends Component {
	constructor(props){
		super(props);
		this.state = {
			isRemember: false
		}
	}
  render() {
    return (
     	 <div className="signup">
	     	 	<div className="tel">
	     	 		<span>手机号:</span>
	     	 		<input type="text" placeholder="请输入手机号" ref="tel"/>
	     	 		<a href="" onClick={this.harold.bind(this)}>获取验证码</a>
	     	 	</div>
	     	 	<div className="yanzheng">
	     	 		<span>验证码:</span>
	     	 		<input type="text" ref="yanzheng"/>
	     	 	</div>
	     	 	<div className="password">
	     	 		<span>密码:</span>
	     	 		<input type="text" placeholder="6-20位字母,数字，符号组成" ref="mypass"/>
	     	 	</div>
	     	 	<div className="check">
	     	 		<input type="checkbox" checked={this.state.isRemember} onClick={this.handleCheckbox.bind(this)}  />我已阅读并同意
	     	 		<a href="">《Mtime时光网服务条款》</a>
	     	 	</div>
	        	<button onClick={this.state.isRemember?this.handleClick.bind(this):this.handleNoClick.bind(this)}>注册</button>
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
	handleCheckbox(){
		this.setState({
			isRemember:!this.state.isRemember
		})
		 

	}

	handleClick(){
		var text = this.refs.tel;
		var tel = text.value.trim();
		console.log(tel);
		this.refs.tel.value='';

		var yan = this.refs.yanzheng;
		var yanzheng = yan.value.trim();
		console.log(yanzheng);
		this.refs.yanzheng.value='';


		var pass = this.refs.mypass;
		var mypass = pass.value.trim();
		console.log(mypass);
		this.refs.mypass.value='';

		


		// axios.get("http://localhost:3100/selfJson/news.json")
  //           .then(function (response) {
  //               let json = response.data.data;
  //               _this.setState({jsonData: json});
  //           })
  //           .catch(function (error) {
  //               console.log(error);
  //           })

	}
	handleNoClick(){
		 alert("无法注册")

	}
}

export default Signup;
