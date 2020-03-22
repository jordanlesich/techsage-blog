import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  display: block;
  border: none;
  text-align: center;
  padding: 10px 25px;
  cursor: pointer;
`

export default Button
