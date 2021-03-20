import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import ReactPlayer from "react-player"
import '../../style/features/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faPencilAlt, faDollarSign, faUpload, faCalendarAlt, faMoon } from '@fortawesome/free-solid-svg-icons'

import uiCal from '../../imgs/ui/calendar.png'

import essayGif from '../../imgs/gifs/essay.gif'
import notesIcon from '../../imgs/ui/essay-icon.png'

import Footer from "./../layout/Footer";

class Darkmode extends Component {
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
                            <FontAwesomeIcon id="header-icon"  icon={faMoon} />
                        </div>
                    </div>
                    <div class="row" id="header-text" >
                        <div class="col">Dark Mode</div>
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
                   
                    <p id="text-content-style">
                    I couldn’t decide whether the dark theme or the light theme looked better, so I decided to give the power to the user. 
For logged in user’s their preference is saved to the database, and will automatically set after future logins.                     </p>
                </div>

              
             
                <p id="text-content-style">
                The video below is a demo of the dark mode.
                </p>
                <p id="text-content-style">
                <div>
          <ReactPlayer  controls={true} width="40vw"
        url="https://www.youtube.com/watch?v=lRZMP1PSr4Q"
      />
      
      </div>
                </p>
                <p id="text-content-style">
                </p>
                <p id="text-content-style">
                </p>
                
             
                    
                     
                </div>
                <div class="col-md-1"></div>
            </div>

            <div class="row" id="next-prev-buttons" >
                <div class="col">
                <NavLink to={"/features/forum"} id="link-no-style" >
                    <button  id="button-l" class="button-center-l" >
                        Prev
                    </button>
                    </NavLink>
                </div>
                <div class="col">
                <NavLink to={"/technologies"} id="link-no-style" >
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
export default Darkmode;