import React, {useState} from 'react';
import TimelineSequence from './components/TimelineSequence';
import TimelineSequenceV3 from './components/V3';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import PrivateRoute from './PrivateRoute';
import HiddenPageHook from './components/HiddenPageHook';
import HiddenPageHookV3 from './components/HiddenPageHookV3';
// import HiddenPage from './components/HiddenPage';
// import HiddenPageV2 from './components/HiddenPageV2';
import HiddenPageV3 from './components/HiddenPageV3';

function App(props) {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <div className="App"> 
    
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
          <Route exact path="/v3" component={TimelineSequence} />
          {/* <Route exact path="/hide" component={HiddenPage} /> */}
          {/* <Route exact path="/hide" component={HiddenPageV2} /> */}
          <Route exact path="/" component={TimelineSequenceV3} />
          <PrivateRoute path="/hidden" component={HiddenPageHook} />
          <PrivateRoute path="/hiddenV3" component={HiddenPageHookV3} />
      </Router>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
