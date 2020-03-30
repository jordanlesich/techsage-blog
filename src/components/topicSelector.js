import React from 'react';
import {Link, navigate} from 'gatsby';
import styled from 'styled-components'
import upArrow from '../utils/up.svg'

const TopicContainer = styled.aside`

    position: fixed;
    
    top: 40vh;
    right: 2%;
    font-size: 1.4rem;
    border-left: 1px #292929 solid;
    
    ul {
        list-style: none;
    }
    li {
        opacity: 0.5;
        padding: 1rem;
        border-radius: 3px;
        transition: all 0.1s;

        a, a:visited {
            color: #292929;
        }
        :hover {
            opacity: 1; 
            background-color: #eff4f9;
        }
    img {
        height: 50px;
    }
        
    }
`

const topicSelector = props => {


    const handleClick = e => {

        console.log(props.location)

        if (props.location.pathname === '/blog/')
        {
            props.changeSubject(e.target.value);
        }
        else {
            navigate('/blog/', {state: {subjectName: e.target.value}})
        }
    }

    return (
        <TopicContainer>
            <ul>
                <li className='list-item'><button onClick={handleClick} value='All'>WebDev</button></li>
                <li className='list-item'><button onClick={handleClick} value='WebDev' >WebDev</button></li>
                <li className='list-item'><button onClick={handleClick} value='Sagacity'>Sagacity</button></li>
                <li className='list-item'><button onClick={handleClick} value='Projects'>Projects</button></li>
                <li className='list-item'><button onClick={handleClick} value='SageLife'>SageLife</button></li>
                <li className='list-item'><button onClick={handleClick}> <img src={upArrow}  alt='up arrow'/></button></li>
            </ul>
        </TopicContainer>
    )
}

export default topicSelector