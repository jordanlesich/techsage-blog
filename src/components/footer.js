import React from 'react'
import useToggle from '../hooks/useToggle'
import styled from 'styled-components'
import {useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'
import SubscribeForm from './subscribeForm'
import ContactForm from './contactForm'

const FooterContainer = styled.footer `

    max-width: 1000px;
    margin: 0 auto ;
    position: relative;

    

    .request-button{
        display: block;
        background: transparent;
        color: #ff6b00;
        text-align: center;
        padding: 1rem 2rem;
        margin: 4rem auto;
        border: 1px transparent solid;
        border-top: 1px #ff6b00 solid;
        border-left: 1px #ff6b00 solid;
        cursor: pointer;
        font-size: 1.6rem;
        letter-spacing: -1.5px;
        transition: all .2s;

        :hover, :focus{
        border: 1px #ff6b00 solid;
        box-shadow: 1px 2px 3px 2px rgba(0,0,0,.15)
        }
    }
        

    .about-section{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .about-blog, .about-me{
        width: 100%;
        border-top: 1px rgba(0,0,0,.4) solid;
        margin-top: 2rem;
        font-size: 1rem;
        p{
            margin: 0 1rem 2rem 3rem;
        }
        
    }

    
    .about-blog{
        grid-column: 1;
        border-right: 1px rgba(0,0,0,.2) solid;
    }
    .about-me{
        grid-column: 2;
    }
    .inner-container {
        width: 70%;
        margin: 0 auto;
    }
     
    .logo-container, .image-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
    }

    .logo {
        font-size: 2.5rem;
        font-weight: 600;
        letter-spacing: -2.8px;
    }
    .subscribe-button, .contact-button {
        font-size: 2rem;
        margin: 2rem 0;
        padding: 1rem 0;
        font-family: inherit;
        color: #ff6b00;
        /* opacity: 0.7; */
        border: 1px transparent solid;
        background-color: transparent;
        border-bottom: 1px #ff6b00 solid;
        cursor: pointer;
        border-radius: 3px;
        transition: all 0.2s;
        :hover{
            border: 1px #ff6b00 solid;
        }
        
    }
    .subscribe-button {
        border-right: 1px #ff6b00 solid;
        grid-row: 2;
        grid-column: 1
    }
    .conact-button {
        grid-column: 2;
        grid-row: 1;
    }

    @media (max-width: 1149px) {
        margin: 0 3rem;
        .inner-container{
            width: 85%;
        }
    }
    @media (max-width: 856px) {
        .inner-container {
            width: 100%;
        }
    }
    @media (max-width: 756px) {
        margin: 0 1rem;
        .about-section{
            display: flex;
            flex-direction: column;
        }
        .about-me{
            margin: 0;
        }

        .about-blog{
            border-right: none;
           
        }
        
        .logo-container {
            height: 110px;
        }
        .logo{
            margin: 0;
            margin-right: 6px;
            font-size: 2.5rem;
        }
        .contact-button, .subscribe-button {
            margin: 0;
        }
        
    }
`


const Footer = props => {

    const [subscribeFormOpen, toggleSubscribeForm] = useToggle(false)
    const [contactFormOpen, toggleContactForm] = useToggle(false)


    const data = useStaticQuery(graphql`
    query imgQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `)

    return(
        <FooterContainer>
                <button className='request-button' onClick={toggleContactForm}>Request an Article</button>
                <div className="about-section">
                    <div className="about-blog">
                        <div className="inner-container">
                            <div className="logo-container">
                                <div className='logo'>sageMachina</div>
                            </div>
                            <p>
                                {/* <Link className="logo" to='/'>sageMachina </Link> is a blog about coding, tech, wellness, and stoicism. */}
                            <span className='this'>This </span> is a blog where tech, coding, business, and design come to hang out with stoic philosophy and living well. Its 
                            purpose is to make us smarter, healthier, happier, and more capable, so that the machines we create can do the same for others. 
                            </p>
                            <p>
                            Feel free to share this blog with others, or subscribe to find out when each new article has been released. 
                            </p>
                        </div>
                    </div>
                    <div className='about-me'>
                    <div className='inner-container'>
                        <div className='image-container'>
                            <Image
                                fixed={data.avatar.childImageSharp.fixed}
                                alt='Jordan Lesich'
                                imgStyle={{
                                borderRadius: `50%`,
                                }}
                            />
                        </div>
                        <p>
                            Hi, my name is Jordan. I'm a web developer and blogger living in Toronto, Ontario. This blog is a repository 
                            for the experiences I've had as a developer. While it is true that I write to teach and help others, it is also 
                            so that I can teach myself.
                        </p>
                        <p>
                            You're welcome to visit my gitHub, Portfolio page(in construction), or linkedIn to see what I do. And if you have
                            any questions, criticisms, comments, concerns, please let me know by clicking the contact button below. 
                        </p>
                        </div>
                    </div>

                    <button className='contact-button' onClick={toggleContactForm}>Contact</button>
                    {contactFormOpen && <ContactForm toggleContactForm={toggleContactForm} /> }
                    <button className='subscribe-button' onClick={toggleSubscribeForm}>Subscribe</button>
                    {subscribeFormOpen && <SubscribeForm toggleSubscribeForm={toggleSubscribeForm} /> }
                </div>
        </FooterContainer>
        
    )
}

export default Footer 