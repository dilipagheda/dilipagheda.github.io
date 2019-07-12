import React, {Component} from 'react';
import Introduction from "./Introduction";
import SocialMedia from "./SocialMedia";
import Header from './Header';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class Home extends Component {

    render(){
        return (
            <div>
                <Header page="HOME" />
                <div className="page-header-image image-path-home"></div>
                <div className="page-header">
                    <div className="page-header-image image-path-home"></div>
                    <div className="container">
                        <div className="content-center">
                            <Introduction home={this.props.home}/>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        home: state.home
    }
}

export default withRouter(connect(mapStateToProps)(Home));
