import React from "react";
import { FaLaptopCode, FaServer, FaReact } from "react-icons/fa";

const Services = () => {
	const [header] = React.useState({
		mainHeader: "Services",
		subHeading: "My Services",
	});
	const [state] = React.useState([
		{
			id: 1,
			icon: <FaReact className='common-icons' />,
			title: "Frontend Development",
			text: "I create responsive and cross-browser compatible websites that are fast, easy to use, and built with React.js",
		},
		{
			id: 2,
			icon: <FaServer className='common-icons' />,
			title: "Backend Development",
			text: "Building secure, logical and low-latency web applications using Node.js, Java Spring Boot and with knowledge of various databases and libraries",
		},
		{
			id: 3,
			icon: <FaLaptopCode className='common-icons' />,
			title: "C++",
			text: "Strong hold of Data Structures and Algorithms, concepts of OOPs and Core CPP.",
		},
	]);

	return (
		<div className='services' id='services'>
			<div className='container'>
				<div className='services__header'>
					<div className='common d-flex flex-column justify-content-center my-4 text-center'>
						<h3 className='heading color-change'>{header.mainHeader}</h3>
						<h1 className='main-header'>{header.subHeading}</h1>
						<div className='common-border'></div>
					</div>
					<div className='row services__div d-flex flex-wrap m-auto'>
						{state.map((info) => (
							<div className='col-lg-4 col-12 h-auto'>
								<div className='services__box mx-md-0 m-4 px-4 py-5 shadow-sm'>
									{info.icon}
									<div className='services__box-header mb-3'>{info.title}</div>
									<div className='services__box-p'>{info.text}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
