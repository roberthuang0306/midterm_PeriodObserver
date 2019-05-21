import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Blog from './Blog'

class Wrapper extends Component {
	render() {
		return (
			// <BrowserRouter basename="/my-app">
			<BrowserRouter>
				<div className="wrapper">
					<Blog />
				</div>
			</BrowserRouter>
		)
	}
}

export default Wrapper
