import React, {Component} from 'react';
import Header from "./Header";

class Portfolio extends Component {
    render(){
        return (
            <div>
                <Header page="PORTFOLIO" />
                <div className="content-container">
                    Portfolio
                </div>
            </div>
        );
    }
}

export default Portfolio;
