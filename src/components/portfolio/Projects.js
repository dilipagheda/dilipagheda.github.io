import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, Route, withRouter} from "react-router-dom";
import badge from "../../data/images/badge.svg";
import {Button, ButtonGroup} from "reactstrap";
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Portfolio from "./Portfolio";
import {BounceLoader} from "react-spinners";
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Projects extends Component {

    state = {
        modal: false,
        modalItem:null,
        totalLoaded:0,
        loaded:false,
        category: this.props.category
    }



    toggle = (item) => {
        this.setState(prevState => ({
            modal: !prevState.modal,
            modalItem: item
        }));
    }

    loaded = () =>{
        this.setState(prevState => ({
            totalLoaded: prevState.totalLoaded + 1,
        }));
    }

    setLoadedTo=(value) =>{
        this.setState(prevState => ({
            loaded: value,
        }));
    }

    renderLiveViewButton(liveViewLink){
        if(liveViewLink){
            return (
                <Button>
                    <a  target="_blank" href={liveViewLink}>
                        <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" color="black"/>
                    </a>


                </Button>);
        }
    }
    renderProjects(){
        const projects = this.props.items.map(item=>{return (
            <div className="col-md-6 col-lg-4" style={this.state.loaded ? {} : {display: 'none'}}>
                <div className={`card mb-3 ${this.props.displayType}`}>
                    <div className="card-body text-center">
                        <h5>{item.title}</h5>
                        <img  src={item.coverImage} alt="" onLoad={this.loaded}></img>
                        <ButtonGroup>
                            <Button>
                                <a  target="_blank"
                                       href={item.gitHubLink}>
                                    <FontAwesomeIcon icon={faGithub} size="lg" color="black"/>
                                </a>
                            </Button>
                            {this.renderLiveViewButton(item.liveView)}
                            <Button onClick={()=>this.toggle(item)}>
                                <FontAwesomeIcon icon={faInfoCircle} size="lg" color="black"/>

                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>

        )});

        return projects;


    }

    renderVideo(video){
        if(video){
            return (
                <div className="col-12">
                    <h5>Video Demo</h5>
                    <video width="100%" height="auto" loop autoPlay controls>
                        <source src={this.state.modalItem.moreInfo.video} type="video/mp4"/>
                    </video>
                </div>
            );
        }
    }
    renderModal(){
        if(!this.state.modalItem){
            return null;
        }
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={()=>this.toggle(null)}>{this.state.modalItem.title}</ModalHeader>
                <ModalBody>

                    <div className="container">
                        <div className="row justify-content-md-center">
                            {this.renderVideo(this.state.modalItem.moreInfo.video)}
                            <div className="col-12">
                                {this.state.modalItem.moreInfo.description}
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={()=>this.toggle(null)}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    }

    renderLoader() {
        if (this.state.loaded) {
            return null;
        } else {
            if (this.state.totalLoaded < this.props.items.length) {
               return (<div className='sweet-loading' style={{"padding":"100px","margin":"auto"}}>
                    <BounceLoader
                        css={override}
                        sizeUnit={"px"}
                        size={60}
                        color={'#F0DC6C'}
                        loading={!this.state.loaded}
                    />
                </div>);
            } else {
                this.setLoadedTo(true);
                return null;
            }
        }
    }


    static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps.category+"  "+prevState.category);

        // if(!prevState.category) return null;
        if(nextProps.category!==prevState.category){
            return { loaded: false, totalLoaded: 0, category: nextProps.category};
        }
        else return null;
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    {this.renderLoader()}
                    {this.renderProjects()}
                    {this.renderModal()}
                </div>
            </div>
        );
    }
}


// const mapStateToProps = state => {
//     return {
//         frontend: state.portfolio.frontend,
//         reactjs:state.portfolio.reactjs,
//         nodejs:state.portfolio.nodejs,
//         flutter:state.portfolio.flutter,
//         android:state.portfolio.android
//     }
// }
//
// export default withRouter(connect(mapStateToProps)(Projects));
export default Projects;
