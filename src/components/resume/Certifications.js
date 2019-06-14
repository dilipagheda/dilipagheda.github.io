import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import badge from "../../data/images/badge.svg";

class Certifications extends Component {

    renderCertificates(){
        return (
            this.props.certificates.map((item)=>{
                return (
                    <div className="col-12 col-md-4">
                        <div className="card px-0 m-2">
                            <span style={{width:"100px",marginRight:"0",marginLeft:"auto"}} className="badge badge-info">{item.category}</span>
                            <div className="card-body">
                                <div className="inner-body">
                                    <div className="card-title  pl-2">{item.title}</div>
                                    <div className="card-subtitle pl-2">{item.date}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }));

    }
    render(){
        return (
            <div className="container pb-5 certifications">
                <div className="row justify-content-md-center">
                        {this.renderCertificates()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        certificates:state.certificates.items
    }
}

export default withRouter(connect(mapStateToProps)(Certifications));
