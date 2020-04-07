import React from 'react'
import styled from 'styled-components'
import useToggle from '../hooks/useToggle'
import {Link} from 'gatsby'
import SubscribeForm from './subscribeForm'
import ContactForm from './contactForm'


const HeaderContainer = styled.header `

    max-width: 1000px;
    margin: 3rem auto;
    
    .downArrow {
        height: 8px;
        cursor: pointer;
    }

    nav {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    a {
        color: #292929;
        font-size: 1.4rem;
    }
    a:hover {
        color: #ffffff;
    }
    a:visited {
        color: #292929;
    }

    .link-container {
        width: 500px;
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        list-style: none;
        
    }
    .logo {
        font-size: 2.5rem;
        font-weight: 600;
        letter-spacing: -3px;
        box-sizing: border-box;
        padding: 0rem 3rem 1rem 0rem;
        /* margin: 1rem 0; */
        border-right: 1px rgba(0,0,0,.3) solid;
        border-bottom: 1px rgba(0,0,0,.3) solid;
        /* transform: translateX(-50px) */
    }
   

    li {
        padding: 1rem
    }
    
    .dropdown li {
        background-color: #292929;
        display: block;
        /* float: left; */
        position: relative;
        text-decoration: none;
        padding: .5rem 1rem .5rem 2rem;
        a {
            
        }
}
.dropdown li:last-child{
    padding: .5rem 1rem 1rem 2rem;
}

/* ul li ul {
    visibility: hidden;
    opacity: 0;
    min-width: 5rem;
    position: absolute;
    display: none;
    transition-duration: 0.2s;
    }

    ul li:hover > ul,
    ul li:focus-within > ul,
    ul li ul:hover {
    opacity: 1;
    visibility: visible;
    display: block;
}

    ul li ul li {
        clear: both;
        width: 100%;
        }
    ul li ul li:hover {
        background-color: #f0f0f0;
            a {
                color: #262626;
                text-decoration: none;
            }
        }
     */
        .options {
            display: flex;
        }
        
        .subscribe-button, .contact-button {
            color: #ff6b00;
            background-color: transparent;
            /* border-radius: 3px; */
            font-size: 1.4rem;
            padding: 1rem 1rem;
            border: 1px transparent solid;
            border-bottom: 1px #ff6b00 solid;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            opacity: 0.7;
            transition: all 0.2s;
            :hover {
                border: 1px #ff6b00 solid;
            }
           
        }
        .contact-button{
            border-right: 1px #ff6b00 solid;
        }
        @media (max-width: 1149px) {
        margin: 2rem 3rem 0 3rem;
        
        
    }
    
`


const Header = props => {

    const [subscribeFormOpen, toggleSubscribeForm] = useToggle(false)
    const [contactFormOpen, toggleContactForm] = useToggle(false)

    return(
        <HeaderContainer>
            <nav>
                <Link className="logo" to='/' id='top'>sageMachina</Link>
            <div className="options" >
                <button onClick={toggleContactForm} className='contact-button'> Contact</button>
                <button onClick={toggleSubscribeForm} className='subscribe-button'> Subscribe</button>
                {subscribeFormOpen && 
                <SubscribeForm 
                location={props.location} 
                subscribeFormOpen ={subscribeFormOpen}
                toggleSubscribeForm={toggleSubscribeForm} 
                />}
                {contactFormOpen && 
                <ContactForm 
                location={props.location} 
                subscribeFormOpen ={subscribeFormOpen}
                toggleContactForm={toggleContactForm} 
                />}
            </div>
            </nav>
        </HeaderContainer>
        
    )
}

export default Header 