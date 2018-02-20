import React, { Component } from 'react';
import './css/HomePage.css';
import kiev from './images/Kiev-Apt-MARTIN-architects-1.jpg';
import interior from './images/INterior-designs.jpg';
import tenants from './images/Tenants-Rights-03.jpg';

class HomePageComponent extends Component{
    render(){
        return (
            <div>
                <div className='bodyContainer'>
                    <div className='homepage-content-container'> 
                        <h1>Find a Rental Right Near Campus</h1>
                        <p>View Homes, Easily Chat With Tenants and Get the Keys to your New Humble Abode - Its as easy as that! Bad Credit? <br/>
                        No Problem! with Afito credit and bank records arent necessary. No, its not too good to be true - Its Afito!</p>
                        <p>What College/Univeristy do you Attend?</p>
                    </div>
                    <div> <img src={kiev} width='720' height='495' /> </div>
                </div>

                <div className='bodyContainer'>
                <div> <img src={interior} width='720' height='495' /> </div>
                <div className='homepage-content-container'> 
                         <h1>Welcome to Afito</h1>
                         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>

                    </div>
                </div>
                <div className='bodyContainer'>
                    <div className='homepage-content-container'> 
                        <h1>Tenants</h1>
                        <p>View Homes, Easily Chat With Tenants and Get the Keys to your New Humble Abode - Its as easy as that! Bad Credit? <br/>
                        No Problem! with Afito credit and bank records arent necessary. No, its not too good to be true - Its Afito!</p>
                        <p>What College/Univeristy do you Attend?</p>
                        <button class="btn btn-primary">Start as a tenant</button>
                    </div>
                    <div> <img src={tenants} width='720' height='495' /> </div>
                </div>                
            
            </div>
        );
    }
}

export default HomePageComponent;
    