import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/nav.css';

const Navigation = () => {
  const navigate = useNavigate();

  const [navItems] = useState(['Home', 'Portfolios', 'Contact']);

  const navigateNav = (e) => {
    switch (e.target.textContent) {
      case 'Home':
        navigate('/');
        e.target.style.borderBottom = '3px solid peru';
        e.target.nextElementSibling.style.borderBottom = null;
        e.target.nextElementSibling.nextElementSibling.style.borderBottom =
          null;
        break;
      case 'Portfolios':
        navigate('/portfolio');
        e.target.style.borderBottom = '3px solid peru';
        e.target.previousElementSibling.style.borderBottom = null;
        e.target.nextElementSibling.style.borderBottom = null;
        break;
      case 'Contact':
        navigate('/contact');
        e.target.style.borderBottom = '3px solid peru';
        e.target.previousElementSibling.style.borderBottom = null;
        e.target.previousElementSibling.previousElementSibling.style.borderBottom =
          null;
        break;
      default:
        break;
    }
  };

  return (
    <nav className='NavContainer'>
      <ul className='Nav'>
        {navItems.map((items, i) => (
          <li
            className='navItem'
            key={i}
            onClick={navigateNav}
            style={items === 'Home' ? { borderBottom: '3px solid peru' } : null}
          >
            {items}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
