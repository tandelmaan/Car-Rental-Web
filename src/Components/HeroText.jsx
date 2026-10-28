import { Typewriter } from "react-simple-typewriter";

const HeroText = ({ texts }) => {
  return (
    <span>
      <Typewriter
        words={texts}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={60}
        delaySpeed={1000}
      />
    </span>
  );
};

export default HeroText;
