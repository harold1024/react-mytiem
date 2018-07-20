import React,{Component} from "react";
import './index.css';
class Footbar extends Component{
	render(){
		return (
			<div id="footbar"> 
				<footer>
				       <ul className="under">
				         <li><a href="/home">首页</a></li>
				         <li><a href="/buy">购票</a></li>
				         <li><a href="/home">商城</a></li>
				         <li><a href="/home">发现</a></li>
				         <li><a href="/home">我的</a></li>
				       </ul>
				       <div className="footlink">
				         <ul>
				           <li><a href="">pc端</a></li>
				           <li><a href="">客户端下载</a></li>
				           <li><a href="">意见反馈</a></li>
				           <li><a href="">帮助中心</a></li>
				         </ul>
				         <p></p>
				         <p>
				           <span>Copyright</span>
				           <span>2006-2018</span>
				           <span> Mtime.com Inc. All rights reserved.</span>
				         </p>
				       </div>
				     </footer>
			</div>
		)
	}
}

export default Footbar;



