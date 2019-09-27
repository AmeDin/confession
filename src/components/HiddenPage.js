import React, { Component } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";
import { Button, Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Loading from "./Loading";
import mp4 from '../assets/confess.mp4'
import mp3 from '../assets/end.mp3'
import yesImg from '../assets/ls.gif'
import noImg from '../assets/hb.gif'
import axios from 'axios';

// icons will be animated using a stagger method
const iconsArray = [
	{ src: "https://image.shutterstock.com/image-vector/10-minutes-timer-260nw-197413463.jpg", width: "83", height: "59" },
	{ src: "https://previews.123rf.com/images/dirkercken/dirkercken1401/dirkercken140100156/25263130-ready-to-go-or-job-done-slogan-icon-or-sign-work-accomplished-finished-and-well-done-.jpg", width: "83", height: "59" },
	{ src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYglyJRwnFj9od7emyGblacb1nQZd6V0nalMhZ0HhaPoIkycS", width: "83", height: "59" }
];

class HiddenPage extends Component {
	
	constructor(props){
		super(props);
		this.state = { details: '', answer: true, };
		this.logoTl = new TimelineLite({ paused:true });
		this.logoTlB = new TimelineLite({ paused:true });
		this.content = null;
		this.head = null;
		this.line1 = null;
		this.line2 = null;
		this.line3 = null;
		this.line4 = null;
		this.line5 = null;
		this.line6 = null;
		this.line7 = null;
		this.line8 = null;
		this.line9 = null;
		this.line10 = null;
		this.line11 = null;
		this.line12 = null;
		this.btnContinue = null;

		
		this.logoTl2 = new TimelineLite({ paused:true });
		this.vid = null;
		this.btnContinueTwo = null;
		this.btnBack = null

		this.logoTl3 = new TimelineLite({ paused:true }); 
		this.endingContent = null;
        this.line = null;
        this.btnYes = null;
		this.btnNo = null;
		
		this.logoTl4 = new TimelineLite({ paused:true }); 
		this.yesContent = null;
        this.yesline = null;
		this.form = null;
		
		this.logoTl5 = new TimelineLite({ paused:true }); 
		this.noContent = null;
		this.options = null;
		
		this.logoTl6 = new TimelineLite({ paused:true }); 
		this.yesCloseContent = null;
        this.yescloseline = null;
		
		this.logoTl7 = new TimelineLite({ paused:true }); 
		this.noCloseContent = null;
        this.nocloseline = null;
	}

	// add instances to the timeline
	componentDidMount(){
		this.logoTl
			.set(this.content, { autoAlpha: 1 })
			.from(this.head, 4, { top: 100, autoAlpha: 0 })
			.to(this.head, 2, { opacity: 0, autoAlpha: 0 })
			.from(this.line1, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line2, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line3, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line4, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line5, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line6, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line7, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line8, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line9, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line10, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line11, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line12, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.btnContinue, 3, { scale: .5, autoAlpha: 0 }, "feature") ; 
		this.logoTl.play()

		this.logoTl2
			.set(this.vidContent, { autoAlpha: 1 })
			.from(this.vid, 3, { scale: .5, autoAlpha: 0 }, "feature") 
			.from(this.btnContinueTwo, 3, { scale: .5, autoAlpha: 0 }, "feature")
			.from(this.btnBack, 3, { scale: .5, autoAlpha: 0 }, "feature");

		this.logoTl3.set(this.endingContent, { autoAlpha: 1 })
			.from(this.line, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.btnYes, 3, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.btnNo, 3, { left: -100, autoAlpha: 0 }, "-=0.25"); 

		this.logoTl4.set(this.yesContent, { autoAlpha: 1 })
			.from(this.yesline, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.form, 3, { right: -100, autoAlpha: 0 }, "-=0.25");

		this.logoTl5.set(this.noContent, { autoAlpha: 1 })
			.from(this.options, 3, { left: -100, autoAlpha: 0 }, "-=0.25");

		this.logoTl6.set(this.yesCloseContent, { autoAlpha: 1 })
			.from(this.yesCloseline, 3, { left: -100, autoAlpha: 0 }, "-=0.25");

		this.logoTl7.set(this.noCloseContent, { autoAlpha: 1 })
			.from(this.noCloseline, 3, { left: -100, autoAlpha: 0 }, "-=0.25");
	
			
	}

	onDetailChange = (e) => {
        this.setState({ 
            details : e.target.value
        });
	}
	
	sendNumber = (e) => {
		e.preventDefault();
		const answer = this.state.answer;
		const details = this.state.details;
        axios.post("api/confession", {
			answer,
			details
		  }).then(result => {
			if (result.status === 200) {
				this.logoTl4
				.set(this.yesContent, 0.5, { opacity: 0, autoAlpha: 0 })
				.from(this.yesline, 0.5, { opacity: 0, autoAlpha: 0 })
				.from(this.form,  0.5, { opacity: 0, autoAlpha: 0 });
				this.logoTl4.play()
			setTimeout(() => {
				document.querySelector(".yesContent").style.display = "none";
				document.querySelector(".yesCloseContent").style.display = "inline";
				this.logoTl6.play()
			}, 2000);
			} else {
			  
			}
		  }).catch(e => {
			
		  });
	}

	sendReject = (e) => {
		const answer = false;
		const details = e.target.innerText;
        axios.post("api/confession", {
			answer,
			details
		  }).then(result => {
			if (result.status === 200) {

			} else {
			  
			}
		  }).catch(e => {
			
		  });
	}

	continueClick = (e) => {
		this.logoTlB
			.set(this.content, { autoAlpha: 1 })
			.to(this.btnContinue, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.line12, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line11, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line10, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line9, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line8, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line7, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line6, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line5, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line4, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line3, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line2, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line1, 0.2, { opacity: 0, autoAlpha: 0 });
		this.logoTlB.play()
		setTimeout(() => {
			document.querySelector(".content").style.display = "none"
			document.querySelector(".videoContent").style.display = "inline"
			this.logoTl2.play()
		  }, 5000);
		
	}

	continueTwoClick = (e) => {
		this.logoTl2
			.set(this.vidContent, { autoAlpha: 1 })
			.to(this.btnContinueTwo, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.btnBack, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.vid, 0.2, { opacity: 0, autoAlpha: 0 })
		this.logoTl2.play()
		setTimeout(() => {
			document.querySelector(".videoContent").style.display = "none";
			document.querySelector(".endingContent").style.display = "inline";
			document.querySelector("#endmp3").play()
			this.logoTl3.play()
		  }, 2000);
		
	}

	backClick = (e) => {
		this.logoTl2.reverse()
		setTimeout(() => {
			document.querySelector(".content").style.display = "inline"
			document.querySelector(".videoContent").style.display = "none"
			this.logoTlB.reverse()
		  }, 1500);
	}

	noClick = (e) => {
		this.logoTl3
			.set(this.endingContent, { autoAlpha: 1 })
			.to(this.line, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.btnYes, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.btnNo, 0.2, { opacity: 0, autoAlpha: 0 })
			this.logoTl3.play()
		setTimeout(() => {
			document.querySelector(".endingContent").style.display = "none";
			document.querySelector(".noContent").style.display = "inline";
			this.logoTl5.play()
		  }, 2000);
	}

	yesClick = (e) => {
		this.logoTl3
			.set(this.endingContent, { autoAlpha: 1 })
			.to(this.line, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.btnYes, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.btnNo, 0.2, { opacity: 0, autoAlpha: 0 })
			this.logoTl3.play()
		setTimeout(() => {
			document.querySelector(".endingContent").style.display = "none";
			document.querySelector(".yesContent").style.display = "inline";
			this.logoTl4.play()
		  }, 2000);
	}

	render(){
		return (
            <div className="container">
			<div className="row">
				<div className="col-12 mt-3">

					<div className="demoWrapper">

						<div className="bg"></div>
						<audio controls loop id="endmp3" className="invisible">
							<source src={mp3} type="audio/mp3"/>
							Your browser does not support the audio element.
						</audio>
						<div className="content" ref={ div => this.content = div }>
                            <div ref={ div => this.head = div}><Loading /></div>
							<h2 ref={ h2 => this.line1 = h2 }>I can't tell you what it really is.</h2>
                            <h2 ref={ h2 => this.line2 = h2 }>I can only try to describe this.</h2>
                            <h2 ref={ h2 => this.line3 = h2 }>Each time you work standing I notice.</h2>
                            <h2 ref={ h2 => this.line4 = h2 }>Looking at your beautiful hair gradually had me mesmerise.</h2>
                            <h2 ref={ h2 => this.line5 = h2 }>Before I know it, emotion starts to materialise.</h2>
                            <h2 ref={ h2 => this.line6 = h2 }>In my mind I immediately began to devise.</h2>
                            <h2 ref={ h2 => this.line7 = h2 }>To leverage on rap which I expertise.</h2>
                            <h2 ref={ h2 => this.line8 = h2 }>Tinkering with music composed by eminem whom i idolise.</h2>
                            <h2 ref={ h2 => this.line9 = h2 }>With his lyrics i had improvise.</h2>
                            <h2 ref={ h2 => this.line10 = h2 }>Singing it myself would just jeopardise.</h2>
                            <h2 ref={ h2 => this.line11 = h2 }>This music video is a confession to surprise.</h2>
                            <h2 ref={ h2 => this.line12 = h2 }>Milady, Elise.</h2>
							<div ref={ div => this.btnContinue = div}>
								<Button 
									color="dark"
									style={{marginTop: '2rem', backgroundColor: "#73b102"}}
									block
									onClick={this.continueClick}>
									Continue
								</Button>
							</div>
						</div>
						<div className="videoContent" ref={ div => this.vidContent = div }>
							<div ref={ div => this.vid = div} className="player-wrapper">
								<video width="100%" height="100%" controls className="react-player">
									<source src={mp4} type="video/mp4"/>
									Your browser does not support HTML5 video.
								</video>
							</div> 
						</div>
						<Container>
							<Row>
								<Col xs="6">
									<div ref={ div => this.btnBack = div}>
										<Button 
											color="secondary"
											style={{marginTop: '2rem', backgroundColor: "#C2C5CC", color: "black" }}
											block
											onClick={this.backClick}>
											Back
										</Button>
									</div>
								</Col>
								<Col xs="6">
									<div ref={ div => this.btnContinueTwo = div}>
										<Button 
											color="dark"
											style={{marginTop: '2rem', backgroundColor: "#73b102"}}
											block
											onClick={this.continueTwoClick}>
											Continue
										</Button>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="endingContent" ref={ div => this.endingContent = div }>
						<h1 ref={ h1 => this.line = h1 }>Would you go out with me?</h1>
							<Container>
								<Row>
									<Col xs="6">
										<div ref={ div => this.btnNo = div}>
											<Button 
												color="secondary"
												style={{marginTop: '2rem', backgroundColor: "#dc3545", color: "black" }}
												block
												onClick={this.noClick}>
												No
											</Button>
										</div>
									</Col>
									<Col xs="6">
										<div ref={ div => this.btnYes = div}>
											<Button 
												color="dark"
												style={{marginTop: '2rem', backgroundColor: "#73b102"}}
												block
												onClick={this.yesClick}>
												Yes
											</Button>
										</div>
									</Col>
								</Row>
							</Container>
					</div>
					<div className="yesContent" ref={ div => this.yesContent = div }>
						<h1 ref={ h1 => this.yesline = h1 }>Enter in your phone number</h1>
						<div ref={ div => this.form = div}>
							<Form onSubmit={this.sendNumber}>
								<FormGroup>
									<Input 
										type="text"
										name="phonenumber"
										id="phonenumber"
										placeholder="••••••••••"
										onChange={this.onDetailChange}
										/>
								</FormGroup>
								<FormGroup>
									<Button 
										color="dark"
										style={{marginTop: '2rem', backgroundColor: "#73b102"}}
										block>
										Enter
									</Button>
								</FormGroup>
							</Form>
						</div>
					</div>
					<div className="noContent" ref={ div => this.noContent = div }>
						<div ref={ div => this.options = div}>
						<Button 
							onClick={this.sendReject}
							color="dark"
							style={{marginTop: '2rem', backgroundColor: "#73b102"}}
							block>
							I'm already attached / married
						</Button>
						<Button 
							onClick={this.sendReject}
							color="dark"
							style={{marginTop: '2rem', backgroundColor: "#73b102"}}
							block>
							I'm not ready to commit to relationship yet
						</Button>
						<Button
							onClick={this.sendReject}
							color="dark"
							style={{marginTop: '2rem', backgroundColor: "#73b102"}}
							block>
							Others, I prefer not to disclose it
						</Button>
						</div>
					</div>
					<div className="yesClose" ref={ div => this.yesCloseContent = div }>
						<img  src={yesImg} alt="success" />
						<h1 ref={ h1 => this.yesCloseline = h1 }>I will ping you up in a moment! :)</h1>
					</div>
					
					<div className="noClose" ref={ div => this.noCloseContent = div }>
						<img  src={noImg} alt="success" />
						<h1 ref={ h1 => this.noCloseline = h1 }>I see, I shall respect your decision.</h1>
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
		</div>)
	}

}

export default HiddenPage;
