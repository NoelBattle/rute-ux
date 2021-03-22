import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import ReactPlayer from "react-player"
import '../style/Me.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faBrain } from '@fortawesome/free-solid-svg-icons'
import uiMe from '../imgs/about/me.JPG'
import Footer from "./layout/Footer";

class Me extends Component {
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
                                <FontAwesomeIcon id="header-icon"  icon={faBrain} />
                            </div>
                        </div>
                        <div class="row" id="header-text" >
                            <div class="col">About Me</div>
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
                    <div class="col-md-10">
                        <div>
                            <div id="cal-wrap-div">
                                <span id="res-pic">
                                    <img alt="timer" id="me-pic" src={uiMe} />
                                </span>
                            </div>
                            <p id="text-content-style">
                            I am an extremely motivated individual with passions in UX, design, coding, and storytelling. I graduated from UCLA in 2020 with a B.S. in Cognitive Science and a specialization in Computing.
                            </p>
                        </div>
                
                        <p id="text-content-style">
                        While I  was  taking classes at UCLA, I started my coding journey enrolling in the UCLA Extension 6 month ‘Full Stack Web Development  Bootcamp’. This is where I was first introduced to the M.E.R.N stack. After my certification, I also took various C++, web development, and python courses for my major and specialization. 
                        </p>
                        <p id="text-content-style">
                        My UX experience consists of a UX internship at LILO, a luxury pool float company, and a marketing internship at Rice Games analyzing Shujinkou, a Japanese language learning video game.
                        </p>
                        <p id="text-content-style">
                        Using the skills I learned from these experiences, I created Rute. 
                        I made Rute primarily to gain a comprehensive understanding of the website creation process. The goal was to optimize all the current medical school application tools and combine them into one website.
                        The experience has allowed me the opportunity to work in many different domains outside of my comfort zone. However through my fair share of trial and error, I have gained a myriad of reproducible skills and am super excited for whichever project I embark on next.                        
                        </p>
                    </div>
                    <div class="col-md-1"></div>
                </div>

                <div class="row" id="next-prev-buttons" >
                    <div class="col">
                    <NavLink to={"/todo"} id="link-no-style" >
                        <button  id="button-l" class="button-center-l" >
                            Prev
                        </button>
                        </NavLink>
                    </div>
                    <div class="col">
                    <NavLink to={"/timeline"} id="link-no-style" >
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
export default Me;