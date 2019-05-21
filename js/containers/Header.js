import React, { Component } from "react";
import '@babel/polyfill'
import { Route, Redirect } from "react-router-dom";
import '../../public/assets/css/header.css' 

import Login from "../components/Login"

  

const innerText = "A Simple Way to Calculate & Estimate Your Period"
var title = <div>
				<h1 style = {{color : "rgb(255,200,200)"}}>。ＰＥＲＩＯＤ。</h1>
				<p>{innerText}</p>
			</div>
export default class Header extends Component {
	constructor(props) {
        super(props);
		this.state = {LogInDisplay: "none", 
					  LogInActive: "", 
					  innerTextPadding: "3rem 5rem 1rem 5rem",
					  title: title,
					  LogInButtonDisplay: "inherit",
					  Redirect: <div/>
					 };
	}
    setDisPlays=()=>{
		const tem1 = this.LogIn_Display;
		const tem2 = this.LogIn_Active;
		tem1();
		setTimeout(function(){tem2();},0);
	}
	setnonDisPlays=()=>{
		const tem1 = this.LogIn_nonDisplay;
		const tem2 = this.LogIn_nonActive;
		tem2();
		setTimeout(function(){tem1();},300);
	}
	LogIn_Display=()=>this.setState((prevState, props) => ({
			LogInDisplay: "inherit",
		}));
	LogIn_Active=()=>this.setState((prevState, props) => ({
			LogInActive: "active"
		}));
	LogIn_nonDisplay=()=>this.setState((prevState, props) => ({
			LogInDisplay: "none",
		}));
	LogIn_nonActive=()=>this.setState((prevState, props) => ({
			LogInActive: ""
		}));
	_renderRedirect=()=> this.setState((prevState, props) => ({
		Redirect: <Route exact path="/" component={()=><Redirect to="/homepage"/>}/>
	}));
	_renderRedirectNew=()=> this.setState((prevState, props) => ({
		Redirect: <Route exact path="/" component={()=><Redirect to="/homepagenew"/>}/>
	}));
	LogInSubmit=()=>
	{
		
		this.setState((prevState, props)=>({
			innerTextPadding: "47.9vh 48vw",
			title: <div></div>,
			LogInButtonDisplay: "none"
		}))
		this.setnonDisPlays();
		//setTimeout(()=>this._renderRedirect(),500);
	}
    render() {
        return (
			<div id="wrapper">
				{this.state.Redirect}
				<header id="header" >
				    <div className="content">
						<div className="inner" 
							 style={{padding:this.state.innerTextPadding}}>
						     {this.state.title}
					    </div>
				    </div>
				    <nav style = {{display: this.state.LogInButtonDisplay}}>
					    <ul>
							<li><a onClick={this.setDisPlays} 
								   style = {{color : "rgb(255,200,200)"}}>Log in / Register</a></li>
					    </ul>
				    </nav>
		    	</header>
				<Login display={this.state.LogInDisplay} 
					   active={this.state.LogInActive} 
					   delete={this.setnonDisPlays}
					   submit={this.LogInSubmit}
					   redirect={this._renderRedirect}
					   redirectnew={this._renderRedirectNew}
					   setAccount={this.props.setAccount}
				/>
			</div>
        );
    }
}
