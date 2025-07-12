import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {Button, ButtonGroup} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {BounceLoader} from "react-spinners";

class Projects extends Component {

    state = {
        totalLoaded:0,
        loaded:false,
        category: this.props.match.params.category
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
                <Button tag="a" target="_blank" rel="noopener noreferrer" href={liveViewLink}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" color="black"/>
                </Button>);
        }
    }
    renderProjects(){
        const projects = this.props.items.map((item, index)=>{
            return (
            <div key={item.id || index} className="col-md-6 col-lg-4" style={this.state.loaded ? {} : {display: 'none'}}>
                <div className={`card mb-3 ${item.displayType}`}>
                    <div className="card-body text-center">
                        <h5>{item.title}</h5>
                        <img  src={item.coverImage} alt="" onLoad={this.loaded}></img>
                        <ButtonGroup>
                            <Button tag="a" target="_blank" rel="noopener noreferrer" href={item.gitHubLink}>
                                <FontAwesomeIcon icon={faGithub} size="lg" color="black"/>
                            </Button>
                            {this.renderLiveViewButton(item.liveView)}
                        </ButtonGroup>
                    </div>
                </div>
            </div>

        )});

        return projects;
    }

    renderLoader() {
        if (this.state.loaded) {
            return null;
        } else {
            if (this.state.totalLoaded < this.props.items.length) {
               return (<div className='sweet-loading' style={{"padding":"100px","margin":"auto"}}>
                    <BounceLoader
                        sizeUnit={"px"}
                        size={60}
                        color={'#F0DC6C'}
                        loading={!this.state.loaded}
                    />
                    <p>{this.state.totalLoaded} project(s) of {this.props.items.length} downloaded!</p>
                </div>);
            } else {
                this.setLoadedTo(true);
                return null;
            }
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
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
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.portfolio[ownProps.match.params.category]
    }
}

export default withRouter(connect(mapStateToProps)(Projects));
