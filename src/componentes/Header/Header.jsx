import { Link } from 'react-router-dom';
import './Header.css';
import React from 'react';

export const Header = () => {
  return (
    <div className='containerHeader'>
      <header className='Header'>
        <div className='img-container'>
          <Link to="/index">
            <img src='/img/comidavddbranco.png' alt='Logo da Header' className='img' />
          </Link>
        </div>
        <div className="menu-container">
        <nav className="navbar navbar-expand-lg menu">
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/index">
                  QUEM SOMOS?
                </a>
              </li>
              <li className="nav-item">
                <Link to="/onde" className="nav-link">
                  PRESTAÇÃO DE CONTAS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/colabore" className="nav-link">
                  COLABORE
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      </header>
    </div>
  );
};




/*
import { Link } from 'react-router-dom'
import './Header.css'
import React from 'react'

export const Header = () => {
    return (
        <div className='containerHeader'>
            <header className='Header'>
                <div className='img-container'>
                    <Link to="/index"> <a href=""><img src='/img/comidavddbranco.png' alt='Logo da Header' className='img' /></a></Link>
                </div>
                <div className='menu'>
                    <nav>
                        <ul>
                            <li>
                                <a href="/index">QUEM SOMOS?</a>
                            </li>
                            <li>
                                <Link to="/onde" ><a href=''>PRESTAÇÃO DE CONTAS</a> </Link>
                            </li>
                            <li>
                                <Link to="/colabore"> <a href=''>COLABORE</a></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}
*/
