import {
    Link
} from 'react-router-dom';
import React from 'react';
//import './Header.css';

function Footer() {

    return (
        <div className="Footer"  >
           
                
                <div class="row" style={{zIndex:"999"}}>
                <div  class="col-md-3" id="copyright">
                <ul> <Link to="about-me" id="link-black" class="bold"  >&copy; 2021 Noel Battle All rights reserved </Link></ul>

                    </div>
                    <div  class="col-md-3">
                        <ul>
                        <Link id="link-black" class="bold"
                            to="/https://gist.github.com/NoelBattle/b5c47c6e63ad9c563bc852e0ace417c0" 
                            target="_blank" onClick={() => window.open("https://gist.github.com/NoelBattle/b5c47c6e63ad9c563bc852e0ace417c0", "_blank")} >
                            Github for this Case Study
                        </Link>
                 {/*}
                            <li><a id="terms-header">General</a></li>
                            <li><Link id="terms"  to={`/about/`}>About Rute</Link></li>
                            <li><Link id="terms"  to={`/about-us/`}>About Us</Link></li>
                            <li><a id="terms">Help</a></li>
                        
    */}
    </ul>
                    </div>

                    <div  class="col-md-6">
                        <ul id="link-black" class="bold">
                            email: NoelBattleSchool@gmail.com
                            
                        </ul>
                    </div>

                   
                </div>
              
                
            
        </div>
    )
}

export default Footer;