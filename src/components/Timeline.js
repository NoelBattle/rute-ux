import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../style/Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEdit, faCircle, faBars,faTachometerAlt,faUserGraduate,faSearch,faPencilAlt,faComments,faToggleOff,faToggleOn,faLightbulb, faPaintBrush, faArrowDown, faSkull, faClock } from '@fortawesome/free-solid-svg-icons'


import  Dir from './../imgs/wireframe/Directory.png'

import  timePic from './../imgs/timeline/timeline.png'
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

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time:1,
          navCol:"no",
          
          
      } 
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
                        <FontAwesomeIcon id="header-icon"  icon={faClock} />
                    </div>
                </div>
                <div class="row" id="header-text" >
                    <div class="col">Timeline</div>
                </div>
                <div class="row" id="idea-idea">
                    <div class="col" id="text-content-style">
                    
                    </div>
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