import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Nav = () => {
	return (
		<nav class='navbar navbar-expand-lg fixed-top navbar-dark' id='nav'>
			<div class='container-md container-fluid'>
				<div>
					<strong className='logo'>
						kay<span className='color-change'>.</span>10
					</strong>
				</div>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarNav'>
					<ul class='navbar-nav ms-auto'>
						<li class='nav-item mx-lg-3'>
							<a class='nav-link' href='#home'>
								Home
							</a>
						</li>
						<li class='nav-item mx-lg-3'>
							<a class='nav-link' href='#services'>
								Services
							</a>
						</li>
						<li class='nav-item mx-lg-3'>
							<a class='nav-link' href='#about'>
								About
							</a>
						</li>
						<li class='nav-item mx-lg-3'>
							<a class='nav-link' href='#skills'>
								Skills
							</a>
						</li>
						<li class='nav-item mx-lg-3'>
							<a class='nav-link' href='#portfolio'>
								Portfolio
							</a>
						</li>
						<li class='nav-item mx-lg-3'>
							<a class='nav-link' href='#contact'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
