import React from 'react'
import styled from 'styled-components'
import {Link, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'
import SubscribeFooter from '../components/subscribeFoot'


const FooterContainer = styled.footer `

    background-color: #262626;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 400px;
    position: relative;

    .inner-container {
        justify-self: center;
        width: 90%;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 2.5rem 0;
    }

    a {
        color: #f0f0f0;
        font-size: 1.4rem;
    }
    a:hover {
        color: #ffffff;
        /* text-decoration: underline; */
    }
    a:visited {
        color: #f0f0f0;
    }

    .logo {
        font-size: 3.5rem;
        font-weight: 600;
        letter-spacing: -4px;
        margin-bottom: 2rem;
    }
    .about-text{
        color: #f0f0f0;
        width: 300px;
        font-size: 1.3rem;
        p{
        margin: 1rem 0;
        }
    }
    .nav-links{
        display: flex;
        height: 150px;
    }
    .nav-main-links{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-right: 2rem;
        border-right: 1px #f0f0f0 solid;

        /* a{
            padding: 1rem 0; 
        } */
    }
    .nav-sub-links{
        display: flex;
        flex-direction: column;
        justify-content: space-around;


        .nav-sub-section{
            display: flex;
            height: 1.4rem;
            align-items: flex-end;
            a{
                font-size: 1rem;
                margin: 0 1.2rem;
            }
        }


    }
    


`


const Footer = props => {

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
    


    console.log(data)


    return(
        <FooterContainer>
            <div className="inner-container">
            <nav>
                <Link className="logo" to='/'>sageMachina</Link>
                <div className="about-text">
                    {props.location.pathname === '/' ? 
                    <>
                    <p>sageMachina is a blog about coding, tech, wellness, and stoic philosophy.</p>
                    <Image
                        fixed={data.avatar.childImageSharp.fixed}
                        alt='Jordan Lesich'
                        imgStyle={{
                        borderRadius: `50%`,
                        }}
                    />
                    <p>It is written by Jordan Lesich, a web developer living in Toronto</p>
                    </>
                    :
                    <>
                    <Image
                        fixed={data.avatar.childImageSharp.fixed}
                        alt={'Jordan Lesich'}
                        imgStyle={{
                        borderRadius: `50%`,
                        }}
                    />
                    <p>This article was written by Jordan Lesich, a web developer living in Toronto.</p>
                    </>
                    }   
                </div>
                {/* <div className="nav-links">
                <div className="nav-main-links">
                    <Link>About</Link>
                    <Link>Portfolio</Link>
                    <Link>Blog</Link>
                </div>
                <div className="nav-sub-links">
                    <div className="nav-sub-section">
                        <Link>sageMachina</Link>
                        <Link>jordan</Link>
                    </div>
                    <div className="nav-sub-section">
                        <Link>apps</Link>
                        <Link>sites</Link>
                        <Link>words</Link>
                    </div>
                    <div className="nav-sub-section"> 
                        <Link>blog</Link>
                    </div>
                </div>
                </div> */}
            </nav>
            </div>
            <SubscribeFooter location={props.location}/>
        </FooterContainer>
        
    )
}

export default Footer 