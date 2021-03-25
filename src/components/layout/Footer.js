import { Link } from 'react-router-dom'
import React from 'react'

function Footer() {

    return (
        <div className="Footer">
            <div class="row" style={{zIndex:"999"}}>
                <div  class="col-md-3" id="copyright">
                    <ul> <Link to="about-me" id="link-black" class="bold"  >&copy; 2021 Noel Battle All rights reserved </Link></ul>
                </div>
                <div  class="col-md-3">
                    <ul>
                        <Link id="link-black" class="bold"
                            to="/https://github.com/NoelBattle/rute-ux" 
                            target="_blank" onClick={() => window.open("https://github.com/NoelBattle/rute-ux", "_blank")} >
                            Github for this website
                        </Link>
                    </ul>
                </div>
                <div  class="col-md-6">
                    <ul id="link-black" class="bold">email: NoelBattleSchool@gmail.com</ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;