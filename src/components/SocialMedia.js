import React, {Component} from 'react';
import linkedin from '../data/icons/linkedin.svg';
import email from '../data/icons/email.svg';
import github from '../data/icons/github-logo.svg';

class SocialMedia extends Component {
    render(){
        return (
            <div className="container p-2">
                <div className="d-flex justify-content-center">
                    <div className="social-media-button">
                        <a className="" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dilipagheda/"
                           data-rel="tooltip" title="Checkout my Linkedin Profile">
                            <img className="social-media-icon" src={linkedin} alt="LinkedIn Profile"></img>
                        </a>
                    </div>
                    <div className="social-media-button">
                        <a className="" target="_blank" rel="noopener noreferrer" href="https://github.com/dilipagheda"
                           data-rel="tooltip" title="Checkout my Github Projects">
                            <img className="social-media-icon" src={github} alt="GitHub Profile"></img>
                        </a>
                    </div>
                    <div className="social-media-button">
                        <a className="" target="_blank" rel="noopener noreferrer" href="mailto:dilip_agheda@yahoo.com"
                           data-rel="tooltip" title="Send me an Email">
                            <img className="social-media-icon" src={email} alt="Email"></img>
                        </a>
                    </div>
                </div>



            </div>
        );
    }
}

export default SocialMedia;
