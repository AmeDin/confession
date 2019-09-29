import React, { Component } from "react";
import { TimelineLite } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';
import { Button, Container, Row, Col, Form, FormGroup, Input,
    ModalHeader, ModalBody, Modal} from 'reactstrap'
import Loading from "./Loading";
import mp4 from '../assets/confess.mp4'
import mp3 from '../assets/end.mp3'
import yesImg from '../assets/ls.gif'
import noImg from '../assets/hb.gif'
import axios from 'axios';

const C = CSSPlugin;


class HiddenPageV2 extends Component {
	
	constructor(props){
		super(props);
		this.state = { details: '', answer: true, modalContinue: false,modalYes: false, modalNo: false};
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
		this.endingModal = null;
		this.thanksman = null;
        

		this.logoTl5 = new TimelineLite({ paused:true }); 
		this.rejectedman = null;
		
    }
    
    toggleContinue = () => {
        this.setState({
            modalContinue: !this.state.modalContinue
        });
    }

    
    toggleYes = () => {
        this.setState({
            modalYes: !this.state.modalYes
        });
    }
    
    toggleNo = () => {
        this.setState({
            modalNo: !this.state.modalNo
        });
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
        

		this.logoTl4.set(this.endingModal, { autoAlpha: 1 })
        .from(this.thanksman, 3, { right: -100, autoAlpha: 0 }, "-=0.25");
        

		this.logoTl5.set(this.endingModal, { autoAlpha: 1 })
        .from(this.rejectedman, 3, { right: -100, autoAlpha: 0 }, "-=0.25");
	
        this.onTrackChange(mp3)

	}

	onDetailChange = (e) => {
        this.setState({ 
            details : e.target.value
        });
	}
	
	sendNumber = (e) => {
		e.preventDefault();
		if (!e.target.checkValidity()) {
			alert("Please input your number")
			return;
		}
		const answer = this.state.answer;
		const details = this.state.details;
        axios.post("api/confession", {
			answer,
			details
		  }).then(result => {
                this.toggleYes()
                this.logoTl3.reverse()
                setTimeout(() => {
                    this.logoTl4.play()
                }, 3000);
		  }).catch(e => {
			
		  });
	}

	sendReject = (e) => {
        
		e.preventDefault();
		if (!e.target.checkValidity()) {
			alert("Please input your number")
			return;
		}
		const answer = false;
		const details = this.state.details;
        axios.post("api/confession", {
			answer,
			details
		  }).then(result => {
                this.toggleNo()
                this.logoTl3.reverse()
                setTimeout(() => {
                    this.logoTl5.play()
                }, 3000);
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
        
        this.onTrackPause(mp3)
		setTimeout(() => {
			document.querySelector(".content").style.display = "none"
			document.querySelector(".videoContent").style.display = "inline"
			this.logoTl2.play()
		  }, 5000);
		
    }

	continueTwoClick = (e) => {
        this.toggleContinue()
		this.logoTl2
			.set(this.vidContent, { autoAlpha: 1 })
			.to(this.btnContinueTwo, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.btnBack, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.vid, 0.2, { opacity: 0, autoAlpha: 0 })
		this.logoTl2.play()
		setTimeout(() => {
			document.querySelector(".videoContent").style.display = "none";
            document.querySelector(".endingContent").style.display = "inline";
            this.onTrackChange(mp3)
			this.logoTl3.play()
		  }, 2500);
		
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
		this.toggleNo()
	}

	yesClick = (e) => {
		this.toggleYes()
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
							<h2 ref={ h2 => this.line1 = h2 }>I can't tell you what it really is.</h2>
                            <h2 ref={ h2 => this.line2 = h2 }>I can only try to describe this.</h2>
                            <h2 ref={ h2 => this.line3 = h2 }>Each time you work standing I notice.</h2>
                            <h2 ref={ h2 => this.line4 = h2 }>Looking at your beautiful hair gradually had me mesmerise.</h2>
                            <h2 ref={ h2 => this.line5 = h2 }>Before I know it, emotion starts to materialise.</h2>
                            <h2 ref={ h2 => this.line6 = h2 }>In my mind I immediately began to devise.</h2>
                            <h2 ref={ h2 => this.line7 = h2 }>To leverage on rap which I expertise.</h2>
                            <h2 ref={ h2 => this.line8 = h2 }>Tinkering with music composed by eminem whom i idolise.</h2>
                            <h2 ref={ h2 => this.line9 = h2 }>With his lyrics i had improvise.</h2>
                            <h2 ref={ h2 => this.line10 = h2 }>Rapping it myself would just jeopardise.</h2>
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
                <div className="endingModal" ref={ div => this.endingModal = div }>	
				<Modal
                    isOpen={this.state.modalYes}
                    toggle={this.toggleYes}>
                        <ModalHeader toggle={this.toggleYes} style={{color: "#000000"}}>Text/Call me up at 85059585</ModalHeader>
                        <ModalBody>
						    <img  src={yesImg} alt="success" />
                            <div ref={ div => this.form = div}>
                                <Form onSubmit={this.sendNumber} >
                                    <FormGroup>
                                        <Input 
                                            type="text"
                                            name="phonenumber"
                                            id="phonenumber"
                                            placeholder="Or enter your phone number"
                                            onChange={this.onDetailChange}
                                            required
                                            />
                                    </FormGroup>
                                    <FormGroup>
                                        <Button 
                                            color="dark"
                                            style={{marginTop: '2rem', backgroundColor: "#73b102"}}
                                            block>
                                            Submit
                                        </Button>
                                    </FormGroup>
							        
                                    
                                </Form>
                            </div>
                        </ModalBody>
                    </Modal>
                    <Modal
                    isOpen={this.state.modalNo}
                    toggle={this.toggleNo}>
                        <ModalHeader toggle={this.toggleNo} style={{color: "#000000"}}>May i know the reason why you rejected?</ModalHeader>
                        <ModalBody>
						    <img  src={noImg} alt="success" />
                            <div ref={ div => this.form = div}>
                                <Form onSubmit={this.sendReject} >
                                    <FormGroup>
                                        <Input 
                                            type="textarea"
                                            name="rejectDetails"
                                            id="rejectDetails"
                                            placeholder="Reason for rejection"
                                            onChange={this.onDetailChange}
                                            required
                                            />
                                    </FormGroup>
                                    <FormGroup>
                                        <Button 
                                            color="dark"
                                            style={{marginTop: '2rem', backgroundColor: "#73b102"}}
                                            block>
                                            Submit
                                        </Button>
                                    </FormGroup>
                                    
                                </Form>
                            </div>
                        </ModalBody>
                    </Modal>
                    <h2 ref={ h2 => this.thanksman = h2 }>Number received! I will ping you up in awhile</h2>
                    <h2 ref={ h2 => this.rejectedman = h2 }>Reason received... </h2>
                                    
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

export default HiddenPageV2;
