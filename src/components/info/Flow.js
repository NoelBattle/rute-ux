import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom"
import '../../style/Info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEdit, faCircle, faBars,faTachometerAlt,faUserGraduate,faSearch,faPencilAlt,faComments,faToggleOff,faToggleOn,faPoll,faSitemap } from '@fortawesome/free-solid-svg-icons'
import  Flow from '../../imgs/info/ux-flow.png'
import Footer from "../layout/Footer"

class FlowChart extends Component {
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
                        <FontAwesomeIcon id="header-icon"  icon={faSitemap} />
                    </div>
                </div>
                <div class="row" id="header-text">
                    <div class="col">User Flow</div>
                </div>
            </div>
            <div class="row" id="idea-idea"></div>
        </div>
        <div class="row" id="flow-space"></div>
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
            <p id="text-content-style">
            I created this flow chart, because I wanted to get an idea of the  user’s experience using the site from start  to finish.
            I developed a flow that allows  for an intuitive user experience.    
                </p>
            </div>
            <div class="col-md-1"></div>
        </div>
    
        <div class="row" id="info-chart-div">
            <span>
                <img alt="flow diagram" id="info-flow-pic" src={Flow} />
            </span>
        </div>
        <div class="row" id="next-prev-buttons">
            <div class="col">
                <button  id="button-l" class="button-center-l">
                    <NavLink to={"/info-architecture"} id="link-no-style">Prev</NavLink>
                </button>
            </div>
            <div class="col">
                <button  id="button-l" class="button-center-r">
                    <NavLink to={"/data-collection"} id="link-no-style">Next</NavLink>
                </button>
            </div>
        </div>
        <div id="footer-div">
            <Footer/>
        </div>
    </div>
    );
  }
}
export default FlowChart;