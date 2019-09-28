import React from "react";
import { useAuth } from "../context/auth";
// import HiddenPage from './HiddenPage';
import HiddenPageV2 from './HiddenPageV2';

import ReactDOM from 'react-dom';
function Admin(props) {
  const { setAuthTokens } = useAuth();
  let container = document.createElement('div');
  document.body.appendChild(container);

  return (
    // ReactDOM.render(<HiddenPage />, container)
    ReactDOM.render(<HiddenPageV2 />, container)
  );
}

export default Admin;