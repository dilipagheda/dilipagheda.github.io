import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

import logoImage from '../data/images/logo.svg';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Header extends Component {

    state = {
        collapsed: true
    };

    toggleNavbar = ()=> {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        let classNames = "navbar navbar-expand-lg fixed-top navbar-dark px-5 pt-3";
        if(this.props.page!=="HOME"){
            classNames = "navbar navbar-expand-lg fixed-top navbar-dark px-5 pt-3 content-page";
        }
        return (
            <header>
                {/*<nav className={classNames}>*/}
                {/*    <a className="navbar-brand" href="index.html">*/}
                {/*        <img className="logo" src={logoImage} alt=""></img>*/}
                {/*        <span> ilip Agheda</span>*/}
                {/*    </a>*/}
                {/*    <button onClick={this.toggleCollapse} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"*/}
                {/*            aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*        <FontAwesomeIcon icon="bars" color="white"/>*/}
                {/*    </button>*/}
                {/*    <div className="collapse navbar-collapse justify-content-end" id="navigation">*/}
                {/*        <ul className="navbar-nav">*/}
                {/*            <li className="nav-item">*/}
                {/*                <NavLink className="nav-link" exact activeClassName="active" to="/">*/}
                {/*                    Home*/}
                {/*                </NavLink>*/}
                {/*            </li>*/}
                {/*            <li className="nav-item">*/}
                {/*                <NavLink className="nav-link" activeClassName="active" to="/aboutme">*/}
                {/*                    About Me*/}
                {/*                </NavLink>*/}
                {/*            </li>*/}
                {/*            <li className="nav-item">*/}
                {/*                <NavLink className="nav-link" activeClassName="active" to="/portfolio">*/}
                {/*                    Portfolio*/}
                {/*                </NavLink>*/}
                {/*            </li>*/}
                {/*            <li className="nav-item">*/}
                {/*                <NavLink className="nav-link" activeClassName="active" to="/resume">*/}
                {/*                    Resume*/}
                {/*                </NavLink>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</nav>*/}


                <Navbar color="faded" light className={classNames}>
                    <NavbarBrand href="/" className="mr-auto">
                        <a className="navbar-brand" href="index.html">
                            <img className="logo" src={logoImage} alt=""></img>
                            <span> ilip Agheda</span>
                        </a>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2">
                        <FontAwesomeIcon icon="bars" color="white"/>
                    </NavbarToggler>
                    <Collapse isOpen={!this.state.collapsed} navbar className="justify-content-end">
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" exact activeClassName="active" to="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" activeClassName="active" to="/aboutme">
                                    About Me
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" activeClassName="active" to="/portfolio">
                                    Portfolio
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" activeClassName="active" to="/resume">
                                    Resume
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" activeClassName="active" to="/github-projects">
                                    GitHub
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>


            </header>
        );
    }
}

export default Header;

