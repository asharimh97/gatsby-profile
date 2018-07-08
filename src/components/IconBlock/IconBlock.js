import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  align-items: center;
  background: none;
  border: solid 2px #000;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  height: 185px;
  justify-content: center;
  margin: auto;
  width: 185px;

  & img{
    margin: 0;
    width: 40%;
  }
`

const IconTitle = styled.p`
  color: #000;
  font-family: 'Libre Baskerville', serif;
  font-size: 14px;
  font-style: italic;
  margin-top: 20px;
  text-align: center;
`

const IconBlock = ({ icon, caption }) => (
  <div>
    <Icon><img src={icon}/></Icon>
    <IconTitle>{ caption }</IconTitle>
  </div>
)

export default IconBlock