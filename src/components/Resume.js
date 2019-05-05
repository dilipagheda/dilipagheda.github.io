import React, {Component} from 'react';
import Header from "./Header";

class Resume extends Component {
    render(){
        return (
            <div>
                <Header page="RESUME" />
                <div className="content-container">
                    Resume
                </div>
            </div>
        );
    }
}

export default Resume;
