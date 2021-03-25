import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom"
import '../style/Tech.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import Footer from "./layout/Footer"


class Todo extends Component {
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
                            <FontAwesomeIcon id="header-icon"  icon={faClipboardList} />
                            </div>
                        </div>
                        <div class="row" id="header-text" >
                            <div class="col">To Do</div>
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
                                        <span id="text-content-style"> Backend </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                    <div class="row">
                                        <li class="col align-self-center">
                                            Complete event system
                                        </li>
                                    </div>
                                    <div class="row">
                                        <li class="col align-self-center">
                                            Finish the progress circles, compare page, and overview page
                                        </li>
                                    </div>
                                    <div class="row">
                                        <li class="col align-self-center">
                                            Upload to Digital Ocean server
                                        </li>
                                    </div>
                                    <div class="row">
                                        <li class="col align-self-center">
                                            Complete forum integration
                                        </li>
                                    </div>
                                    <div class="row">
                                        <li class="col align-self-center">
                                            HTTPS config/security
                                        </li>
                                    </div>
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> Frontend </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                    <div class="row">
                                        <li class="col align-self-center">
                                            Fix glitches
                                        </li>
                                    </div>
                                    <div class="row">
                                        <li class="col align-self-center">
                                            Improve speed
                                        </li>
                                    </div>
                                </p>
                            </div>


                            <div class="col-md-4">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> UX </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                    <div class="row">
                                        <li class="col align-self-center">
                                            Alpha/Comprehension testing
                                        </li>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div class="row" id="info-prov-row">
                            <div class="col-md-1"></div>
                                <div class="col-md-4">
                                    <div  class="row" id="info-prov-header">
                                        <div class="col">
                                            <span id="text-content-style"> UI </span>
                                        </div>
                                    </div>
                                    <p id="text-list-style" class="center-wid">
                                        <div class="row">
                                            <li class="col align-self-center">
                                                Finalize fonts and text sizes
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col align-self-center">
                                                Finalize spacing and shadows
                                            </li>
                                        </div>
                                    </p>
                                </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> Data Collection </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                    <div class="row">
                                        <li class="col align-self-center">
                                            Update event data
                                        </li>
                                    </div>
                                    <div class="row">
                                        <li class="col align-self-center">
                                            Add more parameters to the matching algorithm
                                        </li>
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
                        <NavLink to={"/ui"} id="link-no-style" >
                            <button  id="button-l" class="button-center-l" >Prev</button>
                        </NavLink>
                    </div>
                    <div class="col">
                        <NavLink to={"/about-me"} id="link-no-style" >
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
export default Todo;