import { useEffect, useRef, useState } from "react";
import char from "../assets/Octocat_small.png";

function Home() {
  const controlsRef = useRef();

  useEffect(() => {
    controlsRef.current.focus();
  }, []);

  const initialCharState = {
    image: char,
    x: 300,
    y: 927,
  };
  const [character, updateCharacter] = useState(initialCharState);

  const controls = (e) => {
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
      style={{ width: "100%", height: "100%" }}
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