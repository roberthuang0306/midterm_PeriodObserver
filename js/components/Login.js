import React, { Component } from "react";
class Login extends Component {
	handle_li_click=()=>{
		const _account = document.getElementById('account').value;
		const _password = document.getElementById('password').value;
		
		fetch('/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				account: _account,
				password: _password
			})
		}).then((response)=>{
			return response.json()
		}).then((jsonData) => {
			//console.log(jsonData);
			if(jsonData.error === 'password wrong!') alert(jsonData.error);
			else if(jsonData.error === 'no client') {
				this.props.redirectnew();
				this.props.setAccount(jsonData)
			}
			else {
				this.props.redirect()
				this.props.setAccount(jsonData)
			};
		}).catch((err) => {
			//console.log('錯誤:', err);
		})
	}
	inputenter = (e) =>{
		if ( e.key === 'Enter' ){
			document.getElementById('Log_in').click();
		}
	}
		render() {
			return (
            <div id="wrapper" style={{display:this.props.display}}>
                <div id="wrapper" onClick={this.props.delete} style={{display:this.props.display}}/>
                <div id="main">
			        <article id="Login" className={this.props.active} >
				        <h2 className="major" style = {{color : "rgb(255,200,200)", borderBottom :"solid 1px rgb(255,200,200)"}}>Log in</h2>
    			        <form method="post" id="myform" method="post" action='/'>
					        <div className="fields">
					    	    <div className="field half">
					    		    <label htmlFor="account">account</label>
					    			<input type="text" name="account" id="account" />
					    	    </div>
					            <div className="field half">
            		    	        <label htmlFor="password">password</label>
					    	        <input type="password" name="password" id="password" onKeyPress={this.inputenter}/>
					            </div>
					        </div>
							<div id="header" style={{backgroundImage:"none"}}><nav><ul>
					        	<li><a onClick={this.handle_li_click} style = {{color : "rgb(255,200,200)"}} id = "Log_in">Log in / Register</a></li>
					        </ul></nav></div>
				        </form>
                    <div className="close" onClick={this.props.delete}/>
			        </article>
                </div>
            </div>
        );
    }
}
export default Login
