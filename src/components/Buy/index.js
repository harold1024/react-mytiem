import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import Navbar from '../common/navbar/index.js';
import Footbar from '../common/footbar/index.js';

class Buy extends Component {
		constructor(props){
		super(props);

		this.state = {
			datalist:[]
		}

	}

  render() {
    return (
    	<div>
    		<Navbar></Navbar>
	      <div id = "buy">
		      <ul className = "nav">
			      <li><a href = "">离我最近<span>∨</span></a></li>
			      <li><a href = "">全城<span>∨</span></a></li>
			      <li><a href = "">影厅特效<span>∨</span></a></li>
		      </ul>
		      <ul>
		      	{ 
		      		this.state.datalist.map(item=>
		      	<li key = {item.id} className = "buylist">
			      	<a href = "" className = "cinamename">{item.cinameName}</a>
			      	{
			      		item.minPrice>0?
			      		<a href = "" className = "minPrice">
			      		<span>{item.minPrice/100}</span>元起</a>:null

			      	}
			      	<p><a href = "" className = "address">{item.address}</a></p>

			      	<p className = "filmtype">{item.feature.has3D?<span>3D</span>:null}
			      	{item.feature.hasFeature4D?<span>4D</span>:null}
			      	{item.feature.hasLoveseat?<span>情侣座</span>:null}
			      	{item.feature.hasVIP?<span>VIP</span>:null}
			      	{item.feature.hasFeature4K?<span>4K</span>:null}
			      	{item.feature.hasFeatureDolby?<span>杜比</span>:null}
			      	{item.feature.hasIMAX?<span>IMAX</span>:null}
			      	{item.feature.hasFeatureHuge?<span>巨幕</span>:null}</p>
			      		
		      	</li>
		      			)
		      		}
		      	</ul>	
		      	<Footbar></Footbar>
	    	</div>

     </div>
    )
  }
  // https://ticket-m.mtime.cn/api/proxy/ticket/OnlineLocaCinemasByCity.aonId=1531817045005
  	 componentWillMount(){
	      console.log(111);
	    axios.get("/api/proxy/ticket/OnlineLocationCinema/OnlineCinemasByCity.api?locationId=290&_=1531817045005").then(res=>{
	      console.log(res.data);


	      this.setState({
	      	datalist:res.data
	      })
	    
	    })
	}    
	
}


export default Buy;

