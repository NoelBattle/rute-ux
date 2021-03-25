import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../../style/features/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from "react-player"
import essayGif from '../../imgs/gifs/essay.gif'
import notesIcon from '../../imgs/ui/essay-icon.png'
import Footer from "./../layout/Footer";

class Essay extends Component {
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
                                <FontAwesomeIcon id="header-icon"  icon={faPencilAlt} />
                            </div>
                        </div>
                        <div class="row" id="header-text" >
                            <div class="col">Essay Planner</div>
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
                            <div id="res-wrap-div">
                                <span id="res-pic">
                                    <img alt="notes" id="res-pc" src={notesIcon} />
                                </span>
                            </div>
                            <p id="text-content-style">
                            A major pain point I found during my research was the lack of a good essay planner. Since each school requires different types of essays and each of those schools has different essay prompts, staying organized is difficult.
                            </p>
                        </div>
                        <p id="text-content-style">
                            The ‘Essay Planner’ provides a place for a user to take general notes pertaining to particular essay categories. The 14 different essay categories are listed below.                  
                        </p>
                        <div class="row">
                            <div class="col">
                                <li>Why Us?</li>
                                <li>Diversity</li>
                                <li>Challenge</li>
                                <li>Weakness</li>
                                <li>Goals</li>
                                <li>Academic Explanation</li>
                                <li>Gap Year</li>
                            </div>
                            <div class="col">
                                <li>Experience</li>
                                <li>Free</li>
                                <li>Reapplication</li>
                                <li>Leadership</li>
                                <li>Ties</li>
                                <li>Research</li>
                                <li>Combo</li>
                            </div>
                        </div>
                        <p id="text-content-style"></p>
                        <p id="text-content-style">
                            In the <NavLink to={"/about"} id="link-no-styl" > 
                            'Data Collection' </NavLink> phase, I found each school’s required essays and previous year’s prompts. This allowed me to show which schools are needed for a particular essay category.
                        </p>
                        <p id="text-content-style">
                        Once the user is done planning, Rute creates a docx file filled with a section for each school on a user’s favorites, accompanied by the required essay categories, and past prompts for the category.
                        </p>
                        <p id="text-content-style">
                            Users can download the document to their PC, or they can sign into their google account and upload the file to Google Drive. When a user signs into Google Drive, Rute automatically creates a folder in their Drive called ‘Rute’. This is where the docx file is uploaded. 
                        </p>
                        <p id="text-content-style">
                            The  video below is fast forwarded to the ‘Essay Planner’ section of the ‘Rute Website Flow’ demo video.
                        </p>
                        <p id="text-content-style">
                            <div>
                                <ReactPlayer  controls={true} width="40vw" url="https://youtu.be/9KIOTdFXGeg?t=537"/>
                            </div>
                        </p>
                    </div>
                    <div class="col-md-1"></div>
                </div>

                <div class="row" id="next-prev-buttons" >
                    <div class="col">
                    <NavLink to={"/features/student-profile"} id="link-no-style" >
                        <button  id="button-l" class="button-center-l" >
                            Prev
                        </button>
                        </NavLink>
                    </div>
                    <div class="col">
                    <NavLink to={"/features/cost-calculator"} id="link-no-style" >
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
export default Essay;