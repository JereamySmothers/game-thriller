// import grassPlatform from '../img/grassHalf.png'
const img = new Image()
{/* <img class="grassPlatform" */}
console.log('grassPlatform')
const canvas = document.querySelector('canvas')
  console.log(canvas)
  const c = canvas.getContext('2d')
  console.log(c)

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

//   var context, controller, rectangle, loop;

// controller = {

//   left:false,
//   right:false,
//   up:false,
//   keyListener:function(event) {

//     var key_state = (event.type == "keydown")?true:false;

//     switch(event.keyCode) {

//       case 37:// left key
//         controller.left = key_state;
//       break;
//       case 38:// up key
//         controller.up = key_state;
//       break;
//       case 39:// right key
//         controller.right = key_state;
//       break;

//     }

//   }

// };

// loop = function() {

//   if (controller.up && rectangle.jumping == false) {

//     rectangle.y_velocity -= 20;
//     rectangle.jumping = true;

//   }

//   if (controller.left) {

//     rectangle.x_velocity -= 0.5;

//   }

//   if (controller.right) {

//     rectangle.x_velocity += 0.5;

//   }

//   rectangle.y_velocity += 1.5;// gravity
//   rectangle.x += rectangle.x_velocity;
//   rectangle.y += rectangle.y_velocity;
//   rectangle.x_velocity *= 0.9;// friction
//   rectangle.y_velocity *= 0.9;// friction

//   // if rectangle is falling below floor line
//   if (rectangle.y > 180 - 16 - 32) {

//     rectangle.jumping = false;
//     rectangle.y = 180 - 16 - 32;
//     rectangle.y_velocity = 0;

//   }

//   // if rectangle is going off the left of the screen
//   if (rectangle.x < -32) {

//     rectangle.x = 320;

//   } else if (rectangle.x > 320) {// if rectangle goes past right boundary

//     rectangle.x = -32;

//   }

//   window.requestAnimationFrame(loop);

// };

  class Player {
    connstructor() {
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
    }

    draw() {
      c.drawImage(this.image, this.position.x, this.position.y)
    }
  

    updatePlayer = () => {
    this.position.y += this.velocity.y
    this.draw()
    if (this.position.y += this.height +
        this.velocity.y <= canvas.height)
      this.velocity.y += gravity
      else this.velocity.y = 0
  }
}


  class Platform {
    constructor() {
      this.position = {
        x,
        y
      }

      this.width = 200
      this.height = 20
    }
    draw() {
      c.fillStyle = 'orange'
      c.fillRect(this.position.x, this.position.y, this.width, this.height)
      
    }
  }
  // const image = new Image()
  img.src = "../img/grassHalf.png"
  console.log('image')

  const player = new Player() 
  player.draw()
  const platforms = [
    new Platform({
      x: 200,
      y: 100,
      img
    }),
     new Platform({ x: 500, y: 200 })
     ]

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
    console.log('go')
    player.update()
    platforms.forEach(platform => {
      platform.draw()
    })
    platform.draw() 
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
  
  
  

  window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
  }
// export default { controller, loop };
