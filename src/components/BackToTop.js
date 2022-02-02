import React from "react";
import { IoMdRocket } from "react-icons/io";

const BackToTop = () => {
	const topFunction = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<div className='BackToTop'>
			<IoMdRocket
				className='btt-icon color-change'
				onClick={topFunction}
				id='btn-btt'
			/>
		</div>
	);
};

export default BackToTop;
