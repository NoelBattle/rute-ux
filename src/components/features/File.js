import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import ReactPlayer from "react-player"
import '../../style/features/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faPencilAlt, faDollarSign, faUpload } from '@fortawesome/free-solid-svg-icons'

import uiDoc from '../../imgs/ui/doc.png'

import essayGif from '../../imgs/gifs/essay.gif'
import notesIcon from '../../imgs/ui/essay-icon.png'

import Footer from "./../layout/Footer";

class Files extends Component {
    constructor(props) {
        super(props);
        this.state = {
      } 
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    setGif(page){
        this.setState({gif:page})
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
                            <FontAwesomeIcon id="header-icon"  icon={faUpload} />
                        </div>
                    </div>
                    <div class="row" id="header-text" >
                        <div class="col">File Upload</div>
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
                            <img alt="timer" id="res-pc" src={uiDoc} />
                        </span>
                    </div>
                    <p id="text-content-style">
                    Another pain point I found was that keeping track of the necessary documents to apply to  medical school (resumes, transcripts, score reports,  etc.) is hard. I sought to solve this by adding a file upload feature to Rute. Users can upload and remove their files from the database anytime. 
                    </p>
                                    </div>

              
             
                <p id="text-content-style">
                The  video below is fast forwarded to the 'File Upload' section of the ‘Rute Website Flow’ demo video.
                </p>
                <p id="text-content-style">
                <div>
          <ReactPlayer  controls={true} width="40vw"
        url="https://youtu.be/9KIOTdFXGeg?t=386"
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
                <NavLink to={"/features/cost-calculator"} id="link-no-style" >
                    <button  id="button-l" class="button-center-l" >
                        Prev
                    </button>
                    </NavLink>
                </div>
                <div class="col">
                <NavLink to={"/features/calendar"} id="link-no-style" >
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
export default Files;