import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const HeaderContainer = styled.header `

    background-color: #262626;
    
    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a {
        color: #f0f0f0;
        font-size: 1.4rem;
    }
    a:hover {
        color: #ffffff;
    }
    a:visited {
        color: #f0f0f0;
    }

    .link-container {
        width: 500px;
        padding-top: 2rem;
        padding-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        
    }
    .logo {
        font-size: 4.3rem;
        font-weight: 500;
        letter-spacing: -5px;
        padding: 2rem 5rem 1rem 5rem;
        border-bottom: 1px #f0f0f0 solid
    }
    .subscribe {
        position: absolute;
        color: #FF6B00;
        right: 3rem;
    }
    .subscribe:visited {
        color: #FF6B00;
    }
    


`


const Header = props => {
    return(
        <HeaderContainer>
            <nav>
                <Link className="logo">techSage</Link>
                <div className="link-container">
                    <Link>Blog</Link>
                    <Link>About</Link>
                    <Link>Portfolio</Link>
                    <Link className="subscribe">Subscribe</Link>
                </div>
                
            </nav>
        </HeaderContainer>
        
    )
}

export default Header 