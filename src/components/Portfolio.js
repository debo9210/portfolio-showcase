import React, { useState } from 'react';
import authApp from '../images/authApp.png';
import shoppingfy from '../images/shoppingfy.png';
import tweeterClone from '../images/tweeterClone.png';
import '../css/portfolio.css';

const Portfolio = () => {
  const [portfolioItems] = useState([
    {
      webPic: authApp,
      about: 'Authentication App.',
      techs: ['react', 'javascript', 'NodeJS', 'MongoDB'],
      desc: 'The app is built using passport strategies for both local and social sign in',
      links: [
        [
          'fa fa-link',
          'view website',
          'https://debo9210-auth-app.herokuapp.com/',
        ],
        [
          'fa fa-github',
          'view code',
          'https://github.com/debo9210/authentication-app',
        ],
      ],
    },
    {
      webPic: shoppingfy,
      about: 'Shoppingify',
      techs: ['react', 'javascript', 'NodeJS', 'MongoDB'],
      desc: 'This is a project to make a shoppify like app. It boast of nice functionalites.',
      links: [
        [
          'fa fa-link',
          'view website',
          'https://debo9210-shoppingify-app.herokuapp.com/',
        ],
        [
          'fa fa-github',
          'view code',
          'https://github.com/debo9210/shoppingify-app',
        ],
      ],
    },
    {
      webPic: tweeterClone,
      about: 'Tweeter Clone',
      techs: ['react', 'javascript', 'NodeJS', 'MongoDB'],
      desc: 'This is a project to make a tweeter like app. It boast of nice and basic twitter functionalites.',
      links: [
        [
          'fa fa-link',
          'view website',
          'https://debo9210-tweeter-clone-app.herokuapp.com/',
        ],
        [
          'fa fa-github',
          'view code',
          'https://github.com/debo9210/tweeter-clone-master',
        ],
      ],
    },
  ]);

  const techNameStyle = (name) => {
    return {
      background:
        name === 'react'
          ? 'rgb(50, 116, 240)'
          : name === 'javascript'
          ? 'rgb(18, 199, 199)'
          : name === 'NodeJS'
          ? 'rgb(235, 203, 22)'
          : name === 'MongoDB'
          ? 'rgb(104, 163, 14)'
          : null,
    };
  };

  const portfolioContainer = portfolioItems.map((item, i) => (
    <div className='Portfolio' key={i}>
      <div
        className='portfolioPic'
        style={
          item.webPic
            ? { backgroundImage: `url(${item.webPic})` }
            : { background: 'peru' }
        }
      ></div>
      <div className='portfolioDetails'>
        <div className='portfolioAbout'>
          <h4>{item.about}</h4>
        </div>
        <div className='portfolioTech'>
          {item.techs.map((tech, i) => (
            <p className='techs' key={i} style={techNameStyle(tech)}>
              {tech}
            </p>
          ))}
        </div>
        <p className='portfolioDesc'>{item.desc}</p>
        <div className='portfolioLink'>
          {item.links.map((link, i) => (
            <div className='link' key={i}>
              <i className={link[0]} aria-hidden='true'></i>
              {/* {console.log(typeof link[2])} */}
              <a href={`${link[2]}`} target='_blank' rel='noreferrer'>
                {link[1]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className='PortfolioContainer'>
        {/* <div className='Portfolio'>
          <div className='portfolioPic'></div>
          <div className='portfolioAbout'></div>
          <div className='portfolioTech'></div>
          <div className='portfolioDesc'></div>
          <div className='portfolioLink'></div>
        </div> */}

        {portfolioContainer}
      </div>
    </div>
  );
};

export default Portfolio;
