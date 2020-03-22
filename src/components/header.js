import React from 'react'
// import styled from 'styled-components'
import {Link} from 'gatsby'


const Header = props => {
    return(
        <header>
            <nav>
                <Link>techSage</Link>
                <Link>Blog</Link>
                <Link>About</Link>
                <Link>Portfolio</Link>
                <Link>Subscribe</Link>
            </nav>
        </header>
    )
}

export default Header 