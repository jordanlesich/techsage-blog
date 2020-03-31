import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'


const FormWrapper = styled.div`
    display:flex; 
    justify-content: center;
    width: 400px;
    position: absolute;
    transform: translateX(-100%);
    background-color: #40465f;
    z-index: 5;
    -webkit-box-shadow: -3px 10px 12px 1px rgba(0,0,0,0.25);
    -moz-box-shadow: -3px 10px 12px 1px rgba(0,0,0,0.25);
    box-shadow: -3px 10px 12px 1px rgba(0,0,0,0.25);
    border-radius: 0px 0px 4px 4px;
    
    form{
        margin-top: 1.5rem;
        display: flex;
        flex-direction:column;
      
        input {
            width: 80%;
            background-color: #ffffff;
            border: none;
            border-radius: 3px;
            font-size: 1.4rem;
            padding: .5rem 1rem;
            margin: 1rem 1rem 1rem 1.5rem;
        }

        input:focus {
            background-color: #ffe2ce;
        }
        label {
            color: #f0f0f0;
            font-weight: 300;
            font-size: 1.3rem;
            /* font-weight:  */
            margin: 1rem 1rem 0rem 1.5rem;
        }
        button {
            width: 40%;
            color: #ffffff;
            background-color: #ff6b00;
            border-radius: 3px;
            font-size: 1.4rem;
            margin: 1.5rem 1rem 2rem 1.5rem;
            padding: .5rem;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .form-title{
            color: #ffffff;
            margin: 1rem 1rem 1.5rem 1.5rem;   
            font-size: 2rem;
            font-weight: 400;
            letter-spacing: 0.6px;
        }
        .form-feedback-text{
            color: black;
            padding: 1rem 1rem;
            font-size: 1.1rem;
            margin:  0 1.5rem;
            font-weight: 400;
            border-radius: 6px;
            width: 80%;
        }
        .error{
            background-color: #ffa5a5;
        }
        .success{
            background-color: #d5ffd5;
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
`

const SubscribeNav = (props) => {

    const { handleSubmit, register, errors } = useForm();
    
    const [userData, setUserData] = useState({});

    const handleClick = (e) => {
        props.toggleSubscribeForm()
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
    <FormWrapper>
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
            message: "Please enter a valid email address"
          }
        })}
        />
        {errors.email && <p className='form-feedback-text error'>{errors.email.message}</p>}
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
        {errors.fName && <p className='form-feedback-text error'>{errors.fName.message}</p>}
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
      {errors.lName && <p className='form-feedback-text error'>{errors.lName.message}</p>}
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
    </FormWrapper>
  );
};

export default SubscribeNav