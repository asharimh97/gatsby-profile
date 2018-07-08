import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `url('/assets/img/cover.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      height: '500px',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        background: 'rgba(0,0,0,0.6)',
        height: '100%',
        width: '100%'
      }}>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <img src='./assets/img/logo.png' style={{ width: '245px' }} />
        <p style={{ color: '#fff', fontWeight: '300', margin: 0, textTransform: 'uppercase' }}>
          Hello,  I am Ashari Muhammad Hisbulloh
        </p>
      </div>
    </div>
  </div>
)

export default Header
