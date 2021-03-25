import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom"
import '../../style/features/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from "react-player"
import Rec from '../../imgs/gifs/rute-profile-rec.gif'
import Co from '../../imgs/gifs/rute-profile-course.gif'
import Exp from '../../imgs/gifs/rute-profile-exp.gif'
import Fin from '../../imgs/gifs/rute-profile-fin.gif'
import Edu from '../../imgs/gifs/rute-profile-edu.gif'
import Sco from '../../imgs/gifs/rute-profile-sco.gif'
import Pref from '../../imgs/gifs/rute-profile-pref.gif'
import Res from '../../imgs/gifs/rute-profile-res.gif'
import Fam from '../../imgs/gifs/rute-profile-fam.gif'
import Race from '../../imgs/gifs/rute-profile-lang.gif'
import Misc from '../../imgs/gifs/rute-profile-misc.gif'
import Footer from "./../layout/Footer"

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          navCol:"no",
          gif:"rec",
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
            <div id="comp-div">
                <div class="row" id="page-header">
                    <div class="col" id="text-center">
                        <div class="row">
                            <div class="col">
                                <FontAwesomeIcon id="header-icon"  icon={faUserEdit} />
                            </div>
                        </div>
                        <div class="row" id="header-text" >
                            <div class="col">Student Profile</div>
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
                        Filling out medical applications is a long and arduous process. Rute tries to expedite this by allowing users to store their application info at their leisure. After examining various schools’ applications, I broke down the required information into 11/12 of the sections below. Please click a button to see a demo of each form. The 'Video' button will reveal a full demo of all the 'Rute Profile Forms' style and functionality.
                        </p>
                        <div class="row">
                            <button id={(this.state.gif=="rec")?"button-l-selected":"button-l"}  onClick={() =>this.setGif("rec")}>
                                <span>Rec Letters</span>
                            </button>
                            <button id={(this.state.gif=="co")?"button-l-selected":"button-l"}   onClick={() =>this.setGif("co")} >
                                <span>Courses</span>
                            </button>
                            <button id={(this.state.gif=="exp")?"button-l-selected":"button-l"} onClick={() =>this.setGif("exp")}>
                                <span>Experiences</span>
                            </button>
                            <button id={(this.state.gif=="fin")?"button-l-selected":"button-l"}   onClick={() =>this.setGif("fin")} >
                                <span>Financial</span>
                            </button>
                            <button id={(this.state.gif=="edu")?"button-l-selected":"button-l"}  onClick={() =>this.setGif("edu")}>
                                <span>Education</span>
                            </button>
                            <button id={(this.state.gif=="sco")?"button-l-selected":"button-l"}  onClick={() =>this.setGif("sco")} >
                                <span>Test Scores</span>
                            </button>
                            <button id={(this.state.gif=="pref")?"button-l-selected":"button-l"} style={{zIndex:""}} onClick={() =>this.setGif("pref")}>
                                <span>Preferences</span>
                            </button>
                            <button id={(this.state.gif=="res")?"button-l-selected":"button-l"}   onClick={() =>this.setGif("res")} >
                                <span>Residency</span>
                            </button>
                            <button id={(this.state.gif=="fam")?"button-l-selected":"button-l"} style={{zIndex:""}} onClick={() =>this.setGif("fam")}>
                                <span>Family</span>
                            </button>
                            <button id={(this.state.gif=="race")?"button-l-selected":"button-l"}   onClick={() =>this.setGif("race")} >
                                <span>Race/Lang</span>
                            </button>
                            <button id={(this.state.gif=="misc")?"button-l-selected":"button-l"} style={{zIndex:""}} onClick={() =>this.setGif("misc")}>
                                <span>Misc</span>
                            </button>
                            <button id={(this.state.gif=="misc")?"button-l-selected":"button-l"} style={{zIndex:""}} onClick={() =>this.setGif("vid")}>
                                <span>Video</span>
                            </button>
                        </div>
                        <div class="row" id="ui-pic-row">
                            <div class="col" id="ui-truff">
                                {(this.state.gif)=="rec" && <div><img alt="rec letters"  id="prof-gif" style={{zIndex:"8",}} src={Rec} /></div>}   
                                {(this.state.gif)=="co" && <div><img alt="courses"  id="prof-gif" style={{zIndex:"8",}} src={Co} /></div>}
                                {(this.state.gif)=="exp" && <div><img alt="experience"  id="prof-gif" style={{zIndex:"8",}} src={Exp} /></div>}
                                {(this.state.gif)=="fin" && <div><img alt="financial"  id="prof-gif" style={{zIndex:"8",}} src={Fin} /></div>}
                                {(this.state.gif)=="edu" && <div><img alt="education"  id="prof-gif" style={{zIndex:"8",}} src={Edu} /></div>}
                                {(this.state.gif)=="sco" && <div><img alt="scores"  id="prof-gif" style={{zIndex:"8",}} src={Sco} /></div>}
                                {(this.state.gif)=="pref" && <div><img alt="preferences"  id="prof-gif" style={{zIndex:"8",}} src={Pref} /></div>}
                                {(this.state.gif)=="res" && <div><img alt="residential"  id="prof-gif" style={{zIndex:"8",}} src={Res} /></div>}
                                {(this.state.gif)=="fam" && <div><img alt="family"  id="prof-gif" style={{zIndex:"8",}} src={Fam} /></div>}
                                {(this.state.gif)=="race" && <div><img alt="race"  id="prof-gif" style={{zIndex:"8",}} src={Race} /></div>}
                                {(this.state.gif)=="misc" && <div><img alt="misc"  id="prof-gif" style={{zIndex:"8",}} src={Misc} /></div>}
                                {(this.state.gif)=="vid" && 
                                    <div>
                                        <p id="text-content-style">
                                            <div>
                                                <ReactPlayer  controls={true} width="40vw" url="https://www.youtube.com/watch?v=g7SDr2Tv9oA"/>
                                            </div>
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                        <p id="text-content-style">
                            There are two types of forms:
                        </p>
                        <p id="text-content-style">
                            <li>
                                The first type (Rec Letters, Courses, and Experiences) stores data in arrays so that there can be multiple entries. ‘Rec Letters’ and ‘Experiences’ allow users to delete and edit previous entries from their respective profile page. However, due to the sheer amount of courses a user will enter, stored data from the ‘Courses’ page is only displayed on the Overview page. Users can access the Overview section from the Dashboard, or directly on the ‘Courses’ page once a user stores a course.
                            </li>
                        </p>
                        <p id="text-content-style">
                            <li>
                                The rest of the forms store the data in an object, allowing for stored data to auto-fill the forms.
                            </li>
                        </p>
                        <p id="text-content-style">
                            The ‘Overview’ section will display all user data 
                            (see <NavLink to={"/to-do"}>To Do</NavLink>). 
                            The ‘Overview’ section will create a docx file of the user's data and allow user's to upload the file to their Google Drive or download to their PC. This process is demonstrated 
                            in the <NavLink to={"/features/essay-planner"}>Essay Planner
                            </NavLink> section. 
                        </p>
                    </div>
                    <div class="col-md-1"></div>
                </div>

                <div class="row" id="next-prev-buttons" >
                    <div class="col">
                    <NavLink to={"/features/school-progress"} id="link-no-style" >
                        <button  id="button-l" class="button-center-l" >
                            Prev
                        </button>
                        </NavLink>
                    </div>
                    <div class="col">
                    <NavLink to={"/features/essay-planner"} id="link-no-style" >
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
export default Profile;