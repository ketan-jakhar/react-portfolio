import React from "react";

const Header = () => {
	return (
		<div className='common d-flex flex-column justify-content-center my-4 text-center'>
			<h3 className='heading color-change'>{this.props.heading}</h3>
			<h1 className='main-header'>{this.props.mainHeader}</h1>
			<p className='heading-caption'>{this.props.headingCaption}</p>
			<div className='common-border'></div>
		</div>
	);
};

export default Header;
