import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import ReactPlayer from "react-player"
import '../../style/features/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import uiPig from '../../imgs/ui/pig-fun.png'
import Footer from "./../layout/Footer";

class Forgot extends Component {
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
                                <FontAwesomeIcon id="header-icon"  icon={faQuestion} />
                            </div>
                        </div>
                        <div class="row" id="header-text" >
                            <div class="col">Password Changing</div>
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
                                    <img alt="timer" id="res-pc" src={uiPig} />
                                </span>
                            </div>
                            <p id="text-content-style">
                            Any functional website will allow its users to change their password. Rute allows this through the edit account section. Here users can change their name and password. To improve UX, I added a password requirement filter system so users know if their password meets the correct requirements as they type. I also added a password show/hide mask button so users can check their password input.
                            </p>
                        </div>
                        <p id="text-content-style">
                        The video below is fast forwarded to the ‘Change Password’ section of the ‘Rute  Website Flow’ demo video.
                        </p>
                        <p id="text-content-style">
                            <div>
                                <ReactPlayer  controls={true} width="40vw" url="https://youtu.be/9KIOTdFXGeg?t=663"/>
                            </div>
                        </p>
                        <p id="text-content-style">
                        If a user forgets their password they can change it through the forgot password section. Once they enter their email, Rute creates a token that expires in 5 minutes. That token is appended to a “change password” link sent to the user’s email address. Once the user visits the link, they will be prompted to set a new password.
                        </p>
                        <p id="text-content-style">
                        The video below is fast forwarded to the ‘Forgot Password’ section of the ‘Rute  Website Flow’ demo video.
                        </p>
                        <div>
                            <ReactPlayer  controls={true} width="40vw" url="https://youtu.be/9KIOTdFXGeg?t=731"/>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                </div>

                <div class="row" id="next-prev-buttons" >
                    <div class="col">
                    <NavLink to={"/features/calendar"} id="link-no-style" >
                        <button  id="button-l" class="button-center-l" >
                            Prev
                        </button>
                        </NavLink>
                    </div>
                    <div class="col">
                    <NavLink to={"/features/forum"} id="link-no-style" >
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
export default Forgot;