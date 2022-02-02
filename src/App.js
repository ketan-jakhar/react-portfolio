import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import HashLoader from "react-spinners/HashLoader";

function App() {
	let [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);

	return (
		<div>
			{loading ? (
				<div className='loader-div	'>
					<HashLoader
						size={50}
						color='#ff4a57'
						loading={loading}
						className='loader'
					/>
				</div>
			) : (
				<div className='App'>
					<Nav />
					<Banner />
					<Services />
					<About />
					<Skills />
					<Portfolio />
					<Contact />
					<Social />
					<Footer />
					<BackToTop />
				</div>
			)}
		</div>
	);
}

export default App;
