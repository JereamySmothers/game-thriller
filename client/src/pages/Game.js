import React, { components } from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import platform from '../assets/img/grassHalf.png'
import octocat from '../assets/Octocat_small.png'
import background from '../assets/img/layer-1.png'
import stoneHalf from '../assets/img/stoneHalf.png'
import reportWebVitals from './reportWebVitals';
import { init } from "browser-sync";
console.log('platform')

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const Game = () => {
// playerImg.src = '../img/Octocat.png'

document.width = 1024;
document.height = 576;

const platformDisplay = () => (
  (this.image, this.position.x, this.position.y)
);
ReactDOM.render(platformDisplay, document.getElementById('root'));

function createImages(imgSrc) {
const image = new Image()
image.src = imgSrc
return image
}

// function init() {}

// const platformImg = createImages(platform) 
// const image = new Image()
// image.src = platform
// console.log(image)
// image

// const platforms = [];
//   { platformPosition:{x: createImages(platformImg).width -3, y: 470, image: createImages(platformImg)}, img: createImages(platformImg), attributes: {height: 20, width: 200}},
//   { platformPosition:{x: -1, y: 470}, img: createImages(platform), attributes: {height: 20, width: 200}
//   //render platform images
//   // ReactDOM.render(platforms, document.getElementById('root'));
// }  
//    ];
  //  const sceneryObject = []
    // { platformPosition:{x: 0, y: 0}, img: createImages(background)}
    
    // //render platform images
    // // ReactDOM.render(platforms, document.getElementById('root'));
    //  ];


   
    // <div className="platformLayout">
    //   {platforms.map((platformPosition) => <Platforms platformPosition={Platforms.platformPosition} img={Platforms.img} attributes={Platforms.attributes}/>)}
    //   ReactDOM.render(platformLayout, document.getElementById('root'));
    // </div>
  
  // backgroundScrollOffset = 0  
  
  // const player = () => {
  //     player.velocity.y -= 10
  //     this.speed = 10
  //     this.position = {
  //       x: 100,
  //       y: 100
  //     }
  //     this.velocity = {
  //       x: 0,
  //       y: 0
  //     }
  //     this.width = 35
  //     this.height = 35
  //     this.image = '../img/Octocat.png'
  //   }
  //   { //render
  //     (this.image, this.position.x, this.position.y)
  //   }
  //  ReactDOM.render(player, document.getElementById('root'));
  

  //   const updateplayer = (props) => {
  //   this.position.x += this.velocity.x,
  //   this.position.y += this.velocity.y
    
  //   if (this.position.y += this.height +
  //       this.velocity.y <= document.height)
  //     this.velocity.y += gravity
  //     else this.velocity.y = 0
  //     ReactDOM.render(updateplayer, document.getElementById('root'));
  //   }
  // }

  // function animation() {
  //   requestAnimationFrame(animation)
  //   sceneryObject.forEach(sceneryObject => {
  //     ReactDOM.render(sceneryObject, document.getElementById('root'));
  //   })
  //   platforms.forEach(platform => {
  //     platform.draw()
  //   })
  //   platform.draw() 
  //   player.update()
  //   //boundary
  //   if(keys.right.pressed && 
  //     player.position.x < 400) {
  //     player.velocity.x = 5
  //   } else if (keys.left.pressed&& 
  //     player.position.x > 100) {
  //     player.velocity.x = -5
  //   } else player.velocity.x = 0
  //   //scrolling back
    

  //   if (keys.right.pressed) {
  //     backgroundScrollOffset += 5
  //     platforms.forEach((platform) => {
  //       platform.position.x -= 5
  //   })
  //   sceneryObject.forEach(sceneryObject => {
  //     sceneryObject.position.x -= 3
  //   })
  //     } else if (keys.left.pressed) {
  //       backgroundScrollOffset -= 5

  //     platforms.forEach((platform) => {
  //       platform.position.x += 5
  //   })
  //   sceneryObject.forEach(sceneryObject => {
  //     sceneryObject.position.x += 3
  //   })
  //   console.log(backgroundScrollOffset)
  //   //platform collisions logic
  //   platforms.forEach((platform) => {
  //   if (
  //     player.position.y + player.height <= 
  //       platform.position.y && 
  //     player.position.y + player.height + 
  //     player.velocity.y >= 
  //       platform.position.y &&
  //     player.position.x + player.width >=
  //      platform.position.x &&
  //     player.position.x <= platform
  //     .position.x + platform.width
  //   ) {
  //     player.velocity.y = 0
  //   }
  // })
  // //win 
  // //using final platform x condition
  // if (backgroundScrollOffset > createImages(platform).width * 5  + 700) {
  //   console.log("YOU WIN!!")
  // }

  // //lose condition
  // if (player.position.y > document.height)

  // ReactDOM.render(animation, document.getElementById('root'));

  //   }
  // }

//  function init() {}

const platformImg = createImages(platform) 
const image = new Image()
image.src = platform
 console.log(image)
//  const Octocat = createImages(playerImg)

  const platforms = [
    { platformPosition:{x: createImages(platformImg).width -3, y: 470, image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
    
    { platformPosition:{x: createImages(platform).width * 2 + 110, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
    
    { platformPosition:{x: createImages(platform).width * 3 + 290, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
    
    { platformPosition:{x: createImages(platform).width * 4 + 290, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
    
    { platformPosition:{x: createImages(platform).width * 4 + 300, y: 470}},  
    
    { platformPosition:{x: createImages(platform).width * 5  + 300, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
    //render platform images
    // ReactDOM.render(platforms, document.getElementById('root'));
    
     ];
     const sceneryObject = [
      { platformPosition:{x: 0, y: 0}, img: createImages(background)}
     ];
     
      //render platform images
      // ReactDOM.render(platforms, document.getElementById('root'));
      

      <div className="platformLayout">
        {platforms.map((platformPosition) => <platforms platformPosition={platforms.platformPosition} image={platforms.image} attributes={platforms.attributes}/>)}
        
      </div>
     
  
  const keys = {
    right: {
      pressed: false
    },
    left: {
      pressed: false
    }
  }
  
  let backgroundScrollOffset = 0  
  
  const player = () => {
   
      this.position = {
        x: 100,
        y: 100
      }
      this.velocity = {
        x: 0,
        y: 0
      }
      this.width = 35
      this.height = 35
      octocat = '../assets/Octocat_small.png'
     //render
      return (
      (this.octocat, this.position.x, this.position.y, this.width, this.height)
      );
    }
  
   ReactDOM.render(player, document.getElementById('root'));
  

    const updateplayer = (props) => { 
    
    if (this.position.y += this.height +
        this.velocity.y <= document.height)
      this.velocity.y += gravity
      else this.velocity.y = 0

      return (
        this.position.x += this.velocity.x,
        this.position.y += this.velocity.y); }
        
      ReactDOM.render(updateplayer, document.getElementById('root'));
    
  
  // init()

   function animation() {
   
    requestAnimationFrame(animation)

    sceneryObject.forEach(sceneryObject => {
      ReactDOM.render(sceneryObject, document.getElementById('root'));
    })
    platforms.forEach(platform => {
      platform.draw()
    })
    platform.draw() 
    player.update()
    //boundary
    if(keys.right.pressed && 
      player.position.x < 400) {
      player.velocity.x = 5
    } else if (keys.left.pressed&& 
      player.position.x > 100) {
      player.velocity.x = -5
    } else player.velocity.x = 0
    //scrolling back
    

    if (keys.right.pressed) {
      backgroundScrollOffset += 5
      platforms.forEach((platform) => {
        platform.position.x -= 5
    })
    sceneryObject.forEach(sceneryObject => {
      sceneryObject.position.x -= 3
    })
      } else if (keys.left.pressed) {
        backgroundScrollOffset -= 5

      platforms.forEach((platform) => {
        platform.position.x += 5
    })
    sceneryObject.forEach(sceneryObject => {
      sceneryObject.position.x += 3
    })
    console.log(backgroundScrollOffset)
    //platform collisions logic
    platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= 
        platform.position.y && 
      player.position.y + player.height + 
      player.velocity.y >= 
        platform.position.y &&
      player.position.x + player.width >=
       platform.position.x &&
      player.position.x <= platform
      .position.x + platform.width
    ) {
      player.velocity.y = 0
    }
  })
  //win 
  //using final platform x condition
  if (backgroundScrollOffset > createImages(platform).width * 5  + 700) {
    console.log("YOU WIN!!")
  }

  //lose condition
  if (player.position.y > document.height)

  ReactDOM.render(animation, document.getElementById('root'));

    }
  }
} 

export default Game

//   import styled from "styled-components";
// import { useState } from 'react'
// import ArrowKeysReact from 'arrow-keys-react';
// import React, { Component } from 'react';
// import Platforms from "../client/src/pages/Game";
// const CHAR_SIZE = 100;
// const GAME_WIDTH = 500;
// const GAME_HEIGHT = 500;

//     const initialCharState = {
//         x: 50,
//         y: 30
//     }

//     const [charPosition, setCharPosition] = useState(initialCharState);


//     ArrowKeysReact.config({
//         left: () => {
//             setCharPosition({ ...charPosition, x: charPosition.x - 4 });
//         },
//         right: () => {
//             setCharPosition({ ...charPosition, x: charPosition.x + 4 })
//         },
//         up: () => {
//             setCharPosition({ ...charPosition, y: charPosition.y - 4 })
//         },
//         down: () => {
//             setCharPosition({ ...charPosition, y: charPosition.y + 4 });
//         }
//     });


//     return (
//         <div  {...ArrowKeysReact.events} tabIndex="1">
//             <GameScreen height={GAME_HEIGHT} width={GAME_WIDTH}>
//                 <Char size={CHAR_SIZE} top={charPosition.y} left={charPosition.x} />
//             </GameScreen>
//         </div>
//     )
// }



// const Char = styled.div`
//   position: center;
//   background-color: red;
//   height: ${(props) => props.size}px;
//   width: ${(props) => props.size}px;
//   top: ${(props) => props.top}px;
//   left: ${(props) => props.left}px;
//   border-radius: 50%;
// `;

// const GameScreen = styled.div`
//   height: ${(props) => props.height}px;
//   width: ${(props) => props.width}px;
//   background-color: black;
//   overflow: hidden;
// `;

// const windowHeight = Dimensions.get('window').height
// const windowWidth = Dimensions.get('window').width

// class Platforms extends components {
//   render() {}
//     constructor() {
//       this.position = {
//         x,
//         y
//       }

//       this.width = 200
//       this.height = 20
//       root.render(element);
//     }
    
    //render
  //   draw() {
  //     c.fillStyle = 'orange'
  //     c.fillRect(this.position.x, this.position.y, this.width, this.height)
  //     root.render(element);
  //   }
    

// new Platform({
    //   x: 200,
    //   y: 100,
    //   img
    // }),
    //  new Platform({ x: 500, y: 200 })
  // const image = new Image()
  // img.src = '../img/grassHalf.png

  //extra home code

//   const initialCharState = {
//     image: char,
//     x: 500,
//     y: 300,
//   };
//   const [character, updateCharacter] = useState(initialCharState);

//   const controls = (e) => {
//     console.log(e);
//     if (e.key === "d") {
//       updateCharacter({ ...character, x: character.x + 4 });
//     }
//     if (e.key === "a") {
//       updateCharacter({ ...character, x: character.x - 4 });
//     }
//   };

//   return (
//     <div
//       tabIndex={0}
//       onKeyDown={controls}
//       ref={controlsRef}
//       style={{ width: "1000px", height: "1000px" }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: `${character.y}px`,
//           left: `${character.x}px`,
//         }}
//       >
//         <img alt="character" src={character.image} />
//       </div>
//     </div>
//   );
// }