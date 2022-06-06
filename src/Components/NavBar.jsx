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
        this.redirect = this.redirect.bind(this);
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
            this.setState({
                logoAnimation: false
            })
        }
    }

    redirect(event){
        switch(event.target.id){
            case 'home': return document.location = "/";
            case 'gallery': return window.document.location = "/gallery";
            case 'commision': return document.location = "/commision";
            case 'tos': return document.location = "/tos";
            case 'contact': return document.location = "/contact";
            case 'queue': return document.location = "/queue";
            default: return null;
        }
    }

    render(){
        return(
            <div aria-label="navigation" role="navigation" id="navParent">
                <div className={this.state.logoAnimation ? 'logo-ari' : 'logo-ari-stop'}>
                    <img src={logo} alt="solovari" className='logo-img' onClick={(event) => document.location = "/"}></img>
                </div>
                <div className="Nav_Container">
                    <ul className='Nav_Wrapper'>
                        <li aria-label='home' className='nav_item' id="home">
                            <a className="button" href="/">Home</a>
                        </li>
                        <li aria-label='gallery' className='nav_item' id="gallery">
                            <a className="button" href="gallery">Gallery</a>
                        </li>
                        <li aria-label='commission' className='nav_item' id="commision">
                            <a className="button" href="commission">Commission</a>
                        </li>
                        <li aria-label='queue' className='nav_item' id="queue">
                        <a className="button" href="queue">Queue</a>
                        </li>
                        <li aria-label='terms_of_service' className='nav_item' id="tos">
                            <a className="button" href="tos">Terms</a>
                        </li>
                        <li aria-label='contact' className='nav_item' id="contact">
                            <a className="button" href="contact">Contact</a>
                        </li>
                        {/* <div className='Menu_Wrapper' id="contact" onClick={(event) => this.redirect(event)}>      
                        </div> */}
                    </ul>
                </div>
            </div>
        )
    }
}