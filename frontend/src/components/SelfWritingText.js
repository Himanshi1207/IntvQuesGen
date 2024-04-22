import React, { useEffect, useState } from 'react';
import './SelfWritingText.module.css';

const SelfWritingText = () => {
  const [text, setText] = useState('');
  const textContent = "Interview Question Generator";

  useEffect(() => {
    let i = 0;
    const speed = 50; // Adjust the speed (milliseconds per character) as needed

    const typeWriter = () => {
      if (i < textContent.length) {
        setText(prevText => prevText + textContent.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter();

    return () => clearTimeout(typeWriter);
  }, []);

  return <p className="s_mainTextIntv">{textContent}</p>  ;
};

export default SelfWritingText;
