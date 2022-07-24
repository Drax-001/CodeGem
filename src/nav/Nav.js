import React from "react";
import { Outlet, Link } from "react-router-dom";
// css
import "./nav.css";

const Nav = () => {
	return (
		<React.Fragment>
			<>
				<nav>
					<h1 id="logo">
						<Link to="/">
							<spn id="code">Code</spn>
							<span id="gem">Gem</span>
						</Link>
					</h1>
					<div id="links">
						<ul id="link-cont">
							<li className="link">
								<Link to="/coding">Coding</Link>
							</li>
						</ul>
					</div>
				</nav>

				<Outlet />
			</>
		</React.Fragment>
	);
};

export default Nav;
