import React, {Component} from 'react';
import aboutMePhoto from '../data/images/personal2.jpg';
import Header from './Header';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class Aboutme extends Component {
    render() {
        const p = this.props.aboutme.p.map((p)=><p>{p}</p>);
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-10">
                        <Header page="ABOUTME"/>
                        <div className="container content-container ">
                            <div className="row justify-content-md-center content-main">
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        aboutme: state.aboutme
    }
}

export default withRouter(connect(mapStateToProps)(Aboutme));
