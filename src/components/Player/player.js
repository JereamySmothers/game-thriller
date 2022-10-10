import React, { useState } from 'react'

export default function player() {

    const initialCharPosition = {
        x:500,
        y:500
    }

    const [charPosition, setCharPosition] = useState(initialCharPosition);
    const [keysPressed, setKeyPressed] = useState({});

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
    <div>player</div>
  )
}
