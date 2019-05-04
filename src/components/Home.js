import React, {Component} from 'react';
import Header from './Header';
import TextLoop from "react-text-loop";
import profileImage from '../data/images/me.png';

class Home extends Component {
    render(){
        return (
            <div>
                <div className="page-header-image image-path-home"></div>
                <div className="page-header">
                    <div className="page-header-image image-path-home"></div>
                    <div className="container">
                        <div className="content-center">
                        <div className="cc-profile-image"><a href="#"><img class="img-fluid" src={profileImage} alt="Image" ></img></a></div>
                        <h1>Dilip Agheda</h1>
                        <TextLoop className="h3" springConfig={{ stiffness: 180, damping: 8 }} 
                                    interval={[3000,1000,1000]} 
                                    children={["Full Stack Web Developer", "Test Automation Engineer", "Tea addict"]} />
                        <p>Let's build something together!</p>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default Home;
