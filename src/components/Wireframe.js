import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom"
import '../style/Wireframe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
import  Dir from './../imgs/wireframe/Directory.png'
import  about1 from './../imgs/wireframe/About-1.png'
import  about2 from './../imgs/wireframe/About-2.png'
import  about3 from './../imgs/wireframe/About-3.png'
import  about4 from './../imgs/wireframe/About-4.png'
import  Dash from './../imgs/wireframe/Dashboard.png'
import  Edit from './../imgs/wireframe/edit-account.png'
import  Essays from './../imgs/wireframe/Essays.png'
import  Logout from './../imgs/wireframe/logout.png'
import  Circ from './../imgs/wireframe/nav-circle.png'
import  Profile from './../imgs/wireframe/Profile.png'
import  aboutSchool from './../imgs/wireframe/School-about.png'
import  acadSchool from './../imgs/wireframe/School-academics.png'
import  adSchool from './../imgs/wireframe/School-admission.png'
import  finSchool from './../imgs/wireframe/School-Financial.png'
import  topSearch from './../imgs/wireframe/top-nav-search.png'
import Footer from "./layout/Footer"

class Wireframe extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
       }

    render() {
        return (
            <div id="comp-div">
                <div class="row" id="page-header">
                    <div class="col" id="text-center">
                        <div class="row">
                            <div class="col">
                                <FontAwesomeIcon id="header-icon"  icon={faSkull} />
                            </div>
                        </div>
                        <div class="row" id="header-text">
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
                        Now it was time to make the skeleton. I created these low-mid fidelity wireframes for the site’s main routes in Adobe XD. I used these wireframes as a visual reference for when I coded the functional prototypes in React.
                        </p>

                        <p id="text-content-style">
                        Note: Non-registered users can only access the Home page and Directory. Trying to access another route prompts the user to login/register. 
                        More on this in the 'Login/Register' <NavLink to={"/features/login-register"} id="navhea">
                                    section
                                </NavLink>. 
                        </p>
                        <div class="row" id="ui-pic-row">
                            <div class="col-md-2 align-self-center"><span id="wireframe-label">Home</span></div>
                            <div class="col-md-10">
                                <img alt="about 1" id="wireframe-dir" src={about1} />
                            </div>
                        </div>
                        <div class="row" id="ui-pic-row">
                            <div class="col-md-2 align-self-center"><span id="wireframe-label">Top Nav Search</span></div>
                            <div class="col-md-10">
                                <img alt="top search"  id="wireframe-dir" src={topSearch} />
                            </div>
                        </div>
                        <div class="row" id="ui-pic-row">
                            <div class="col-md-2 align-self-center"><span id="wireframe-label">Profile Circle</span></div>
                            <div class="col-md-10">
                                <img alt="top circle" id="wireframe-dir" src={Circ} />
                            </div>
                        </div>
                        <div class="row" id="ui-pic-row">
                            <div class="col-md-2 align-self-center"><span id="wireframe-label">Edit Account</span></div>
                            <div class="col-md-10">
                                <img alt="edit account" id="wireframe-dir" src={Edit} />
                            </div>
                        </div>
                        <div class="row" id="ui-pic-row">
                            <div class="col-md-2 align-self-center"><span id="wireframe-label">Directory</span></div>
                            <div class="col-md-10">
                                <img alt="directory" id="wireframe-dir" src={Dir} />
                            </div>
                        </div>
                        <div class="row" id="ui-pic-row">
                            <div class="col-md-2 align-self-center"><span id="wireframe-label">School: About</span></div>
                            <div class="col-md-10">
                                <img alt="school about" id="wireframe-dir" src={aboutSchool} />
                            </div>
                        </div>
                        <div class="row" id="ui-pic-row">
                            <div class="col-md-2 align-self-center"><span id="wireframe-label">School: Admissions</span></div>
                            <div class="col-md-10">
                                <img alt="school admissions" id="wireframe-dir" src={adSchool} />
                            </div>
                        </div>
                        <div class="row" id="ui-pic-row">
                            <div class="col-md-2 align-self-center"><span id="wireframe-label">School: Academics</span></div>
                            <div class="col-md-10">
                                <img alt="school acadmeics" id="wireframe-dir" src={acadSchool} />
                            </div>
                        </div>
                        <div class="row" id="ui-pic-row">
                            <div class="col-md-2 align-self-center"><span id="wireframe-label">School: Financial</span></div>
                            <div class="col-md-10">
                                <img alt="school financial" id="wireframe-dir" src={finSchool} />
                            </div>
                        </div>
                        
                        <div class="row" id="ui-pic-row">
                            <div class="col-md-2 align-self-center"><span id="wireframe-label">Profile</span></div>
                            <div class="col-md-10">
                                <img alt="profile"  id="wireframe-dir" src={Profile} />
                            </div>
                        </div>
                        <div class="row" id="ui-pic-row">
                            <div class="col-md-2 align-self-center"><span id="wireframe-label">Dashboard</span></div>
                            <div class="col-md-10">
                                <img alt="dashbboard"  id="wireframe-dir" src={Dash} />
                            </div>
                        </div>
                        
                       
                        <div class="row" id="ui-pic-row">
                            <div class="col-md-2 align-self-center"><span id="wireframe-label">Essays</span></div>
                            <div class="col-md-10">
                                <img alt="essays" id="wireframe-dir" src={Essays} />
                            </div>
                        </div>
                        <p id="text-content-style">
                        Now that the structure and styling was finished, it was time to integrate the data we collected.
                        </p>
                    </div>
                    <div class="col-md-1"></div>
                </div>

                <div class="row" id="next-prev-buttons">
                    <div class="col">
                        <NavLink to={"/data-collection"} id="link-no-style">
                            <button  id="button-l" class="button-center-l">
                                Prev
                            </button>
                        </NavLink>
                    </div>
                    <div class="col">
                        <NavLink to={"/features/directory-school"} id="link-no-style">
                            <button  id="button-l" class="button-center-r">
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