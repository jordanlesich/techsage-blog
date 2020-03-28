import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
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


const Footer = () => {
    return(
        <FooterContainer>
            <div className="inner-container">
            <nav>
                <Link className="logo" to='/blog'>sageMachina</Link>
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
            <SubscribeFooter />
        </FooterContainer>
        
    )
}

export default Footer 