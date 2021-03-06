import React from 'react';
import './styles/standard.css';
import Home from "./Components/Home.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Commissions from "./Components/Commissions.jsx";
import TermsOfService from "./Components/TermsOfService.jsx";
import Gallery from "./Components/Gallery.jsx";
import Footer from "./Components/Footer.jsx";
import NavBar from "./Components/NavBar.jsx";
import Contact from "./Components/Contact.jsx";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      home: true,
      commission: false,
      tos: false,
      gallery: false,
      queue: false,
      contact: false
    }
    this.updateSection = this.updateSection.bind(this);
  }

  componentDidMount(){

  }

  updateSection(id){
    console.log("updating section with " + id);
    Object.keys(this.state).forEach(
      (n) => {
        if(id === n){
          console.log("matching: " + id);
          this.setState({
            [id] : true
          });
        }else{
          this.setState({
            [n] : false
          });
        }
      }
    );
    window.history.replaceState(null, null, "/" + id)
  }

  updateGallery(gal){
    console.log("updating gallery selection with: " + gal);
    Object.keys(this.state).forEach((n) => {
      if(gal === n){
        console.log("matching: " + gal);
        this.setState({
          [gal]: true,
          gallery: true
        })
      }else if(gal !== "gallery" || gal !== n){
        this.setState({
          [n] : false
        })
      }
    })
  }

  navBar = () =>{
    return(
      <NavBar updateSection={(e) => this.updateSection(e)}></NavBar>
    )
  }


  render(){
    return(
      <>
        {this.navBar()}
        <div id="mainContent">
          {this.state.home && <Home></Home>}
          {this.state.tos && <TermsOfService></TermsOfService>}
          {this.state.gallery && <Gallery></Gallery>}
          {this.state.commission && <Commissions></Commissions>}
          {this.state.contact && <Contact></Contact>}
        </div>
      </>
    )
  }
}


export default App;
