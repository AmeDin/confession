import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router';
import { useAuth } from "../context/auth";
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios';
import { TimelineLite, Linear } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';
import lock from '../assets/lock.png'
import unlock from '../assets/unlock.png'

const C = CSSPlugin;

const iconsArray = [
	{ src: lock, width: "65", height: "59" },
	{ src: unlock, width: "65", height: "59" },
];


var tl = new TimelineLite({ paused:true });
var form = null;
var icons = [];

function Access(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [code, setPasscode] = useState("");
  const { setAuthTokens } = useAuth();
  console.log(props)

  useEffect(() => {
    tl
    .set(form, { autoAlpha: 1 })// show content div
    .from(form, 16, { top: 100, autoAlpha: 0 })
    .staggerFrom(icons, 0.9, { scale: 0, autoAlpha: 0 }, 0.1); //animate all icons with 0.1 second stagger
    tl.play()
  }, []);
 
  function animateUnlock() {
    tl
    .to(icons[0], 1, { top: 5, autoAlpha: 1 })
    .to(icons[0], 1, { left: 60, autoAlpha: 1 })
  }


  function validatePasscode(e)  {
    e.preventDefault();
    axios.post("api/passcode", {
        code
      }).then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
          animateUnlock()
          setTimeout(() => {
            props.history.push("/hiddenRachel")
           }, 2000);
        //   return <Redirect to={referer} />;
        } else {
          setIsError(true);
        }
      }).catch(e => {
        setIsError(true);
      });
  
    
    } 


  return (
    <div ref={ div => form = div}>
      <Form onSubmit={validatePasscode}>
          <FormGroup>
              <Input 
                  type="text"
                  name="code"
                  id="code"
                  placeholder="Passcode"
                  onChange={e => {
                      setPasscode(e.target.value);
                      }}
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
      <div className="nav" style={{float: 'right'}}>
          { iconsArray.map( (icon, index) => {
            const { src, width, height } = icon;
            return <img
              key={`icon-${index}`}
              src={src} width={width} height={height}
              ref={ img => icons[index] = img }
            />;
          })}
        </div>
    </div>
  );
}

export default withRouter(Access);