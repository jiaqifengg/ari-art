import jQuery from 'jquery';
import $ from 'jquery';
import React from 'react';
import "../styles/navbar.css";
import logo from "../assets/AAAAA_Slower.gif"

export default class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
        this.redirect = this.redirect.bind(this);
    }
    
    componentDidMount(){
        var eT=0;
        $('.Menu_Wrapper').hide().each(function() {
        $(this).delay(eT).fadeIn('slow');
            eT += 300; // Fade in speed
        });
    }

    redirect(event){
        event.preventDefault();
        switch(event.target.id){
            case 'home': return document.location = "/";
            case 'gallery': return document.location = "/gallery";
            case 'commision': return document.location = "/commision";
            case 'tos': return document.location = "/tos";
            case 'contact': return document.location = "/contact";
            case 'queue': return document.location = "/queue";
        }
    }

    render(){
        return(
            <div aria-label="navigation" role="navigation" id="navParent">
                <div className='logo-ari'>
                    <img src={logo} alt="solovari" className='logo-img' onClick={() => document.location = "/"}></img>
                </div>
                <div className="Nav_Container">
                    <ul className='Nav_Wrapper'>
                        <div className='Menu_Wrapper' id="home" onClick={(event) => this.redirect(event)}>
                            <li aria-label='home' className='nav-item' id="home" onClick={(event) => this.redirect(event)}>
                                Home
                            </li>
                        </div>
                        <div className='Menu_Wrapper' id="gallery" onClick={(event) => this.redirect(event)}>
                            <li aria-label='gallery' className='nav-item' id="gallery" onClick={(event) => this.redirect(event)}>
                                Gallery
                            </li>
                        </div>
                        <div className='Menu_Wrapper' id="commision" onClick={(event) => this.redirect(event)}>
                            <li aria-label='commission' className='nav-item' id="commision" onClick={(event) => this.redirect(event)}>
                                Commission
                            </li>
                        </div>
                        <div className='Menu_Wrapper' id="queue" onClick={(event) => this.redirect(event)}>
                            <li aria-label='queue' className='nav-item' id="queue" onClick={(event) => this.redirect(event)}>
                                Queue
                            </li>
                        </div>
                        <div className='Menu_Wrapper' id="tos" onClick={(event) => this.redirect(event)}>
                            <li aria-label='terms_of_service' className='nav-item' id="tos" onClick={(event) => this.redirect(event)}>
                                Terms
                            </li>
                        </div>
                        <div className='Menu_Wrapper' id="contact" onClick={(event) => this.redirect(event)}>
                            <li aria-label='contact' className='nav-item' id="contact" onClick={(event) => this.redirect(event)}>
                                Contact
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

