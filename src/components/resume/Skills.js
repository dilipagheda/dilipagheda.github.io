import React, {Component} from 'react';

class Skills extends Component {


    renderKeywords = (words) => {
        return (
            <div>

                {words.map((item)=><span className="badge badge-pill badge-primary m-1">{item}</span>)}
            </div>
        );
    }

    render(){
        return (
            <div className="container pb-5">
                <div className="row">
                   <div className="col-4">
                       <h4>Full Stack Web Development</h4>
                   </div>
                    <div className="col-8">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">

                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="skills-category">Frontend</h5>
                                        </div>
                                        <span className="skills-details">HTML, CSS, Saas, Bootstrap, JavaScript, jQuery, AJAX, FetchAPI,Chart.js</span>
                                        {this.renderKeywords(["HTML","CSS"])}
                                    </div>

                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-between">
                                            <span className="skills-category">Libraries / Frameworks</span>
                                        </div>
                                        <span className="skills-details">React, Redux, React Native</span>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-between">
                                            <span className="skills-category">Backend</span>
                                        </div>
                                        <span className="skills-details">Node.js, Pug, Express, MongoDB</span>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-between">
                                            <span className="skills-category">Native Mobile</span>
                                        </div>
                                        <span className="skills-details">Android (Java)</span>
                                        <span className="skills-details">iOS (Swift)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}

export default Skills;
