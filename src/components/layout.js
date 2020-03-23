import React from "react"
import Header from './header'
import Helmet from "react-helmet"
// import { Link } from "gatsby"
import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Roboto', sans-serif, -apple-system,  BlinkMacSystemFont, 'Segoe UI',  Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    color: #262626;
    text-rendering: optimizeLegibility;
  }
  a, 
  a:visited{
    text-decoration: none;
  }
  
`


class Layout extends React.Component {
  render() {
    // const {location, title} = this.props;
    const {children} = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // const blogPath = `${__PATH_PREFIX__}/blog/`

    return (
      
      <>
        <Helmet>
              <link href="https://fonts.googleapis.com/css?family=Roboto:300,500,700&display=swap" rel="stylesheet" />
        </Helmet>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <main>
            {children}
          </main>
        </Wrapper>
      </>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

// const Footer = styled.footer`
//   text-align: center;
//   margin: 24px;
// `

export default Layout
