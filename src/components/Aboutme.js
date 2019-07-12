import React, {Component} from 'react';
import aboutMePhoto from '../data/images/personal2.jpg';
import Header from './Header';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import badge from '../data/images/badge.svg';
import SocialMedia from "./SocialMedia";
import Divider from "./common/Divider";

const BootCamps = (props)=>{

    return <>
        {(props.bootcamps.items.map(item=>{return (
            <div className="col-12 col-md-4">
                <div className="card px-0">
                    <span style={{width:"100px",marginRight:"0",marginLeft:"auto"}} className="badge badge-info">{item.totalProjects} Projects</span>
                    <div className="d-flex justify-content-center px-1">
                        <img className="badge-image" src={badge} alt="Badge"></img>
                        <p className="card-title pt-4 pl-2">{item.title}</p>
                    </div>
                    <div className="card-body px-1">

                        <div className="text-center card-subtitle text-muted">{item.category}</div>
                        <div style={{width:"100%"}} className="badge badge-light">{item.date}</div>

                    </div>
                </div>
            </div>
            )}))
        }
    </>;
}

class Aboutme extends Component {
    render() {
        return (
            <div className="container pb-5">
                <div className="row justify-content-md-center">
                    <div className="col-10">
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
                                <BootCamps bootcamps={this.props.bootcamps}/>
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
        bootcamps: state.bootcamps
    }
}

export default withRouter(connect(mapStateToProps)(Aboutme));
