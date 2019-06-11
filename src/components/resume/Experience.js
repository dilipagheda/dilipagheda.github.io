import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Keywords from "../common/Keywords";

class Experience extends Component {

    renderItems = () => {
        return this.props.items.map((item) => {
            return (
                <div className="row p-2">

                    <div className="col-md-3">
                        <h4>{item.companyName}</h4>
                    </div>

                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
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
