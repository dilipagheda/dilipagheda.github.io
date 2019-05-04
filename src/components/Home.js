import React, {Component} from 'react';
import Header from './Header';
import TextLoop from "react-text-loop";
import profileImage from '../data/images/me.png';

class Home extends Component {
    render(){
        return (
            <div>
            <Header />
            <div className="page-header-image image-path-home" data-parallax="true"></div>
            <div className="profile-page">
            <div className="wrapper">
              <div className="page-header">
                <div className="page-header-image image-path-home" data-parallax="true"></div>
                <div className="container">
                  <div className="content-center">
                    <div className="cc-profile-image"><a href="#"><img class="img-fluid" src={profileImage} alt="Image" ></img></a></div>
                    <div className="h2 title">Dilip Agheda</div>
                    <TextLoop springConfig={{ stiffness: 180, damping: 8 }} 
                              interval={[3000,1000,1000]} 
                              children={["Full Stack Web Developer", "Test Automation Engineer", "Tea addict"]} />
                    <p className=" text-white">Let's build something together!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          );
    }
}

export default Home;
