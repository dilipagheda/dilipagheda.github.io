import React, {Component} from 'react';




import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Skills extends Component {
    renderKeywords = (words) => {
        return (
            <div>

                {words.map((item)=><span className="badge badge-pill badge-primary pl-2 pr-2 pt-1 pb-2 mr-1">{item}</span>)}
            </div>
        );
    }

    renderSectionListItems = (items)=>{
        return items.map((item)=>(
            <li className="list-group-item">
                <div className="d-flex flex-row">

                    <div className="d-flex flex-column justify-content-center pl-2 pr-2 mr-3">
                        <FontAwesomeIcon icon={item.icon} size="2x" color="black" className="text-center"/>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between">
                            <span className="item-heading">{item.heading}</span>
                        </div>
                        {this.renderKeywords(item.tags)}
                    </div>
                </div>
            </li>
        ));
    }

    renderSections = ()=>{
        return(
            this.props.skills.map((item)=>{
                return (
                    <div className="row p-2">
                        <div className="col-md-4">
                            <h4>{item.heading}</h4>
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <ul className="list-group list-group-flush">

                                    {this.renderSectionListItems(item.items)}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            }
    )

        );
    }

    render(){
        return (
            <div className="container pb-5 skills">
                {this.renderSections()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        skills: state.resume.skills
    }
}

export default withRouter(connect(mapStateToProps)(Skills));
