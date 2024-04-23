import React, { useState, useEffect } from 'react';

const SelfWritingText = () => {
  const [text, setText] = useState('');
  const textContent = "Interview Question Generator";
  let timeoutId;

  useEffect(() => {
    let i = 0;
    const speed = 50; 

    const typeWriter = () => {
      if (i < textContent.length) {
        setText(prevText => prevText + textContent.charAt(i));
        i++;
        timeoutId = setTimeout(typeWriter, speed);
      }
    };

    typeWriter();

    return () => clearTimeout(timeoutId);
  }, []);

  return <p className="s_mainTextIntv">{text}</p>;
};

export default SelfWritingText;
