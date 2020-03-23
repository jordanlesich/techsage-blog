import React from 'react'
import {Link} from 'gatsby'

import styled from 'styled-components'

const blogListing = props => {

    const thumbnail = props.header_image
    const blogSlug = `/blog/${props.slug}`

    return(
    <StyleWrapper>
            <hr/>
            <img src={thumbnail} alt={props.img_alt}/>
            <div className="mainInfo">
                <h2> {props.title} </h2>
                <p className="timeToRead"> {props.timeToRead} Min Read <span className="date"> -- {props.date}</span></p>
                
                <p className="excerpt" dangerouslySetInnerHTML={{ __html: props.excerpt}}/> 
                <Link to={blogSlug}><button className="readMore">Read More</button></Link>
            </div>   
            <p className="subject">{props.subject}</p>
    </StyleWrapper>
    )
}

export default blogListing


const StyleWrapper = styled.article `
    max-width: 1000px;
    margin: 0 0 4rem 4rem;
    display: grid;
    grid-template-columns: 2fr 5fr 1fr;
    
    hr {
        border-top: 1px #262626 solid;
        grid-column: 1/4;
        margin-bottom: 2rem;
    }
    img {
        grid-column: 1;
        width: 100%;
    }
    h2 {
        grid-column: 2;
        font-size: 3rem;
        margin-top: -0.5rem;
        margin-bottom: 1rem;
        line-height: 3.5rem;
    }
    .mainInfo {
        grid-column: 2;
        margin: 0 3rem 0 3rem;
    }
    .subject {
        grid-column: 3;
        justify-self: end;
        align-self: flex-start;
        color: #FF6B00;
        font-size: 1.1rem;
        
    }
    .subject:hover {
        text-decoration: underline;
        cursor: pointer;
    
    }
    .timeToRead {
        font-size: 1.1rem;
        margin-bottom: 2rem;
    }
    .date {
        font-size: 0.9em;
    }
    .excerpt {
        font-size: 1.3rem;
        width: 80%;
        margin-bottom: 2rem;
    }
    .readMore {
        display: block;
        font-size: 1.3rem;
        background-color: #FFFFFF;
        color: #FF6B00;
        border: 2px #FF6B00 solid;
        letter-spacing: -.2px;
        border-radius: 6px;
        font-weight: 600;
        text-align: center;
        padding: 10px 25px;
        cursor: pointer;
    }


`