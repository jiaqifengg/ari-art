import $ from 'jquery';
import React from 'react';
import "../styles/navbar.css";
import logo from "../assets/AAAAA_Slower.gif"

export default class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logoAnimation: true
        }
        this.updatePage = this.updatePage.bind(this);
    }

    componentDidMount(){
        if(!sessionStorage.getItem("navBar")){
            var eT=0;
            $('.nav_item').hide().each(function() {
            $(this).delay(eT).fadeIn('slow');
            eT += 400; // Fade in speed
            });
        }
        if(!sessionStorage.getItem("navBar")){
            sessionStorage.setItem("navBar", true);
            sessionStorage.setItem("logo", false);
        }
    }

    updatePage(event){
        console.log(event.target.id);
        this.props.updateSection(event.target.id);
    }

    render(){
        return(
            <div aria-label="navigation" role="navigation" id="navParent">
                <div className='logo-ari'>
                    <img src={logo} alt="solovari" className='logo-img' onClick={(event) => document.location = "/"}></img>
                </div>
                <div className="Nav_Container">
                    <ul className='Nav_Wrapper'>
                        <li aria-label='home' className='nav_item' id="home">
                            <button className="button" id="home" onClick={e => this.updatePage(e)}>Home</button>
                        </li>
                        <li aria-label='gallery' className='nav_item' id="gallery">
                            <button className="button" id="gallery"onClick={e => this.updatePage(e)}>Gallery</button>
                        </li>
                        <li aria-label='commission' className='nav_item' id="commision">
                            <button className="button" id="commission" onClick={e => this.updatePage(e)}>Commission</button>
                        </li>
                        <li aria-label='queue' className='nav_item' id="queue">
                        <button className="button" id="queue" onClick={e => this.updatePage(e)}>Queue</button>
                        </li>
                        <li aria-label='terms_of_service' className='nav_item' id="tos">
                            <button className="button" id="tos" onClick={e => this.updatePage(e)}>Terms</button>
                        </li>
                        <li aria-label='contact' className='nav_item' id="contact">
                            <button className="button" id="contact" onClick={e => this.updatePage(e)}>Contact</button>
                        </li>
                        {/* <div className='Menu_Wrapper' id="contact" onClick={(event) => this.redirect(event)}>      
                        </div> */}
                    </ul>
                </div>
            </div>
        )
    }
}