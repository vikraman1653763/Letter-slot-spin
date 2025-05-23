// SlotNameReel.jsx
import { useSpring, animated } from '@react-spring/web';
import "../style/Name.css";

const LETTERS = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const LETTER_HEIGHT = 40;

export default function SlotNameReel({ target }) {
  const index = target.toUpperCase().charCodeAt(0) - 65;
  const RANDOM_START = Math.floor(Math.random() * 20);
  const styles = useSpring({
  from: { transform: `translateY(-${RANDOM_START * LETTER_HEIGHT}px)` },
  to: { transform: `translateY(-${index * LETTER_HEIGHT}px)` },
  config: { tension: 100, friction: 25 }
});

  return (
    <div className="slot-name-container ">
      <animated.div style={styles} className="slot-name-strip">
        {LETTERS.map((char) => (
          <div
            key={char}
            className="slot-name-letter "
          >
            {char}
          </div>
        ))}
      </animated.div>
    </div>
  );
}

 
