import React, {Component} from 'react';
import logoImage from '../data/images/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Header extends Component {
    render(){
        return (
            <header>
              <nav className="navbar navbar-expand-lg fixed-top navbar-dark px-5 pt-3">
                    <a className="navbar-brand" href="index.html">
                      <img className="logo" src={logoImage} alt=""></img>
                      <span> ilip Agheda</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                            aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon="bars" color="white"/>
                    </button>
                    
                  <div className="collapse navbar-collapse justify-content-end" id="navigation">
                    <ul className="navbar-nav">
                      <li className="nav-item"><a className="nav-link smooth-scroll" href="#about">About Me</a></li>
                      <li className="nav-item"><a className="nav-link smooth-scroll" href="#portfolio">Portfolio</a></li>
                      <li className="nav-item"><a className="nav-link" href="resume.html">Resume</a></li>
                    </ul>
                  </div>
              </nav>
          </header>
          );
    }

}

export default Header;

