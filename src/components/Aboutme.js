import React, {Component} from 'react';
import aboutMePhoto from '../data/images/personal2.jpg';
import Header from './Header';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import badge from '../data/images/badge.svg';

const Certificates = (props)=>{

    const content = props.p.map(p=><p className="col-12">{p}</p>);
    const certs = props.certificates.map(item=>{return (
        <div className="col-12 col-md-4">

            <div className="card px-1">
                <span style={{width:"100px",margin:"0 auto"}} className="badge badge-info">{item.totalProjects} Projects</span>
                <div className="d-flex justify-content-center">
                    <img className="badge-image" src={badge} alt="Badge"></img>
                    <p className="card-title pt-4">{item.title}</p>
                </div>
                <div className="card-body px-1">

                    <div className="text-center card-subtitle text-muted">{item.category}</div>
                    <div style={{width:"100%"}} className="badge badge-light">{item.date}</div>

                </div>
            </div>
        </div>
    )});

    return (
        <div className="row justify-content-md-center">
            <h2 className="col-12 text-center">My Latest Coding Adventures</h2>
            {content}
            {certs}
        </div>
    );
}

class Aboutme extends Component {
    render() {
        const p = this.props.aboutme.p.map((p)=><p>{p}</p>);
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-10">
                        <Header page="ABOUTME"/>
                        <div className="container content-container">
                            <div className="row justify-content-md-center ">
                                <div className="col-12 content-header d-flex flex-column justify-content-center">
                                    <h1 className="text-center">About Me</h1>
                                </div>
                                <div className="col-12 col-md-4 m-2">
                                    <img className="w-100" src={aboutMePhoto}/>
                                </div>
                                <div className="col-12 col-md-7 m-2">
                                    <p>{p}</p>
                                </div>
                            </div>
                            <Certificates certificates={this.props.adventures.certificates} p={this.props.adventures.p}/>
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
        adventures:state.adventures
    }
}

export default withRouter(connect(mapStateToProps)(Aboutme));
