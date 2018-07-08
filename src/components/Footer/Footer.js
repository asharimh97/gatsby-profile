import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <footer
    style={{
      alignItems: 'center',
      background: '#000',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '30px 0'
    }}>
    <img src='./assets/img/logo.png' 
      style={{
        width: '20%'
      }}/>
    <p style={{ fontWeight: 300, margin: 0 }} >Thank you for coming</p>
  </footer>
)

export default Footer