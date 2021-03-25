import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import ReactPlayer from "react-player"
import '../../style/features/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faPencilAlt, faDollarSign, faUpload, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import uiCal from '../../imgs/ui/calendar.png'

import essayGif from '../../imgs/gifs/essay.gif'
import notesIcon from '../../imgs/ui/essay-icon.png'

import Footer from "./../layout/Footer";

class Calendar extends Component {
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
                                <FontAwesomeIcon id="header-icon"  icon={faCalendarAlt} />
                            </div>
                        </div>
                        <div class="row" id="header-text" >
                            <div class="col">Calendar</div>
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
                                    <img alt="calendar" id="res-pc" src={uiCal} />
                                </span>
                            </div>
                            <p id="text-content-style">
                            Keeping track of important dates for multiple schools is annoying. That is why I added a calendar to Rute. The event system is incomplete 
                            (see <NavLink to={"/to-do"}>To Do</NavLink>), but when it is finished the calendar will pull all the important dates/events stored in the database for a school and fill the calendar.  I added download functionality, so users can download the calendar ics file and import it into their own calendars if they please.
                            </p>
                        </div>
                        <p id="text-content-style">
                        The video below is fast forwarded to the ‘Calendar’ section of the ‘Rute Website Flow’ demo video.
                        </p>
                        <p id="text-content-style">
                            <div>
                                <ReactPlayer  controls={true} width="40vw" url="https://youtu.be/9KIOTdFXGeg?t=411"/>
                            </div>
                        </p>
                    </div>
                    <div class="col-md-1"></div>
                </div>

                <div class="row" id="next-prev-buttons" >
                    <div class="col">
                    <NavLink to={"/features/file-upload"} id="link-no-style" >
                        <button  id="button-l" class="button-center-l">
                            Prev
                        </button>
                        </NavLink>
                    </div>
                    <div class="col">
                    <NavLink to={"/features/change-password"} id="link-no-style" >
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
export default Calendar;