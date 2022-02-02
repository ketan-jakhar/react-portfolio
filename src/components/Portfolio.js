import React from "react";

const Portfolio = () => {
	const [header] = React.useState({
		title: "Portfolio Showcase",
		mainHeader: "Portfolio",
		caption: (
			<span>
				Here are some of my works. Checkout my{" "}
				<a
					href='https://github.com/ketan-jakhar'
					className='text-decoration-none'
				>
					GitHub
				</a>{" "}
				for more.
			</span>
		),
	});
	const [state] = React.useState([
		{
			id: 1,
			img: "/images/chatistic.png",
			name: "Chatistic",
			description: (
				<span className='tech-description'>
					<span>Node.js</span>&nbsp;&nbsp;
					<span>Express.js</span>&nbsp;&nbsp;
					<span>Socket.io</span>
					&nbsp;&nbsp;
					<span>Bootstrap</span>
				</span>
			),
		},
		{
			id: 2,
			img: "/images/yelpcamp.png",
			name: "Yelpcamp",
			description: (
				<span className='tech-description'>
					<span>Node.js</span>&nbsp;&nbsp;
					<span>Express.js</span>&nbsp;&nbsp;
					<span>MongoDB</span>
					&nbsp;&nbsp;
					<span>GeoJSON</span>&nbsp;&nbsp;
					<span>Bootstrap</span>&nbsp;&nbsp;
					<span>Cloudinary</span>
				</span>
			),
		},
		{
			id: 3,
			img: "/images/lets-gtok.png",
			name: "Lets Gtok",
			description: (
				<span className='tech-description'>
					<span>Bootstrap</span>&nbsp;&nbsp;
					<span>Firestore</span>
				</span>
			),
		},
		{
			id: 4,
			img: "/images/8bit.png",
			name: "8 bit Resume",
			description: (
				<span className='tech-description'>
					<span>Ness.css</span>&nbsp;&nbsp;
				</span>
			),
		},
	]);
	return (
		<div className='portfolio w-100 m-auto' id='portfolio'>
			<div className='container'>
				<div className='common d-flex flex-column justify-content-center my-4 text-center'>
					<h3 className='heading color-change'>
						{header.mainHeader}
					</h3>
					<h1 className='main-header'>{header.title}</h1>
					<p className='heading-caption'>{header.caption}</p>
					<div className='common-border'></div>
				</div>
				<div className='row'>
					<div className='d-flex align-content-center justify-content-around flex-wrap portfolio__img'>
						{state.map((info) => (
							<div className='col-lg-6 col-12'>
								<div className='overlay-outer w-100 m-0'>
									<a>
										<div className='overlay'></div>
										<img
											src={info.img}
											alt={info.name}
											className='mw-100 responsive py-2 px-lg-2'
										/>
										<div className='content-details fadeIn_bottom'>
											<h2 className='pb-1'>
												{info.name}
											</h2>
											<p>{info.description}</p>
										</div>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
