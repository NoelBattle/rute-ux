import React, { Component } from "react"
import logo from './logo.svg'
import './style/App.css'
import "bootstrap/dist/css/bootstrap.min.css" //sudo npm install bootstrap --save
import { Router as Router, Route, Switch, Link,withRouter } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom' 
import Navbar from "./components/layout/Navbar"
import About from "./components/About"
import Idea from "./components/Idea"
import Research from "./components/Research"
import Info from "./components/info/Info"
import FlowChart from "./components/info/Flow"
import Data from "./components/Data"
import UI from "./components/UI"
import Wireframe from "./components/Wireframe"
import Dir from "./components/features/Directory"
import Login from "./components/features/Login"
import Favorites from "./components/features/Favorites"
import Matching from "./components/features/Matching"
import Progress from "./components/features/Progress"
import Profile from "./components/features/Profile"
import Essay from "./components/features/Essay"
import Forum from "./components/features/Forum"
import Calc from "./components/features/Calc"
import Files from "./components/features/File"
import Calendar from "./components/features/Calendar"
import Forgot from "./components/features/Forgot"
import Darkmode from "./components/features/Darkmode"
import Footer from "./components/layout/Footer"
import Tech from "./components/Tech"
import Todo from "./components/Todo"
import Me from "./components/Me"
import Timeline from "./components/Timeline"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark:"no",
      navCol:"",
    } 
  }

  componentWillMount() {
    this.callbackFunctionNav()
    this.callbackFunctionDark()
  }

  callbackFunctionDark = async(data) => {
    if(data){
    this.setDark(data)
    return data
    }
  }

  setDark  = (data) =>{
    this.setState({dark: data})
  }

  callbackFunctionNav = (data) => {
      this.setState({navCol: data})
      return data
    }

  render() {
    return (
      <BrowserRouter> 
        <Navbar  parentCallbackNav={this.callbackFunctionNav} dark={(((this.state.dark)=="yes") ? 'yes' : 'no')}/> 
        <div   id={(this.state.navCol==false)?"apa":"apa-full"}>
          <Route exact path="/idea" component={Idea} />
          <Route exact path="/research" component={Research} />
          <Route exact path="/info-architecture" component={Info} />
          <Route exact path="/user-flow" component={FlowChart} />
          <Route exact path="/wireframing" component={Wireframe} />
          <Route exact path="/data-collection" component={Data} />
          <Route exact path="/features/directory-school" component={Dir} /> 
          <Route exact path="/features/login-register" component={Login} /> 
          <Route exact path="/features/favorites-list" component={Favorites} />
          <Route exact path="/features/matching-algorithm" component={Matching} />
          <Route exact path="/features/school-progress" component={Progress} />
          <Route exact path="/features/student-profile" component={Profile} />
          <Route exact path="/features/essay-planner" component={Essay} />
          <Route exact path="/features/cost-calculator" component={Calc} />
          <Route exact path="/features/file-upload" component={Files} />
          <Route exact path="/features/calendar" component={Calendar} />
          <Route exact path="/features/change-password" component={Forgot} />
          <Route exact path="/features/forum" component={Forum} />
          <Route exact path="/features/dark-mode" component={Darkmode} />
          <Route exact path="/technologies" component={Tech} />
          <Route exact path="/to-do" component={Todo} />
          <Route exact path="/about-me" component={Me} />
          <Route exact path="/timeline" component={Timeline} />
          <Switch>
            <Route exact path='/ui'  render={routerProps => <UI parentCallbackDark={this.callbackFunctionDark}
              navCol={(((this.state.navCol)) ? "yes" : "no")}/>}
            />
            <Route exact path='/'  render={routerProps => <About navCol={(((this.state.navCol)) ? "yes" : "no")}/>}/>
          </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;