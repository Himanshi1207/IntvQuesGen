// LandingPage.js
import React from 'react';
import Header from './components/Header';
import FormBox from './components/FormBox';
import Intro from './components/Intro';
import GeneratedQABox from './components/GeneratedQABox';
import './LandingPage.css';

function LandingPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts. gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
        rel="stylesheet"
      />
      <div className="mainBody">
        <Header />
        <div className="container">
          {/* First column with text */}
          <div className="column1">
            <Intro />
          </div>
          {/* Second column with form */}
          <div className="column2">
            <FormBox />
          </div>
        </div>
        <div>
          <GeneratedQABox />
        </div>
      </div>
    </>

  );
}

export default LandingPage;
