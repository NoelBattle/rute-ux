import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import ReactPlayer from "react-player"
import '../../style/features/Progress.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faPencilAlt, faDollarSign, faUpload, faCalendarAlt, faTasks } from '@fortawesome/free-solid-svg-icons'

import uiCal from '../../imgs/ui/calendar.png'

import essayGif from '../../imgs/gifs/essay.gif'
import prog0 from '../../imgs/ui/progress/progress-bar0.png'
import prog1 from '../../imgs/ui/progress/progress-bar10.png'
import prog2 from '../../imgs/ui/progress/progress-bar20.png'
import prog3 from '../../imgs/ui/progress/progress-bar30.png'
import prog4 from '../../imgs/ui/progress/progress-bar40.png'
import prog5 from '../../imgs/ui/progress/progress-bar50.png'
import prog6 from '../../imgs/ui/progress/progress-bar60.png'
import prog7 from '../../imgs/ui/progress/progress-bar70.png'
import prog8 from '../../imgs/ui/progress/progress-bar80.png'
import prog9 from '../../imgs/ui/progress/progress-bar90.png'
import prog10 from '../../imgs/ui/progress/progress-bar100.png'

import Footer from "./../layout/Footer";

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time:0,
      } 
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.updateTime()
    }
    updateTime(){
        if((this.state.time)>20){
            this.setState({time:0})
        }
       setTimeout(() => {
           let t = this.state.time
           this.setState({ time: t+1 });
           this.updateTime()
         }, 1500);
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
                            <FontAwesomeIcon id="header-icon"  icon={faTasks} />
                        </div>
                    </div>
                    <div class="row" id="header-text" >
                        <div class="col">School Progress</div>
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
                        <img alt="timer"  id="prog-bar" className={((this.state.time===0)||(this.state.time===20))?'animate-vis':'animate-hide'}
        style={{zIndex:"8",}} src={prog0} />
                        <img alt="timer"  id="prog-bar" className={((this.state.time===1)||(this.state.time===19))?'animate-vis':'animate-hide'}
        style={{zIndex:"8",}} src={prog1} />
        <img alt="timer"  id="prog-bar" className={((this.state.time===2)||(this.state.time===18))?'animate-vis':'animate-hide'}
        style={{zIndex:"8",}} src={prog2} />
         <img alt="timer"  id="prog-bar" className={((this.state.time===3)||(this.state.time===17))?'animate-vis':'animate-hide'}
        style={{zIndex:"8",}} src={prog3} />
        
         <img alt="timer"  id="prog-bar" className={((this.state.time===4)||(this.state.time===16))?'animate-vis':'animate-hide'}
        style={{zIndex:"8",}} src={prog4} />
         <img alt="timer"  id="prog-bar" className={((this.state.time===5)||(this.state.time===15))?'animate-vis':'animate-hide'}
        style={{zIndex:"8",}} src={prog5} />
        <img alt="timer"  id="prog-bar" className={((this.state.time===6)||(this.state.time===14))?'animate-vis':'animate-hide'}
        style={{zIndex:"8",}} src={prog6} />
        
         <img alt="timer"  id="prog-bar" className={((this.state.time===7)||(this.state.time===13))?'animate-vis':'animate-hide'}
        style={{zIndex:"8",}} src={prog7} />
         <img alt="timer"  id="prog-bar" className={((this.state.time===8)||(this.state.time===12))?'animate-vis':'animate-hide'}
        style={{zIndex:"8",}} src={prog8} />
        <img alt="timer"  id="prog-bar" className={((this.state.time===9)||(this.state.time===11))?'animate-vis':'animate-hide'}
        style={{zIndex:"8",}} src={prog9} />
        
         <img alt="timer"  id="prog-bar" className={(this.state.time===10)?'animate-vis':'animate-hide'}
        style={{zIndex:"8",}} src={prog10} />
                        </span>
                    </div>
                    <p id="text-content-style">
                    I created the  school progress tracker so users can log and keep track of their application processes. Since some events for the event system take place after certain milestones the date keeping functionality is essential.
                    </p>
                </div>

 <p id="text-content-style">
 For example, I learned from my research that it is recommended that applicants send their secondary essays two weeks after receiving the prompts. This would only be possible to track if the user is able to input the date that they  received them.                    </p>
              
             
                <p id="text-content-style">
                The video below is fast forwarded to the ‘School Progress’ section of the ‘Rute Website Flow’ demo video.
                </p>
                <p id="text-content-style">
                <div>
          <ReactPlayer  controls={true} width="40vw"
        url="https://youtu.be/9KIOTdFXGeg?t=464"
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
                <NavLink to={"/features/matching-algorithm"} id="link-no-style" >
                    <button  id="button-l" class="button-center-l" >
                        Prev
                    </button>
                    </NavLink>
                </div>
                <div class="col">
                <NavLink to={"/features/student-profile"} id="link-no-style" >
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
export default Progress;