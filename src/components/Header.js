import React, {Component, createRef} from 'react';
import { NavLink } from 'react-router-dom'

import logoImage from '../data/images/logo.svg';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

class Header extends Component {

    githubRef = createRef();

    state = {
        collapsed: true
    };

    toggleNavbar = ()=> {
        this.setState({
            collapsed: !this.state.collapsed
        }, () => {
            // Prevent body scrolling when mobile menu is open
            if (!this.state.collapsed && window.innerWidth <= 900) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            
            window.dispatchEvent(new CustomEvent('navbarCollapseState', {
                detail: { collapsed: this.state.collapsed }
            }));
        });
    }

    handleResize = () => {
        // If resizing to desktop, always collapse the navbar
        if (window.innerWidth > 900 && !this.state.collapsed) {
            this.setState({ collapsed: true }, () => {
                document.body.style.overflow = '';
                window.dispatchEvent(new CustomEvent('navbarCollapseState', {
                    detail: { collapsed: true }
                }));
            });
        }
    }

    componentDidMount() {
        if (this.githubRef.current) {
            window.dispatchEvent(new CustomEvent('githubMenuRight', {
                detail: this.githubRef.current.getBoundingClientRect().right
            }));
        }
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        // Ensure body scroll is restored when component unmounts
        document.body.style.overflow = '';
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.githubRef.current) {
            const newRight = this.githubRef.current.getBoundingClientRect().right;
            if (this.prevGithubRight !== newRight) {
                window.dispatchEvent(new CustomEvent('githubMenuRight', {
                    detail: newRight
                }));
                this.prevGithubRight = newRight;
            }
        }
    }

    render() {
        let classNames = "navbar navbar-expand-lg fixed-top navbar-dark px-5 pt-3";
        if(this.props.page!=="HOME"){
            classNames = "navbar navbar-expand-lg fixed-top navbar-dark px-5 pt-3 content-page";
        }

        const isMobile = window.innerWidth <= 900;
        const { collapsed } = this.state;

        return (
            <header>
                <nav className={classNames}>
                    <a className="navbar-brand" href="/">
                        <img className="logo" src={logoImage} alt=""></img>
                        <span>Dilip Agheda</span>
                    </a>
                    
                    {/* Desktop Navigation */}
                    <div className="navbar-nav desktop-nav">
                        <NavLink className="nav-link" exact activeClassName="active" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/aboutme">
                            About Me
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/portfolio">
                            Portfolio
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/resume">
                            Resume
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            activeClassName="active"
                            to="/github-projects"
                            innerRef={this.githubRef}
                        >
                            GitHub
                        </NavLink>
                    </div>

                    {/* Mobile Hamburger Button */}
                    {isMobile && (
                        <button 
                            onClick={this.toggleNavbar} 
                            className="navbar-toggler mobile-toggle"
                            type="button"
                            aria-label="Toggle navigation"
                        >
                            <FontAwesomeIcon icon="bars" color="white"/>
                        </button>
                    )}
                </nav>

                {/* Mobile Slide-out Sheet */}
                {isMobile && (
                    <>
                        {/* Backdrop */}
                        <div 
                            className={`mobile-nav-backdrop ${!collapsed ? 'active' : ''}`}
                            onClick={this.toggleNavbar}
                        />
                        
                        {/* Slide-out Sheet */}
                        <div className={`mobile-nav-sheet ${!collapsed ? 'active' : ''}`}>
                            <div className="mobile-nav-header">
                                <h3>Menu</h3>
                                <button 
                                    onClick={this.toggleNavbar}
                                    className="mobile-nav-close"
                                    aria-label="Close navigation"
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                            <div className="mobile-nav-content">
                                <NavLink 
                                    className="mobile-nav-link" 
                                    exact 
                                    activeClassName="active" 
                                    to="/"
                                    onClick={this.toggleNavbar}
                                >
                                    Home
                                </NavLink>
                                <NavLink 
                                    className="mobile-nav-link" 
                                    activeClassName="active" 
                                    to="/aboutme"
                                    onClick={this.toggleNavbar}
                                >
                                    About Me
                                </NavLink>
                                <NavLink 
                                    className="mobile-nav-link" 
                                    activeClassName="active" 
                                    to="/portfolio"
                                    onClick={this.toggleNavbar}
                                >
                                    Portfolio
                                </NavLink>
                                <NavLink 
                                    className="mobile-nav-link" 
                                    activeClassName="active" 
                                    to="/resume"
                                    onClick={this.toggleNavbar}
                                >
                                    Resume
                                </NavLink>
                                <NavLink
                                    className="mobile-nav-link"
                                    activeClassName="active"
                                    to="/github-projects"
                                    innerRef={this.githubRef}
                                    onClick={this.toggleNavbar}
                                >
                                    GitHub
                                </NavLink>
                            </div>
                        </div>
                    </>
                )}
            </header>
        );
    }
}

export default Header;

