import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import styled, {keyframes} from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'




const SubscribeForm = (props) => {

    const { handleSubmit, register, errors } = useForm();
    const {toggleSubscribeForm} = props;

    const [isOpening, setIsOpening] = useState(true)
    const [userData, setUserData] = useState({});



  const handleKeyPress = e => {
    if (e.key === 'Escape') {
      setIsOpening(false)
        setTimeout(() => toggleSubscribeForm(), 200)
    }
  }


  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  },)


    const handleClick = (e) => {
        setIsOpening(false)
        setTimeout(() => toggleSubscribeForm(), 200)
    }
    
  

    const onSubmit = values => {    
        addToMailchimp(values.email, {
            PATHNAME:props.location.pathname,
            FNAME: values.fName,
            LNAME: values.lName,
        })
        .then(data => {
          setUserData({...values, pathname: props.location.pathname, ...data})
        })
  };

  return (
    <FormWrapper props={props} isOpening={isOpening} >
      <button
      className={`overlay ${isOpening? 'fade-in' : 'fade-out'}`} 
      onClick={handleClick} 
      />
      <div className={`drawer ${isOpening? 'slide-in' : 'slide-out'}`}  >
        <button className='close-button' onClick={handleClick}>X</button>
        <form onSubmit={handleSubmit(onSubmit)}>
        <p className='form-title'> Join the Newsletter </p>
          <label htmlFor='emailInput'>Please Enter Your Email:</label>
          <input
            id='emailInput'
            name="email"
            ref={register({
              required: 'Required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email"
              }
            })}
            />
            <p className={`form-feedback-text error`}>{errors.email && errors.email.message}</p>
          <label htmlFor='fNameInput'>First Name:</label>  
          <input
            id='fNameInput'
            name="fName"
            ref={register({
                required: "Please enter your first name:",  
                pattern: {
                    value: /^[a-z ,.'-]+$/i,
                    message: "Please enter a valid first name"
                }
                
            })}
            />
            <p className='form-feedback-text error'>{errors.fName && errors.fName.message}</p>
          <label htmlFor="lNameInput">Last Name:</label>  
          <input
            id='lNameInput'
            name="lName"
            ref={register({
              required: "Please enter your last name",
              pattern: {
                    value: /^[a-z ,.'-]+$/i,
                    message: "Please enter a valid first name"
                }
            })}
          />
          <p className='form-feedback-text error'>{errors.lName && errors.lName.message}</p>
          {userData.result && <p 
          className={`form-feedback-text ${userData.result==='success'? 
          'success' 
          : 
          'error'}`}>
              {userData.result === 'success' ? userData.msg : `Error. Contact for help`} 
          </p>
            }
          <button type="submit">Submit</button>
        </form>
    </div>
    </FormWrapper>
  );
};

export default SubscribeForm

const fadeIn = keyframes`
  from{
    opacity: 0; 
  }
  to {
    opacity: 1; 
  }

`
const fadeOut = keyframes`
  from{
    opacity: 1; 
  }
  to {
    opacity: 0; 
  }

`
const slideIn = keyframes`
  from{
    transform: translateX(100%); 
  }
  to {
    transform: translateX(0) 
  }

`
const slideOut = keyframes`
  from{
    transform: translateX(0); 
  }
  to {
    transform: translateX(100%) 
  }

`

const FormWrapper = styled.div`

    .overlay{
    position: fixed;
    background-color: rgba(0,0,0,0.1);
    border: none;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    width: 100%;
    }

    .fade-out{
    animation: ${fadeOut} .2s ease-in-out both; 
  }

  .fade-in{
    animation: ${fadeIn} .2s ease-in-out both;
  }

  .slide-in{
    animation: ${slideIn} .2s ease-in-out both;
  }
  .slide-out{
    animation: ${slideOut} .2s ease-in-out both;
  }

    .drawer{

    display:flex; 
    justify-content: center;
    width: 400px;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    background-color: #ffffff;
    z-index: 5;
    -webkit-box-shadow: -3px 10px 12px 1px rgba(0,0,0,0.25);
    -moz-box-shadow: -3px 10px 12px 1px rgba(0,0,0,0.25);
    box-shadow: -3px 10px 12px 1px rgba(0,0,0,0.25);
    border-radius: 0px 0px 4px 4px;
    }
    
    
    form{
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        
      
        input {
            width: 80%;
            border: 1px transparent solid;
            border-bottom: 1px rgba(0,0,0,0.25) solid;
            border-radius: 3px;
            font-size: 1.4rem;
            padding: .5rem 1rem;
            margin: 0rem 1rem 1rem 1.5rem;
            font-family: inherit;
            font-weight: 400;
        }

        input:focus {
          background-color: #ffffff;
        }
        label {
            font-weight: 300;
            font-size: 1.3rem;
            margin: 1rem 1rem 0rem 1.5rem;
        }
        button {
            width: 40%;
            color: #ff6b00;
            background-color: #ffffff;
            border-radius: 3px;
            font-size: 1.4rem;
            margin: 1.5rem 1rem 2rem 1.5rem;
            padding: .5rem;
            border: 1px transparent solid;
            border-top: 1px #ff6b00 solid;
            border-left: 1px #ff6b00 solid;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all .2s;
            :hover, :focus  {
              border: 1px #ff6b00  solid;
              box-shadow: 1px 2px 3px 2px rgba(0,0,0,.1);
            }
        }

        .form-title{
            margin: 3rem 1rem 3rem 1.5rem;   
            font-size: 2rem;
            font-weight: 400;
            letter-spacing: 0.6px;
        }
        .form-feedback-text{
            color: black;
            padding: 0 1rem;
            font-size: 1rem;
            height: 1rem;
            margin:  0rem 1.5rem 0 .5rem;
            font-weight: 500;
            border-radius: 6px;
            width: 80%;
        }
        .error{
            color: #ff0000;
        }
        .success{
           color: #00ff00;
        }
    }
    .close-button{
            position: absolute; 
            top: 10px; 
            right: 10px;
            padding: .1rem .6rem;
            font-size: 1.2rem;
            border: 2px grey solid;
            font-weight: 600;
            background-color: transparent;
            color: grey;
            cursor: pointer;
            transition: all .15s;
            
            :hover{
                background-color: #1c223e;
                
            }
            
        }
        @media (max-width: 1149px) {
          form{
            button{
              border: 1px #ff6b00 solid;
              :hover, :focus  {
              border: 1px #ff6b00  solid;
              box-shadow: 1px 2px 3px 2px rgba(0,0,0,.1);
            }
            }
          }
        }
        @media (max-width: 770px) {
          form{
            button{
              :hover, :focus  {
              border: 1px #ff6b00  solid;
              box-shadow: none;
            }
            }

          }
        }
        @media (max-width: 567px) {
            .overlay{
              display: none;
            }
            .drawer{
            max-width: 100vw;
            height: 100%;
            }
            form {
              justify-content: space-around;
              margin: 0;
              .form-title{
                margin: 0;
                margin-top: 1.5rem;
              }
              label {
                margin: 0;
                font-size: 1.2rem;
              }
              input {
                margin: 0;
              }
            }
        }
`