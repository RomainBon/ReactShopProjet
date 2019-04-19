import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';


ReactDOM.render(
  <App  dataProps="Hello im the react !"/>,
  document.getElementById('root')
);

/* setTimeout(()=>{
ReactDOM.unmountComponentAtNode(document.getElementById('root'))},1000 );
 */

/* if(!window.cordova) {
 <App />
} else {
  document.addEventListener('deviceready', <App/>, false)
}
 */

