import React from "react";
import fusent2 from '../../images/FusEnt2.png';
import fusent4 from '../../images/FusEnt4.png';
import fusent3 from '../../images/FusEnt3.png';
import GaCovid from '../../images/GaCovid.png';
import GaCovid2 from '../../images/GaCovid2.png';
import GaCovid3 from '../../images/GaCovid3.png';
import "./style.css";
import { Route } from "react-router-dom";

export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					Group Projects
				</h1>
						<div class="card">
							<div class="card-header">
								<h3>Fusion Entertainment</h3>
							</div>
								<div class="card-body">
									<div class="row">
										<div class="col-sm-6 col-md-6 col-lg-6">
											<div class="card">
												<p class="card-text2"><h5>Contributors</h5>
												<ul><li><p2>Nick Johnson ~ Spotify API </p2></li>
												<li><p2>Breana Hannah~ YouTube API</p2></li>
												<li><p2>Jon Kesler ~ News APO</p2></li>
												<li><p2><a href="https://jonkesler.github.io/fusion-entertainment/">Website: https://jonkesler.github.io/fusion-entertainment/</a></p2></li>
												<li><p2><a href="https://github.com/jonkesler/fusion-entertainment.git">Repository: https://github.com/jonkesler/fusion-entertainment.git</a></p2></li>
												</ul>
													</p>
											</div>
										</div>
										<div class="col-sm-6 col-md-6 col-lg-6">
											<div class="card">
												<p class="card-text2"><h5>Challanges</h5>
												<ul><li><p2>Spotify API token</p2></li>
												<li><p2>GitHub Repository</p2></li>
												<li><p2>Time to work more together on layout.</p2>  </li>
												</ul>
													</p>
													<br />
													<br />
											</div>
										</div>
									</div>
								</div>

							<div class="row row-cols-1 row-cols-md-3">
								<div class="col-sm-4 col-md-4 col-lg-4">
									<div class="card">
										<div class="card-body">
											<img src={fusent4} class="card-img-bottom" alt="fusionEntertainment">
											</img>
										</div>
									</div>
								</div>
								<div class="col-sm-4 col-md-4 col-lg-4">
									<div class="card">
										<div class="card-body">
											<img src={fusent2} class="card-img-bottom" alt="fusionEntertainment">
											</img>
										</div>
									</div>
								</div>
								<div class="col-sm-4 col-md-4 col-lg-4">
									<div class="card">
										<div class="card-body">
											<img src={fusent3} class="card-img-bottom" alt="fusionEntertainment">
											</img>
										</div>
									</div>
								</div>
							</div>
						</div>
	

                <div class="card">
                    <div class="card-header">
                        <h3>Georgia Covid</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-6 col-md-6 col-lg-6">
                                <div class="card">
                                <p class="card-text2"><h5>Contributors</h5>
                                    <ul><li><p2>Annastasshia Ames ~  Scrum Lord / Handlebars Wizard</p2></li>
                                    <li><p2>Kelli Jarell ~ Design / New tech Researcher</p2></li>
                                    <li><p2>Jon Kesler ~ Database Master</p2></li>
                                    <li><p2><a href="https://warm-badlands-80819.herokuapp.com/">Website: https://warm-badlands-80819.herokuapp.com/</a></p2></li>
                                    <li><p2><a href="https://github.com/Annastasshia/GeorgiaCovid">Repository: https://github.com/Annastasshia/GeorgiaCovid</a></p2></li>
									</ul>
                                    </p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6">
                                <div class="card">
                                <p class="card-text2"><h5>Challanges</h5>
								<ul><li><p2>TRAVIS</p2></li>
								<li><p2>Sequelize</p2></li>
								<li><p2>Postman</p2></li>
								<li><p2>Locating the source of the state Covid Data and an API.</p2></li>
								<li><p2>Time for more in-depth technology research/practice.</p2></li>
								</ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-img">
                                    <img src={GaCovid} class="card-img-top img-fluid" alt="Password Generator image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-img">
                                    <img src={GaCovid2} class="card-img-top img-fluid" alt="Password Generator image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-img">
                                    <img src={GaCovid3} class="card-img-top img-fluid" alt="Password Generator image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
		</div>
		)
	}
}