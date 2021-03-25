import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../../style/Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSitemap } from '@fortawesome/free-solid-svg-icons'
import  pigMask from '../../imgs/info/pig-mask.png'
import  infoArch from '../../imgs/info/info-arch.png'
import Footer from "../layout/Footer";

class Info extends Component {
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
                            <FontAwesomeIcon id="header-icon"  icon={faSitemap} />
                            </div>
                        </div>
                        <div class="row" id="header-text" >
                            <div class="col">Information Architecture</div>
                        </div>
                        <div class="row" id="idea-idea"></div>
                    </div>
                </div>
                <div class="row" id="idea-space"></div>

                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <div>
                            <div id="info-wrap-div">
                                <div class="row">
                                    <div id="info-meet-pearl" >
                                        <span id="text-image-style">Meet Pearl!</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <span id="info-pic">
                                        <img alt="pig-mask" id="info-pig" src={pigMask} />
                                    </span>
                                </div>
                            </div>
                            <p id="text-content-style">
                            I used my interview findings to create a provisional persona, Pearl, to better understand the needs of pre-med students.
                            </p>
                            <p id="text-content-style">
                            Pearl is a 20 year old junior with a passion for medicine and is heavily involved in extracurriculars. Pearl did well on her MCAT and has a 3.8 GPA. However, she doesn’t have many other pre-med friends, and is pretty overwhelmed by the application process.
                            </p>
                        </div>
                        <div class="row" id="header2-text" >
                            <div id="header2-col">Provisional Persona</div>
                        </div>
                        <div class="row" id="info-prov-row">
                            <div class="col-md-3">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> About </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                <li>20 years old</li>
                                        <li>Pre-med</li>
                                        <li>Works</li>
                                        <li>Busy</li>
                                </p>
                            </div>
                            <div class="col-md-3">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> Motivations </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                    <li>Maintain balance in her life</li>
                                    <li>Meet like  minded individuals</li>
                                </p>
                            </div>
                            <div class="col-md-3">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> Core Needs </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                    <li>A way to track important dates</li>
                                    <li>A place to talk  with other pre-med students</li>
                                    <li>An idea of where to apply</li>
                                </p>
                            </div>
                            <div class="col-md-3">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> Pain Points </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                    <li>Websites are disorganized</li>
                                    <li>Uses too many different websites</li>
                                    <li>Forums are cluttered or inactive</li>
                                </p>
                            </div>
                        </div>
                        <p id="text-content-style">
                        To brainstorm features for the site, I made a How Might We (HMW) diagram using insight I gained from research and Pearl’s provisional persona.         
                        </p>
                        <p id="text-content-style">
                            How might we help Pearl...
                        </p>
                        <div class="row" id="info-prov-row">
                            <div class="col-md-4">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> Get School Info </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                        <li>Organize/Condense med school info</li>
                                        <li>Create Discussion Forums</li>
                                        <li>Create a school favorites list</li>
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> Find Schools </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                    <li>Matching Algorithm</li>
                                    <li>Search Filters</li>
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div  class="row" id="info-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> Stay Organized </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                <li>A way to track important dates</li>
                                    <li>Reminders/Calendar Page</li>
                                    <li>Progress Tracker</li>
                                    <li>Student Profile Log</li>
                                </p>
                            </div>
                        </div>
                        <p id="text-content-style">
                        After identifying the main features and the data structure, I mapped out the information architecture below to show the hierarchy of features. This helped me organize the type of information on each page.
                        </p>
                        <p id="text-content-style">
                        In order to speed up page navigation, I added the profile, reminders, favorites and matching algorithm sections to the Dashboard route. These sections provide a condensed view of the information with links/buttons directing users to the main features. I added these features to the Dashboard to prevent navbar clutter and save the user time.
                        </p>
                        <div class="row" id="header2-text" >
                            <div class="col">Info Architecture</div>
                        </div>
                        <div class="row">
                            <img alt="info architecture" id="info-arch" src={infoArch} />
                        </div>
                        <p id="text-content-style">
                        Next I created a user <NavLink to={"/user-flow"} id="" >flow chart</NavLink>, to get an idea of the user’s experience using the site from start to finish. I developed a flow that allows for an intuitive user experience.
                        </p>
                    </div>
                    <div class="col-md-1"></div>
                </div>

            <div class="row" id="next-prev-buttons">
                <div class="col">
                <NavLink to={"/research"} id="link-no-style" >
                    <button  id="button-l" class="button-center-l" >Prev</button>
                    </NavLink>
                </div>
                <div class="col">
                <NavLink to={"/data-collection"} id="link-no-style" >
                    <button  id="button-l" class="button-center-r" >Next</button>
                </NavLink>
                </div>
            </div>
            
            <div id="footer-div">
                <Footer/>
            </div>
        </div>
        );
    }
}
export default Info;