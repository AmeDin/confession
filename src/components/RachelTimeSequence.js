import React, { Component, useState } from "react";
import { TimelineLite, Linear } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';
import Loading from "./Loading";
import { useAuth } from "../context/auth";
import AccessRachel from './AccessRachel';

const C = CSSPlugin;


class RachelTimeSequence extends Component {

	
	constructor(props){
		super(props);

		this.bgTl = new TimelineLite({ paused:true });
		this.containerParent = null

		this.logoTl = new TimelineLite({ paused:true });

		this.content = null;
		this.head = null;
		this.subhead = null;
		// this.ms2 = null;
		this.msg = null;
		this.warn = null;
		this.form = null;
	}

	

	// add instances to the timeline
	componentDidMount(){
		this.logoTl
			.set(this.content, { autoAlpha: 1 })// show content div
			.from(this.head, 5, { top: 100, autoAlpha: 0 })
			.to(this.head, 2, { opacity: 0, autoAlpha: 0 })
			.from(this.subhead, 3, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
			// .from(this.msg2, 2, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
			.from(this.warn, 3, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
			.from(this.msg, 2, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
			.from(this.form, 3, { scale: .3, autoAlpha: 0 }, "feature") // added 0.5 seconds after end of timeline
		this.logoTl.play()

		this.bgTl
			.set(this.containerParent, { autoAlpha: 1 })// show content div
			.to(this.containerParent, 5, {backgroundColor : 'rgba(255, 255, 255, 255)'});
		

			setTimeout(() => {
				this.bgTl.play()
				  }, 6000);
	}

	render(){
		return (
            <div ref={ div => this.containerParent = div } style={{backgroundColor: "#000", height: "100vh"}}>
            <div className="container">
			<div className="row">
				<div className="col-12 mt-3">

					<div className="demoWrapper">

						<div className="bg"></div>

						<div className="content" ref={ div => this.content = div } className="txtdg">
                            <div ref={ div => this.head = div}><Loading /></div>
							<h2 ref={ h2 => this.subhead = h2 }>You have landed on this page using the link you received.</h2>
							{/* <h2 ref={ h2 => this.msg2 = h2 }>For better experience, turn on the volume.</h2> */}
                            <h2 ref={ h2 => this.warn = h2 }>The passcode only works once; only press "Enter" if you have at least 10 minutes to spare.</h2>
							<h2 ref={ h2 => this.msg = h2 }>Please ensure that your sound is turned on before clicking "Enter".</h2>
                            <div ref={ div => this.form = div}>
                                <AccessRachel props={this.props}/>
                            </div>

						</div>

					</div>

					{/* BUTTONS */}
					{/* <div className="my-3 btn-group">
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
					</div> */}

				</div>
			</div>
		</div>
		</div>)
	}

}

export default RachelTimeSequence;
