import React from "react";
import { useAuth } from "../context/auth";
import HiddenPage from './HiddenPage';

import ReactDOM from 'react-dom';
function Admin(props) {
  const { setAuthTokens } = useAuth();
  let container = document.createElement('div');
  document.body.appendChild(container);

  return (
    ReactDOM.render(<HiddenPage />, container)
  );
}

export default Admin;