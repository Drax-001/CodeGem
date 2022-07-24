import React from "react";
import { Link, Outlet } from "react-router-dom";
// css
import "./error.css";

const Error = () => {
	return (
		<>
			<div id="error">
				<h1 id="error-text">
					<span id="error-code" className="error">
						404...
					</span>
					<span id="error-message" className="error">
						Looks like we have hit the rock bottom
					</span>
					<span id="message" className="error">
						we are unable to locate this page
					</span>
				</h1>
				<Link to="/">
					<button id="back">Return to Home page</button>
				</Link>
			</div>
			<Outlet />
		</>
	);
};

export default Error;
