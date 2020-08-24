import React from "react";
import goodReadMe from '../../images/goodReadMe.png';
import Scheduler from '../../images/Scheduler.png';
import EatDaBurger from '../../images/Eat-Da-Burger.png';
import EmpManagement from '../../images/EmpManagement.png';


export default class Contact extends React.Component {
	render() {
		return (
		<div id="my-contact" className="container text-center my-5">
			<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
				Portfolio
			</h1>
					<div class="row row-cols-1 row-cols-md-2">
					<div class="col mb-4">
						<div class="card">
						<div class="card-img">
							<img src={goodReadMe} class="card-img-top img-fluid" alt="Password Generator image">
							</img>
							<div class="card-badge"><h3>Good ReadMe Generator</h3>
							</div>
						</div>
						</div>
						<div class="card-footer">
						<div class="btn-group" role="group" aria-label="...">
							<a href="https://github.com/jonkesler/goodREADMEgenerator" class="btn btn-secondary btn-md" tabindex="-1" role="button" aria-disabled="true">Website</a>
							<a href="https://github.com/jonkesler/goodREADMEgenerator/blob/master/README.md" class="btn btn-secondary btn-md" tabindex="-2" role="button" aria-disabled="true">Read Me</a>
							<a href="https://github.com/jonkesler/goodREADMEgenerator.git" class="btn btn-secondary btn-md" tabindex="-3" role="button" aria-disabled="true">HTTPS Repo</a>
						</div>
						</div>
					</div>
					<div class="col mb-4">
						<div class="card">
						<div class="card-img">
							<img src={Scheduler} class="card-img-top img-fluid" alt="Work Day Scheduler Image">
							</img>
							<div class="card-badge"><h3>Day Planner</h3></div>
						</div>
						</div>
						<div class="card-footer">
						<div class="btn-group" role="group" aria-label="...">
							<a href="https://jonkesler.github.io/WorkScheduler/" class="btn btn-secondary btn-md" tabindex="-1" role="button" aria-disabled="true">Website</a>
							<a href="https://github.com/jonkesler/WorkScheduler/blob/master/README.md" class="btn btn-secondary btn-md" tabindex="-2" role="button" aria-disabled="true">Read Me</a>
							<a href="https://github.com/jonkesler/WorkScheduler.git" class="btn btn-secondary btn-md" tabindex="-3" role="button" aria-disabled="true">HTTPS Repo</a>
						</div>
						</div>
					</div>
					<div class="col mb-4">
						<div class="card">
						<div class="card-img">
							<img src={EatDaBurger} class="card-img-top img-fluid" alt="Eat-Da-Burger Website Image">
							</img>
							<div class="card-badge"><h3>Eat-Da-Burger</h3></div>
						</div>
						</div>
						<div class="card-footer">
						<div class="btn-group" role="group" aria-label="...">
							<a href="https://jkeslerburger.herokuapp.com/" class="btn btn-secondary btn-md" tabindex="-1" role="button" aria-disabled="true">Website</a>
							<a href="https://github.com/jonkesler/burger/blob/master/README.md" class="btn btn-secondary btn-md" tabindex="-2" role="button" aria-disabled="true">Read Me</a>
							<a href="https://github.com/jonkesler/burger.git" class="btn btn-secondary btn-md" tabindex="-3" role="button" aria-disabled="true">HTTPS Repo</a>
						</div>
						</div>
					</div>
					<div class="col mb-4">
						<div class="card">
						<div class="card-img">
							<img src={EmpManagement} class="card-img-top img-fluid" alt="Employee Manager Website Image">
							</img>
							<div class="card-badge"><h3>Employee Manager</h3>
							</div>
						</div>
						</div>
						<div class="card-footer">
						<div class="btn-group" role="group" aria-label="...">
							<a href="https://jonkesler.github.io/EmployeeSummary/" class="btn btn-secondary btn-md" tabindex="-1" role="button" aria-disabled="true">Website</a>
							<a href="https://github.com/jonkesler/EmployeeSummary/blob/master/README.md" class="btn btn-secondary btn-md" tabindex="-2" role="button" aria-disabled="true">Read Me</a>
							<a href="https://github.com/jonkesler/EmployeeSummary.git" class="btn btn-secondary btn-md" tabindex="-3" role="button" aria-disabled="true">HTTPS Repo</a>
						</div>
						</div>
					</div>
					</div>
        </div>
	)
}
}