import { useState, useEffect } from "react";

const useTypingEffect = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index)); // Use slice to prevent mutation issues
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
};

export default useTypingEffect;
