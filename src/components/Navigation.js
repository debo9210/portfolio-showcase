import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/nav.css';

const Navigation = () => {
  const navigate = useNavigate();

  const mobileMenuRef = useRef(null);

  const [navItems] = useState(['Home', 'Portfolios', 'Contact']);

  // close mobile nav when menu option selected
  const closeMobileNav = () => {
    mobileMenuRef.current.style.display = 'none';
    mobileMenuRef.current.parentElement.children[0].children[0].className =
      'fa fa-bars';
  };

  // menu navigation
  const navigateNav = (e) => {
    // remove border bottom when in mobile view
    function removeBorderBottomMobile() {
      if (window.innerWidth >= 844) {
        e.target.style.borderBottom = '3px solid peru';
      }
    }

    switch (e.target.textContent) {
      case 'Home':
        navigate('/');
        closeMobileNav();
        removeBorderBottomMobile();
        e.target.nextElementSibling.style.borderBottom = null;
        e.target.nextElementSibling.nextElementSibling.style.borderBottom =
          null;
        break;
      case 'Portfolios':
        navigate('/portfolio');
        closeMobileNav();
        removeBorderBottomMobile();
        e.target.previousElementSibling.style.borderBottom = null;
        e.target.nextElementSibling.style.borderBottom = null;
        break;
      case 'Contact':
        navigate('/contact');
        closeMobileNav();
        removeBorderBottomMobile();
        e.target.previousElementSibling.style.borderBottom = null;
        e.target.previousElementSibling.previousElementSibling.style.borderBottom =
          null;
        break;
      default:
        break;
    }
  };

  const toggleMobileMenu = (e) => {
    if (e.target.className === 'fa fa-bars') {
      e.target.className = 'fa fa-times';
      mobileMenuRef.current.style.display = 'block';
    } else {
      e.target.className = 'fa fa-bars';
      mobileMenuRef.current.style.display = 'none';
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

      <div className='mobileNavContainer'>
        <div className='mobileNavControl'>
          <i
            className='fa fa-bars'
            aria-hidden='true'
            onClick={toggleMobileMenu}
          ></i>
        </div>

        <div className='mobileNav' ref={mobileMenuRef}>
          <ul>
            {navItems.map((items, i) => (
              <li
                key={i}
                onClick={navigateNav}
                // style={
                //   items === 'Home' ? { borderBottom: '3px solid peru' } : null
                // }
              >
                {items}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
