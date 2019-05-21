import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

class HomepageButtons extends Component {
    handleClear = () => {
        this.props.handleClear();
        document.getElementById('home').click();
    }
    handleSave = () => {
        this.props.handleSave();
        document.getElementById('home').click();
    }
    render() {
        return (
            <nav><ul>
                <li><NavLink id ='home' to="/root" style={{color:"#ffffff",
                                                textDecoration:"none"}}>Log out</NavLink></li>
                <li><a onClick={this.handleSave} style={{color:"#ffffff",
                                                textDecoration:"none"}}>Save</a></li>
                <li><a onClick={this.handleClear} style={{color:"#ffffff",
                                                textDecoration:"none"}}>Clear</a></li>
                </ul></nav>

        );
    }
}
export default HomepageButtons