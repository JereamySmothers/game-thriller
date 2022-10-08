import styled from "styled-components";
import { useEffect, useState } from "react";

const CHAR_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 6;
const JUMP_HEIGHT = 100;
const OBSTACLE_WIDTH = 40;
const OBSTACLE_GAP = 200;

function App() {
  const [charPosition, setCharPosition] = useState(250);
  const [gameStart, setGameStart] = useState(false);
  const [obstacleHeight, setObstacleHeight] = useState(200);
  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH, OBSTACLE_WIDTH);
  const [score, setScore] = useState(0);

  const bottomObstacleHeight = GAME_HEIGHT - OBSTACLE_GAP - obstacleHeight;

  useEffect(() => {
    let timeId;
    if (gameStart && charPosition < GAME_HEIGHT - CHAR_SIZE) {
      timeId = setInterval(() => {
        setCharPosition((charPosition) => charPosition + GRAVITY);
      }, 24);
    }

    return () => {
      clearInterval(timeId);
    };
  }, [charPosition, gameStart]);

  useEffect(() => {
    let obstacleId;
    if (gameStart && obstacleLeft >= -OBSTACLE_WIDTH) {
      obstacleId = setInterval(() => {
        setObstacleLeft((obstacleLeft) => obstacleLeft - 2);
      }, 24);

      return () => {
        clearInterval(obstacleId);
      };
    } else {
      setObstacleLeft(GAME_WIDTH - OBSTACLE_WIDTH);
      setObstacleHeight(
        Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP))
      );
      setScore((score) => score + 1);
    }
  }, [gameStart, obstacleLeft]);

  useEffect(() => {
    // const hasCollidedWithTopObsticle = charPosition >= 0 && charPosition < obstacleHeight;
    const hasCollidedWithBottomObsticle =
      charPosition <= 500 && charPosition >= 500 - bottomObstacleHeight;

    if (
      obstacleLeft >= 0 &&
      obstacleLeft <= OBSTACLE_WIDTH &&
      hasCollidedWithBottomObsticle
    ) {
      setGameStart(false);
    }
  }, [charPosition, obstacleHeight, bottomObstacleHeight, obstacleLeft]);

  const handleClick = () => {
    let newCharPosition = charPosition - JUMP_HEIGHT;
    if (!gameStart) {
      setGameStart(true);
    } else if (newCharPosition < 0) {
      setCharPosition(0);
    } else {
      setCharPosition(newCharPosition);
    }
  };

  return (
    <Div onClick={handleClick}>
      <GameScreen height={GAME_HEIGHT} width={GAME_WIDTH}>
        <Obstacle
          top={0}
          width={OBSTACLE_WIDTH}
          height={obstacleHeight}
          left={obstacleLeft}
        />

        <Obstacle
          top={GAME_HEIGHT - (obstacleHeight + bottomObstacleHeight)}
          width={OBSTACLE_WIDTH}
          height={bottomObstacleHeight}
          left={obstacleLeft}
        />

        <Char size={CHAR_SIZE} top={charPosition} />
      </GameScreen>
      <span> {score}</span>
    </Div>
  );
}

export default App;

const Char = styled.div`
  position: absolute;
  background-color: red;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  & span {
    color: white;
    font-size: 24px;
    position: absolute;
  }
`;

const GameScreen = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: black;
  overflow: hidden;
`;

const Obstacle = styled.div`
  position: relative;
  top: ${(props) => props.top}px;
  background-color: pink;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
`;
