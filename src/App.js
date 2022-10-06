// import logo from './logo.svg';
import React, { useRef, useState, useEffect } from 'react';

const Canvas = props => { 
const canvasRef = canvasRef.current
const context = canvas.getContext('2d')
return <canvas ref={canvasRef} {...props} />
}
export Canvas
// import { playerControls } from './hooks';
import './App.css';
 
const App = () => {
  var context, controller, rectangle, loop;
context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 190;
context.canvas.width = 330;

testSquare = {
  height: 35,
  width: 35,
  x: 160, 
  x-velocity: 0,
  y: 0,
  y_velocity: 0

};

controls = {
  right:false,
  up:false,
  left:false,
  keyListener:function(event) {
    var key_position = (event.type === "keydown")?true:false;
    switch(event.keyCode) {
      case 65: //a key
      controls.left = key_position;
      break;
      case 68: //d key
      controls.right = key_position;
      break;
      case 32: //space key
      controls.up = key_position;
      break;
      default: ;
    }
  }
}

  return (
 
   <div></div>
      
   
  )
}

export default App;

  // const ImportPlayerControls = () => {
  //   const { data } = playerControls();
  //   return <p>{data && data.text}</p>
  // }
//   <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>