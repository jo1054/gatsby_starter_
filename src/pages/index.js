import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi my name is Jonathan Ojeda</h1>
    <p>A little bit about myself</p>
    <p> just click the link below to know more about me. </p>
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
