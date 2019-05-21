import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../containers/Header"
import Homepage from "../containers/Homepage"
import FirstLogin from "../components/FirstLogin"

export default class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			CalendarData : {},
		}
	}
	setAccount = (Account_json) => {
		console.log('test')
		console.log(`test${Account_json}`);
		this.setState((prevState, props) => ({
			CalendarData: Account_json,
		}))
	};
    render() {
		return (
			<div>
				<Switch>
          			<Route exact path="/homepage" component={()=><Homepage CalendarData={this.state.CalendarData}/>}></Route>
					<Route exact path="/" component={()=><Header setAccount={this.setAccount}/>}></Route>
					<Route exact path="/homepagenew" component={()=><FirstLogin CalendarData={this.state.CalendarData}/>}></Route>
					<Redirect from = "/root" to ="/"/>
        		</Switch>
			</div>
        );
    }
}
