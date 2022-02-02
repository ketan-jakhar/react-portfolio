import React from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaLinkedinIn,
} from "react-icons/fa";

const Banner = () => {
	const [header] = React.useState({
		title: "I am Ketan Jakhar",
		text: "a Web Developer eager to learn and grow.",
		image: "/images/profile-pic-a.png",
	});

	const [icon] = React.useState([
		{
			id: 1,
			link: "https://www.facebook.com/ketanjakhar29",
			username: "ketanjakhar29",
			icon: <FaFacebookF />,
		},
		{
			id: 2,
			link: "https://www.instagram.com/youngstoneyy_/",
			username: "youngstoneyy_",
			icon: <FaInstagram />,
		},
		{
			id: 3,
			link: "https://twitter.com/ketanjakhar29",
			username: "ketanjakhar29",
			icon: <FaTwitter />,
		},
		{
			id: 4,
			link: "https://www.linkedin.com/in/ketan-jakhar-841282191/",
			username: "ketan-jakhar-841282191",
			icon: <FaLinkedinIn />,
		},
		{
			id: 5,
			link: "https://github.com/ketan-jakhar",
			username: "ketan-jakhar",
			icon: <FaGithub />,
		},
	]);
	return (
		<header className='header w-100 d-flex align-items-center' id='home'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 col-12 banner-div d-flex align-items-center'>
						<div className='header__content d-md-flex d-block align-items-center align-content-center justify-content-center flex-lg-column flex-row w-100'>
							<div className='header__section'>
								<ul className='social-links d-flex justify-content-sm-start justify-content-center'>
									{icon.map((info) => (
										<a href={info.link}>
											<li className='d-flex align-items-center justify-content-center text-decoration-none mx-2 mb-2'>
												{info.icon}
											</li>
										</a>
									))}
								</ul>
								<h1>
									{header.title}&nbsp;
									<img
										src='https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif'
										alt='Wave'
										width='50'
										className='align-baseline'
									></img>
								</h1>
								<p>{header.text}</p>
								<div className='d-flex flex-wrap justify-content-evenly flex-column flex-sm-row'>
									<a
										href='#portfolio'
										className='button button-outline'
									>
										My Portfolio
									</a>
									<a
										href='/files/Resume_KetanJakhar.pdf'
										className='button button-outline'
									>
										Download Resume
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-6 d-none d-lg-block'>
						<div className='d-none d-lg-flex justify-content-center align-content-center'>
							<img src={header.image} alt='Ketan Jakhar' />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Banner;
