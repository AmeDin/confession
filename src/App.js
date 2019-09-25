import React, {useState} from 'react';
import TimelineSequence from './components/TimelineSequence';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import PrivateRoute from './PrivateRoute';
import HiddenPageHook from './components/HiddenPageHook';
import HiddenPage from './components/HiddenPage';

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
          <Route exact path="/" component={TimelineSequence} />
          <Route exact path="/hide" component={HiddenPage} />
          <PrivateRoute path="/hidden" component={HiddenPageHook} />
      </Router>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
