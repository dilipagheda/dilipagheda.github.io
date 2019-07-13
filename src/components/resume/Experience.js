import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Keywords from "../common/Keywords";
import Divider from "../common/Divider";

class Experience extends Component {

    renderItems = () => {
        return this.props.items.map((item,index) => {
            return (
                <>
                    <div className="row p-1">
                        <div className="col-md-3 p-0 p-md-2">
                            <h4>{item.companyName}</h4>
                            <p>{item.location}</p>
                        </div>

                        <div className="col-12 col-md-9 p-0 p-md-2">
                            <div className="card">
                                <div className="card-body p-2 p-md-3">
                                    <h5 className="card-title">{item.jobTitle}</h5>
                                    <span className="card-subtitle">{item.period}</span>
                                    <ul>
                                        {item.achievements.map((item)=><li>{item}</li>)}
                                    </ul>
                                    <span className="footer-title">Skills Gained</span>
                                    <Keywords words={item.skillsGained}/>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider shouldDisplay={this.props.items.length-1!==index}/>
                </>

            );
        });
    }


    render() {
        return (
            <div className="container pb-5 experience">
                {this.renderItems()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.experience.items
    }
}

export default withRouter(connect(mapStateToProps)(Experience));
