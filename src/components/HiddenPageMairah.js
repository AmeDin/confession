import React, { Component } from "react";
import { TimelineLite } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';
import { Button, Container, Row, Col, Form, FormGroup, Input,
    ModalHeader, ModalBody, Modal} from 'reactstrap'
import Loading from "./Loading";
import mp4 from '../assets/confess.mp4'
import mp3 from '../assets/ppbintangsurga.mp3'
import amethyst from '../assets/trimbtbf.mp3'
import yesImg from '../assets/ls.gif'
import noImg from '../assets/hb.gif'
import axios from 'axios';

const C = CSSPlugin;


class HiddenPageV3 extends Component {
	
	constructor(props){
		super(props);
		this.state = { details: '', answer: true, modalContinue: false, isPlaying: null};

		
		this.bgTl = new TimelineLite({ paused:true });
		this.containerParent = null

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
		this.btnContinue = null;

		this.logoTl2 = new TimelineLite({ paused:true });
		this.vid = null;
		this.btnContinueTwo = null;
		this.btnBack = null

		this.logoTl3 = new TimelineLite({ paused:true }); 
		this.endingContent = null;
        this.endline = null;
		this.endline1 = null;
		this.endline2 = null;
		this.endline3 = null;
		this.endline4 = null;
		this.endline5 = null;
		this.endline6 = null;
		this.endline7 = null;
		this.endline8 = null;
		this.endline9 = null;
		this.endline10 = null;
		this.endline11 = null;
		this.endline12 = null;
		this.endline13 = null;
		this.endline14 = null;
		this.endline15 = null;
		this.endline16 = null;
		this.endline17 = null;
		this.yesImg = null;
		
    }
    
    toggleContinue = () => {
        this.setState({
            modalContinue: !this.state.modalContinue
        });
    }

    

	// add instances to the timeline
	componentDidMount(){
		
		this.bgTl
			.set(this.containerParent, { autoAlpha: 1 })// show content div
			.to(this.containerParent, 5, {backgroundColor : 'rgba(0, 0, 0)'});

		this.logoTl
			.set(this.content, { autoAlpha: 1 })
			.from(this.head, 4, { top: 100, autoAlpha: 0 })
			.to(this.head, 2, { opacity: 0, autoAlpha: 0 })
			.from(this.line1, 2.5, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line2, 2.5, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line3, 2.5, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line4, 2.5, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line5, 2.5, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line6, 2.5, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line7, 3, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line8, 2.5, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line9, 2.5, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line10, 2.5, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line11, 2.5, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.btnContinue, 3, { scale: .5, autoAlpha: 0 }, "feature") ; 

		this.logoTl2
			.set(this.vidContent, { autoAlpha: 1 })
			.from(this.vid, 3, { scale: .5, autoAlpha: 0 }, "feature") 
			.from(this.btnContinueTwo, 3, { scale: .5, autoAlpha: 0 }, "feature")
			.from(this.btnBack, 3, { scale: .5, autoAlpha: 0 }, "feature");

		this.logoTl3.set(this.endingContent, { autoAlpha: 1 })
			.from(this.endline, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline1, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline2, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline3, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline4, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline5, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline6, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline7, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline8, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline9, 3, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline10, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline11, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline12, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline13, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline14, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline15, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline16, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.endline17, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.yesImg, 2.5, { scale: .5, autoAlpha: 0 }, "feature");
		
			this.onTrackChange(mp3)
		// setTimeout(() => {
		// 	this.onTrackChange(mp3)
		//   }, 1000);
			this.bgTl.play()
			setTimeout(() => {
				this.logoTl.play()
				}, 5000);
	}


	continueClick = (e) => {
		this.logoTlB
			.set(this.content, { autoAlpha: 1 })
			.to(this.btnContinue, 0.5, { opacity: 0, autoAlpha: 0 })
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
        
        this.onTrackPause(mp3)
		setTimeout(() => {
			document.querySelector(".content").style.display = "none"
			document.querySelector(".videoContent").style.display = "inline"
			this.logoTl2.play()
		  }, 5000);
		
    }

	continueTwoClick = (e) => {
		var v = document.querySelector(".react-player")
		if(!v.paused)
			v.pause()
        this.toggleContinue()
		this.logoTl2
			.set(this.vidContent, { autoAlpha: 1 })
			.to(this.btnContinueTwo, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.btnBack, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.vid, 0.2, { opacity: 0, autoAlpha: 0 })
		this.logoTl2.play()
		setTimeout(() => {
			window.scrollBy({
				top: 300,
				behavior: 'smooth'
			  });
		  }, 30000);
		setTimeout(() => {
			document.querySelector(".videoContent").style.display = "none";
            document.querySelector(".endingContent").style.display = "inline";
            this.onTrackChange(amethyst)
			this.logoTl3.play()
		  }, 2500);
		  const answer = true
		  const details = "accessed ending page"
		  axios.post("api/confession", {
			answer,
			details
		  }).then(result => {
			this.logoTl5.reverse()
			setTimeout(() => {
				document.querySelector(".noContent").style.display = "none";
				document.querySelector(".noCloseContent").style.display = "inline";
				this.logoTl7.play()
			}, 1500);
		  }).catch(e => {
			
		  });
	}

	backClick = (e) => {
		this.logoTl2.reverse()
		setTimeout(() => {
			document.querySelector(".content").style.display = "inline"
			document.querySelector(".videoContent").style.display = "none"
			this.logoTlB.reverse()
		  }, 1500);
	}

    
    onTrackChange = (source) => {
        this.setState({ isPlaying: source },function(){
             this.refs.audio.pause();
             this.refs.audio.load();
             this.refs.audio.play();
        })
    }

