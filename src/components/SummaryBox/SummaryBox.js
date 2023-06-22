import React, { Component } from 'react';
import './SummaryBox.css';


export class SummaryBox extends Component {
	componentDidUpdate() {
		
	}

	calculateStats(data) {
		let stats = {
			not_considered: 0,
			complete: 0,
			under_review: 0,
			work_underway: 0
		}

		for (let i = 0; i < data.length; ++i) {

			if (data[i].status === 'Complete') {
				stats.complete++;
			} else if (data[i].status === 'Not under consideration') {
				stats.not_considered++;
			} else if (data[i].status.trim() === 'Reviewing') {
				stats.under_review++;
			} else if (data[i].status === 'Work underway') {
				stats.work_underway++;
			}
		}

		return stats;
	}

	render() {
		const stats = this.calculateStats(this.props.data);

		return (
			<div className="summary-box">		
				<div className="stat-box">
					<div className="stat">
						<p className="big-num new">{stats.complete}</p>
						<p className="label">Complete</p>
					</div>

					<div className="stat">
						<p className="big-num being-held">{stats.under_review}</p>
						<p className="label">Under <br/> review</p>
					</div>

					<div className="stat">
						<p className="big-num under-control">{stats.work_underway}</p>
						<p className="label">Work <br/> Underway</p>
					</div>

					<div className="stat">
						<p className="big-num out">{stats.not_considered}</p>
						<p className="label">Not under <br/> consideration</p>
					</div>
				</div>
			</div>
		);
	}
}

export default SummaryBox;

