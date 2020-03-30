import React from 'react'
import styled from 'styled-components'
import useToggle from '../hooks/useToggle'
import {Link} from 'gatsby'
import SubscribeNav from './subscribeNav'


const HeaderContainer = styled.header `

    /* max-width: 1100px; */
    margin: 0 auto;
    position: relative;
    
    .downArrow {
        height: 8px;
        cursor: pointer;
    }

    nav {
        display: flex;
        align-items: center;
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
        letter-spacing: -2.6px;
        padding: 1rem 3rem 1rem 3rem;
        /* margin: 1rem 0; */
        border-bottom: 1px #292929 solid;
        border-left: 1px #292929 solid;
        transform: translateX(-50px)
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

ul li ul {
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
    
    
        
        .subscribe-button {
            color: #ff6b00;
            background-color: #ffffff;
            border-radius: 3px;
            font-size: 1.4rem;
            padding: .5rem 1rem;
            border: 2px #ff6b00 solid;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    
`


const Header = props => {

    const [subscribeFormOpen, toggleSubscribeForm] = useToggle(false)

    return(
        <HeaderContainer>
            <nav>
                <Link className="logo" to='/blog'>sageMachina</Link>
                {/* <ul className="link-container">
                    <li><Link to='/blog'>blog</Link>
                        <ul className="dropdown">
                            <li><Link>sagacity</Link></li>
                            <li><Link>machina</Link></li>
                            <li><Link>sageLife</Link></li>
                            <li><Link>inDepth</Link></li>
                        </ul>
                    </li>
                    <li><Link>about</Link>
                        <ul className="dropdown">
                            <li><Link>sageMachina</Link></li>
                            <li><Link>jordan</Link></li>
                        </ul>
                    </li>
                    <li><Link>portfolio</Link>
                        <ul className="dropdown">
                            <li><Link>web apps</Link></li>
                            <li><Link>web pages</Link></li>
                        </ul>
                    </li>
                </ul> */}
            <div className="subscribe" >
                <button onClick={toggleSubscribeForm} className='subscribe-button'> Subscribe</button>
                {subscribeFormOpen && <SubscribeNav location={props.location} toggleSubscribeForm={toggleSubscribeForm} />}
            </div>
            </nav>
        </HeaderContainer>
        
    )
}

export default Header 