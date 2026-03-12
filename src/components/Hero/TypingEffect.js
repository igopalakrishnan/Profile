import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 150, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!deleting && index < text.length) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplayedText(text.substring(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (deleting && index > 0) {
      // Deleting backward
      timer = setTimeout(() => {
        setDisplayedText(text.substring(0, index - 1));
        setIndex(index - 1);
      }, speed);
    } else if (index === text.length && !deleting) {
      // Pause before deleting
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (index === 0 && deleting) {
      // Pause before typing again
      timer = setTimeout(() => setDeleting(false), pause);
    }

    return () => clearTimeout(timer);
  }, [index, deleting, text, speed, pause]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
