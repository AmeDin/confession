import React from "react";
import { useAuth } from "../context/auth";
import HiddenPageV3 from './HiddenPageV3';

import ReactDOM from 'react-dom';
function AdminV3(props) {
  const { setAuthTokens } = useAuth();
  let container = document.createElement('div');
  document.body.appendChild(container);

  return (
    // ReactDOM.render(<HiddenPage />, container)
    ReactDOM.render(<HiddenPageV3 />, container)
  );
}

export default AdminV3;