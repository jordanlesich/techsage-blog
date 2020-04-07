import React from 'react'
import styled from 'styled-components'
import useToggle from '../hooks/useToggle'
import {Link} from 'gatsby'
import SubscribeForm from './subscribeForm'
import ContactForm from './contactForm'


const HeaderContainer = styled.header `

    max-width: 1000px;
    margin: 3rem auto;
    
    nav {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
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
        @media (max-width: 756px) {
        margin: 2rem 1rem 0 1rem;
    
        .logo{
            font-size: 2.4rem;
          margin: 0;
          padding: .5rem 1rem .6rem 0;
          border-bottom: none;
        }

        .subscribe-button, .contact-button {
        font-size: 1.2rem;
        border:none;
        text-decoration: underline;
        padding: 1rem;
        margin: 0;
        :hover{
            border: none;
        }
        }


    }
        @media (max-width: 567px) {
        margin: 0;
        margin-top: .5rem;
            
        nav{
            width: 80vw;
            margin: 0 auto;
            flex-direction: column;
            align-items: center;
            border-left: 1px rgba(0,0,0,0.2)solid;
            border-right: 1px rgba(0,0,0,0.2)solid;
        }
        
        .logo{
         font-size: calc(1.7rem + 0.5vh + 1.5vw);
         margin: 0;
         padding: 0 1rem ;
         border: none;
        }

        .options{
            margin: .5rem auto;
        }

        .subscribe-button, .contact-button {
        font-size: calc(.4rem + 0.5vh + 1.5vw);
        font-weight: 500;
        padding: .25rem .5rem;
        border-top: 1px rgba(255, 123, 0, .4) solid;
        border-bottom: 1px rgba(255, 123, 0, .4) solid;
        text-decoration: none;
        }
        .contact-button{
            border-right: 1px rgba(255, 123, 0, .4) solid;
        }

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