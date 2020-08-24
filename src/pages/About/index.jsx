import React from "react";
import bg from '../../images/BWBackground2.jpg';
import "../../index.css";

export default class About extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5">
						<div class="card">
							<img class="card-img" src={bg} />
							<div class="card-img-overlay">
								<h1>Jon Kesler</h1>
								<h1>Full Stack Web Developer</h1>
								
								<p>Web designer and developer from Savannah, GA. 
								 	I strive to create custom websites that help businesses compete better online.
									</p>
								<p>From the idea to the wireframing and coding.  Utilizing the 
									latest JavaScript, Node.js, MySql, and MongoDb technologies.  Jon will guide 
									you through the endless possibilities available with modern web apps. 
									</p>
								<p>My objective is simply to be the best
									web developer that I can be and to
									contribute to the technology industry
									all that I know and can do. I am
									dedicated to perfecting my craft by
									learning from more seasoned
									developers, remaining humble, and
									continuously making strides to learn all
									that I can about development.</p>
							</div>
						</div>
			</div>

		);
	}
}

