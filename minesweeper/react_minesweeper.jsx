import React from 'react';
import ReactDOM from 'react-dom';

import Game from "./components/game.jsx";

document.addEventListener('DOMContentLoaded', () => {
  // grab root html element
  const root = document.getElementById('root');
  // replace root with React app via React DOM
  ReactDOM.render(<Game />, root);
});