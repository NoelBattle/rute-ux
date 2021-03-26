import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom"
import '../style/Timeline.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import  timePic from './../imgs/timeline/timeline.png'
import Footer from "./layout/Footer"

class Timeline extends Component {

  render() {
    return (
      <div id="comp-div"  style={{zIndex:"2"}}>
        <div class="row" id="page-header">
            <div class="col" id="text-center">
                <div class="row">
                    <div class="col">
                        <FontAwesomeIcon id="header-icon"  icon={faClock} />
                    </div>
                </div>
                <div class="row" id="header-text">
                    <div class="col">Timeline</div>
                </div>
                <div class="row" id="idea-idea">
                    <div class="col" id="text-content-style"></div>
                </div>
            </div>
        </div>
        <div class="row" id="time-space"></div>
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <div class="row" id="ui-pic-row">
                    <div class="col-md">
                        <img  id="time-line" src={timePic} />
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div>
        <div class="row" id="idea-bottom-space"></div>
        <div id="footer-div">
            <Footer/>
        </div>
    </div>
    );
  }
}
export default Timeline;