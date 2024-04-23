import React, { useState, useEffect } from 'react';

const SelfWritingText = () => {
  const [text, setText] = useState('');
  const textContent = "Interview Question Generator";
  let timeoutId; // Store timeout ID

  useEffect(() => {
    let i = 0;
    const speed = 50; // Adjust the speed (milliseconds per character) as needed

    const typeWriter = () => {
      if (i < textContent.length) {
        setText(prevText => prevText + textContent.charAt(i));
        i++;
        timeoutId = setTimeout(typeWriter, speed); // Store timeout ID
      }
    };

    typeWriter();

    // Clear timeout when component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return <p className="s_mainTextIntv">{text}</p>;
};

export default SelfWritingText;
