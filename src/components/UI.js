import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../style/UI.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEdit, faCircle, faBars,faTachometerAlt,faUserGraduate,faSearch,faPencilAlt,faComments,faToggleOff,faToggleOn,faLightbulb, faPaintBrush, faArrowDown } from '@fortawesome/free-solid-svg-icons'

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
import Rec from './../imgs/gifs/rute-profile-rec.gif'

class UI extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time:1,
          darkmode:"no",
          navCol:"no",
          
          
      } 
    }

    componentDidMount() {
      //  window.scrollTo(0, 0)
              console.log("test"+(this.props.location))
              this.props.parentCallbackDark("no")
        this.updateTime()
        if(this.props.navCol=="yes"){
            this.setState({navCol:"yes"})
            console.log("Yes is col")
          }
          if(this.props.navCol=="no"){
            this.setState({navCol:"no"})
            console.log(" sidenav theere")
          }
         
       }

       updateTime(){
        if((this.state.time)>8){
            this.setState({time:1})
        }
       setTimeout(() => {
           let t = this.state.time
           this.setState({ time: t+1 });
           this.updateTime()
         }, 1500);
    }

    setDark(data){
        console.log("darkness"+data)
        let  darkmode= this.state.darkmode
        
        if(data=="no"){
          this.props.parentCallbackDark("no")
          this.setState({darkmode:"no"})
          this.putDark("no")
        }
        if(data=="yes"){
          this.props.parentCallbackDark("yes")
          this.setState({darkmode:"yes"})
          this.putDark("yes")
        }
      
      }
      
      changeDark(data){
        console.log("changedark"+data)
        if(data=="no"){
          this.props.parentCallbackDark("no")
          this.setState({darkmode:"no"})
          
        }
        if(data=="yes"){
          this.props.parentCallbackDark("yes")
          this.setState({darkmode:"yes"})
      
        }
      }
      
      componentDidUpdate(previousProps, previousState) {
    
       if((this.props.dark)=="yes"){
       if (previousProps.dark !== this.props.dark) {
         console.log("make it sexy")
         this.props.parentCallbackDark("no")
         
          // this.setState({/*....*/})
       }
     }
     if((this.props.dark)=="no"){
       if (previousProps.dark !== this.props.dark) {
         console.log("make it sexy")
         this.props.parentCallbackDark("yes")
         
          // this.setState({/*....*/})
       }
     }
     
     if((this.props.navCol=="yes")||this.props.navCol=="no"){
        if (previousProps.navCol != this.props.navCol) {
         console.log("darkmake it sexy")
     
         if(this.props.navCol=="yes"){
         this.setState({navCol:"yes"})
         }
         if(this.props.navCol=="no"){
           this.setState({navCol:"no"})
           }
        
       }
     }
      
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
                            <FontAwesomeIcon id="header-icon"  icon={faPaintBrush} />
                        </div>
                    </div>
                    <div class="row" id="header-text" >
                        <div class="col">UI</div>
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
                    The first thing I designed was the logo. I got the inspiration from one of my friends from Texas who has a pet pig named pearl. To me the best logos are cute and simple, and I think this checks those boxes.
                    </p>
                    <div class="row" id="ui-pic-row">
                        <div class="col-md-6">
                            <span id="ui-pigs">
                                <img alt="timer"  id="about-header-pig" className={this.state.time===1?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={pigOpen} />
                                
                                <img alt="timer"  id="about-header-pig" className={this.state.time===2?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={pigClosed} />

                                <img alt="timer"  id="about-header-pig" className={this.state.time===3?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={pigMask} />
                                <img alt="timer"  id="about-header-pig" className={this.state.time===4?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={pigClosed} />

                                <img alt="timer"  id="about-header-pig" className={this.state.time===5?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={pigDr} />
                                <img alt="timer"  id="about-header-pig" className={this.state.time===6?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={pigClosed} />

                                <img alt="timer"  id="about-header-pig" className={this.state.time===7?'animate-vis':'animate-hide'}
                                        style={{zIndex:"8",}} src={pigFun} />
                                <img alt="timer"  id="about-header-pig" className={this.state.time===8?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={pigClosed} />
                            </span>
                        </div>
                        <div class="col-md-6">
                            <img  id="ui-pearl-pig" src={Pearl} />
                        </div>
                    </div>

                    <p id="text-content-style">
                        The idea for using truffles as a school matching indicator came to me after watching a documentary on prized truffle hunting pigs. I liked the truffle idea, because it was simple and unique.
                    </p>

                    <div class="row" id="ui-pic-row">
                        <div class="col" id="ui-truff">
                            <span>
                                <img alt="timer"  id="about-header-pig" className={this.state.time===1?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={redT}/>
                                
                                
                                <img alt="timer"  id="about-header-pig" className={this.state.time===2?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={blackT}/>

                                <img alt="timer"  id="about-header-pig" className={this.state.time===3?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={blueT}/>
                                

                                <img alt="timer"  id="about-header-pig" className={this.state.time===4?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={greenT}/>
                                <img alt="timer"  id="about-header-pig" className={this.state.time===5?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={yellowT}/>

                                <img alt="timer"  id="about-header-pig" className={this.state.time===6?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={redT}/>

                                <img alt="timer"  id="about-header-pig" className={this.state.time===7?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={blackT}/>

                                <img alt="timer"  id="about-header-pig" className={this.state.time===8?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={blueT}/>
                            </span>
                        </div>
                    </div>

                    <p id="text-content-style">
                    Designing the pig and truffles, helped me narrow down the colors I was going to use for the rest of the site.
                    </p>
                    <div class="row" id="ui-pic-row">
                        <div class="col" id="ui-truff">
                            <span>
                                <img alt="timer"  id="ui-colors" style={{zIndex:"8",}} src={Color} />
                            </span>
                        </div>
                            <div  id={(this.state.darkmode)=="yes"?"ui-rounded-container-d":"no"?"ui-rounded-container-l":""}>
                                <p id="text-content-style">
                                    I designed the button and containers with rounded edges to match the “chill” vibe of the website. I also added a dark/ light mode to add to the user experience.
                                </p>
                                <p id="text-content-style">
                                    Try Below
                                    <div><FontAwesomeIcon id="ui-arrow-icon"  icon={faArrowDown} /></div> 
                                </p>
                            
                                {(this.state.darkmode)=="yes" && <button id="button-d"  style={{zIndex:""}} onClick={() =>this.changeDark("no")}>
                                    <span>dark</span></button>}
                                {(this.state.darkmode)=="no" && <button id="button-l" style={{zIndex:""}}  onClick={() =>this.changeDark("yes")}    >
                                    <span>light</span></button>}     
                            </div>
                        </div>

                        <div class="row" id="ui-pic-row">
                            <div class="col" id="ui-truff">
                                <span>
                                    <img alt="timer"  id="ui-colors"
                                    style={{zIndex:"8",}} src={Demo} />
                                </span>
                                
                            </div>
                        </div>
                        <div class="row" id="ui-pic-ro">
                        <div class="col" id="gif-col">
                        <img alt="timer"  id="ui-gif"
                                    style={{zIndex:"8",}} src={Rec} />
                           
                            </div>
                        </div>
                        <p id="text-content-style">
                            I used <Link 
                                to="/https://fontawesome.com/" 
                                target="_blank" onClick={() => window.open("https://fontawesome.com/", "_blank")} >
                                Font Awesome
                            </Link> for the navbar and header icons on Rute and this website,  .
                        </p>
                        <p id="text-content-style">
                            I used Adobe XD to create wireframes, Adobe Photoshop to design images, and <Link 
                                to="/https://www.lucidchart.com/pages/landing" 
                                target="_blank" onClick={() => window.open("https://www.lucidchart.com/pages/landing", "_blank")} >
                                Lucid Chart Pro
                            </Link> to create charts/diagrams.
                        </p>
                        <p id="text-content-style">
                            For a full gallery of UI I created please visit my other <NavLink to={"/gallery"}  >
                                site
                            </NavLink>.
                        </p>
                    </div>
                <div class="col-md-1"></div>
            </div>

            <div class="row" id="next-prev-buttons" >
                <div class="col">
                <NavLink to={"/about"} id="link-no-style" >
                    <button  id="button-l" class="button-center-l" >
                        Prev
                    </button>
                    </NavLink>
                </div>
                <div class="col">
                <NavLink to={"/research"} id="link-no-style" >
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
export default UI;