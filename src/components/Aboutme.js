import React, {Component} from 'react';
import aboutMePhoto from '../data/images/personal2.jpg';
import Header from './Header';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import SocialMedia from "./SocialMedia";
import Divider from "./common/Divider";
import LinuxFoundationCerts from "./LinuxFoundationCerts";
import UdacityCerts from "./UdacityCerts";
import TreehouseCerts from "./TreehouseCerts";
import atlassianLogo from '../data/images/atlassian_logo.png';
import originLogo from '../data/images/origin_energy_logo.png';
import commbankLogo from '../data/images/commonwealthbank_logo.png';
import { EXPERIENCE } from '../data/content/experience';

class Aboutme extends Component {
    render() {
        return (
            <div className="container pb-5">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10">
                        <Header page="ABOUTME"/>
                        <div className="container content-container pb-5">
                            <div className="row justify-content-md-center ">
                                <div className="col-12 content-header d-flex flex-column justify-content-center">
                                    <h1 className="text-center">About Me</h1>
                                </div>
                                <div className="col-12 col-md-4 m-2">
                                    <img className="w-100" src={aboutMePhoto} alt="Dilip Agheda"/>
                                    <SocialMedia />
                                </div>
                                <div className="col-12 col-md-7 m-2">
                                    {this.props.aboutme.content1}
                                </div>
                            </div>

                            <Divider shouldDisplay="true"/>
                            <div className="row justify-content-md-center">
                                <div className="col-12">
                                    <h2 className="mb-4" style={{ textAlign: 'left' }}>My Recent Experience</h2>
                                    <ul style={{ textAlign: 'left', paddingLeft: 0 }}>
                                        {EXPERIENCE.items.slice(0, 3).map((exp, idx) => (
                                            <li key={idx} style={{ textAlign: 'left', listStyle: 'none', marginBottom: 18 }}>
                                                {idx === 0 && exp.companyName === 'Atlassian' ? (
                                                    <>
                                                        <img src={atlassianLogo} alt="Atlassian Logo" style={{height: 24, verticalAlign: 'middle', marginRight: 8}} />
                                                        <span style={{verticalAlign: 'middle', fontWeight: 700, fontSize: '1.25rem'}}>Atlassian</span><br/>
                                                        <strong style={{fontSize: '0.95rem', fontWeight: 500}}>{exp.jobTitle}</strong><br/>
                                                        <span className="exp-period">{exp.period}</span>
                                                        {exp.achievements && (
                                                            <ul style={{ marginTop: 10, marginBottom: 0, paddingLeft: 22 }}>
                                                                {exp.achievements.map((ach, i) => (
                                                                    <li key={i} style={{ marginBottom: 4 }}>{ach}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {exp.skills && exp.skills.length > 0 && (
                                                            <div style={{ marginTop: 8, marginBottom: 8 }}>
                                                                {exp.skills.map((skill, i) => (
                                                                    <span key={i} style={{
                                                                        display: 'inline-block',
                                                                        background: '#e0f7fa',
                                                                        color: '#00796b',
                                                                        borderRadius: 8,
                                                                        padding: '1px 6px',
                                                                        fontSize: '0.72rem',
                                                                        fontWeight: 600,
                                                                        marginRight: 4,
                                                                        marginBottom: 2,
                                                                        border: '1px solid #b2dfdb',
                                                                        boxShadow: '0 1px 2px rgba(44,44,44,0.05)'
                                                                    }}>{skill}</span>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </>
                                                ) : idx === 1 && exp.companyName === 'Origin Energy' ? (
                                                    <>
                                                        <img src={originLogo} alt="Origin Energy Logo" style={{height: 24, verticalAlign: 'middle', marginRight: 8}} />
                                                        <span style={{verticalAlign: 'middle', fontWeight: 700, fontSize: '1.25rem'}}>Origin Energy</span><br/>
                                                        <strong style={{fontSize: '0.95rem', fontWeight: 500}}>{exp.jobTitle}</strong><br/>
                                                        <span className="exp-period">{exp.period}</span>
                                                        {exp.achievements && (
                                                            <ul style={{ marginTop: 10, marginBottom: 0, paddingLeft: 22 }}>
                                                                {exp.achievements.map((ach, i) => (
                                                                    <li key={i} style={{ marginBottom: 4 }}>{ach}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {exp.skills && exp.skills.length > 0 && (
                                                            <div style={{ marginTop: 8, marginBottom: 8 }}>
                                                                {exp.skills.map((skill, i) => (
                                                                    <span key={i} style={{
                                                                        display: 'inline-block',
                                                                        background: '#e0f7fa',
                                                                        color: '#00796b',
                                                                        borderRadius: 8,
                                                                        padding: '1px 6px',
                                                                        fontSize: '0.72rem',
                                                                        fontWeight: 600,
                                                                        marginRight: 4,
                                                                        marginBottom: 2,
                                                                        border: '1px solid #b2dfdb',
                                                                        boxShadow: '0 1px 2px rgba(44,44,44,0.05)'
                                                                    }}>{skill}</span>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </>
                                                ) : idx === 2 && exp.companyName === 'Commonwealth Bank' ? (
                                                    <>
                                                        <img src={commbankLogo} alt="Commonwealth Bank Logo" style={{height: 24, verticalAlign: 'middle', marginRight: 8}} />
                                                        <span style={{verticalAlign: 'middle', fontWeight: 700, fontSize: '1.25rem'}}>Commonwealth Bank</span><br/>
                                                        <strong style={{fontSize: '0.95rem', fontWeight: 500}}>{exp.jobTitle}</strong><br/>
                                                        <span className="exp-period">{exp.period}</span>
                                                        {exp.achievements && (
                                                            <ul style={{ marginTop: 10, marginBottom: 0, paddingLeft: 22 }}>
                                                                {exp.achievements.map((ach, i) => (
                                                                    <li key={i} style={{ marginBottom: 4 }}>{ach}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {exp.skills && exp.skills.length > 0 && (
                                                            <div style={{ marginTop: 8, marginBottom: 8 }}>
                                                                {exp.skills.map((skill, i) => (
                                                                    <span key={i} style={{
                                                                        display: 'inline-block',
                                                                        background: '#e0f7fa',
                                                                        color: '#00796b',
                                                                        borderRadius: 8,
                                                                        padding: '1px 6px',
                                                                        fontSize: '0.72rem',
                                                                        fontWeight: 600,
                                                                        marginRight: 4,
                                                                        marginBottom: 2,
                                                                        border: '1px solid #b2dfdb',
                                                                        boxShadow: '0 1px 2px rgba(44,44,44,0.05)'
                                                                    }}>{skill}</span>
                                                                ))}
                                                            </div>
                                                        )}
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
                            </div>
                            <Divider shouldDisplay="true"/>
                            <div className="row justify-content-md-center">
                                <div className="col-12">
                                    <h2 className="mb-4" style={{ textAlign: 'left' }}>My Recent Projects</h2>
                                    {/* Atlassian Project */}
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'nowrap', marginBottom: 32 }}>
                                        <div style={{ flexBasis: '70%', flexGrow: 0, flexShrink: 0, minWidth: 220, textAlign: 'justify' }}>
                                            <h4 style={{ marginBottom: 8 }}>Atlassian New Navigation System</h4>
                                            <p style={{ marginBottom: 0 }}>
                                                As a software engineer at Atlassian, I contributed to the development of a new navigation system across Atlassian products. I worked with cross-functional teams to design and implement a modular navigation framework that improved user experience and performance. By using modern web technologies and following best practices in accessibility and internationalization, we ensured the navigation system was user-friendly and scalable. This project streamlined the user interface and made it easier for users to navigate between different tools, enhancing their overall experience.
                                            </p>
                                        </div>
                                        <img src={require('../data/images/atlassian_nav_system.gif')} alt="Atlassian New Navigation System" style={{ flexBasis: '30%', maxWidth: '30%', minWidth: 80, borderRadius: 8, boxShadow: '0 2px 12px rgba(44,44,44,0.10)', alignSelf: 'flex-start', marginLeft: 8, marginTop: 8 }} />
                                    </div>
                                    {/* Origin Energy Project */}
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'nowrap', marginBottom: 32 }}>
                                        <div style={{ flexBasis: '70%', flexGrow: 0, flexShrink: 0, minWidth: 220, textAlign: 'justify' }}>
                                            <h4 style={{ marginBottom: 8 }}>Form Engine</h4>
                                            <p style={{ marginBottom: 0 }}>
                                                As a software engineer at Origin Energy, I developed a dynamic form engine that enabled the digital transformation of over 300 paper-based forms during the COVID-19 pandemic. The core of this system was a configuration file written in TypeScript, structured as JavaScript objects, which defined form layouts, logic, and validation rules. This configuration was processed by the form engine to render complex forms using React components. These forms featured multi-section layouts with conditional logic; for instance, user responses to initial questions could enable or disable subsequent sections or inputs. Designed to collect measurement data from oil and gas wells, the digitized forms streamlined data entry processes, ensuring accuracy and efficiency. The collected data was integrated into a centralized data platform, where it was utilized by machine learning algorithms to predict equipment failures, facilitating proactive maintenance and reducing downtime.
                                            </p>
                                        </div>
                                        <img src={require('../data/images/origin_energy_logo.png')} alt="Origin Energy Logo" style={{ flexBasis: '30%', maxWidth: '30%', minWidth: 80, height: 96, alignSelf: 'flex-start', marginLeft: 8, marginTop: 8, objectFit: 'contain' }} />
                                    </div>
                                </div>
                            </div>
                            <Divider shouldDisplay="true"/>
                            {/* <div className="row justify-content-md-center">
                                <div className="col-12">
                                    {this.props.aboutme.content2}
                                </div>
                            </div> */}
                            {/* <Divider shouldDisplay="true"/> */}
                            <div className="row justify-content-md-center">
                                <div className="col-12">
                                    {this.props.aboutme.content3}
                                </div>
                                <LinuxFoundationCerts certifications={this.props.linuxfoundation}/>
                            </div>
                            <Divider shouldDisplay="true"/>
                            
                            <div className="row justify-content-md-center">
                                <div className="col-12">
                                    <h2 className="text-center mb-4">Udacity Certifications</h2>
                                </div>
                                <UdacityCerts certifications={this.props.udacity}/>
                            </div>
                            <Divider shouldDisplay="true"/>
                            <div className="row justify-content-md-center">
                                <div className="col-12">
                                    <h2 className="text-center mb-4">Treehouse Certifications</h2>
                                </div>
                                <TreehouseCerts bootcamps={this.props.bootcamps}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        aboutme: state.aboutme,
        bootcamps: state.bootcamps,
        linuxfoundation: state.linuxfoundation,
        udacity: state.udacity
    }
}

export default withRouter(connect(mapStateToProps)(Aboutme));
