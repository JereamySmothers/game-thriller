import React, { components } from "react";
import ReactDOM from 'react-dom/client';
import App from '../App';
import platform from '../assets/img/grassHalf.png'
import octocat from '../assets/Octocat_small.png'
import background from '../assets/img/layer-1.png'
import stoneHalf from '../assets/img/stoneHalf.png'

console.log('platform')

const Game = () => {
// playerImg.src = '../img/Octocat.png'

document.width = 1024;
document.height = 576;

const platformDisplay = () => (
  (this.image, this.position.x, this.position.y)
);


function createImages(imgSrc) {
const image = new Image()
image.src = imgSrc
return image
}

// function init() {}

const platforms = [
  { platformPosition:{x: createImages(platformImg).width -3, y: 470, image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
  
  { platformPosition:{x: createImages(platform).width * 2 + 110, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
  
  { platformPosition:{x: createImages(platform).width * 3 + 290, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
  
  { platformPosition:{x: createImages(platform).width * 4 + 290, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
  
  { platformPosition:{x: createImages(platform).width * 4 + 300, y: 470}},  
  
  { platformPosition:{x: createImages(platform).width * 5  + 300, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
  //render platform images
  
  
   ];
   const sceneryObject = [
    { platformPosition:{x: 0, y: 0}, img: createImages(background)}
   ];
   
    //render platform images
   
    

    const  platformLayout = () => {
      {platforms.map((platformPosition) => <platforms platformPosition={platforms.platformPosition} image={platforms.image} attributes={platforms.attributes}/>)}
      
    }

const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}

let backgroundScrollOffset = 0  

const gravity = 0.5

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

 


  const updateplayer = (props) => { 
    return (
      this.position.x += this.velocity.x,
      this.position.y += this.velocity.y); 

  if (this.position.y += this.height +
      this.velocity.y <= document.height)
    this.velocity.y += gravity
    else this.velocity.y = 0
  }
  

// init()

const platformImg = createImages(platform) 
const image = new Image()
image.src = platform
 console.log(image)
//  const Octocat = createImages(playerImg)

 
    

document.addEventListener('keydown', ({ key }) => {
  console.log(key)
  switch (key) {
    case 65:
      console.log('left')
      keys.left.pressed = false
      break

      case 83:
        console.log('down')
        break

      case 68:
        console.log('right')
        keys.right.pressed = false
        break

        case 87:
          console.log('up')
          player.velocity.y -= 20
          break
          default:
  
}
  console.log(keys.right.pressed)
})


document.addEventListener('keyup', ({ key }) => {
  console.log(key)
  switch (key) {
    case 65:
      console.log('left')
      keys.left.pressed = false
      break

      case 83:
        console.log('down')
        break

      case 68:
        console.log('right')
        keys.right.pressed = false
        break

        case 87:
          console.log('up')
          player.velocity.y -= 20
          break
          default:
  }
  console.log(keys.right.pressed)
})

 function animation() {
 
  
  requestAnimationFrame(animation)

  sceneryObject.forEach(sceneryObject => {
    
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



}
}

} 

export default Game
//  function init() {}

// const platformImg = createImages(platform) 
// const image = new Image()
// image.src = platform
//  console.log(image)
// //  const Octocat = createImages(playerImg)

//   const platforms = [
//     { platformPosition:{x: createImages(platformImg).width -3, y: 470, image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
    
//     { platformPosition:{x: createImages(platform).width * 2 + 110, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
    
//     { platformPosition:{x: createImages(platform).width * 3 + 290, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
    
//     { platformPosition:{x: createImages(platform).width * 4 + 290, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
    
//     { platformPosition:{x: createImages(platform).width * 4 + 300, y: 470}},  
    
//     { platformPosition:{x: createImages(platform).width * 5  + 300, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
//     //render platform images

    
//      ];
//      const sceneryObject = [
//       { platformPosition:{x: 0, y: 0}, img: createImages(background)}
//      ];
     
//       //render platform images
//     
      

//       const  platformLayout = () => {
//         {platforms.map((platformPosition) => <platforms platformPosition={platforms.platformPosition} image={platforms.image} attributes={platforms.attributes}/>)}
        
//       }

  
  // const keys = {
  //   right: {
  //     pressed: false
  //   },
  //   left: {
  //     pressed: false
  //   }
  // }
  
  // let backgroundScrollOffset = 0  
  
  // const gravity = 0.5

  // const player = () => {
   
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
  //     octocat = '../assets/Octocat_small.png'
  //    //render
  //     return (
  //     (this.octocat, this.position.x, this.position.y, this.width, this.height)
  //     );
  //   }
  
  
  

  //   const updateplayer = (props) => { 
    
  //   if (this.position.y += this.height +
  //       this.velocity.y <= document.height)
  //     this.velocity.y += gravity
  //     else this.velocity.y = 0

  //     return (
  //       this.position.x += this.velocity.x,
  //       this.position.y += this.velocity.y); }
        
 
    
  
  // // init()

  