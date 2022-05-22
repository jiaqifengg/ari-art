import React from 'react';
import "../styles/navbar.css";
export default class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <nav aria-label="navigation" role="navigation">
                <div className="Nav_Container">
                    <ul className='Nav_Wrapper'>
                        <div className='Menu_Wrapper'>
                            <li aria-label='home' className='nav-item'>
                                Home
                            </li>
                        </div>
                        <div className='Menu_Wrapper'>
                            <li aria-label='gallery' className='nav-item'>
                                Gallery
                            </li>
                        </div>
                        <div className='Menu_Wrapper'>
                            <li aria-label='commission' className='nav-item'>
                                Commission
                            </li>
                        </div>
                        <div className='Menu_Wrapper'>
                            <li aria-label='queue' className='nav-item'>
                                Queue
                            </li>
                        </div>
                        <div className='Menu_Wrapper'>
                            <li aria-label='terms_of_service' className='nav-item'>
                                Terms
                            </li>
                        </div>
                        <div className='Menu_Wrapper'>
                            <li aria-label='contact' className='nav-item'>
                                Contact
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        )
    }
}