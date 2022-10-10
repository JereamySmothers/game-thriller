import { useEffect, useRef, useState } from "react";
import char from "../assets/Octocat_small.png";

function Home() {
  const controlsRef = useRef();

  useEffect(() => {
    controlsRef.current.focus();
    console.log(controlsRef.current);
  }, []);

  const initialCharState = {
    image: char,
    x: 500,
    y: 300,
  };
  const [character, updateCharacter] = useState(initialCharState);

  const controls = (e) => {
    console.log(e);
    if (e.key === "d") {
      updateCharacter({ ...character, x: character.x + 4 });
    }
    if (e.key === "a") {
      updateCharacter({ ...character, x: character.x - 4 });
    }
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={controls}
      ref={controlsRef}
      style={{ width: "1000px", height: "1000px" }}
    >
      <div
        style={{
          position: "absolute",
          top: `${character.y}px`,
          left: `${character.x}px`,
        }}
      >
        <img alt="character" src={character.image} />
      </div>
    </div>
  );
}

export default Home;

// import { useState } from "react";
// import apple from './assets/apple.png';
// import glowingApple from './assets/glowingapple.png';
// import char from './assets/characterFaceRight.png';
// import { motion } from "framer-motion";

// export const App = () => {
//     const [charLocation, setCharLocation] = useState({ top: 50, left: 70 });
//     const [clicked, setClicked] = useState(false);
//     const [destination, setDestination] = useState('');

//     // const variants = {
//     //     move: {x: destination.x, y: destination.y},
//     //     still: '',
//     }

//     function useKeyPress(targetKey) {
//       const [keyPressed, setKeyPressed] = useState<boolean>(false);
//       //if pressed key is target set true
//       function rightHandler({ key }) {
//         if (key === targetKey) {
//           setKeyPressed(true);
//         }
//       }
//       //if released key is target key set false
//       const leftHandler = ({ key }) => {
//         if (key === targetKey) {
//           setKeyPressed(false);
//       }
//     }
//     //if released key is target key set false
//     const upHandler = ({ key }) => {
//       if (key === targetKey) {
//         setKeyPressed(false);
//     }
//     //add event listeners
//     window.addEventListener(() => {
//       window.addEventListener("keyright", rightHandler);
//       window.addEventListener("keyleft", leftHandler);
//       window.addEventListener("keyup", upHandler);
//       return () => {
//         window.removeEventListener("keyright", rightHandler);
//         window.removeEventListener("keyleft", leftHandler);
//         window.removeEventListener("keyup", upHandler);
//       };
//     }, []); //empty array ensures that effect is only run on mount and unmount
//     return keyPressed;
//   }

//    const handleCharMove = async (x) => {
//         setDestination({x})
//         useKeyPress(true);
//     }

//   const Character = ({ location }) => {
//     const [x, setX] = useState(0);
//       return (
//           <div>
//              <motion.div
//             className="char"
//             animate={{ x }}
//             transition={{ type: "spring" }}
//             >
//               <img alt="char" style={{ position: 'absolute', height: '400px', width: '120px', top: `${location.top}px`, left: `${location.left}px` }} src={char} />
//               </motion.div>
//               <button rightHandler={ () => setX(300)} className="moveRight">moving</button>
//           </div>
//       )
//   }

//     return (
//         <motion.div onAnimationEnd={() => {setClicked(false); setCharLocation({top: destination.y, left: destination.x})}} animate={clicked ? "move" : "still"} variants={variants} transition={{ duration: 3 }} onClick={(e) => handleCharMove(e.pageY, e.pageX)} style={{ height: '100vh', width: '100vw' }}>
//             <InteractObject image={apple} glowyImage={glowingApple} location={{ top: '500px', left: '500px' }} />
//             <Character location={charLocation} />
//         </motion.div>
//     )
// }

// const InteractObject = ({ image, glowyImage, location }) => {
//     const [isHovered, setHovered] = useState(false);

//     return (

//         <div>
//             <img onMouseLeave={() => setHovered(false)}
//                 onMouseOver={() => setHovered(true)}
//                 alt="interact" src={isHovered ? glowyImage : image}
//                 style={{ border: isHovered ? '2px solid gold' : '', height: '95px', width: '95px', position: 'absolute', top: location.top, left: location.left }}>
//             </img>
//         </div>
//     )
// }

// useKeyPress();
