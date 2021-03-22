import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../style/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEdit, faCircle, faBars,faTachometerAlt,faUserGraduate,faSearch,faPencilAlt,faComments,faToggleOff,faToggleOn } from '@fortawesome/free-solid-svg-icons'
import  logo from './../imgs/snute.png'
import pigOpen from './../imgs/about/pig-open.png'
import pigClosed from './../imgs/about/pig-closed.png'
import Footer from "./layout/Footer";
import ReactPlayer from "react-player"

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time:1,
      }
    }

    updateTime(){
        if((this.state.time)>3){
            this.setState({time:1})
        }
        setTimeout(() => {
            let t = this.state.time
            this.setState({ time: t+1 });
            this.updateTime()
          }, 1500);
    }

      
    componentDidUpdate(prevProps,previousState){
      if((this.props.navCol=="yes")||this.props.navCol=="no"){
          if (prevProps.navCol != this.props.navCol) {
            if(this.props.navCol=="yes"){
              this.setState({navCol:"yes"})
            }
            if(this.props.navCol=="no"){
              this.setState({navCol:"no"})
              }
          }
      }
    }

    componentDidMount() {
      window.scrollTo(0, 0)
       this.updateTime()
       if(this.props.navCol=="yes"){
        this.setState({navCol:"yes"})
      }
      if(this.props.navCol=="no"){
        this.setState({navCol:"no"})
      }
     }
     
    render() {
      return (
        <div>
          <div id="comp-div">
            <div class="row" id="about-header">
              <div class="col-md-6" >
                <img alt="timer"  id="about-header-pig" className={this.state.time===1?'animate-vis':'animate-hide'}
                style={{zIndex:"8",}} src={pigOpen} />
                <img alt="timer"  id="about-header-pig" className={this.state.time===2?'animate-vis':'animate-hide'}
                style={{zIndex:"8",}} src={pigOpen} />
                <img alt="timer"  id="about-header-pig" className={this.state.time===3?'animate-vis':'animate-hide'}
                style={{zIndex:"8",}} src={pigClosed} />
              </div>
              <div class="col-md-6" id="about-header-tex" >
                <div class="row" id="about-header-text-b">
              <span id="text"> Rute</span>
                </div>
                <div class="row" id="about-header-text-s">
                Case Study
                </div>
                <div class="row" id="about-header-text-ss">
                By Noel Battle
                </div>
              </div>
            </div>
            <div class="row" id="about-space"></div>
            <div class="row" id="about-content">
              <div class="col-md-1"></div>
              <div class="col-md-11" >
                <div class="ro" id="about-content-text">
                  <div id="about-vid-div">
                    <span id="about-vid">
                      <div>
                        <ReactPlayer  controls={true} width="40vw" url="https://www.youtube.com/watch?v=9KIOTdFXGeg"/>
                    </div>
              
                    </span>
                  </div>
                  <p id="text-content-style">
                    Welcome to my UX case study for Rute: the one-stop shop for med school applicants.
                  Rute is a project I decided to embark on in order to fully understand the website creation process from start to finish.        
                  </p>
                  <p id="text-content-style" class="center-wid">
                  My Roles were: 
                      <li>Conducting User Research</li>
                      <li>Designing the UI and Flow</li>
                      <li>Collecting Data</li>
                      <li>Wireframing and Prototypging</li>
                      <li>Developing Functional Web Application</li>
                  </p>
                  <p id="text-content-style" class="center-wid">
                    <NavLink to={"/timeline"} id="navhea" >
                    Timeline
                    </NavLink> 
                  : 9 Months
                  </p>
                  <p id="text-content-style" class="center-wid">
                      <Link to="/https://gist.github.com/NoelBattle/b5c47c6e63ad9c563bc852e0ace417c0" 
                        target="_blank" onClick={() => window.open("https://gist.github.com/NoelBattle/b5c47c6e63ad9c563bc852e0ace417c0", "_blank")}>
                        Github for this Case Study
                      </Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="row" id="next-prev-buttons">
              <NavLink to={"/research"} id="link-no-style" class="button-center">
                <button  id="button-l">
                  Next
                </button>
                </NavLink>
            </div>
          </div>
          <div id="footer-div">
                <Footer/>
            </div>
        </div>
      );
    }
}
export default About;