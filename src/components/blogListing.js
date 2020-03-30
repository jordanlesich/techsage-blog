import React from 'react'
import {Link} from 'gatsby'

import styled from 'styled-components'

const blogListing = props => {

    const thumbnail = props.header_image
    const blogSlug = `/blog/${props.slug}`


    return(
    <>
    <StyleWrapper props={props}>
            <hr/>    
            <img src={thumbnail} alt={props.img_alt}/>
            <div className="main-info">
                <h2><Link to={blogSlug}> {props.title}</Link> </h2>
                <p className="info-text">    
                {props.timeToRead} Min Read 
                <span className="date"> -- {props.date}</span>
                </p>
                <p className="excerpt" dangerouslySetInnerHTML={{ __html: props.excerpt}}/> 
                <Link to={blogSlug}>
                    {props.index===0? 
                    <button className="btn-primary">START READING</button>
                    :
                    <button className="btn-secondary">Read More</button>
                    }
                </Link>
                <button> {props.subject}</button>
            </div>   
    </StyleWrapper>
    </>
    )
}

export default blogListing


const StyleWrapper = styled.article `

    display: grid;
    grid-template-columns: ${props => props.props.index === 0 ? '7fr 3fr': '6fr 1fr'};
    max-width: ${props => props.props.index === 0 ? "100%" : "800px" };
    margin-bottom: ${props => props.props.index === 0 ? '4rem': '0'} ;
    padding: ${props => props.props.index === 0? '3rem' : '1rem 3rem 2rem 3rem'} ;
    background-color: ${props => props.props.index === 0 ? '#eff4f9' : '#ffffff'};
    border-radius: 3px;
    /* border-top: 1px #262626 solid; */
    
    hr {
        /* border: none; */
        /* border-bottom: 1px #262626 solid; */
        width: 110%;
        margin-left: -3rem;
        /* height: 0%; */
        grid-column: 1/3;
        grid-row: 2;
        transform: ${props => props.props.index === 0 ? 'translateY(6rem)' : 'translateY(2rem)'};
        /* margin-bottom: 2rem; */
        /* display: ${props => props.props.index === 0 ? 'none': 'block'}; */
    }
    img {
        height: ${props => props.props.index === 0? '550px;' : '260px'};
        grid-column: 2;
        grid-row: 1;
        border-radius: 3px;
    }

    

    h2 {
        grid-column: 1;
        font-size: ${props => props.props.index === 0 ?'4rem' : '2.5rem'};
        margin-top: -0.2rem;
        /* margin-right: 3rem; */
        margin-bottom: ${props => props.props.index === 0 ? "2rem" : "1rem"};
        line-height: 1.1;
        letter-spacing: -2px;
        color: #262626;

        a:visited {
            color: #262626;
        }
        a:hover{
            text-decoration: underline;
        }
    }

    .main-info {
        grid-column: 1;
        grid-row: 1;
        /* margin: 0 2rem; */
    }
    
    .info-text {
        font-size: 1.1rem;
        margin-bottom: ${props => props.props.index === 0 ? "3rem" : "2rem"};
    }
    .date {
        font-size: 0.9em;
    }
    .excerpt {
        font-size: ${props => props.props.index === 0 ? "1.5rem" : "1.2rem"};
        width: 80%;
        font-weight: 500;
        margin-bottom: ${props => props.props.index === 0 ? '3rem': '2rem'};
    }

    .btn-secondary,
    .btn-primary {
        border-radius: 3px;
        font-weight: 700;
        text-align: center;
        cursor: pointer;
    }
    .btn-secondary {
        font-size: 1.3rem;
        background-color: #FFFFFF;
        color: #FF6B00;
        border: 2px #FF6B00 solid;
        letter-spacing: -.2px;
        padding: 10px 25px;
    }

    .btn-primary {
        font-size: 1.5rem;
        background-color: #FF6B00 ;
        color: #FFFFFF;
        border: 2px #FF6B00 solid;
        letter-spacing: -.2px;
        padding: 15px 25px;
    }


`