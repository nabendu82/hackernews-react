import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Header = (props) => {
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
              {props.isAuthorized && <NavLink to="/submit">Submit</NavLink>}
              {!props.isAuthorized && <NavLink to="/login">Submit</NavLink>}
            </li>
          </ul>
        </div>
      </section>
      <div className="auth">
        <div>
          {props.isAuthorized && <NavLink to="/login">Logout</NavLink>}
          {!props.isAuthorized && <NavLink to="/login">Login</NavLink>}
        </div>
      </div>
    </header>
  );
};

export default Header;
