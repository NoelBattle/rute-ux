import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom"
import '../style/Data.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoll } from '@fortawesome/free-solid-svg-icons'
import Flow from '../imgs/info/ux-flow.png'
import pigTruff from './../imgs/data/pig-truff.png'
import Footer from "./layout/Footer"

class Data extends Component {
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
                                <FontAwesomeIcon id="header-icon"  icon={faPoll} />
                            </div>
                        </div>
                        <div class="row" id="header-text">
                            <div class="col">Data Collection</div>
                        </div>
                        <div class="row" id="idea-idea"></div>
                    </div>
                </div>
                <div class="row" id="idea-space"></div>
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <div>
                            <div id="data-wrap-div">
                                <span id="idea-pic">
                                    <img alt="pig-truffle" id="data-pig-truff" src={pigTruff} />
                                </span>
                            </div>
                            <p id="text-content-style">
                            After examining other websites and reviewing the data I accumulated from my research interviews, I began to formulate a list of essential medical school information. I learned from my interviews that a major problem students have with MSARS is the school information is all on one page, requiring students to scroll. I improved upon this through the use of tabs. After I created my list, I broke the list down into 4 categories that serve as my tabs:
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-8">
                                <p id="text-content-style" class="center-wid">
                                    <li>About</li>
                                    <li>Admission</li>
                                    <li>Academics</li>
                                    <li>Tuition</li>
                                </p>
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                        <p id="text-content-style">
                        Now it was time to grind out the data collection. There was no easy way to do this, and it was too much work to do myself, so my two friends (the one's in med school) and I collected 150 schools worth of data. The data had to be collected manually and we couldn't use a  data scraping plugin ,because there were so many different websites. Below is a link to a sample of the data showing the information we collected/plan to add.
                        </p>
                        <p id="text-content-style">
                            <Link to="/https://gist.github.com/NoelBattle/b5c47c6e63ad9c563bc852e0ace417c0" 
                            target="_blank" onClick={() => window.open("https://gist.github.com/NoelBattle/b5c47c6e63ad9c563bc852e0ace417c0", "_blank")}>Github Data Sample
                            </Link>
                        </p>
                    </div>
                    <div class="col-md-1"></div>
                </div>

            <div class="row" id="next-prev-buttons">
                <div class="col">
                    <NavLink to={"/info-architecture"} id="link-no-style">
                        <button  id="button-l" class="button-center-l"> Prev</button>
                    </NavLink>
                </div>
                <div class="col">
                    <NavLink to={"/wireframing"} id="link-no-style">
                        <button  id="button-l" class="button-center-r">Next </button>
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
export default Data;