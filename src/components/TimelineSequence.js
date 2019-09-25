import React, { Component, useState } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";
import Loading from "./Loading";
import { useAuth } from "../context/auth";
import Access from './Access';

// icons will be animated using a stagger method
const iconsArray = [
	{ src: "https://image.shutterstock.com/image-vector/10-minutes-timer-260nw-197413463.jpg", width: "83", height: "59" },
	{ src: "https://previews.123rf.com/images/dirkercken/dirkercken1401/dirkercken140100156/25263130-ready-to-go-or-job-done-slogan-icon-or-sign-work-accomplished-finished-and-well-done-.jpg", width: "83", height: "59" },
	{ src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYglyJRwnFj9od7emyGblacb1nQZd6V0nalMhZ0HhaPoIkycS", width: "83", height: "59" }
];


class TimelineSequence extends Component {

	
	constructor(props){
		super(props);
		this.logoTl = new TimelineLite({ paused:true });

		this.content = null;
		this.head = null;
		this.subhead = null;
		this.warn = null;
		this.form = null;
		this.icons = [];
	}

	

	// add instances to the timeline
	componentDidMount(){
		this.logoTl
			.set(this.content, { autoAlpha: 1 })// show content div
			.from(this.head, 4, { top: 100, autoAlpha: 0 })
			.to(this.head, 2, { opacity: 0, autoAlpha: 0 })
			.from(this.subhead, 4, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
			.from(this.warn, 5, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
			.from(this.form, 5, { scale: .5, autoAlpha: 0 }, "feature") // added 0.5 seconds after end of timeline
			.staggerFrom(this.icons, 0.5, { scale: 0, autoAlpha: 0 }, 0.1); //animate all icons with 0.1 second stagger
	}

	render(){
		return (
            <div className="container">
			<div className="row">
				<div className="col-12 mt-3">

					<div className="demoWrapper">

						<div className="bg"></div>

						<div className="content" ref={ div => this.content = div }>
                            <div ref={ div => this.head = div}><Loading /></div>
							<h2 ref={ h2 => this.subhead = h2 }>You've landed on this page because you received a link from a certain person</h2>
                            <h2 ref={ h2 => this.warn = h2 }>The passcode only work once, access further if u have at least 10 minutes to spare.</h2>
                            <div ref={ div => this.form = div}>
                                <Access props={this.props}/>
                            </div>
							<div className="nav">
								{ iconsArray.map( (icon, index) => {
									const { src, width, height } = icon;
									return <img
										key={`icon-${index}`}
										src={src} width={width} height={height}
										ref={ img => this.icons[index] = img }
									/>;
								})}
							</div>

						</div>

					</div>

					{/* BUTTONS */}
					<div className="my-3 btn-group">
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.play()}
						>Play</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.pause()}
						>Pause</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.reverse()}
						>Reverse</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.restart()}
						>Restart</button>
					</div>

				</div>
			</div>
		</div>)
	}

}

export default TimelineSequence;
