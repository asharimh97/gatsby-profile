import React from 'react'
import styled from 'styled-components'

const BlogWrapper = styled.figure`
  padding-top: 400px;
  position: relative;
  width: 300px;
`

const ImageCard = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  left: 0;
  top: 0;
`

const Overlay = styled.div`
  align-items: center;
  background: rgba(0,0,0,0.6);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;

  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;

  & a{
    color: #fff;
    font-family : 'Libre Baskerville', serif;
    font-style: italic;
    text-decoration: none;
  }

  &:hover{
    opacity: 1;
  }
`

const BlogCard = ({ image }) => (
  <BlogWrapper>
    <ImageCard src={image} />
    <Overlay>
      <a href="#">view</a>
    </Overlay>
  </BlogWrapper>
)

export default BlogCard