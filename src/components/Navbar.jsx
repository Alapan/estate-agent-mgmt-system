import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState('/');
  const handleClick = (path) => {
    if (window.location.pathname != path) {
      setCurrentTab(path);
    }
  };

  const getListItemClass = (path) => {
    let cls = 'navbar-list-item';
    if (currentTab === path) {
      cls += ' active';
    }
    return cls;
  }

  return (
    <nav>
      <ul className='navbar-list'>
        <li className={getListItemClass('/')} >
          <Link
            to='/'
            onClick={() => handleClick('/')}
          >Home</Link>
        </li>  
        <li className={getListItemClass('/sellers')}>
          <Link
            to='/sellers'
            onClick={() => handleClick('/sellers')}
          >Sellers</Link>
        </li>
        <li className={getListItemClass('/buyers')}>
          <Link
            to='/buyers'
            onClick={() => handleClick('/buyers')}
          >Buyers</Link>
        </li>
        <li className={getListItemClass('/properties')}>
          <Link
            to='/properties'
            onClick={() => handleClick('/properties')}
          >Properties</Link>
        </li>
      </ul>
    </nav>
  ); 
};

export default Navbar;
