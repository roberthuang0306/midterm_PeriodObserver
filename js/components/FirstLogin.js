import React, { Component } from "react";
import Datepicker from "./Datepicker"
import { Switch, Route, Redirect } from "react-router-dom";

class FirstLogin extends Component {
    constructor(props){
        super(props);
        console.log(props.CalendarData)
        this.state = {
            dateStart:'',
            dateEnd:'',
            Redirect:<div></div>
        }
    }
    handle_li_click = () => {
		const period = document.getElementById('period').value;
        const duration = document.getElementById('duration').value;
        const dateStart = this.state.dateStart;
        const dateEnd = this.state.dateEnd;
        const account = this.props.CalendarData.account;
        const password = this.props.CalendarData.password;
        console.log({period,duration,dateStart,dateEnd,account,password})
    }
    handleDateChange=(Start,End)=>{
        const period = document.getElementById('period').value
        const duration = document.getElementById('duration').value
        const account = this.props.CalendarData.account;
        const password = this.props.CalendarData.password;
        const client = {
            account: account,
            password: password,
            period: period,
            duration: duration,
            lastStart: Start,
            lastEnd: End,
            dataNum: 1
        }
        console.log(client);
        fetch('/homepagenew', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(client)
        })
        this.setState((prevState, props) => ({
			Redirect: <Redirect from='/homepagenew' to="/"/>
		}))
	}
	render() {
		return (
                <div id='header'>
                    {this.state.Redirect}
                    <div style={{padding:'25vh 25vw' , height:'100vh', width:'100vw'}}>
    			        <form method="post" id="myform" method="post" action='/'>
					        <div className="fields">
					    	    <div className="field half">
					    		    <label htmlFor="period">average period (number)</label>
					    			<input type="text" name="period" id="period" />
					    	    </div>
					            <div className="field half">
            		    	        <label htmlFor="duration">average duration (number)</label>
					    	        <input type="text" name="duration" id="duration"/>
					            </div>
					        </div>
                            <div style={{justifyContent:'center', display:"flex",}}>
                                <div>
                                    <div>choose last period date :</div>
                                    <Datepicker setDate={this.handleDateChange}/>
                                </div>
                            </div>
				        </form>
                    </div>
                </div>
        );
    }
}
export default FirstLogin