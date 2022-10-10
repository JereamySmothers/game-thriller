import React, { components } from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import platform from '../img/grassHalf.png'
import background from '../img/layer-1.png'
import stoneHalf from '../img/stoneHalf.png'
import reportWebVitals from './reportWebVitals';
import { init } from "browser-sync";
console.log('platform')

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const playerImg = new Image()
const grassHalf = new Image()
const stoneHalf = new Image()

// playerImg.src = '../img/Octocat.png'

body.width = 1024;
body.height = 576;

const platformDisplay = () => (
  (this.image, this.position.x, this.position.y)
);
ReactDOM.render(platformDisplay, document.getElementById('root'));

function createsceneryObject(imgSrc) {
const image = new Image()
image.src = imgSrc
return image
}

function init() {

const platformImg = createsceneryObject(platform) 
const image = new Image()
image.src = platform
console.log(image)
image

  const platforms = [
    { platformPosition:{x: createsceneryObject(platformImg).width -3, y: 470, image: createsceneryObject(platformImg)}, img: createsceneryObject(platformImg), attributes: {height: 20, width: 200}},
    { platformPosition:{x: -1, y: 470}, img: createsceneryObject(platform), attributes: {height: 20, width: 200}
    //render platform images
    // ReactDOM.render(platforms, document.getElementById('root'));
  }  
     ];
     const sceneryObject = [
      { platformPosition:{x: 0, y: 0}, img: createsceneryObject(background)}
      
      //render platform images
      // ReactDOM.render(platforms, document.getElementById('root'));
       ];


     
      <div className="platformLayout">
        {platforms.map((platformPosition) => <Platforms platformPosition={Platforms.platformPosition} img={Platforms.img} attributes={Platforms.attributes}/>)}
        ReactDOM.render(platformLayout, document.getElementById('root'));
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
  
  const Player = () => {
   
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
      this.image = '../img/Octocat.png'
    }
    { //render
      (this.image, this.position.x, this.position.y)
    }
   ReactDOM.render(Player, document.getElementById('root'));
  

    const updatePlayer = (props) => {
    this.position.x += this.velocity.x,
    this.position.y += this.velocity.y
    
    if (this.position.y += this.height +
        this.velocity.y <= body.height)
      this.velocity.y += gravity
      else this.velocity.y = 0
      ReactDOM.render(updatePlayer, document.getElementById('root'));
    }
  }

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
  //win condition
  if (backgroundScrollOffset > 2000) {
    console.log("YOU WIIIINNNNN!!")
  }

  //lose condition
  if (player.position.y > body.height)
      init()
    }
  }
  ReactDOM.render(animation, document.getElementById('root'));

  export default Platforms

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
  // img.src = '../img/grassHalf.png'