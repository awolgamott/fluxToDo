import React from 'react'

var Banner = React.createClass({
	render: function(){
		return (
			<div>
				<h1>TooMuch ToDo</h1>
				<ul className="nav nav-tabs">
				  <li className={location.hash === "#all" ? "active" : ""}><a href="#all">All</a></li>
				  <li className={location.hash === "#done" ? "active" : ""}><a href="#done">Done</a></li>
				  <li className={location.hash === "#undone" ? "active" : ""}><a href="#undone">Undone</a></li>
				</ul>

			</div>
		)
	}
})
export default Banner