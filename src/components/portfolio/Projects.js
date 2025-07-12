import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {Button, ButtonGroup} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {BounceLoader} from "react-spinners";

// const override = css`
//     display: block;
//     margin: 0 auto;
//     border-color: red;
// `;

class Projects extends Component {

    state = {
        // modal: false,
        // modalItem:null,
        totalLoaded:0,
        loaded:false,
        category: this.props.match.params.category
    }



    // toggle = (item) => {
    //     this.setState(prevState => ({
    //         modal: !prevState.modal,
    //         modalItem: item
    //     }));
    // }

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
                            <Link to={`/${this.props.match.params.category}/projectdetails/${item.id}`}>
                                Info
                            </Link>
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

    // renderModal(){
    //     if(!this.state.modalItem){
    //         return null;
    //     }
    //     return (
    //         <Modal isOpen={this.state.modal} toggle={this.toggle}>
    //             <ModalHeader toggle={()=>this.toggle(null)}>{this.state.modalItem.title}</ModalHeader>
    //             <ModalBody>

    //                 <div className="container">
    //                     <div className="row justify-content-md-center">
    //                         {this.renderVideo(this.state.modalItem.moreInfo.video)}
    //                         <div className="col-12">
    //                             {this.state.modalItem.moreInfo.description}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </ModalBody>
    //             <ModalFooter>
    //                 <Button color="secondary" onClick={()=>this.toggle(null)}>Close</Button>
    //             </ModalFooter>
    //         </Modal>
    //     );
    // }

    renderLoader() {
        if (this.state.loaded) {
            return null;
        } else {
            if (this.state.totalLoaded < this.props.items.length) {
               return (<div className='sweet-loading' style={{"padding":"100px","margin":"auto"}}>
                    <BounceLoader
                        // css={override}
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
                    {/* {this.renderModal()} */}
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
