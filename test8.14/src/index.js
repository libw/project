import React from 'react';
import ReactDOM from 'react-dom';
// import {Router,Route,IndexRoute,hashHistory} from 'react-router';
// import Superiority from "./containers/superiority/index"
// import Mtdownload from "./containers/MT4/index"
// import Partner from "./containers/partner/index";
import Login from "./containers/login/index"
import Register from "./containers/register/index"
import style from  "./index.css"

class App extends React.Component{
	render(){
		return(
			<div className={style.content}>
				<Login/>
				<Register/>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.body
);

