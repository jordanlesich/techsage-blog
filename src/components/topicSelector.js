import React from 'react';
import {navigate} from 'gatsby';
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
    button {
        opacity: 0.5;
        padding: 1rem;
        width: 8rem;
        font: inherit;
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
        border-radius: 3px;
        transition: all 0.1s;
        font-weight: 500;
        cursor: pointer;

        
        :hover {
            opacity: 1; 
            background-color: #eff4f9;
        }
    img {
        height: 50px;
    }

    @media (max-width: 1340px) {
	  display: none;
    }


        
    }
`

const topicSelector = props => {


    const handleClick = e => {

        console.log(props.location)

        if (props.location.pathname === '/')
        {
            props.changeSubject(e.target.value);
        }
        else {
            navigate('/', {state: {subjectName: e.target.value}})
        }
    }

    return (
        <TopicContainer>
            <ul>
                <li className='list-item'><button onClick={handleClick} value='All'>All Topics</button></li>
                <li className='list-item'><button onClick={handleClick} value='WebDev' >WebDev</button></li>
                <li className='list-item'><button onClick={handleClick} value='Sagacity'>Sagacity</button></li>
                <li className='list-item'><button onClick={handleClick} value='Projects'>Projects</button></li>
                <li className='list-item'><button onClick={handleClick} value='SageLife'>SageLife</button></li>
                <li className='list-item'><button><a href='#top'> <img src={upArrow}  alt='up arrow'/></a></button></li>
            </ul>
        </TopicContainer>
    )
}

export default topicSelector