import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import ReactPlayer from "react-player"
import '../../style/features/Matching.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faPencilAlt, faDollarSign, faUpload, faCalendarAlt, faLaptopCode, faHeartbeat, faDoorOpen } from '@fortawesome/free-solid-svg-icons'

import uiApple from '../../imgs/ui/apple.png'

import essayGif from '../../imgs/gifs/essay.gif'
import notesIcon from '../../imgs/ui/essay-icon.png'

import Footer from "./../layout/Footer";

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
      } 
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

 
      
  render() {
    return (
        <div id={(this.state.darkmode)=="yes"?"comp-div-d":"no"?"comp-div":""} 
        class={(((this.state.navCol)=="no")&&((this.state.darkmode)=="yes"))?"comp-d-left-border":""}
            style={{zIndex:"2"}}>
            <div class="row" id="page-header">
                <div class="col" id="text-center">
                    <div class="row">
                        <div class="col">
                            <FontAwesomeIcon id="header-icon"  icon={faDoorOpen} />
                        </div>
                    </div>
                    <div class="row" id="header-text" >
                        <div class="col">Directory and School</div>
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
                            <img alt="timer" id="res-pc" src={uiApple} />
                        </span>
                    </div>
                    <p id="text-content-style">
                    During my user research phase, I discovered that two big pain points of the current medical school sites were that they either had too little information or too much scrolling. I try to solve this through the use of tabs. Every schools’ information, social media, and contact links are up to date.
                    </p>
                    </div>
            
                <p id="text-content-style">
                The video below is fast forwarded to the Directory and School Pages sections of the ‘Rute Website Flow’ demo video.
                </p>
                <p id="text-content-style">
                <div>
          <ReactPlayer  controls={true} width="40vw"
        url="https://youtu.be/9KIOTdFXGeg?t=91"
      />
      
      </div>
                </p>
                <p id="text-content-style">
                </p>
               
                
             
                    
                     
                </div>
                <div class="col-md-1"></div>
            </div>

            <div class="row" id="next-prev-buttons" >
                <div class="col">
                <NavLink to={"/data-collection"} id="link-no-style" >
                    <button  id="button-l" class="button-center-l" >
                        Prev
                    </button>
                    </NavLink>
                </div>
                <div class="col">
                <NavLink to={"/features/login-register"} id="link-no-style" >
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
export default Directory;