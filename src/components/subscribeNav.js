import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'


const FormWrapper = styled.div`
    display:flex; 
    justify-content: center;
    width: 20vw;
    position: absolute;
    /* right:100%; */
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
    }
`

const SubscribeNav = (props) => {

    const { handleSubmit, register, errors } = useForm();
    
    // const [userData, setUserData] = useState({});
    // console.log(userData)

    const onSubmit = values => {

        addToMailchimp(values.email, {
            PATHNAME:props.location.pathname,
            FNAME: values.fName,
            LNAME: values.lName,
        })
        // .then(data => {
        //   setUserData({...values, pathname: props.location.pathname, ...data})
        // })
  };

  return (
    <FormWrapper>
    
    <form onSubmit={handleSubmit(onSubmit)}>
    <p className='form-title'> Join the Newsletter </p>
      <label htmlFor='emailInput'>Please Enter Your Email:</label>
      <input
        id='emailInput'
        name="email"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Please enter a valid email address"
          }
        })}
      />
      <label htmlFor='fNameInput'>First Name:</label>  
      <input
        id='fNameInput'
        name="fName"
        ref={register({
          required: "Please enter your first name:",  
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      
      <label htmlFor="lNameInput">Last Name:</label>  
      <input
        id='lNameInput'
        name="lName"
        ref={register({
          required: "Please enter your last name",
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.fName && errors.fName.message}
      {errors.lName && errors.lName.message}
      {errors.email && errors.email.message}
      <button type="submit">Submit</button>
    </form>
    </FormWrapper>
  );
};

export default SubscribeNav