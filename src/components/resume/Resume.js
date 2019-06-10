import React, {Component} from 'react';
import Header from "../Header";
import { Nav, NavItem , NavLink} from 'reactstrap';
import {NavLink as RRNavLink, Redirect, Route, Switch} from 'react-router-dom';
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Certifications from "./Certifications";



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
            return <Redirect to="/resume/skills"/>
        }
        return (
            <div className="container pb-5">
                <div className="row justify-content-md-center">
                    <div className="col-12">
                        <Header page="RESUME"/>
                        <div className="content-container">

                            <div className="container content-container">
                                <div className="row justify-content-md-center ">
                                    <div className="col-12 content-header d-flex flex-column justify-content-center">
                                        <h1 className="text-center">RESUME</h1>
                                    </div>
                                    <div className="p-3">
                                        <Nav pills>
                                            <NavItem>
                                                <NavLink  activeClassName="active" to={`${this.props.match.url}/skills`} tag={RRNavLink}>Skills</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink   activeClassName="active" to={`${this.props.match.url}/education`} tag={RRNavLink}>Education</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink  activeClassName="active" to={`${this.props.match.url}/experience`} tag={RRNavLink}>Experience</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink   activeClassName="active" to={`${this.props.match.url}/certifications`} tag={RRNavLink}>Certifications</NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                    <Switch>
                                        <Route exact path={`${this.props.match.url}/skills`} render={(routeProps)=><Skills {...routeProps}/>} />/>
                                        <Route exact path={`${this.props.match.url}/education`} render={(routeProps)=><Education {...routeProps}/>} />/>
                                        <Route exact path={`${this.props.match.url}/experience`} render={(routeProps)=><Experience {...routeProps}/>} />/>
                                        <Route exact path={`${this.props.match.url}/certifications`} render={(routeProps)=><Certifications {...routeProps}/>} />/>
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

export default Portfolio;
