import React from 'react';
import profileImage from './data/images/me.png';
function App() {
  return (
    <div>App
        <div className="page-header-image image-path-home" data-parallax="true"></div>
        <div className="profile-page">
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image image-path-home" data-parallax="true"></div>
            <div className="container">
              <div className="content-center">
                <div className="cc-profile-image"><a href="#"><img class="img-fluid" src={profileImage} alt="Image" ></img></a></div>
                <div className="h2 title">Dilip Agheda</div>
                <p className="category text-white">Full Stack Web Developer & Tea addict!</p>
                <p className=" text-white">Let's build something together!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
