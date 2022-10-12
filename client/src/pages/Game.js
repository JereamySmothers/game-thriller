import React from "react";
import backgroundImage from "../assets/map.png";
import octocat from "../assets/Octocat_small.png";

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

let lastKey = "";

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "s":
      keys.s.pressed = true;
      lastKey = "s";
      break;
    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
    default:
      break;
  }
});
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
    default:
      break;
  }
});

const Game = ({ draw, height, width }) => {
  const canvas = React.useRef();
  React.useEffect(() => {
    const context = canvas.current.getContext("2d");
    const playerImage = new Image();
    playerImage.src = octocat;

    class Sprite {
      constructor({ position, image }) {
        this.position = position;
        this.image = image;
      }

      draw() {
        context.drawImage(this.image, this.position.x, this.position.y);
      }
    }

    const image = new Image();
    image.src = backgroundImage;
    const background = new Sprite({
      position: {
        x: -400,
        y: -500,
      },
      image: image,
    });

    function animate() {
      background.draw();
      window.requestAnimationFrame(animate);
      context.drawImage(
        playerImage,
        canvas.width / 2 - playerImage.width / 2,
        canvas.height / 2 - playerImage.height / 2
      );

      if (keys.w.pressed && lastKey === "w") {
        background.position.y += 3;
      } else if (keys.a.pressed && lastKey === "a") {
        background.position.x += 3;
      } else if (keys.s.pressed && lastKey === "s") {
        background.position.y -= 3;
      } else if (keys.d.pressed && lastKey === "d") {
        background.position.x -= 3;
      }
    }

    animate();
  }, [draw, height, width]);

  return (
    <div width="100%" height="100%">
      <div className="container">
        <canvas classname="mx-auto" ref={canvas} height={640} width={800} />
      </div>
    </div>
  );
};

export default Game;
