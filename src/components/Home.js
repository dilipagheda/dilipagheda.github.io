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
                            {this.props.child()}
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default Home;
