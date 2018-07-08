import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  color: #000;
  font-family: 'Libre Baskerville', serif ;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0;
  text-align: center;

  &>span{
    font-size: 33px;
  }
`

const Subtitle = styled.p`
  color: #999999;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
`

const SectionTitle = ({ title, subtitle }) => (
  <div>
      <Title>.<span>{ title.substring(0,1) }</span>{ title.substring(1) }</Title>
      <Subtitle>{ subtitle }</Subtitle>
  </div>
)

export default SectionTitle

