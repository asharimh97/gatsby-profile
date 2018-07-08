import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/Header'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import IconBlock from '../components/IconBlock/IconBlock'
import BlogCard from '../components/BlogCard/BlogCard'
import Footer from '../components/Footer/Footer'
import './index.css'
import './reset.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >  
    
    <SectionTitle title="About me" subtitle="Lorem Ipsum Dolorsit Amet Nunc" />
    <blockquote style={{ fontStyle: 'italic', padding: '0 20px' }}>Hello there, I am Ashari Muhammad Hisbulloh. Frontend developer and outdoor activities ethusiast. I have been learning frontend development thing for about 2 years, previously I was a backend developer using PHP as its language and Laravel as its framework. My journey in my first startup turn my life to frontend developer because I consider it as a challenging thing, so I take the challenge. I also do some design, my brand's name is Hizbullohdesign. You can check it on my <a href="http://behance.net/hizbullohdesign" target="_blank">Behance</a>.</blockquote>

    <SectionTitle title="What I do" subtitle="Lorem Ipsum Dolorsit Amet Nunc" />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto',
        width: '840px'
      }}>
      <IconBlock icon='./assets/img/pencil.png' caption="design"/>
      <IconBlock icon='./assets/img/idea.png' caption="code"/>
      <IconBlock icon='./assets/img/adventure.png' caption="scout"/>
    </div>

    <SectionTitle title="My latest post" subtitle="Lorem Ipsum Dolorsit Amet Nunc" />
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto',
        width: '960px'
      }}>
      <BlogCard image='./assets/img/cover.jpg' />
      <BlogCard image='./assets/img/cover.jpg' />
      <BlogCard image='./assets/img/cover.jpg' />
    </div>

    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
