

import { useEffect, useRef, useState } from "react";
import char from './mario.png';

const App = () => {
    const controlsRef = useRef();

    useEffect(() => {
        controlsRef.current.focus();
        console.log(controlsRef.current);
    }, []);

    const initialCharState = {
        image: char,
        x: 500,
        y: 300
    }
    const [character, updateCharacter] = useState(initialCharState);

    const controls = (e) => {
        console.log(e);
        if(e.key === 'd') {
            updateCharacter({...character, x: character.x + 4})
        }
        if(e.key === 'a') {
          updateCharacter({...character, x:character.x - 4})
        }

    }

    return (
        <div tabIndex={0} onKeyDown={controls} ref={controlsRef} style={{width: '1000px', height: '1000px'}}  >
            <div  style={{ position: "absolute", top: `${character.y}px`, left: `${character.x}px` }}>
                <img alt="character" src={character.image} />
            </div>
        </div>
    )
}

export default App;