import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import BlogListing from "../components/blogListing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
          {posts.map(({ node }) => (
                  // <Link to={`blog${node.fields.slug}`}>
                    <BlogListing
                      key = {node.fields.slug} 
                      slug = {node.fields.slug}
                      header_image={node.frontmatter.header_image}
                      img_alt = {node.frontmatter.alt}
                      title = {node.frontmatter.title}
                      subject = {node.frontmatter.subject}
                      timeToRead = {node.timeToRead}
                      date = {node.frontmatter.date}
                      excerpt = {node.frontmatter.description || 
                        node.excerpt}
                    />
                  // </Link>
            )
          )}
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            subject
            header_image
            alt
          }
        }
      }
    }
  }
`
