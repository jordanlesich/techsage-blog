import React from "react"
import Header from './header'
import Footer from './footer'
import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`

  min-height: 100%;

  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system,  BlinkMacSystemFont, 'Segoe UI',  Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #262626;
    text-rendering: optimizeLegibility;
  }
  a, a:visited{
    font-family: -apple-system,  BlinkMacSystemFont, 'Segoe UI',  Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #262626;
    text-decoration: none;
    text-rendering: optimizeLegibility;
  }
  
`

const MainLayout = styled.main`

display: grid;
grid-template-columns: auto 1000px auto;

@media (max-width: 1149px) {
	display: flex;
  justify-content: center;
  margin: 0 3rem;
}

`


const Layout = props => {
   
    const {children, location} = props

    return (
      
      <>
        <GlobalStyle />
          <Header location={location}/>
          <MainLayout>
            {children}
          </MainLayout>
          <Footer  location={location}/>
        
      </>
    )
  
}


export default Layout
