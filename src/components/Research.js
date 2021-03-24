import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../style/Research.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoll } from '@fortawesome/free-solid-svg-icons'
import  pcTruff from './../imgs/research/pc-truff.png'
import Footer from "./layout/Footer";

class Research extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
       }
       
    render() {
        return (
            <div id="comp-div">
                <div class="row" id="page-header">
                    <div class="col" id="text-center">
                        <div class="row">
                            <div class="col">
                                <FontAwesomeIcon id="header-icon"  icon={faPoll} />
                            </div>
                        </div>
                        <div class="row" id="header-text" >
                            <div class="col">Research</div>
                        </div>
                        <div class="row" id="idea-idea">
                            <div class="col" id="text-content-style">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="idea-space"></div>
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10" id="content-col">
                        <div>
                            <div id="res-wrap-div">
                                <span id="res-pic">
                                    <img alt="timer" id="res-pc" src={pcTruff} />
                                </span>
                            </div>
                            <p id="text-content-style" id="text-wrap">
                            I thought the idea was solid, but I wanted to see if other people felt the same way. I interviewed 25 students (15 UCLA pre-med STEM students and 10 UCLA graduates either accepted or currently enrolled in medical schools). From the interviews, I compiled a list of common pain points for the popular med school information services.
                            </p>
                        </div>
                        
                    </div>
                    <div class="col-md-1"></div>
                </div>
              
                <div class="row" id="info-prov-row">
                            <div class="col-md-3">
                                <div  class="row" id="res-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> MSARS </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                    <li>Important Info behind paywall.</li>
                                    <li>Information page is long and cluttered</li>
                                </p>
                            </div>
                            <div class="col-md-3">
                                <div  class="row" id="res-prov-header">
                                    <div class="col">
                                        <span id="text-content-style">Princeton Review</span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                    <li>Not enough meaningful info</li>
                                    <li>Info is outdated or wrong</li>
                                </p>
                            </div>
                            <div class="col-md-3">
                                <div  class="row" id="res-prov-header">
                                    <div class="col">
                                        <span id="text-content-style"> MSARS </span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                <li>Forum is cluttered</li>
                                        <li>Toxic/unhelpful community</li>
                                </p>
                            </div>
                            <div class="col-md-3">
                                <div  class="row" id="res-prov-header">
                                    <div class="col">
                                        <span id="text-content-style">Student Doctor Network:</span>
                                    </div>
                                </div>
                                <p id="text-list-style" class="center-wid">
                                <li>Website is unappealing</li>
                                    <li>Too much uncessary data</li>
                                </p>
                            </div>
                        </div>
                      
                        <p id="text-content-style">
                        Once I had identified the pain points for med school applicants, I was ready to start constructing the flow.                 
                        </p>
                

                <div class="row" id="next-prev-buttons" >
                    <div class="col">
                        <NavLink to={"/idea"} id="link-no-style" >
                            <button  id="button-l" class="button-center-l" > Prev</button>
                        </NavLink>
                    </div>
                    <div class="col">
                        <NavLink to={"/info-architecture"} id="link-no-style" >
                            <button  id="button-l" class="button-center-r" >Next</button>
                        </NavLink>
                    </div>
                </div>

                <div id="footer-div" >
                    <Footer/>
                </div>
            </div>
        );
    }
}
export default Research;