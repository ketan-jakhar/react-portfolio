import React from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaLinkedinIn,
} from "react-icons/fa";

const Social = () => {
	const [icon] = React.useState([
		{
			id: 1,
			link: "https://www.facebook.com/ketanjakhar29",
			icon: <FaFacebookF />,
		},
		{
			id: 2,
			link: "https://www.instagram.com/youngstoneyy_/",
			icon: <FaInstagram />,
		},
		{
			id: 3,
			link: "https://twitter.com/ketanjakhar29",
			icon: <FaTwitter />,
		},
		{
			id: 4,
			link: "https://www.linkedin.com/in/ketan-jakhar-841282191/",
			icon: <FaLinkedinIn />,
		},
		{
			id: 5,
			link: "https://github.com/ketan-jakhar",
			icon: <FaGithub />,
		},
	]);
	return (
		<div className='social w-100 m-auto' id='social'>
			<div className='container'>
				<div className='d-flex flex-column justify-content-center align-items-center'>
					<h1 className='social__div-head text-center'>
						I can help.
					</h1>
					<div className='common-border'></div>
					<h1 className='social__div-sub-head text-center'>
						I'm currently available for freelance work.
					</h1>
					<p className='social__div-p d-flex align-self-center text-center'>
						If you have a project that you want to get started,
						think you need my help with something or just fancy
						saying hey, then get in touch.
					</p>
					<div>
						<ul className='social-icons-footer d-flex'>
							{icon.map((info) => (
								<a href={info.link}>
									<li className='d-flex align-items-center justify-content-center mx-2 mb-2'>
										{info.icon}
									</li>
								</a>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Social;
