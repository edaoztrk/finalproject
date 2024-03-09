import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar" style={{ height: '80px' }}>
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src="/src/bbb.jpg"
            alt=""
            style={{ maxWidth: '150px', maxHeight: '70px' }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/karacabey" style={{ color: '#fff', fontSize: '18px' }}>
                Karacabey
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mudanya" style={{ color: '#fff', fontSize: '18px' }}>
                Mudanya
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gemlik" style={{ color: '#fff', fontSize: '18px' }}>
                Gemlik
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/orhangazi" style={{ color: '#fff', fontSize: '18px' }}>
                Orhangazi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/iznik" style={{ color: '#fff', fontSize: '18px' }}>
                İznik
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/BeachList" style={{ color: '#fff', fontSize: '18px' }}>
                Özellikler 
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;