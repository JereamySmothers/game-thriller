// import './App.css';
// import useCanvas from './useCanvas'
// import React, { useRef, useState, useEffect } from 'react';

// const App = () => {
// const Canvas = props => { 
  
//     const canvasRef = useRef(null)
//     const draw = ctx => {
//       ctx.clearReact(canvas.width, ctx.canvas.height)
//       ctx.fillStyle = "#FFD580"
//       ctx.beginPath()
//       ctx.rect(testSquare.x, testSquare.y, testSquare.width, testSquare.height);
//       ctx.lineWidth = 5;
//       ctx.lineTo
//       ctx.fillRect(3, 3, 100, 100)
//       ctx.lineTo(330, 170);
//       ctx.stroke();
//       ctx.strokeStyle = 'pink';
//     }
//     useEffect(() => {
//       const canvas = canvasRef.current
//       const context = canvas.getContext('2d')
//       const canvasRef = useCanvas(draw)
//       const render = () => {
//         draw(context)
//       }
//       render()
//     }, [draw])
  
//     return <Canvas draw={draw} />
//   }

//   var context, controls, testSquare, loop;
// context = document.querySelector("canvas").getContext("2d");

// context.canvas.height = 190;
// context.canvas.width = 330;

// testSquare = {
//   height: 35,
//   width: 35,
//   x: 160, 
//   x_velocity: 0,
//   y: 0,
//   y_velocity: 0

// };

// controls = {
//   right:false,
//   up:false,
//   left:false,
//   keyListener:function(event) {
//     var key_position = (event.type === "keydown")?true:false;
//     switch(event.keyCode) {
//       case 65: //a key
//       controls.left = key_position;
//       break;
//       case 68: //d key
//       controls.right = key_position;
//       break;
//       case 32: //space key
//       controls.up = key_position;
//       break;
//       default: ;
//     }
//   }
// };

// loop = function() {
//   if(controls.left) {
//     testSquare.y_velocity -= 1;
//     testSquare.jumping = true;
//   }
//   if(controls.right && testSquare.jumping === false) {
//     testSquare.y_velocity += 1;
//     testSquare.jumping = true;
//   }
//   if(controls.up && testSquare.jumping === false) {
//     testSquare.y_velocity -= 30;
//     testSquare.jumping = true;
//   }
//   testSquare.y_velocity += 1.3; //gravity control
//   testSquare.x += testSquare.x_velocity;
//   testSquare.y_velocity *= 0.8; //friction
//   testSquare.x_velocity *= 0.8; //friction

//   window.requestAnimationFrame(loop);
// }

//  window.addEventListener("keydown", controls.keyListener)
//  window.addEventListener("keyup", controls.keyListener);

//  window.requestAnimationFrame(loop);

// return (
 
//    <div></div>
      
   
//   )




// export default App;