import React from 'react';
import './App.css';
import Home from "./Components/Home.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Commissions from "./Components/Commissions.jsx";
import TermsOfService from "./Components/TermsOfService.jsx";
import Gallery from "./Components/Gallery.jsx";
import Footer from "./Components/Footer.jsx";
import NavBar from "./Components/NavBar.jsx";

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div id="mainContent">
        <Router>
          <Routes>
            <Route path="/" element={<Welcome/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/tos" element={<TOS/>}></Route>
            <Route path="/commision" element={<Commission/>}></Route>
            <Route path="/gallery/:id" element={<Portfolio/>}></Route>
            <Route path="/gallery" element={<Portfolio/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

const Welcome = (props) => {
  return(
    <Home></Home>
  )
}

const About = (props) => {
  return(
    <AboutMe></AboutMe>
  )
}

const TOS = (props) => {
  return(
    <TermsOfService></TermsOfService>
  )
}

const Commission = (props) => {
  return(
    <Commissions></Commissions>
  )
}

const Portfolio = (props) => {
  let {id} = useParams();
  if(!id){
    id = "none";
  }

  return(
    <Gallery id={id}></Gallery>
  )
}


export default App;
