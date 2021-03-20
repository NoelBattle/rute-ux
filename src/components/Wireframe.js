import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../style/Wireframe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEdit, faCircle, faBars,faTachometerAlt,faUserGraduate,faSearch,faPencilAlt,faComments,faToggleOff,faToggleOn,faLightbulb, faPaintBrush, faArrowDown, faSkull } from '@fortawesome/free-solid-svg-icons'


import  Dir from './../imgs/wireframe/Directory.png'

import  Snout from './../imgs/idea/snout.png'
import Footer from "./layout/Footer";
import pigOpen from './../imgs/ui/pig-open.png'
import pigClosed from './../imgs/ui/pig-closed.png'
import pigDr from './../imgs/ui/pig-dr.png'
import pigFun from './../imgs/ui/pig-fun.png'
import pigMask from './../imgs/ui/pig-mask.png'
import Pearl from './../imgs/ui/pearl.jpg'
import redT from './../imgs/ui/truffle-red.png'
import yellowT from './../imgs/ui/truffle-yellow.png'
import blueT from './../imgs/ui/truffle-blue.png'
import blackT from './../imgs/ui/truffle-black.png'
import greenT from './../imgs/ui/truffle-green.png'
import Color from './../imgs/ui/rute-colors.png'
import Demo from './../imgs/ui/dark-light-demo.GIF'

class Wireframe extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time:1,
          navCol:"no",
          
          
      } 
    }
    componentDidMount() {
        window.scrollTo(0, 0)
       }

  render() {
    return (
      <div id="comp-div" 
      //(this.state.navCol)=="no"?"comp-d-left-border":""} 
      style={{zIndex:"2"}}>
        <div class="row" id="page-header">
            <div class="col" id="text-center">
            
                <div class="row">
                    <div class="col">
                        <FontAwesomeIcon id="header-icon"  icon={faSkull} />
                    </div>
                </div>
                <div class="row" id="header-text" >
                    <div class="col">Wireframing</div>
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
                <p id="text-content-style">
                Now it was time to make the skeleton. I created these low fidelity wireframes for the site’s routes in Adobe XD. 
                Below are the wireframes for the main routes, the other routes’ wireframes can be found  in the 
                ‘Features’ <NavLink to={"/wireframing"} id="navhea" >
                            section
                        </NavLink> . 
                I used these wireframes as a visual reference when I coded prototypes in React.
                </p>

                <p id="text-content-style">
                Note: Non-registered users can only access the Homepage and Directory. Trying to access another route prompts the user to login/register. 
                More on this in the 'Login/Register' <NavLink to={"/wireframing"} id="navhea" >
                            section
                        </NavLink> . 
                </p>

                <div class="row" id="ui-pic-row">
                    <div class="col-md-2 align-self-center"><span id="wireframe-label">Home</span></div>
                    <div class="col-md-10">
                        <img  id="wireframe-dir" src={Dir} />
                    </div>
                </div>
                <div class="row" id="ui-pic-row">
                    <div class="col-md-2 align-self-center"><span id="wireframe-label">Profile</span></div>
                    <div class="col-md-10">
                        <img  id="wireframe-dir" src={Dir} />
                    </div>
                </div>
                <div class="row" id="ui-pic-row">
                    <div class="col-md-2 align-self-center">Dashboard</div>
                    <div class="col-md-10">
                        <img  id="wireframe-dir" src={Dir} />
                    </div>
                </div>
                <div class="row" id="ui-pic-row">
                    <div class="col-md-2 align-self-center">Directory</div>
                    <div class="col-md-10">
                        <img  id="wireframe-dir" src={Dir} />
                    </div>
                </div>
                <div class="row" id="ui-pic-row">
                    <div class="col-md-2 align-self-center">Essays</div>
                    <div class="col-md-10">
                        <img  id="wireframe-dir" src={Dir} />
                    </div>
                </div>
                <div class="row" id="ui-pic-row">
                    <div class="col-md-2 align-self-center">Forum</div>
                    <div class="col-md-10">
                        <img  id="wireframe-dir" src={Dir} />
                    </div>
                </div>

                <p id="text-content-style">
                Now that I had built the structure for Rute, it was time to start filling it with data. 
                </p>
            </div>
            <div class="col-md-1"></div>
        </div>

        <div class="row" id="next-prev-buttons" >
            <div class="col">
            <NavLink to={"/info-architecture"} id="link-no-style" >
                <button  id="button-l" class="button-center-l" >
                    Prev
                </button>
                </NavLink>
            </div>
            <div class="col">
            <NavLink to={"/data-collection"} id="link-no-style" >
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
export default Wireframe;