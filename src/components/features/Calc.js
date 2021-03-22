import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import ReactPlayer from "react-player"
import '../../style/features/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import uiCalc from '../../imgs/ui/calc.png'
import Footer from "./../layout/Footer";

class Calc extends Component {
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
                                <FontAwesomeIcon id="header-icon"  icon={faDollarSign} />
                            </div>
                        </div>
                        <div class="row" id="header-text" >
                            <div class="col">Cost Calculator</div>
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
                                    <img alt="timer" id="res-pc" src={uiCalc} />
                                </span>
                            </div>
                            <p id="text-content-style">
                            A major pain point I found in my interviews is the extreme cost for submitting medical school applications, especially  for people who are applying to 10+ schools. I made a formula to calculate the total cost to apply per school. I integrated this formula with the school’s information on rute, and now it calculates how much it would cost to  apply to the schools on a user’s favorites list. 
                            </p>
                        </div>
                        <p id="text-content-style">
                        The  video below is fast fowarded to the 'Cost Calculator' section of the ‘Rute  Website Flow’ demo video.
                        </p>
                        <p id="text-content-style">
                            <div>
                                <ReactPlayer  controls={true} width="40vw" url="https://youtu.be/9KIOTdFXGeg?t=278"/>
                            </div>
                        </p>
                    </div>
                    <div class="col-md-1"></div>
                </div>

                <div class="row" id="next-prev-buttons" >
                    <div class="col">
                    <NavLink to={"/features/essay-planner"} id="link-no-style" >
                        <button  id="button-l" class="button-center-l" >
                            Prev
                        </button>
                        </NavLink>
                    </div>
                    <div class="col">
                    <NavLink to={"/features/file-upload"} id="link-no-style" >
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
export default Calc;