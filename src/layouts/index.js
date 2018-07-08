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

    <SectionTitle title="Enjoy the content" subtitle="Lorem Ipsum Dolorsit Amet Nunc" />

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
