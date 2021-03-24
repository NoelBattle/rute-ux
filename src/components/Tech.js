import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../style/Tech.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEdit, faCircle, faBars,faTachometerAlt,faUserGraduate,faSearch,faPencilAlt,faComments,faToggleOff,faToggleOn,faRobot } from '@fortawesome/free-solid-svg-icons'

import  expressPic from './../imgs/tech/express.png'
import  JWTPic from './../imgs/tech/jwt.png'
import  mongoPic from './../imgs/tech/mongo.png'
import  nodePic from './../imgs/tech/node.png'
import  nodeBBPic from './../imgs/tech/nodebb.png'
import  passportPic from './../imgs/tech/passport.png'
import  reactPic from './../imgs/tech/react.png'
import  reduxPic from './../imgs/tech/redux.png'
import Footer from "./layout/Footer";


class Tech extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
       }

    render() {
        return (
            <div id="comp-div" style={{zIndex:"2"}}>
                <div class="row" id="page-header">
                    <div class="col" id="text-center">
                        <div class="row">
                            <div class="col">
                            <FontAwesomeIcon id="header-icon"  icon={faRobot} />
                            </div>
                        </div>
                        <div class="row" id="header-text" >
                            <div class="col">Technologies</div>
                        </div>
                        <div class="row" id="idea-idea">
                            <div class="col" id="text-content-style">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="tech-space"></div>
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <div class="row" id="info-prov-row">
                            <div class="col-md-4">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> Server </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                    <div class="row">
                                        <div class="col-md-5" id="tech-col">
                                            <img id="tech-node" src={nodePic}/> 
                                        </div>
                                        <div class="col-md-7 align-self-center">
                                            (fast and efficient)
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2" id="tech-ex">
                                            <img  id="tech-ex" src={expressPic} /> 
                                        </div>
                                        <div class="col-md-3"></div>
                                        <div class="col-md-7 align-self-center">
                                            (powerful middleware)
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> Database </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                <div class="row">
                                    <div class="col-md-12" id="tech-col"><img  id="tech-mongo" src={mongoPic} /> </div>
                                    </div>
                                    <div class="row">
                                    <div class="col-md-12" id="tech-col">(scalable and powerful) </div>
                                    
                                    </div>
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> Front-End </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                <div class="row">
                                    <div class="col-md-12" id="tech-col"><img  id="tech-react" src={reactPic} /> </div>
                                    </div>
                                    <div class="row">
                                    <div class="col-md-12" id="tech-col">(SEO friendly and powerful) </div>
                                    
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div class="row" id="info-prov-row">
                            <div class="col-md-1"></div>
                                <div class="col-md-4">
                                    <div  class="row" id="info-prov-header">
                                        <div class="col">
                                            <span id="text-content-style"> Authentication </span>
                                        </div>
                                    </div>
                                    <p id="text-list-style" class="center-wid">
                                        <div class="row">
                                            <div class="col-md-4" >
                                                <img  id="tech-node" src={passportPic}/> 
                                            </div>
                                            <div class="col-md-8 align-self-center">
                                                (flexible and modular)
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <img  id="tech-jwt" src={JWTPic}/> 
                                            </div>
                                            <div class="col-md-2"></div>
                                            <div class="col-md-8 align-self-center">
                                                (efficient hashing/encrpyting)
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4" id="tech-ex">
                                                <img id="tech-node" src={reduxPic}/> 
                                            </div>
                                            <div class="col-md-8 align-self-center">
                                                (powerful state manager)
                                            </div>
                                        </div>
                                    </p>
                                </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> Forum </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                    <div class="row">
                                        <div class="col-md-12" id="tech-col">
                                            <img  id="tech-mongo" src={nodeBBPic} /> 
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12" id="tech-col">(Fast, great plugins, scalable) </div>
                                    </div>
                                </p>
                            </div>
                            <div class="col-md-1"></div>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                </div>

                <div class="row" id="next-prev-buttons" >
                    <div class="col">
                        <NavLink to={"/features/dark-mode"} id="link-no-style" >
                            <button  id="button-l" class="button-center-l" >Prev</button>
                        </NavLink>
                    </div>
                    <div class="col">
                        <NavLink to={"/ui"} id="link-no-style" >
                            <button  id="button-l" class="button-center-r">Next</button>
                        </NavLink>
                    </div>
                </div>
                
                <div class="row" id="idea-bottom-space"></div>

                <div id="footer-div">
                    <Footer/>
                </div>
            </div>
        );
    }
}
export default Tech;