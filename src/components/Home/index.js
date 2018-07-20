import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Navbar from '../common/navbar/index.js';
import Footbar from '../common/footbar/index.js';
class Home extends Component{

		constructor(props){
		super(props);

		this.state = {
			datalist:[],
			looplist:[],
			countlist:[]
		}

	}
	render(){
		return(
			<div>
				<Navbar></Navbar>
				<div id = "topnav">
					  <ul className = "list">
						  <li>
						  <NavLink to = "/film/nowplaying">今日上映
							  <span>({this.state.datalist.length})部</span>
							  <a href="/film/nowplayling" className = "icon">></a>
						  </NavLink>
						  </li>
					  			{this.props.children}
				             <ul className = "content">
					             {
					             	this.state.datalist.map((item,index)=>
					             		<li key = {item.id} className = "pic" onClick={this.handleClick.bind(this,item.id)}>
					             			<img src={item.img} key={item.id} alt={item.name}/>
					             			<p><h4>{item.t}</h4></p>

					             		</li>
					             	)
					             }

				             </ul> 

				          <li>
				              <NavLink to = "/film/comingsoon">即将上映
				              <span>({this.state.countlist.totalComingMovie})部</span>
				              <a href="/film/comingsoon" className = "icon">></a>
				              </NavLink>
				          </li>
				          <li>今日热点</li>
				          {
				          	this.state.looplist.map((item,index)=>
				          		<li key = {item.id} className = "point">
					          		<img src = {item.img} key = {item.id} alt = {item.name}/>
					          	
					          	<div className = "hotpoint">
					          		<h3><a href = "">{item.title}</a></h3>
					          		<a href = "" className = "hotpointtext">{item.desc}</a>
					          		<a href = "" className = "hotpointtext">{item.date}</a>   		
					          	</div>
				          		</li>
				          		)
				          }
				          </ul>
				          
				      </div>
				      <Footbar></Footbar>	
				</div>      
			    )
	}
	
	 componentDidMount(){
	    axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201871620232477887").then(res=>{

	      this.setState({
	      	datalist:res.data.ms,
	      	countlist:res.data
	      })
	    })
	    axios.get("/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=20187171015354464").then(res=>{
	      console.log(res.data);

	      this.setState({
	      	looplist:res.data.hotPoints
	      })
	    })
	}
	handleClick(item){
        localStorage.setItem("id",item);
    this.props.history.push(`/detail/${item}`)
  }
}

export default Home;

