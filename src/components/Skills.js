import React from "react";

const Skills = () => {
	const [state] = React.useState([
		{
			id: 1,
			name: "Node JS",
			value: "75",
		},
		{
			id: 2,
			name: "Express JS",
			value: "90",
		},
		{
			id: 3,
			name: "Java",
			value: "65",
		},
		{
			id: 4,
			name: "C++",
			value: "70",
		},
		{
			id: 5,
			name: "React JS",
			value: "50",
		},
		{
			id: 6,
			name: "JavaScript",
			value: "80",
		},
		{
			id: 7,
			name: "MongoDB",
			value: "80",
		},
		{
			id: 8,
			name: "MySQL",
			value: "80",
		},
	]);
	return (
		<div className='skills w-100 m-auto' id='skills'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 col-12 pb-5 px-0 pe-lg-3'>
						<p className='heading color-change'>My Expertise</p>
						<h1 className='main-header'>Let's Work Together</h1>
						<p className='skills__description'>
							I maintain a healthy balance between functionality and visual
							impact in all my work. I believe every piece of design can be a
							work of art. I love my work and enjoy each new project as I get
							it.
						</p>
						<p className='skills__description'>
							I'm a developer, so I know how to create your website to run
							across devices using the latest technologies available.
						</p>
						<div className='hire-me'>
							<a href='#contact' className='button button-outline'>
								Hire me now
							</a>
						</div>
					</div>
					<div className='col-lg-6 col-12 skills__skill-div d-flex justify-content-center flex-column pt-5 px-0 ps-lg-3'>
						{state.map((info) => (
							<div className='skills__div'>
								<p className='skills__title'>{info.name}</p>
								<div classname='skills__skill-progessbardiv shadow-sm'>
									<progress id='file' value={info.value} max='100'></progress>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
