import React, {Component} from 'react';
import profileImage from "../data/images/me.png";
import TextLoop from "react-text-loop";

class Introduction extends Component {
    render(){
        return (
            <>
                <div className="cc-profile-image"><a href="#"><img className="img-fluid" src={profileImage}
                                                                   alt="Image"></img></a></div>
                <h1>{this.props.home.name}</h1>
                <TextLoop  className="intro-job-title" springConfig={{stiffness: 180, damping: 8}}
                              interval={[3000, 1000, 1000]}
                              children={this.props.home.jobTitles}/>

                <p>{this.props.home.tagLine}</p>
            </>
        );
    }
}

export default Introduction;
