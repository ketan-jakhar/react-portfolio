import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { useState } from "react";
import { send } from "emailjs-com";

const Contact = () => {
	// Email Service
	const [toSend, setToSend] = useState({
		from_name: "",
		subject: "",
		message: "",
		reply_to: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();
		send(
			"service_g692ilo",
			"template_1vrs5e8",
			toSend,
			"user_rkR925FKlCCziJFpA5GQe"
		)
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
			})
			.catch((err) => {
				console.log("FAILED...", err);
			});
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	//---------------------------------

	const [header] = React.useState({
		title: "Contact me",
		mainHeader: "Contact",
		caption:
			"Feel free to reach out for any queries, collaborations or work",
	});
	const [state] = React.useState([
		{
			id: 1,
			icon: (
				<div className='contact__box-icons'>
					<FaMapMarkerAlt className='contact-icons' />
				</div>
			),
			title: "Locate me",
			text: "Chittorgarh, Rajasthan",
		},
		{
			id: 2,
			icon: (
				<div className='contact__box-icons'>
					<FaPhoneAlt className='contact-icons' />
				</div>
			),
			title: "Give me a call",
			text: "+91 9461721651",
		},
		{
			id: 3,
			icon: (
				<div className='contact__box-icons'>
					<FaRegEnvelope className='contact-icons' />
				</div>
			),
			title: "Send an email",
			text: (
				<a
					href='https://www.linkedin.com/in/ketan-jakhar-841282191/'
					className='contact__box-email'
				>
					ketanjakhar29@gmail.com
				</a>
			),
		},
	]);
	return (
		<div className='contact w-100 m-auto' id='contact'>
			<div className='container'>
				<div className='common d-flex flex-column justify-content-center my-4 text-center'>
					<h3 className='heading color-change'>
						{header.mainHeader}
					</h3>
					<h1 className='main-header'>{header.title}</h1>
					<p className='heading-caption'>{header.caption}</p>
					<div className='common-border'></div>
				</div>
				<div className='row mx-lg-0'>
					{state.map((info) => (
						<div className='col-lg-4 col-12 mx-0'>
							<div className='contact__box d-flex justify-content-around justify-content-lg-evenly flex-wrap flex-row align-items-center align-content-center mx-0 my-2 my-lg-4 px-3 py-4 shadow-sm'>
								{info.icon}
								<div className='d-flex flex-column flex-wrap'>
									<div className='contact__box-header mb-2'>
										{info.title}
									</div>
									<div className='contact__box-p'>
										{info.text}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className='row'>
					<form
						onSubmit={onSubmit}
						className='w-100 d-flex flex-row flex-wrap'
					>
						<input
							type='text'
							className='col-12 shadow-sm'
							placeholder='Your Name'
							name='from_name'
							pattern='[A-Za-z]'
							value={toSend.from_name}
							onChange={handleChange}
							id='name'
							required
						/>
						<input
							type='email'
							id='email'
							className='col-12 shadow-sm'
							name='reply_to'
							placeholder='Your email'
							value={toSend.reply_to}
							onChange={handleChange}
							pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
							required
						/>

						<input
							type='text'
							id='subject'
							className='col-12 shadow-sm'
							name='subject'
							value={toSend.subject}
							onChange={handleChange}
							placeholder='Your Subject'
							required
						/>
						<textarea
							type='text'
							id='message'
							name='message'
							className='col-12 shadow-sm'
							value={toSend.message}
							onChange={handleChange}
							placeholder='Your Message'
						></textarea>

						<a
							href=''
							type='submit'
							className='button button-outline form-submit'
						>
							Send Message
						</a>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
