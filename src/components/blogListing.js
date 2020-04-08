import React from 'react'
import {Link} from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import styled from 'styled-components'

const BlogListing = props => {

    const thumbnail = props.header_image
    const blogSlug = `/blog/${props.slug}`


    const handleClick = e => {
        props.changeSubject(props.subject)
    }

    const isMobile = useMediaQuery({
        query: '(max-width: 567px)'
      })

    return(
    
    <StyleWrapper props={props}>
            <div className="main-card">
            <Link to={blogSlug}></Link>
            <div className="main-info">
                <h2> {props.title} </h2>
                {isMobile && <img src={thumbnail} alt={props.img_alt}/>}
                <p className="excerpt" dangerouslySetInnerHTML={{ __html: props.excerpt}}/> 
                <p className="info-text">    
                {props.timeToRead} Min Read 
                <span className="date"> -- {props.date}</span>
                </p>
            </div>  
            {isMobile || <img src={thumbnail} alt={props.img_alt}/>}
            </div>
            <div className='subject-wrapper'>
                <button className='subject-button' onClick={handleClick}> {props.subject}</button>
            </div>
    </StyleWrapper>

    )
}

export default BlogListing

const StyleWrapper = styled.article ` 

    width: 100%;
    display: grid;
    grid-template-columns: 75% 25%;
    border-top: ${props => props.props.index === 0 ? '1px rgba(0,0,0,0.5) solid' : '1px rgba(0,0,0,0.2) solid'};
    .main-card {
        grid-column: 1;
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: 1rem;
        transition: all .3s;
        border: 2px transparent solid;
    }
    .main-card:hover {
        background-color: #eff4f9;
        /* border: 2px  #ff6b00 solid; */

    }
    img {
        width: auto;
        /* padding: .5rem; */
        height: 260px;
        float: right;
    }
    a{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }

    .main-info {
        width: 75%;
    }

    .subject-wrapper{
        grid-column: 2;
        display: flex;
        justify-content: center;
        padding: 1rem;
    }

    .subject-button {
        background-color: transparent;
        align-self: flex-start;
        cursor: pointer;
        border: none; 
        font: inherit;
        font-size: 1.4rem;
        margin: 0 auto;
        color: rgba(255, 123, 0, 1);
        font-weight: 400;
        text-decoration: underline;
    }

    h2 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    .info-text{
        font-size: 1rem;
    }
    .date{
        opacity: .7;
    }
    .excerpt {
        margin: 1rem 1rem 1rem 0;
    }
    .article-button {
        border: none;
        background-color: none;

    }

    @media (max-width: 1149px) {
        img{
            margin-left: 2rem;
        }
    }
    @media (max-width: 956px) {
        display: flex;
        width: 90%;
        .main-card{
            padding: 0.5rem;
        }
        h2{
            font-size: 1.4rem;
        }
        .subject-wrapper {
            display: none;
        }
        img{
           min-width: 200px;
        }
        .excerpt{
            font-size: 1.1rem;
    
        }
    }
    @media (max-width: 567px) {
      width: 80vw;

    .main-card {
      width: 100%;
      margin: 0 auto;
      border-bottom: 1px rgba(0,0,0,.25) solid;
    }
    
    .main-info{
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    h2{
      text-align: center;
      font-size: calc(.9rem + 0.5vh + 1.5vw);
      margin: .5rem 0;
      line-height: 1.1;
      text-decoration: underline;
      padding-bottom: .5rem;
    }
    img{
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