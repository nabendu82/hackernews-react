import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <header id="news-header">
      <section>
        <b className="brand">
          <NavLink to="/">Hacker News</NavLink>
        </b>
        <div className="nav">
          <ul>
            <li>
              <NavLink to="/">News  |  </NavLink>
            </li>
            <li>
              <NavLink to="/submit">Submit</NavLink>
            </li>
          </ul>
        </div>
      </section>
      <div className="auth">
        <div>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
