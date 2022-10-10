import React, { components } from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

body.width = window.innerWidth;
body.height = window.innerHeight;
// const windowHeight = Dimensions.get('window').height
// const windowWidth = Dimensions.get('window').width

class Platforms extends components {
  render() {}
    constructor() {
      this.position = {
        x,
        y
      }

      this.width = 200
      this.height = 20
      root.render(element);
    }
    
    //render
    draw() {
      c.fillStyle = 'orange'
      c.fillRect(this.position.x, this.position.y, this.width, this.height)
      root.render(element);
    }
    
  }
  
  // const image = new Image()
  img.src = '../img/grassHalf.png'
  console.log('image')

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
    }

export default Platforms