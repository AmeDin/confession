import React from "react";
import { useAuth } from "../context/auth";
import HiddenPageRachel from './HiddenPageMairah';

import ReactDOM from 'react-dom';
function HiddenPageHookRachel(props) {
  const { setAuthTokens } = useAuth();
  let container = document.createElement('div');
  document.body.appendChild(container);

  return (
    // ReactDOM.render(<HiddenPage />, container)
    ReactDOM.render(<HiddenPageRachel />, container)
  );
}

export default HiddenPageHookRachel;