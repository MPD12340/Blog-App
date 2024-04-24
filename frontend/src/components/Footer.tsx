import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper className='footer-container'>This is a Footer</Wrapper>
  )
}

export default Footer

const Wrapper = styled.div `
display: flex;
justify-content: center;
align-items: center;
text-align:center;
height:16rem;
margin-top: 5rem;
font-size : 1.5rem ;
font-weight: 700;
background-color:#456523;
`