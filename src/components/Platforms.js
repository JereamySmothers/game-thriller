import React, { components } from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import platform from '../img/grassHalf.png'
import background from '../img/layer-1.png'
import stoneHalf from '../img/stoneHalf.png'
import reportWebVitals from './reportWebVitals';
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

function createScenery(imgSrc) {
const image = new Image()
image.src = platform
return image
}

const platformImg = createScenery(platform) 
const image = new Image()
image.src = platform
console.log(image)
image

  const platforms = [
    { platformPosition:{x: platformImg.width -3, y: 470, image: createScenery(platformImg)}, img: createScenery(platformImg), attributes: {height: 20, width: 200}},
    { platformPosition:{x: 500, y: 200}, img: createScenery(platform), attributes: {height: 20, width: 200}
    //render platform images
    // ReactDOM.render(platforms, document.getElementById('root'));
  }  
     ];
     const scenery = [
      { platformPosition:{x: 0, y: 0}, img: '', attributes: {height: 20, width: 200}},
      { platformPosition:{x: 500, y: 200}, img: '', attributes: {height: 20, width: 200}
      //render platform images
      // ReactDOM.render(platforms, document.getElementById('root'));
    }  
       ];




     return (
      <div className="platformLayout">
        {platforms.map((platformPosition) => <Platforms platformPosition={Platforms.platformPosition} img={Platforms.img} attributes={Platforms.attributes}/>)}
      </div>
     )
  
  const keys = {
    right: {
      pressed: false
    },
    left: {
      pressed: false
    }
  }

  let backgroundScrollOffset = 0

  function animation() {
    requestAnimationFrame(animation)
    scenery.forEach(scenery => {
      ReactDOM.render(scenery, document.getElementById('root'));
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
      } else if (keys.left.pressed) {
        backgroundScrollOffset -= 5

      platforms.forEach((platform) => {
        platform.position.x += 5
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
  if (backgroundScrollOffset > 2000) {
    console.log("YOU WIIIINNNNN!!")
  }
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