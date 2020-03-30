import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props =>  {

    const {location} = props;
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`web`, `development`, `stoic`, `tech`, `coding`, `react`, `gatsby`]}
        />
        <Link to="/blog/">
          <button marginTop="35px">Go to Blog</button>
        </Link>
      </Layout>
    )
}

export default IndexPage
