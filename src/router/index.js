import React from "react" //解析jsx语法
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import Home from "../components/Home";
import Buy from "../components/Buy";
import Film from "../components/Film";
import Detail from "../components/Detail";
import Comingsoon from "../components/Film/Comingsoon";
import Nowplaying from "../components/Film/Nowplaying";
import Shopping from "../components/Shopping";
import Proving from "../components/Proving";
import Search from "../components/Search";
import Signin from "../components/Proving/Signin";
import Signup from "../components/Proving/Signup";
import Find from "../components/Find";
import App from "../App";


const router = (
	<Router>
		<App>
			<Switch>
				<Route path="/home" component={Home}/>
				<Route path="/film" render={()=>
					<Film>
						<Switch>
							<Route path="/film/nowplaying" component={Nowplaying}/>
							<Route path="/film/comingsoon" component={Comingsoon}/>
							<Redirect from="/film" to="/film/nowplaying"/>
						</Switch>
					</Film>
				}/>
				
				<Route path="/buy" component={Buy}/> 
<<<<<<< HEAD
				<Route path="/detail/:myid/" component={Detail}/>
=======
				<Route path="/detail/" component={Detail}/>
>>>>>>> 960be32fb3938608933fe59dce1ff8b95786af6d
				<Route path="/shopping" component={Shopping}/>
				<Route path="/find" component={Find}/>
				<Route path="/search" component={Search}/>
				<Route path="/proving" render={()=>
					<Proving>
						<Switch>
							<Route path="/proving/signin" component={Signin}/>
							<Route path="/proving/signup" component={Signup}/>
							<Redirect from="/proving" to="/proving/signin"/>
						</Switch>
					</Proving>
				}/>
				<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>
	)


export default router;