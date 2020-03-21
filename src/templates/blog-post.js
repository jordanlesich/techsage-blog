import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const blogSVG = post.frontmatter.header_image

    console.log(post)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <img src={blogSVG} alt={post.frontmatter.alt || post.frontmatter.title} />
        <h1>{post.frontmatter.title}</h1>
        <p>
          {post.frontmatter.date}
        </p>
        <p>
          {post.timeToRead} Minute Read
        </p>
        <p>
          {post.frontmatter.subject} 
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr/>
        <Bio />

        <ul>
          <li>
            {previous && (
              <Link to={`blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        header_image
        subject
        alt
      }
    }
  }
`
