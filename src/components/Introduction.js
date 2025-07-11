import React, {Component} from 'react';

const jobTitles = [
    'Software Engineer',
    'Problem Solver',
    'Tech Enthusiast',
    // 'Full Stack Developer',
    // 'Web Developer',
    // 'Mobile Developer',
    // 'Frontend Developer',
    // 'Backend Developer'
];

class Introduction extends Component {
    render(){
        return (
            <>
                <div className="cc-profile-image"><a href="#"><img className="img-fluid" src={this.props.home.image}
                                                                   alt="Image"></img></a></div>
                <h1 className="home-title">{this.props.home.name}</h1>
                <div className="intro-job-title-inline">
                    {jobTitles.map((title, idx) => (
                        <span key={idx} className="intro-job-title-item">
                            {title}{idx < jobTitles.length - 1 && <span className="intro-job-title-sep"> &bull; </span>}
                        </span>
                    ))}
                </div>
                <div className="large-tagline">{this.props.home.tagLine}</div>
            </>
        );
    }
}

export default Introduction;
