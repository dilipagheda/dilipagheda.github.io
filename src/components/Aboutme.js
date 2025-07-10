import React, {Component} from 'react';
import aboutMePhoto from '../data/images/personal2.jpg';
import Header from './Header';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import badge from '../data/images/badge.svg';
import SocialMedia from "./SocialMedia";
import Divider from "./common/Divider";
import LinuxFoundationCerts from "./LinuxFoundationCerts";
import UdacityCerts from "./UdacityCerts";
import TreehouseCerts from "./TreehouseCerts";

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
                                    <img className="w-100" src={aboutMePhoto}/>
                                    <SocialMedia />
                                </div>
                                <div className="col-12 col-md-7 m-2">
                                    {this.props.aboutme.content1}
                                </div>
                            </div>
                            <Divider shouldDisplay="true"/>
                            <div className="row justify-content-md-center">
                                <div className="col-12">
                                    {this.props.aboutme.content2}
                                </div>
                            </div>
                            <Divider shouldDisplay="true"/>
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
