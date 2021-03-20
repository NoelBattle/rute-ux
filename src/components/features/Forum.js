import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../../style/features/Forum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEdit, faCircle, faBars,faTachometerAlt,faUserGraduate,faSearch,faPencilAlt,faComments,faToggleOff,faToggleOn,faPoll,faSitemap, faStar } from '@fortawesome/free-solid-svg-icons'
import  Chat from '../../imgs/features/snout-chat.png'
import  Nginx from '../../imgs/features/nginx_flow.png'
import  Cookie from '../../imgs/features/cookie_flow.png'
import Footer from "../layout/Footer";
class Forum extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
         
       }
  render() {
    return (
      <div id="comp-div" style={{zIndex:"2"}}>
        <div class="row" id="page-header">
            <div class="col" id="text-center">
                <div class="row">
                    <div class="col">
                        <FontAwesomeIcon id="header-icon"  icon={faStar} />
                    </div>
                </div>
                <div class="row" id="header-text" >
                    <div class="col">Forum</div>
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
                    <div id="idea-wrap-div">
                        <span id="idea-pic">
                            <img alt="timer" id="idea-snout" src={Chat} />
                        </span>
                    </div>
                    <p id="text-content-style">
                    Ok, here’s the deal: building a fully functional forum from scratch is HARD. To make  my life easier, I decided to use the popular forum template: NodeBB.  While it did provide me with a fully functional forum, it also came with two caveats regarding it’s integration into Rute.                      </p>
                </div>
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <p id="text-content-style" class="center-wid">
                                <li>NodeBB uses its own styling templates.</li>
                                <li>NodeBB runs on a different server port and uses a different user database than the actual website.</li>
                        </p>
                    </div>
                    <div class="col-md-2"></div>
                </div>
                <p id="text-content-style">
                Solving the styling issue is simple. NodeBB’s custom css/html/java widget option allows me to add the Rute logo and styling to the NodeBB site in order to make the integration look as seamless as possible.
                Solving the server issue involves using a reverse proxy nginx and cookies.  
                                </p>
                <p id="text-content-style">
                             
                </p>
                <p id="text-content-style">
                The reverse proxy directs a user to either the main site or the forum depending on the url route.
                                </p>
                <div class="row">
                    <div class="col" id="forum-nginx-col">
                        <img alt="timer" id="forum-nginx"  src={Nginx} />
                    </div>
                </div>
                <p id="text-content-style">
                The cookie stores a JWT(json web token) of the username and password. When the user logins it saves the info in a hashed cookie on their browser. When the user opens the /forums route, the cookie is used to create a forum account with the same login credentials as the main site.
Once the forum account is created the cookie will automatically log the user in everytime /forum is accessed. 
                                </p>
                <div class="row">
                    <div class="col" id="forum-nginx-col">
                        <img alt="timer" id="forum-nginx"  src={Cookie} />
                    </div>
                </div>
                <p id="text-content-style">
                Solving these  two problems will successfully integrate the forum into the website.   

For testing purposes, I am currently using a Digital Ocean server to host the forum. The styling isn’t complete, but you can see the functionality at   <Link 
                            to="/http://64.225.124.165/forum/" 
                            target="_blank" onClick={() => window.open("http://64.225.124.165/forum/", "_blank")} >
                             Forum Test
                        </Link>
. 
I’ve already completed the cookie  and reverse proxy code, and I will finish the integration when the main site is complete.

                                </p>

            </div>
            <div class="col-md-1"></div>
        </div>

        <div class="row" id="next-prev-buttons" >
            <div class="col">
            <NavLink to={"/features/change-password"} id="link-no-style" >
                <button  id="button-l" class="button-center-l" >
                    Prev
                </button>
                </NavLink>
            </div>
            <div class="col">
            <NavLink to={"/features/dark-mode"} id="link-no-style" >
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
export default Forum;