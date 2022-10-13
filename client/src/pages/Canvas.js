import React, { components, useEffect, useRef } from "react";
import ReactDOM from 'react-dom/client';
import App from '../App';
import platform from '../assets/img/grassHalf.png'
// import octocat from '../assets/Octocat_small.png'
import background from '../assets/img/layer-1.png'
import stonePlatform from '../assets/img/stoneHalf.png'
export const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')
console.log(context)
console.log(canvas)

canvas.width = 1024;
canvas.height = 576;


const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }
    
    context.fillStyle = 'blue';
    context.fillRect(0, 0, 100, 100);
    


  }, [])

  return <canvas ref={canvasRef}/>
// playerImg.src = '../img/Octocat.png'

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
  
  const gravity = 1.5
  
  class Player {
    constructor() {
      this.shooting = false
      this.speed = 10
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
      // octocat = '../assets/Octocat_small.png'
    }
  
      draw() {
        context.fillStyle = '#FFA500'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
  
      update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y 
      
    if (this.position.y + this.height +
        this.velocity.y <= canvas.height)
      this.velocity.y += gravity
    }
    }
  

  function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    var octocat = new Image();
    octocat.src = '../assets/Octocat_small.png'
    octocat.onload = function() {
      context.drawImage(octocat, -3, 470, this.width, this.height)
    var background = new Image()
    background.src = '../assets/img/layer-1.png'
    background.onload = function() {
      context.drawImage(background, 0, 0, this.width, this.height)
    }
    return image
    }
  }
  // init()
  class Platform {
    constructor({ x, y, image }) {
      this.position = {
        x,
        y
      }
  
      this.image = image
      this.width = image.width
      this.height = image.height
    }
  
    draw() {
      context.drawImage(this.image, this.position.x, this.position.y)
  
    }
  
    update() {
      this.draw()
      this.position.x += this.velocity.x
    }
  }

  class SceneryObject {
    constructor({ x, y, image }) {
      this.position = {
        x,
        y
      }
      this.velocity = {
        x: 0
      }
      this.image = image
      this.width = 1024
      this.height = image.height
    }
  
    draw() {
      context.drawImage(this.image, this.position.x, this.position.y)
    }
  
    update() {
      this.draw()
      this.position.x += this.velocity.x
    }
  }

  // const createImage = (imgSrc) => {
  // const image = new Image()
  // image.src = imgSrc
  //  return image
  // }
  const backgroundImg = createImage(background)
  const stonePlatformImg = createImage(stonePlatform)
  const platformImg = createImage(platform)
  
  const player = new Player()
  
  const platforms = [
    new Platform({
      x: platformImg.width -38,
      y: 510,
      image: platformImg
    }),
    //COMPARE TO placemnet with mine
    new Platform({
      x: platformImg.width * 2 + 110,
      y: 470,
      image: platformImg
    }),
    new Platform({
      x: platformImg.width * 3 + 290,
      y: 470,
      image: platformImg
    }),
    new Platform({
      x: platformImg.width * 4 + 290,
      y: 470,
      image: platformImg
    }),
    new Platform({
      x: platformImg.width * 4 + 300 -3,
      y: 470,
      image: platformImg
    }),
    new Platform({
      x: platformImg.width * 5 + 700 -3,
      y: 470,
      image: createImage(stonePlatformImg)
    }),
  ]

  const sceneryObjects = [
    new SceneryObject({
      x: -1,
      y: -1,
      
      image: backgroundImg
    }),
  ]
  //  const Octocat = createImages(playerImg)

// function init() {}

// const platforms = [
//   { platformPosition:{
//     x: createImages(platformImg).width -3, y: 470, image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
  
//   { platformPosition:{x: createImages(platform).width * 2 + 110, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
  
//   { platformPosition:{x: createImages(platform).width * 3 + 290, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
  
//   { platformPosition:{x: createImages(platform).width * 4 + 290, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
  
//   { platformPosition:{x: createImages(platform).width * 4 + 300, y: 470}},  
  
//   { platformPosition:{x: createImages(platform).width * 5  + 300, y: 470,image: createImages(platformImg)}, attributes: {height: 20, width: 200}},
//   //render platform images
//    ];


//    const sceneryObjects = [
//     { platformPosition:{x: 0, y: 0}, img: createImages(background)}
//    ];
   
//     //render platform images
   
//     function platformLayout() {
//       return (
//         <div className="platformLayout">
//       {platforms.map((platformPosition) => <platforms platformPosition={platforms.platformPosition} image={platforms.image} attributes={platforms.attributes}/>)}
//       </div>
//       );
//     }



 function animation() {
  // <div className="Animation">
  requestAnimationFrame(animation)
  context.fillStyle = "white"
  context.fillRect(0, 0, canvas.width, canvas.height)

  sceneryObjects.forEach(sceneryObject => {
    sceneryObject.draw()
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
  sceneryObjects.forEach(sceneryObject => {
    sceneryObject.position.x -= 3
  })
    } else if (keys.left.pressed) {
      backgroundScrollOffset -= 5
    }
    platforms.forEach((platform) => {
      platform.position.x += 5
  })
  sceneryObjects.forEach(sceneryObject => {
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
 }
//win condition

//using final platform x condition
if (backgroundScrollOffset > createImage(platform).width * 5  + 700) {
  console.log("YOU WIN!!")
}
  //lose condition
if (player.position.y > canvas.height) {
  console.log('you lose!')
}
animation();

canvas.addEventListener('keydown', ({ key }) => {
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


canvas.addEventListener('keyup', ({ key }) => {
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

}

export default Canvas;

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
//      const sceneryObjects = [
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
  //       this.velocity.y <= canvas.height)
  //     this.velocity.y += gravity
  //     else this.velocity.y = 0

  //     return (
  //       this.position.x += this.velocity.x,
  //       this.position.y += this.velocity.y); }
        
 
    
  
  // // init()

  