import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Global Quality Producer</title>
        <meta property="og:title" content="Global Quality Producer" />
      </Helmet>
    </div>
  )
}

export default Home
