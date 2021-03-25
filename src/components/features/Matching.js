import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom"
import ReactPlayer from "react-player"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import uiRank from '../../imgs/ui/truff-rank.png'
import Footer from "./../layout/Footer"

class Matching extends Component {
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
                                <FontAwesomeIcon id="header-icon"  icon={faLaptopCode} />
                            </div>
                        </div>
                        <div class="row" id="header-text" >
                            <div class="col">Matching Algorithm</div>
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
                                    <img alt="rank" id="res-pc" src={uiRank} />
                                </span>
                            </div>
                            <p id="text-content-style">
                            To help users better choose which schools they want to apply to, I coded a school matching python script. The matching algorithm calculates the mean squared error between a user’s gpa and mcat and a schools’. It also allows state selection, since the in-state data differs from the out-of-state data for the schools. The schools are ranked using truffles. The truffle ranking system is to the right.
                            </p>
                        </div>
                        <p id="text-content-style">
                        I integrated the python script by running it in the background of the server using the 
                        spawn <Link to="/https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options" 
                        target="_blank" onClick={() => window.open("https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options", "_blank")} >method
                        </Link>.
                        </p>
                        <p id="text-content-style">
                        The video below is fast forwarded to the ‘Truffle Generator’ section of the ‘Rute Website Flow’ demo video.
                        </p>
                        <p id="text-content-style">
                            <div>
                                <ReactPlayer  controls={true} width="40vw" url="https://youtu.be/9KIOTdFXGeg?t=345"/>
                            </div>
                        </p>  
                    </div>
                    <div class="col-md-1"></div>
                </div>

                <div class="row" id="next-prev-buttons" >
                    <div class="col">
                    <NavLink to={"/features/favorites-list"} id="link-no-style" >
                        <button  id="button-l" class="button-center-l" >
                            Prev
                        </button>
                        </NavLink>
                    </div>
                    <div class="col">
                    <NavLink to={"/features/school-progress"} id="link-no-style" >
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
export default Matching;