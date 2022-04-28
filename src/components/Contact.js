import React from 'react';
import '../css/contact.css';

const Contact = () => {
  // https://twitter.com/debo9210
  return (
    <div className='contactContainer'>
      <div className='contact'>
        <h1>
          Email me:{' '}
          <a
            href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=adebowale9210@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            adebowale9210@gmail.com
          </a>
        </h1>
        <h1>
          Connect with me on twitter:{' '}
          <a
            href='https://twitter.com/debo9210'
            target='_blank'
            rel='noreferrer'
          >
            {`@debo9210`}
          </a>
        </h1>
        <h1>
          Linkedin: <span>Coming soon</span>
        </h1>
      </div>
    </div>
  );
};

export default Contact;
