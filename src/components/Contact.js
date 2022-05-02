import React from 'react';
import '../css/contact.css';

const Contact = () => {
  // https://twitter.com/debo9210
  return (
    <div className='contactContainer'>
      <div className='contact'>
        <div className='contactDetails'>
          <span>
            <i
              class='fa fa-envelope fa-4x'
              aria-hidden='true'
              style={{ color: '#1FB3C5' }}
            ></i>
          </span>
          <a
            href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=adebowale9210@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            Email Me
          </a>
        </div>
        <div className='contactDetails'>
          <span>
            <i
              class='fa fa-twitter-square fa-4x'
              aria-hidden='true'
              style={{ color: '#1D9BF0' }}
            ></i>
          </span>
          <a
            href='https://twitter.com/debo9210'
            target='_blank'
            rel='noreferrer'
          >
            Debo9210
          </a>
        </div>
        <div className='contactDetails'>
          <span>
            <i
              class='fa fa-linkedin-square fa-4x'
              aria-hidden='true'
              style={{ color: '#0077B5' }}
            ></i>
          </span>
          <p>Connect </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
