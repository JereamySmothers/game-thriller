import { platforms } from "os";
import { useEffect, useRef, useState } from "react";
import { createContext } from "vm";
import playerImg from './img/Octocat.png';



const App = () => {
  // const canvasRef = useRef();
  // useEffect(() => {
  //   const canvasWidth = window.innerWidth;
  //   const canvasHeight = window.innerHeight;
  //   const engine = Engine.create();
  //   const ctx = canvasRef.current.getContext("2d");
  //   const render = Render.create({
  //     canvas: canvasRef.current,
  //     engine,
  //     options {
  //       width: canvasWidth,
  //       height: canvasHeight,
        
  //     }
  //   });

  const canvas = document.querySelector('canvas')
  console.log(canvas)
  const c = canvas.getContext('2d')
  console.log(c)

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Player {
    connstructor() {
      this.position = {
        x: 100,
        y: 100
      }
      this.velocity = {
        x: 0,
        y: 1
      }
      this.width = 100
      this.height = 100
    }

    draw() {
      c.fillStyle = 'red'
      c.fileRect(this.position.x, this.position.y, this.width, this.height)
    }
  }

  const updatePlayer = () => {
    this.position.y += this.velocity.y
    this.draw()
  }

  const player = new Player() 
  player.draw()
  const platforms = new Platforms()


  function animation() {
    requestAnimationFrame(animation)
    console.log('go')
    player.update()
    platforms.draw() 

    if(keys.right.pressed) {
      player.velocity.x = 5
    } else if (keys.left.pressed) {
      player.velocity.x = -5
    } else player.velocity.x = 0
    //platforms collisions logic
    if (
      player.position.y + player.height <= 
        platforms.position.y && 
      player.position.y + player.height + 
      player.velocity.y >= 
        platforms.position.y &&
      player.position.x + player.width >=
       platforms.position.x &&
      player.position.x <= platforms.
      position.x + platforms.width
    ) {
      player.velocity.y = 0
    }
    
    }
  }
  
  class Platforms {
    constructor() {
      this.position = {
        x:250,
        y:120
      }

      this.width = 200
      this.height = 20
    }
    draw() {
      c.fillStyle = 'orange'
      c.fillRect(this.position.x, this.position.y, this.width, this.height)
      
    }
  }

  return (
    <div> 
      {/* style={{position:`${Player.y}300px`, :}}> */}
     


    </div>
  )
}

export default App

    // const controlsRef = useRef();

    // useEffect(() => {
    //     controlsRef.current.focus();
    //     console.log(controlsRef.current);
    // }, []);

    // const initialCharState = {
    //     image: char,
    //     x: 500,
    //     y: 300
    // }
    // const [character, updateCharacter] = useState(initialCharState);
    // const [keysPressed, setKeysPressed] = useState({});

    // const controls = (e) => {

    //     setKeysPressed({...keysPressed, [e.key] : true});

    //     if(keysPressed['d']) {
    //         updateCharacter({...character, x: character.x + 4})
    //     }
    //     if(keysPressed['a']) {
    //         updateCharacter({...character, x: character.x - 4})
    //     }
    //     if(keysPressed['j'] && keysPressed['d']) {
    //         updateCharacter({...character, x: character.x + 4});
    //         updateCharacter({...character, x: character.x + 4, y: character.y - 10});
            
    //     }
    // }


        // <div tabIndex={0} onKeyUp={(e) => setKeysPressed({...keysPressed, [e.key] : false})} onKeyDown={controls} ref={controlsRef} style={{width: '1000px', height: '1000px'}}  >
        //     <div  style={{ position: "absolute", top: `${character.y}px`, left: `${character.x}px` }}>
        //         <img alt="character" src={character.image} />
        //     </div>
        // </div>
