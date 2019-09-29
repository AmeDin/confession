import React, { useState } from "react";
import { withRouter } from 'react-router';
import { useAuth } from "../context/auth";
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios';

function AccessV3(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [code, setPasscode] = useState("");
  const { setAuthTokens } = useAuth();
  console.log(props)


  function validatePasscode(e)  {
    e.preventDefault();
    axios.post("api/passcode", {
        code
      }).then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
          props.history.push("/hiddenv3")
        //   return <Redirect to={referer} />;
        } else {
          setIsError(true);
        }
      }).catch(e => {
        setIsError(true);
      });
  
    
    } 


  return (
    <Form onSubmit={validatePasscode}>
        <FormGroup>
            <Label for="code">Passcode</Label>
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
  );
}

export default withRouter(AccessV3);