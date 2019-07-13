import React, {Component} from 'react';
import Header from "../Header";
import { Nav, NavItem , NavLink} from 'reactstrap';
import {NavLink as RRNavLink, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Aboutme from "../Aboutme";
import Projects from "./Projects";
import {connect} from "react-redux";



class Portfolio extends Component {
    state = {
        redirect:false
    }

    componentDidMount() {
        this.setState({
            redirect:true
        })
    }




    render() {
        if(this.state.redirect){
            this.setState({
                redirect:false
            })
            return <Redirect to="/portfolio/frontend"/>
        }
        return (
            <div className="container pb-5">
                <div className="row justify-content-md-center">
                    <div className="col-12">
                        <Header page="PORTFOLIO"/>
                        <div className="content-container">

                            <div className="container content-container">
                                <div className="row justify-content-md-center ">
                                    <div className="col-12 content-header d-flex flex-column justify-content-center">
                                        <h1 className="text-center">Portfolio</h1>
                                    </div>
                                    <div className="p-md-3 p-1 content-menu">
                                        <Nav pills className="d-flex flex-column flex-md-row content-menu">
                                            <NavItem className="content-menu text-center">
                                                <NavLink  activeClassName="active" to={`${this.props.match.url}/frontend`} tag={RRNavLink}>Front-End</NavLink>
                                            </NavItem>
                                            <NavItem className="content-menu text-center">
                                                <NavLink   activeClassName="active" to={`${this.props.match.url}/nodejs`} tag={RRNavLink}>Node.JS</NavLink>
                                            </NavItem>
                                            <NavItem className="content-menu text-center">
                                                <NavLink  activeClassName="active" to={`${this.props.match.url}/reactjs`} tag={RRNavLink}>React.JS</NavLink>
                                            </NavItem>
                                            <NavItem className="content-menu text-center">
                                                <NavLink   activeClassName="active" to={`${this.props.match.url}/flutter`} tag={RRNavLink}>Flutter</NavLink>
                                            </NavItem>
                                            <NavItem className="content-menu text-center">
                                                <NavLink  activeClassName="active" to={`${this.props.match.url}/Android`} tag={RRNavLink}>Android</NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                    <Switch>
                                        <Route exact path={`${this.props.match.url}/frontend`} render={(routeProps)=><Projects items={this.props.frontend} category="frontend" displayType="web-project" {...routeProps}/>} />/>
                                        <Route exact path={`${this.props.match.url}/nodejs`} render={(routeProps)=><Projects  items={this.props.nodejs} category="nodejs" displayType="web-project" {...routeProps}/>} />/>
                                        <Route exact path={`${this.props.match.url}/reactjs`} render={(routeProps)=><Projects items={this.props.reactjs}  category="reactjs" displayType="web-project" {...routeProps}/>} />/>
                                        <Route exact path={`${this.props.match.url}/flutter`} render={(routeProps)=><Projects items={this.props.flutter}  category="flutter" displayType="mobile-project" {...routeProps}/>} />/>
                                        <Route exact path={`${this.props.match.url}/android`} render={(routeProps)=><Projects items={this.props.android}  category="android" displayType="mobile-project" {...routeProps}/>} />/>

                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        frontend: state.portfolio.frontend,
        reactjs:state.portfolio.reactjs,
        nodejs:state.portfolio.nodejs,
        flutter:state.portfolio.flutter,
        android:state.portfolio.android
    }
}

export default withRouter(connect(mapStateToProps)(Portfolio));
