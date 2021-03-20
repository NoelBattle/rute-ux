import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../../style/Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEdit, faCircle, faBars,faTachometerAlt,faUserGraduate,faSearch,faPencilAlt,faComments,faToggleOff,faToggleOn,faRobot, faPalette } from '@fortawesome/free-solid-svg-icons'
import Footer from "../layout/Footer";

import  pigOpen from './../../imgs/gallery/pig-open.png'


class Misc extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time:1,
          navCol:"no",
          mousePig:false,
          mouseTruff:false,
          mouseHeart:false,
          
          
      } 
    }

    componentDidMount() {
        window.scrollTo(0, 0)
         
       }

       componentDidMount() {
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
          if((this.state.time)>5){
              this.setState({time:1})
          }
          //if(this.state.mouseTruff){
          //  if(!this.state.mouseTruff){clearTimeout()}
         setTimeout(() => {
             let t = this.state.time
             
            // if(this.state.mouseTruff){
                this.setState({ time: t+1 });
             //console.log(t)
             this.updateTime()
             //}
             
           }, 2000);
           
       // }
      }

     

      handleMouseHover=(mouse) =>{
        
       this.setState({[mouse]:true})
       //console.log("skate"+mouse)
       //this.updateTime()
      }
      
      handleMouseExit=(mouse) =>{
      //this.setState(this.toggleHoverState);
      
      
      //this.setState({mouse:false})
      this.setState({[mouse]:false})
      //setCount(mouse+1)
      //console.log(mouse)
      //return(<div>LETSEEE</div>)
      }
  render() {
    return (
      <div id="comp-div" style={{zIndex:"2"}}>
        <div class="row" id="page-header">
            <div class="col" id="text-center">
                <div class="row">
                    <div class="col">
                    <FontAwesomeIcon id="header-icon"  icon={faPalette} />
                    </div>
                </div>
                <div class="row" id="header-text" >
                    <div class="col">Gallery</div>
                </div>
                <div class="row" id="idea-idea">
                    <div class="col" id="text-content-style">
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="tech-space"></div>

        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
               </div>
            <div class="col-md-1"></div>
        </div>

        <div class="row" id="next-prev-buttons" >
            <div class="col">
                <NavLink to={"/forum"} id="link-no-style" >
                    <button  id="button-l" class="button-center-l" >Prev</button>
                </NavLink>
            </div>
            <div class="col">
                <NavLink to={"/ui"} id="link-no-style" >
                    <button  id="button-l" class="button-center-r">Next</button>
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
export default Misc;