import React from "react";
import resume from '../../images/Resume.pdf';

export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					Resume
				</h1>
				<iframe src={resume} width="100%" height="525px">
				</iframe>
			</div>
		);
	}
}

