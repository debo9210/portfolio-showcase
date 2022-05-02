import React, { useRef, useEffect } from 'react';
import displayPic from '../images/selfie.jpeg';
import '../css/welcome.css';

const Welcome = () => {
  const welcomeRef = useRef(null);

  useEffect(() => {
    var i = 0;
    const greeting = [
      '',
      'Welcome !',
      'Bienvenue !',
      'Bienvenido !',
      'Benvenuto !',
      'Welkom !',
      'добро пожаловать !',
      '欢迎 !',
      'ようこそ !',
      'أهلا بك !',
      '환영하다 !',
    ];

    // eslint-disable-next-line
    var myfunc = setInterval(() => {
      i = i + 1;

      // landingHeadingRef.current.innerText = greeting[i];

      if (Object.values(welcomeRef)[0] !== null) {
        welcomeRef.current.innerText = greeting[i];
      }

      if (i === greeting.length - 1) {
        i = 0;
        // clearInterval(myfunc);
      }
    }, 2000);
  }, []);

  return (
    <div className='main'>
      <header className='headerContainer'>
        <h1 ref={welcomeRef}>Welcome!</h1>
      </header>
      {/* <div className="aboutContainer">
        <div className="picDisplay"></div>

      </div> */}
      <main className='mainContainer'>
        <div className='picDisplayContainer'>
          <div
            className='picDisplay'
            style={{ backgroundImage: `url(${displayPic})` }}
          ></div>
        </div>

        <h3>
          Hi, I'm 'Lolu, a web developer. I have knowledge about HTML, CSS,
          Javascript, React, NodeJS, Mongoose, MongoDB.{' '}
        </h3>
      </main>
    </div>
  );
};

export default Welcome;
