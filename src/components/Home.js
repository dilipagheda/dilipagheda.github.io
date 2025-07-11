import React, {Component} from 'react';
import Introduction from "./Introduction";
import SocialMedia from "./SocialMedia";
import Header from './Header';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import ExperienceCarousel from './ExperienceCarousel';
import { FaBriefcase } from 'react-icons/fa';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: window.innerWidth <= 900,
            githubRight: null,
            navCollapsed: true,
            // panelCollapsed removed
        };
        this.handleResize = this.handleResize.bind(this);
        this.handleGithubMenuRight = this.handleGithubMenuRight.bind(this);
        this.handleNavbarCollapseState = this.handleNavbarCollapseState.bind(this);
        // Removed panel collapse/expand handlers
    }

    handleResize() {
        const isMobile = window.innerWidth <= 900;
        if (isMobile !== this.state.isMobile) {
            this.setState({ isMobile });
        }
    }

    handleGithubMenuRight(e) {
        const right = e.detail;
        const rightOffset = window.innerWidth - right;
        this.setState({ githubRight: rightOffset });
    }

    handleNavbarCollapseState(e) {
        this.setState({ navCollapsed: e.detail.collapsed });
    }

    // Removed panel collapse/expand handlers

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('githubMenuRight', this.handleGithubMenuRight);
        window.addEventListener('navbarCollapseState', this.handleNavbarCollapseState);
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
        const { isMobile, navCollapsed } = this.state;
        // Show mobile panel if window is <= 900px or if the hamburger menu is visible (collapsed == false)
        const showMobilePanel = isMobile || !navCollapsed;
        const lastExperiences = this.getLastExperiences();
        return (
            <div>
                <Header page="HOME" />
                <div className="page-header-image image-path-home"></div>
                <div className="page-header">
                    <div className="page-header-image image-path-home"></div>
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
