import React, {Component} from 'react';
import Introduction from "./Introduction";
import SocialMedia from "./SocialMedia";
import Header from './Header';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import ExperienceCarousel from './ExperienceCarousel';
import backgroundImage from '../data/images/cc-bg-1.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: window.innerWidth <= 900,
            githubRight: null,
            navCollapsed: true,
            backgroundLoaded: false,
            backgroundError: false,
            particles: [],
            // panelCollapsed removed
        };
        this.handleResize = this.handleResize.bind(this);
        this.handleGithubMenuRight = this.handleGithubMenuRight.bind(this);
        this.handleNavbarCollapseState = this.handleNavbarCollapseState.bind(this);
        // Removed panel collapse/expand handlers
    }

    handleResize() {
        const isMobile = window.innerWidth <= 900;
        // If switching between mobile/desktop, always collapse nav
        this.setState({
            isMobile,
            navCollapsed: true
        });
    }

    handleGithubMenuRight = (e) => {
        const right = e.detail;
        const rightOffset = window.innerWidth - right;
        if (this.state.githubRight !== rightOffset) {
            this.setState({ githubRight: rightOffset });
        }
    }

    handleNavbarCollapseState(e) {
        this.setState({ navCollapsed: e.detail.collapsed });
    }

    // Preload background image
    preloadBackgroundImage() {
        const img = new Image();
        img.onload = () => {
            this.setState({ backgroundLoaded: true });
        };
        img.onerror = () => {
            this.setState({ backgroundError: true });
            this.generateFallbackParticles();
        };
        img.src = backgroundImage;
    }

    // Generate floating particles for creative fallback
    generateFallbackParticles() {
        const particles = Array.from({length: 12}, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 15 + 8,
            color: ['#4A2E1F', '#B88A3A', '#C4A83A', '#5A2F1A'][Math.floor(Math.random() * 4)],
            speed: Math.random() * 3 + 2,
            delay: Math.random() * 4
        }));
        this.setState({ particles });
    }

    // Removed panel collapse/expand handlers

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('githubMenuRight', this.handleGithubMenuRight);
        window.addEventListener('navbarCollapseState', this.handleNavbarCollapseState);
        
        // Preload the background image
        this.preloadBackgroundImage();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('githubMenuRight', this.handleGithubMenuRight);
        window.removeEventListener('navbarCollapseState', this.handleNavbarCollapseState);
    }

    getLastExperiences() {
        // Import experience data directly for now
        // eslint-disable-next-line
        const { EXPERIENCE } = require('../data/content/experience');
        // Use 2 for mobile/tablet, 3 for desktop
        return this.state.isMobile ? EXPERIENCE.items.slice(0, 2) : EXPERIENCE.items.slice(0, 3);
    }

    render(){
        const { isMobile, navCollapsed, backgroundLoaded, backgroundError, particles } = this.state;
        // Show mobile panel if window is <= 900px or if the hamburger menu is visible (collapsed == false)
        const showMobilePanel = isMobile || !navCollapsed;
        const lastExperiences = this.getLastExperiences();
        
        // Background image style - only apply if image loaded successfully
        const backgroundStyle = {
            backgroundImage: backgroundLoaded && !backgroundError ? `url(${backgroundImage})` : 
                'linear-gradient(135deg, #2A1A15 0%, #8B6A2E 25%, #9A8A2E 50%, #4A2F1A 75%, #2A1A15 100%)',
            backgroundSize: backgroundLoaded && !backgroundError ? 'cover' : '400% 400%',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: backgroundLoaded && !backgroundError ? 'rgba(44, 44, 44, 0.6)' : 'transparent',
            animation: backgroundError ? 'gradientShift 8s ease infinite' : 'none',
            position: 'relative'
        };
        
        return (
            <div>
                <Header page="HOME" />
                <div className="page-header" style={backgroundStyle}>
                    {/* Dark overlay for background image */}
                    {backgroundLoaded && !backgroundError && (
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            zIndex: 1
                        }}></div>
                    )}
                    {/* Creative fallback overlay with particles */}
                    {backgroundError && (
                        <>
                            <div className="fallback-overlay"></div>
                            {particles.map(particle => (
                                <div
                                    key={particle.id}
                                    className="fallback-particle"
                                    style={{
                                        position: 'absolute',
                                        left: `${particle.x}%`,
                                        top: `${particle.y}%`,
                                        width: particle.size,
                                        height: particle.size,
                                        backgroundColor: particle.color,
                                        borderRadius: '50%',
                                        opacity: 0.4,
                                        animation: `float ${particle.speed}s ease-in-out infinite`,
                                        animationDelay: `${particle.delay}s`
                                    }}
                                />
                            ))}
                        </>
                    )}
                    <div className="container">
                        <div className="content-center">
                            <Introduction home={this.props.home}/>
                            <SocialMedia />
                        </div>
                        {/* Experience Panel: Desktop vs Mobile or Hamburger */}
                        {showMobilePanel ? (
                            <ExperienceCarousel />
                        ) : (
                            <div className="floating-experience-panel right-center">
                                <h3 style={{ textAlign: 'left' }}>Recent Work Experience</h3>
                                <ul style={{ textAlign: 'left', paddingLeft: 0 }}>
                                    {lastExperiences.map((exp, idx) => (
                                        <li key={idx} className="experience-item" style={{ textAlign: 'left', listStyle: 'none', marginBottom: 18 }}>
                                            {idx === 2 && exp.companyName === 'Commonwealth Bank' ? (
                                                <>
                                                    <img src={require('../data/images/commonwealthbank_logo.png')} alt="Commonwealth Bank Logo" style={{height: 24, verticalAlign: 'middle', marginRight: 8}} />
                                                    <span style={{verticalAlign: 'middle', fontWeight: 700, fontSize: '1.25rem'}}>Commonwealth Bank</span><br/>
                                                    <strong style={{fontSize: '0.95rem', fontWeight: 500}}>{exp.jobTitle}</strong><br/>
                                                    <span className="exp-period">{exp.period}</span>
                                                </>
                                            ) : idx === 1 && exp.companyName === 'Origin Energy' ? (
                                                <>
                                                    <img src={require('../data/images/origin_energy_logo.png')} alt="Origin Energy Logo" style={{height: 24, verticalAlign: 'middle', marginRight: 8}} />
                                                    <span style={{verticalAlign: 'middle', fontWeight: 700, fontSize: '1.25rem'}}>Origin Energy</span><br/>
                                                    <strong style={{fontSize: '0.95rem', fontWeight: 500}}>{exp.jobTitle}</strong><br/>
                                                    <span className="exp-period">{exp.period}</span>
                                                </>
                                            ) : idx === 0 && exp.companyName === 'Atlassian' ? (
                                                <>
                                                    <img src={require('../data/images/atlassian_logo.png')} alt="Atlassian Logo" style={{height: 24, verticalAlign: 'middle', marginRight: 8}} />
                                                    <span style={{verticalAlign: 'middle', fontWeight: 700, fontSize: '1.25rem'}}>Atlassian</span><br/>
                                                    <strong style={{fontSize: '0.95rem', fontWeight: 500}}>{exp.jobTitle}</strong><br/>
                                                    <span className="exp-period">{exp.period}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <strong>{exp.jobTitle}</strong> @ {exp.companyName} <br/>
                                                    <span className="exp-period">{exp.period}</span>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        home: state.home
    }
}

export default withRouter(connect(mapStateToProps)(Home));
