import React from "react"
import Header from './header'
// import { Link } from "gatsby"
import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #262626;
  }
  a {
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
