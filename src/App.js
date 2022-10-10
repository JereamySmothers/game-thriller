import styled from "styled-components";
import { useState } from 'react'
import ArrowKeysReact from 'arrow-keys-react';
import React, { Component } from 'react';

const CHAR_SIZE = 100;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;

const App = () => {
    
    const initialCharState = {
        x: 50,
        y: 30
    }

    const [charPosition, setCharPosition] = useState(initialCharState);


    ArrowKeysReact.config({
        left: () => {
            setCharPosition({ ...charPosition, x: charPosition.x - 4 });
        },
        right: () => {
            setCharPosition({ ...charPosition, x: charPosition.x + 4 })
        },
        up: () => {
            setCharPosition({ ...charPosition, y: charPosition.y - 4 })
        },
        down: () => {
            setCharPosition({ ...charPosition, y: charPosition.y + 4 });
        }
    });


    return (
        <div  {...ArrowKeysReact.events} tabIndex="1">
            <GameScreen height={GAME_HEIGHT} width={GAME_WIDTH}>
                <Char size={CHAR_SIZE} top={charPosition.y} left={charPosition.x} />
            </GameScreen>
        </div>
    )
}

export default App;

const Char = styled.div`
  position: center;
  background-color: red;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  border-radius: 50%;
`;

const GameScreen = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: black;
  overflow: hidden;
`;