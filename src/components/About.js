import React from 'react';

import { loginUser } from "../UserContext";

const About = () => {
	return (
		
		<div className="container text-muted">
			<button
				type="button"
				onClick={() => loginUser()}
				variant="contained"
				color="primary"
				size="large"
				className="btn btn-warning ml-12"
			>
				Logar
			</button>
		</div>
	);
};


export default About;