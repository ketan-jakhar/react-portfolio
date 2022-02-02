import React from "react";
import { FaExternalLinkAlt, FaRegEnvelope } from "react-icons/fa";

const About = () => {
	const [header] = React.useState({
		mainHeader: "About",
		subHeading: "About Me",
		image: "/images/profile-pic-2-a.png",
		salutation: "<Namastey World />",
		caption:
			"Seeking to use proven skills in Java and JavaScript development.",
	});
	const [state] = React.useState([
		{
			id: 1,
			title: "Name💁‍♂️",
			text: "Ketan Jakhar",
		},
		{
			id: 2,
			title: "Email✉️",
			text: (
				<a
					href='https://mail.google.com/mail/?view=cm&fs=1&to=ketanjakhar29@gmail.com'
					target='_blank'
					rel='noreferrer'
				>
					ketanjakhar29@gmail.com
				</a>
			),
		},
		{
			id: 3,
			title: "Education🎓",
			text: (
				<span>
					LNMIIT&nbsp;
					<small className='color-change'>(2019-2023)</small> , Jaipur
				</span>
			),
		},
		{
			id: 4,
			title: "Phone📲",
			text: "+91 9461721651",
		},
		{
			id: 5,
			title: "LinkedIn🔗",
			text: (
				<a href='https://www.linkedin.com/in/ketan-jakhar-841282191/'>
					Ketan Jakhar
				</a>
			),
		},
	]);
	return (
		<div className='about' id='about'>
			<div className='container'>
				<div className='common d-flex flex-column justify-content-center my-4 text-center'>
					<h3 className='heading color-change'>
						{header.mainHeader}
					</h3>
					<h1 className='main-header'>{header.subHeading}</h1>
					<p className='heading-caption'>{header.caption}</p>
					<div className='common-border'></div>
				</div>
				<div className='row pt-4'>
					<div className='col-lg-6 col-12 d-none d-lg-block'>
						<div className='d-none d-lg-flex justify-content-center align-content-center'>
							<img src={header.image} alt='Ketan Jakhar' />
						</div>
					</div>
					<div className='col-lg-6 col-12 d-lg-block d-flex flex-column align-content-center align-items-center justify-content-center'>
						<div className='about__info'>
							<h1 className='text-center'>
								<strong>{header.salutation}🙏</strong>
							</h1>
							<br />
							<div className='about__info-p'>
								I'm Ketan Jakhar 🙋‍♂️, a pre-final year B.Tech
								Student at&nbsp;
								<span className='color-change'>
									The LNM Institute of Information Technology
									👨‍🎓
								</span>
								, Jaipur pursuing&nbsp;
								<span className='color-change'>
									Communication and Computer Engineering
								</span>
								. I have been raised in Chittorgarh, Rajasthan
								🏡 and I completed my High school from Kota,
								Rajasthan along with securing
								<span className='color-change'>
									&nbsp;96.1 percentile&nbsp;
								</span>
								in JEE mains 📚.
							</div>
							<br />
							<div className='about__info-p'>
								Apart from coding/development 🧑‍💻 my interest
								lies in sports (mostly cricket 🏏) and exploring
								new technologies.
							</div>
							<br />
							<div className='about__info-p'>
								I'm Goal-oriented and driven along with strong
								collaboration skills 💪. I'm motivated with a
								goal to become one of the best
								<span className='color-change'>
									&nbsp;Full Stack Web Developer 💻
								</span>
								. Open to learn anything related to MERN stack
								and related technologies 🙌.
							</div>
							<div className='info__contacts mt-4'>
								<div className='row flex-md-row flex-column justify-content-between flex-wrap'>
									{state.map((info) => (
										<div className='col-6 info__contacts-card py-3'>
											<strong className='color-change'>
												{info.title}
											</strong>
											<p>{info.text}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
