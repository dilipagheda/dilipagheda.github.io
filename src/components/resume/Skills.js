import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Keywords from "../common/Keywords";
import Divider from "../common/Divider";

class Skills extends Component {

    renderSectionListItems = (items)=>{
        return items.map((item)=>(
            <li className="list-group-item">
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column justify-content-center pl-2 pr-2 mr-3" style={{width:"50px"}}>
                        <FontAwesomeIcon icon={item.icon} size="2x" color="black" className="text-center"/>
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                        <div className="d-flex flex-row">
                            <span className="item-heading">{item.heading}</span>
                            <div>
                                <span className="skill-level badge badge-info">{item.level}</span>
                            </div>
                        </div>
                        <Keywords words={item.tags}/>
                    </div>
                </div>
            </li>
        ));
    }

    renderSections = ()=>{
        return(
            this.props.skills.map((item, index)=>{
                return (
                    <>
                        <div className="row p-2">
                            <div className="col-md-4">
                                <h4>{item.heading}</h4>
                            </div>
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            {this.renderSectionListItems(item.items)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider shouldDisplay={this.props.skills.length-1!==index}/>
                    </>
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
