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
        color: #ff6b00;
        font-weight: 400;
        text-decoration: underline;
        opacity: .6;
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
            height: 200px;
        }
        .excerpt{
            font-size: 1.1rem;
    
        }
    }
    @media (max-width: 956px) {
        
    }

`


// const StyleWrapper = styled.article `

//     display: grid;
//     position: relative;
//     grid-template-columns: ${props => props.props.index === 0 ? '7fr 3fr': '6fr 1fr'};
//     max-width: ${props => props.props.index === 0 ? "100%" : "70%" };
//     margin-bottom: ${props => props.props.index === 0 ? '4rem': '0'} ;
//     padding: ${props => props.props.index === 0? '3rem' : '0'} ;
//     background-color: ${props => props.props.index === 0 ? '#eff4f9' : '#ffffff'};
//     border-radius: 3px;
    
//     a {
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//     }

//     hr {
//         width: ${props => props.props.index === 0? '110%' : '100%'};
//         margin-left: ${props => props.props.index === 0? '-3rem' : '0'};
//         grid-column: 1/3;
//         grid-row: 2;
//         transform: ${props => props.props.index === 0 ? 'translateY(6rem)' : 'translateY(2rem)'};
//     }
//     img {
//         height: ${props => props.props.index === 0? '550px;' : '300px'};
//         grid-column: 2;
//         grid-row: 1;
//         border-radius: 3px;
//     }

    

//     h2 {
//         grid-column: 1;
//         font-size: ${props => props.props.index === 0 ?'4rem' : '2.5rem'};
//         margin-top: -0.2rem;
//         margin-bottom: ${props => props.props.index === 0 ? "2rem" : "1rem"};
//         line-height: 1.1;
//         letter-spacing: -2px;
//         color: #262626;

//         a:visited {
//             color: #262626;
//         }
//         a:hover{
//             text-decoration: underline;
//         }
//     }

//     .main-info {
//         grid-column: 1;
//         grid-row: 1;
//     }
    
//     .info-text {
//         font-size: 1.1rem;
//         margin-bottom: ${props => props.props.index === 0 ? "3rem" : "2rem"};
//     }
//     .date {
//         font-size: 0.9em;
//     }
//     .excerpt {
//         font-size: ${props => props.props.index === 0 ? "1.5rem" : "1.2rem"};
//         width: 80%;
//         font-weight: 500;
//         margin-bottom: ${props => props.props.index === 0 ? '3rem': '2rem'};
//     }

//     .btn-secondary,
//     .btn-primary {
//         border-radius: 3px;
//         font-weight: 700;
//         text-align: center;
//         cursor: pointer;
//     }
//     .btn-secondary {
//         font-size: 1.3rem;
//         background-color: #FFFFFF;
//         color: #FF6B00;
//         border: 2px #FF6B00 solid;
//         letter-spacing: -.2px;
//         padding: 10px 25px;
//     }

//     .btn-primary {
//         font-size: 1.5rem;
//         background-color: #FF6B00 ;
//         color: #FFFFFF;
//         border: 2px #FF6B00 solid;
//         letter-spacing: -.2px;
//         padding: 15px 25px;
//     }


// `