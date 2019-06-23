import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Divider from "../common/Divider";

class Education extends Component {
    renderItems = () => {
        return this.props.education.items.map((item,index) => {
            return (
                <>
                    <div className="row p-2">
                        <div className="col-md-5">
                            {item.institute? <h4 className="card-title">{item.institute}</h4>:null}
                            <h5>{item.university}</h5>
                            <p>{item.date}</p>
                        </div>

                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-body">

                                    <h5 className="card-title">{item.title}</h5>
                                    <span className="card-subtitle">{item.subtitle}</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider shouldDisplay={this.props.education.items.length-1!==index}/>
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
        education:state.education
    }
}

export default withRouter(connect(mapStateToProps)(Education));
