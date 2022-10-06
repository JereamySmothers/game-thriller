import { useEffect, useRef, useState } from "react";
import char from './';

export const App = () => {
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
    const [keysPressed, setKeysPressed] = useState({});

    const controls = (e) => {

        setKeysPressed({...keysPressed, [e.key] : true});

        if(keysPressed['d']) {
            updateCharacter({...character, x: character.x + 4})
        }
        if(keysPressed['a']) {
            updateCharacter({...character, x: character.x - 4})
        }
        if(keysPressed['j'] && keysPressed['d']) {
            updateCharacter({...character, x: character.x + 4});
            updateCharacter({...character, x: character.x + 4, y: character.y - 10});
            
        }
    }

    return (
        <div tabIndex={0} onKeyUp={(e) => setKeysPressed({...keysPressed, [e.key] : false})} onKeyDown={controls} ref={controlsRef} style={{width: '1000px', height: '1000px'}}  >
            <div  style={{ position: "absolute", top: `${character.y}px`, left: `${character.x}px` }}>
                <img alt="character" src={character.image} />
            </div>
        </div>
    )
}

export default App