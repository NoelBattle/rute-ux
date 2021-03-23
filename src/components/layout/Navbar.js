import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {withRouter} from "react-router-dom"
import '../../style/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEdit, faCircle, faBars,faTachometerAlt,faUserGraduate,faSearch,faPencilAlt,faComments,faToggleOff,faToggleOn, faLightbulb, faRobot, faCogs, faStar, faCaretDown, faCaretUp, faPaintBrush,faPoll,faDatabase, faSitemap, faClipboardList, faUser, faSkull, faClock, faBrain } from '@fortawesome/free-solid-svg-icons'
import  logo from './../../imgs/snute.png'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          darkmode:"no",
          navCol:true, //make true
          featuresDropDown:false, //make false
          infoDropDown:false, //make false
          features:false,
          info:false,
        } 
        this.navCollapse = this.navCollapse.bind(this)
    }
    componentDidUpdate(previousProps, previousState) {
        if((this.props.dark)=="yes"){
            if (previousProps.dark !== this.props.dark) {
                if(this.props.location.pathname=="/ui"){
                    this.setState({darkmode:"yes"})
                    }
            }
        }
        if((this.props.dark)=="no"){
            if (previousProps.dark !== this.props.dark) {
                if(this.props.location.pathname=="/ui"){
                    this.setState({darkmode:"no"})
                }
            }
            }
        
        if(this.props.location.pathname!="/ui"){
            if (previousProps.location !== this.props.location) {
                this.setState({darkmode:"no"})
            }
        }
        if(this.props.location.pathname.includes("/features/")){
            if (previousProps.location !== this.props.location) {
                this.setState({features:true})
            }
        }
        if(!(this.props.location.pathname.includes("/features/"))){
            if (previousProps.location !== this.props.location) {
                this.setState({features:false})
            }
        }
        if(this.props.location.pathname.includes("/user-flow")){
            if (previousProps.location !== this.props.location) {
                this.setState({info:true})
            }
        }
        if(this.props.location.pathname.includes("/info-architecture")){
            if (previousProps.location !== this.props.location) {
                this.setState({info:true})
            }
        }
        if(!(this.props.location.pathname.includes("/user-flow"))&&!(this.props.location.pathname.includes("/info-architecture"))){
            if (previousProps.location !== this.props.location) {
                this.setState({info:false})
            }
        }
    }

    navCollapse =  () => {
        this.props.parentCallbackNav(!(this.state.navCol))
        this.setState({
            navCol: !(this.state.navCol),
            featuresDropDown:false,
            infoDropDown:false,
        })
    }

    dropDown  = (route) =>{
        this.setState({[route]:false})
    }

    dropUp  = (route) =>{
        this.setState({
            featuresDropDown:false,
            infoDropDown:false,
            route:"",
            [route]:true,
        })
    }
    
   
  render() {
    return (
      <div>
        {this.state.navCol &&
            <div id="nav-logo" style={{zIndex:"15",}}>
                <div  id={(this.state.darkmode)=="yes"?"nav-col-logo-bg-d":"no"?"nav-col-logo-bg-l":""} style={{zIndex:"1"}}>
                </div>
                <button id="icon-button" class="nav-hamburger" style={{zIndex:"15"}} onClick={this.navCollapse}>
                    <FontAwesomeIcon size="lg"  id={(this.state.darkmode)=="yes"?"nav-burger-d":"no"?"nav-burger-l":""} icon={faBars}/>
                </button>
                <Link to="/"  style={{fontFamily: "monospace"}} id="snogo" style={{zIndex:"15"}} class="logo-bg">
                    <div id="snogo-sidenav" >
                        <div class="logo-pic" >
                            <img  id="snute"  class={(this.state.darkmode)=="yes"?"logo-bg-d":"no"?"logo-bg-l":""}  src={logo}/>
                        </div>
                        <div id={(this.state.darkmode)=="yes"?"logo-name-col-d":"no"?"logo-name-col":""} ><span id="logo-colon">:</span><span>UX</span></div>
                    </div>
                </Link>
            </div>
        }
        <div style={{zIndex:"13"}} id={(this.state.navCol)?"navdiv-none":"navdiv"} class={(this.state.darkmode)=="yes"?"nav-darkmode-pink":""}>
            <div id={(this.state.darkmode)=="yes"?"nav-logo-bg-d":"no"?"nav-logo-bg-l":""} style={{zIndex:"14"}}>
            </div>
            <section  id="sidenavLogo" style={{zIndex:"15"}}>
                <span id="sidenav-logo-span">
                    <button id="icon-button" class="side-nav-hamburger" onClick={this.navCollapse}>
                        <FontAwesomeIcon size="lg" icon={faBars}/>
                    </button>
                    <NavLink exact path to="/"  style={{fontFamily: "monospace"}} id="navhead" activeClassName="hov-active">
                        <div id="snogo-sidenav">
                            <div class="logo-pic" >
                                <img  id="snute" src={logo} />
                            </div>
                            <div id="logo-name">
                                <span id="logo-colon">:</span><span>UX</span>
                            </div>
                        </div>
                    </NavLink>
                </span>
            </section>
            <div>
                <section id="nav-collapse">
                    <ul className="left_navlinks">
                        <div id="sidenav-li">
                            <div class="nav-divider" >
                                <NavLink to={"/idea"} id="navhead" activeClassName="hov-active">
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon"  icon={faLightbulb} />
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">Idea</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div id="sidenav-li">
                            <div class="nav-divider" >
                                <NavLink to={"/research"} id="navhead" activeClassName="hov-active" > 
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon"  icon={faPoll} />
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">Research</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div id="sidenav-li">
                            <div class="nav-divider">
                                <div class="row"  id="sidenav-icon-row">
                                    <NavLink to={"/info-architecture"} id="navhead" activeClassName="hov-active">
                                        <div class="col-md-3" id={(this.state.info)?"sidenav-icon-col-active":"sidenav-icon-col"}>
                                            <FontAwesomeIcon id="sidenav-icon-robot"  icon={faSitemap} />
                                        </div>
                                        <div class="col-md-3" id={(this.state.info)?"sidenav-link-col-drop-active":"sidenav-link-col-drop"}>
                                            <span id="sidenav-link">Info Architecture</span>
                                        </div>
                                    </NavLink>
                                    <div class="col-md-2" id="sidenav-link-col">
                                        {this.state.infoDropDown && 
                                            <button id="icon-button">
                                                <span><FontAwesomeIcon id={(this.state.info)?"sidenav-drop-active":"sidenav-drop"}   
                                                onClick={() =>this.dropDown("infoDropDown")} icon={faCaretUp} /></span>
                                            </button>
                                        }
                                        {!this.state.infoDropDown && 
                                            <button id="icon-button">
                                                <span><FontAwesomeIcon  id={(this.state.info)?"sidenav-drop-active":"sidenav-drop"}  
                                                onClick={() =>this.dropUp("infoDropDown")}  icon={faCaretDown} /></span>
                                            </button>
                                        }
                                    </div>
                                </div>
                                {this.state.infoDropDown &&
                                    <div class="row" id="nav-drop-shift">
                                        <div class="row">
                                            <NavLink to={"/user-flow"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">User Flow Chart</li></NavLink>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                        <div id="sidenav-li">
                            <div  class="nav-divider">
                                <NavLink to={"/wireframing"} id="navhead" activeClassName="hov-active">
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon"  icon={faSkull}/>
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">Wireframing</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div id="sidenav-li">
                            <div  class="nav-divider">
                                <NavLink to={"/data-collection"} id="navhead" activeClassName="hov-active">
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon"  icon={faDatabase}/>
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">Data Collection</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        

                        <div id="sidenav-li">
                            <div   class="nav-divider" >
                                <div class="row"  id="sidenav-icon-row">
                                    <NavLink to={"/features/directory-school"} id="navhead" activeClassName="hov-active">
                                        <div class="col-md-3"  id={(this.state.features)?"sidenav-icon-col-active":"sidenav-icon-col"}>
                                            <FontAwesomeIcon id="sidenav-icon-robot"  icon={faStar} />
                                        </div>
                                        <div class="col-md-3" id={(this.state.features)?"sidenav-link-col-drop-active":"sidenav-link-col-drop"}>
                                            <span id="sidenav-link">Features</span>
                                        </div>
                                    </NavLink>
                                    <div class="col-md-2" id="sidenav-link-col">
                                        {this.state.featuresDropDown && 
                                            <button id="icon-button">
                                                <span><FontAwesomeIcon id="sidenav-drop" id={(this.state.features)?"sidenav-drop-active":"sidenav-drop"}
                                                onClick={() =>this.dropDown("featuresDropDown")} icon={faCaretUp} /></span>
                                            </button>
                                        }
                                        {!this.state.featuresDropDown && 
                                            <button id="icon-button">
                                                <span><FontAwesomeIcon  id={(this.state.features)?"sidenav-drop-active":"sidenav-drop"}
                                                onClick={() =>this.dropUp("featuresDropDown")}  icon={faCaretDown} /></span>
                                            </button>
                                        }
                                    </div>
                                </div>
                                {this.state.featuresDropDown &&
                                    <div class="row" id="nav-drop-shift">
                                        <div class="row" >
                                            <NavLink to={"/features/directory-school"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">Directory/Schools</li></NavLink>
                                        </div>
                                        <div class="row" >
                                            <NavLink to={"/features/login-register"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">Log in/Register</li></NavLink>
                                        </div>
                                        <div class="row">
                                            <NavLink to={"/features/favorites-list"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">Favorites List</li></NavLink>
                                        </div>
                                        
                                        <div class="row">
                                            <NavLink to={"/features/matching-algorithm"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">Matching Algorithm</li></NavLink>
                                        </div>
                                    
                                        <div class="row">
                                            <NavLink to={"/features/school-progress"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">School Progress</li></NavLink>
                                        </div>
                                        <div class="row">
                                            <NavLink to={"/features/student-profile"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">Student Profile</li></NavLink>
                                        </div>
                                        <div class="row">
                                            <NavLink to={"/features/essay-planner"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">Essay Planner</li></NavLink>
                                        </div>
                                    
                                        <div class="row" id="sidenav-subcat-row">
                                            <NavLink to={"/features/cost-calculator"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">Cost Calculator</li></NavLink>
                                        </div>
                                        <div class="row" id="sidenav-subcat-row" >
                                            <NavLink to={"/features/file-upload"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">File Upload</li></NavLink>
                                        </div>
                                        <div class="row" >
                                            <NavLink to={"/features/calendar"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">Calendar</li></NavLink>
                                        </div>
                                    
                                        <div class="row" >
                                            <NavLink to={"/features/change-password"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">Forgot/Change PW</li></NavLink>
                                        </div>
                                    
                                        <div class="row" >
                                            <NavLink to={"/features/forum"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">Forum</li></NavLink>
                                        </div>
                                        <div class="row" >
                                            <NavLink to={"/features/dark-mode"} id="navhead-subcat" activeClassName="hov-active"> <li id="sidenav-subcat">Dark/Light Mode</li></NavLink>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                        <div id="sidenav-li">
                            <div class="nav-divider" >
                                <NavLink to={"/technologies"} id="navhead" activeClassName="hov-active">
                                    <div class="row"  id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon-robot"  icon={faRobot} />
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">Technologies</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div id="sidenav-li">
                            <div class="nav-divider" >
                                <NavLink to={"/ui"} id="navhead" activeClassName="hov-active">
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon"  icon={faPaintBrush} />
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">UI</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div id="sidenav-li">
                            <div class="nav-divider">
                                <NavLink to={"/todo"} id="navhead" activeClassName="hov-active">
                                    <div class="row"  id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon-robot"  icon={faClipboardList} />
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">To Do</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div id="sidenav-li">
                            <div class="nav-divider" >
                                <NavLink to={"/about-me"} id="navhead" activeClassName="hov-active">
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon"  icon={faBrain} />
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">About Me</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div id="sidenav-li">
                            <div class="nav-divider" >
                                <NavLink to={"/timeline"} id="navhead" activeClassName="hov-active">
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon"  icon={faClock} />
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">Timeline</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </ul>
                </section>
            </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Navbar);