    onTrackPause = (source) => {
        this.setState({ isPlaying: source },function(){
             this.refs.audio.pause();
        })
    }

	render(){
		return (
            <div ref={ div => this.containerParent = div } style={{backgroundColor: "#fff", height: "100vh"}}>
            <div className="container">
			<div className="row">
				<div className="col-12 mt-3">

					<div className="demoWrapper">
                        
						<audio controls loop ref="audio" className="invisible mt-n5">
							<source id="audioSource" src={this.state.isPlaying}type="audio/mp3"/>
							Your browser does not support the audio element.
						</audio>
						<div className="content" ref={ div => this.content = div }>
                            <div ref={ div => this.head = div}><Loading /></div>
							<h2 ref={ h2 => this.line1 = h2 }>Our encounter was peculiar.</h2>
                            <h2 ref={ h2 => this.line2 = h2 }>CMB in particular.</h2>
                            <h2 ref={ h2 => this.line3 = h2 }>Jom delete app ni sama-sama.</h2>
                            <h2 ref={ h2 => this.line4 = h2 }>I felt like I've met my cinderalla.</h2>
                            <h2 ref={ h2 => this.line5 = h2 }>My heart feels like a gush of aurora.</h2>
                            <h2 ref={ h2 => this.line6 = h2 }>This feeling is so gila.</h2>
                            <h2 ref={ h2 => this.line7 = h2 }>Like piecing puzzle piece to perfect my life formula.</h2>
                            <h2 ref={ h2 => this.line8 = h2 }>Allow me to be your umbrella.</h2>
                            <h2 ref={ h2 => this.line9 = h2 }>Let's begin our era.</h2>
                            <h2 ref={ h2 => this.line10 = h2 }>With me and you, minah.</h2>
                            <h2 ref={ h2 => this.line11 = h2 }>This is my confession, Umairah.</h2>
							<div ref={ div => this.btnContinue = div}>
								<Button 
									color="dark"
									style={{marginTop: '1rem', marginBottom: '1rem', backgroundColor: "#73b102"}}
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
											onClick={this.toggleContinue}>
											Next
										</Button>
									</div>
								</Col>
							</Row>
						</Container>
						</div>
						<div className="endingContent" ref={ div => this.endingContent = div }>
						
                            <h2 ref={ h2 => this.endline = h2 }>To be, or not to be.</h2>
                            <h2 ref={ h2 => this.endline1 = h2 }>We have such great chemistry.</h2>
                            <h2 ref={ h2 => this.endline2 = h2 }>Fate has brought upon this natural affinity.</h2>
                            <h2 ref={ h2 => this.endline3 = h2 }>Would you give me the opportunity.</h2>
                            <h2 ref={ h2 => this.endline4 = h2 }>To break this boundary.</h2>
                            <h2 ref={ h2 => this.endline5 = h2 }>And start making memory.</h2>
                            <h2 ref={ h2 => this.endline6 = h2 }>That will last for eternity.</h2>
							<h2 ref={ h2 => this.endline7 = h2 }>Time to define our relationship officially.</h2>
							<h2 ref={ h2 => this.endline8 = h2 }>To the next stage, as bf/gf literally.</h2>
                            <h2 ref={ h2 => this.endline9 = h2 }>And marks today as our sweet anniversary.</h2>
                            <h2 ref={ h2 => this.endline10 = h2 }>Special 28th February.</h2>
							<h2 ref={ h2 => this.endline11 = h2 }>There's no need to hurry.</h2>
                            <h2 ref={ h2 => this.endline12 = h2 }>I can wait until you are ready.</h2>
                            <h2 ref={ h2 => this.endline13 = h2 }>For you, I'll make my time free.</h2>
                            <h2 ref={ h2 => this.endline14 = h2 }>Even if it sounds corny.</h2>
                            <h2 ref={ h2 => this.endline15 = h2 }>I shall tell you this milady.</h2>
                            <h2 ref={ h2 => this.endline16 = h2 }>I delight in your company.</h2>
                            <h2 ref={ h2 => this.endline17 = h2 }>So let's begin our story.</h2>
							<img ref={ img => this.yesImg = img } src={yesImg} alt="success" />
						</div>
					<div className="endingModal" ref={ div => this.endingModal = div }>		
					 <Modal
							isOpen={this.state.modalContinue}
							toggle={this.toggleContinue}>
								<ModalHeader toggle={this.toggleContinue} style={{color: "#000000"}}>You won't be able to go back to this page, please click 'Confirm' to continue</ModalHeader>
								<ModalBody>
								<Container>
									<Row>
										<Col xs="6">
											<div ref={ div => this.btnNo = div}>
												<Button 
													color="secondary"
													style={{marginTop: '2rem', backgroundColor: "#dc3545", color: "black" }}
													block
													onClick={this.toggleContinue}>
													Back
												</Button>
											</div>
										</Col>
										<Col xs="6">
											<div ref={ div => this.btnYes = div}>
												<Button 
													color="dark"
													style={{marginTop: '2rem', backgroundColor: "#73b102"}}
													block
													onClick={this.continueTwoClick}>
													Confirm
												</Button>
											</div>
										</Col>
									</Row>
								</Container>
								</ModalBody>
							</Modal>
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
		</div>
		</div>)
	}

}

export default HiddenPageV3;
