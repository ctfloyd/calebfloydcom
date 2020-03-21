import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// ScreenOrientation.lock("portrait");
// screen.orientation.lock()

let orientationInterval;

function checkOrientation() {
    let orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
    if(!orientation.includes("portrait") && screen.width < 1024) {
        alert("This website doesn't support landscape orientation!\n\nWhile you are free to browse in whatever configuration you prefer, please note that the website may not display as intended.")
        clearInterval(orientationInterval);
    }
}

orientationInterval = setInterval(checkOrientation, 250);



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
