import React from "react"
import { Link } from "gatsby"
import { useMediaQuery } from 'react-responsive'

import styled from "styled-components"

const TopArticle = props => {
  const thumbnail = props.header_image
  const blogSlug = `/blog/${props.slug}`

  // const handleClick = e => {
  //   props.changeSubject(props.subject)
  // }

  const isSmallTabletOrMobile = useMediaQuery({
    query: '(max-width: 770px)'
  })
 

  return (
      <StyleWrapper props={props}>
        {/* <div className="subject-wrapper">
          Newest in{" "}
          <button className="subject-button" onClick={handleClick}>
            {" "}
            {props.subject}
          </button>:
        </div> */}
        <div className="main-article">
          <div className="side-ruler"></div>
          <div className="main-info">
            <Link to={blogSlug}></Link>
            <h2> {props.title} </h2>
            {isSmallTabletOrMobile && <img src={thumbnail} alt={props.img_alt} />}
            <p
              className="excerpt"
              dangerouslySetInnerHTML={{ __html: props.excerpt }}
            />
            <p className="info-text">
              {props.timeToRead} Min Read
              <span className="date"> -- {props.date}</span>
            </p>
          </div>
         {isSmallTabletOrMobile || <img src={thumbnail} alt={props.img_alt} />}
        </div>
      </StyleWrapper>
  )
}

export default TopArticle

const StyleWrapper = styled.article`
  position: relative;


  a {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  .main-article {
    display: flex;
    max-width: 100%;
    height: auto;
    position: relative;
    justify-content: space-between;
    padding: 2rem 0 2rem 1.5rem;
    box-sizing: border-box;
    border: 2px transparent solid;
    transition: all 0.3s;
    border-radius: 3px;
    cursor: pointer;
  }
  .main-article:hover {
    background-color: #eff4f9;
  }
  .side-ruler {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-left: 1px rgba(0, 0, 0, 0.2) solid;
    /* border-bottom: 1px rgba(0,0,0,.2) solid; */
  }

  .main-info {
    /* width: 55%; */
    margin-left: 2rem;
  }

  .subject-wrapper {
    font-size: 1.4rem;
    font-weight: 300;
    margin: 2rem 0;
    opacity: 0.7;
  }

  .subject-button {
    background-color: transparent;
    align-self: flex-start;
    cursor: pointer;
    border: none;
    font: inherit;
    font-weight: 300;
    margin: 0 auto;
    color: #ff6b00;
    text-decoration: underline;
  }
  img {
    height: auto;
    min-width: 35%;
    margin-right: 2rem;
  }

  h2 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    line-height: 1.1;
    letter-spacing: -1.3px;
    text-decoration: underline;
  }

  .info-text {
    font-size: 1rem;
  }
  .date {
    opacity: 0.7;
  }
  .excerpt {
    margin: 1rem 4rem 2rem 0;
    font-size: 1.3rem;
  }
  .article-button {
    border: none;
    background-color: none;
  }

  @media (max-width: 956px) {
    .main-article{
      padding: 0;
    }
    img{
      margin-right: 0;
      margin-left: 2rem;
      min-width: 45%;

    }
    h2{
      font-size: 2.8rem;
      margin-bottom: 4rem;
    }
    .excerpt {
      font-size: 1.4rem;
      margin-bottom: 3rem;
      margin-right: 0rem;

    }
    .side-ruler{
      display: none;
    }
    .main-info{
      margin: 0;
    }
  }
  @media (max-width: 770px) {

    h2{
      text-align: center;
      margin-bottom: 2rem;
    }
    img{
      max-width: 33vw;
      height: auto;
      margin: 0 auto;
      display: block;
      float: right;
      margin-left: 2rem;
    }
    .excerpt{
      font-size: 1.3rem;
      /* margin-top: 4rem; */
    }
  }
  @media (max-width: 567px) {
    .subject-wrapper{
      display: none;
    }
    .main-article {
      margin: 0 auto;
      width: 80vw;
    }
    
    .main-info{
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    h2{
      text-align: center;
      font-size: calc(1rem + 0.5vh + 1.5vw);
      margin: .5rem 0;
      padding-bottom: .5rem;
    }
    img{
      min-width: 100%;
      float: none;
      margin: 0 auto;
    }
    .excerpt{
  
      display: none;
    }
    .info-text{
      text-align: center;
      margin-top: .5rem;
      margin-bottom: 1rem;
    }
  }
`
