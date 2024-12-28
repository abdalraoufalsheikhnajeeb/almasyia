"use client";
import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // Optional prop to adjust typing speed
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed); // Use the passed speed value

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h2 className="text-3xl max-w-3xl font-bold text-white text-center lg:text-start">
      {displayedText}
    </h2>
  );
};

export default Typewriter;
