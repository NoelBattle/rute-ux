import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../style/Idea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEdit, faCircle, faBars,faTachometerAlt,faUserGraduate,faSearch,faPencilAlt,faComments,faToggleOff,faToggleOn,faLightbulb } from '@fortawesome/free-solid-svg-icons'

import  Snout from './../imgs/idea/snout.png'
import Footer from "./layout/Footer";

class Idea extends Component {
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
                                <FontAwesomeIcon id="header-icon"  icon={faLightbulb} />
                            </div>
                        </div>
                        <div class="row" id="header-text" >
                            <div class="col">Idea</div>
                        </div>
                        <div class="row" id="idea-idea">
                            <div class="col" id="text-content-style">
                                To create a comphrensive hub of med school tools and information, and get to the “rute” of med school applications.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row" id="idea-space"></div>

                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <div>
                            <div id="idea-wrap-div">
                                <span id="idea-pic">
                                    <img alt="timer" id="idea-snout" src={Snout} />
                                </span>
                            </div>
                            <p id="text-content-style" id="text-wrap">
                            2020, like for so many other recent grads, was an unmitigated DISASTER.
                            Eventually, I knew that when it came to beefing up my UX/UI portfolio, I needed to take matters in to my own hands. 
                            In order to do so, I needed to either improve upon an existing product, or create my own. This was around the same time two of my fraternity brothers from UCLA were accepted into medical school. While celebrating their accomplishments (on Zoom of course), they regaled me with stories of the immense struggle that is the med school application process. One thing they both took away from the experience was how disorganized and dispersed all the necessary resources are.
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-8">
                                <p id="text-content-style" class="center-wid">
                                    There are different websites for: 
                                        <li>-School data (Princeton Review, MSARS)</li>
                                        <li>-Test/Important Dates (AAMC)</li>
                                        <li>Forums (Student Doctor Network,Savvy Premed)</li>
                                        <li>Essays planning (Google Drive, Motivate MD)</li>
                                </p>
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                        <p id="text-content-style">
                            Keeping track of  all this info coupled with a rigorous  school curriculum, extra-curriculars, work AND a social life is a PAIN, so I sought to solve this problem.
                        </p>
                    </div>
                    <div class="col-md-1"></div>
                </div>

                <div class="row" id="next-prev-buttons" >
                    <div class="col">
                    <NavLink to={"/"} id="link-no-style" >
                        <button  id="button-l" class="button-center-l" >
                            Prev
                        </button>
                        </NavLink>
                    </div>
                    <div class="col">
                    <NavLink to={"/research"} id="link-no-style" >
                        <button  id="button-l" class="button-center-r" >
                            Next
                        </button>
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
export default Idea;