import { useState } from "react";
import hdtv from './hdtv.png';
import tv from './pngwing.com.png';
import char from './paperChar.png';
import { motion } from "framer-motion";

export const App = () => {
    const [charLocation, setCharLocation] = useState({ top: 50, left: 70 });
    const [clicked, setClicked] = useState(false);
    const [destination, setDestination] = useState('');

    const variants = {
        move: {x: destination.x, y: destination.y},
        still: '',
    }
    const handleCharMove = async (y, x) => {
        setDestination({x, y})
        setClicked(true);

    }
    return (
        <motion.div onAnimationEnd={() => {setClicked(false); setCharLocation({top: destination.y, left: destination.x})}} animate={clicked ? "move" : "still"} variants={variants} transition={{ duration: 3 }} onClick={(e) => handleCharMove(e.pageY, e.pageX)} style={{ height: '2000px', width: '2000px' }}>
            <InteractObject image={tv} glowyImage={hdtv} location={{ top: '500px', left: '500px' }} />
            <Character location={charLocation} />
        </motion.div>
    )
}

const InteractObject = ({ image, glowyImage, location }) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div>
            <img onMouseLeave={() => setHovered(false)}
                onMouseOver={() => setHovered(true)}
                alt="interact" src={isHovered ? glowyImage : image}
                style={{ border: isHovered ? '2px solid gold' : '', height: '50px', width: '50px', position: 'absolute', top: location.top, left: location.left }}>
            </img>
        </div>
    )
}

const Character = ({ location }) => {

    return (
        <div>
            <img alt="char" style={{ position: 'absolute', height: '100px', width: '50px', top: `${location.top}px`, left: `${location.left}px` }} src={char} />
        </div>
    )
}