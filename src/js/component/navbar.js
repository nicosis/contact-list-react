import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 mx-3 h1">Contact List</span>
			</Link>
			<div className="ml-auto mx-3">
				<Link to="/add-form">
					<button className="btn btn-primary">Add Contact</button>
				</Link>
			</div>
		</nav>
	);
};
