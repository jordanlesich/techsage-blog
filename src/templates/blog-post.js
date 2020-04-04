import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopicSelector from '../components/topicSelector'

import styled from 'styled-components'

const BlogPostWrapper = styled.main `
  width: 1000px;
  grid-column: 2;
  .hero {
    margin-top: 3rem;
    border-bottom: 1px #292929 solid;
    margin-bottom: 4rem;
    h1 {
      font-size: 3.8rem;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -2px;
      margin-bottom: 2rem;
    }
    .sub-text{
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .sample-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: purple;
    }
  .article-info{
    margin-left: 1rem;
    
  }
  .author-info {
    font-size:1.3rem;
    font-weight: 700;
  }
  .date{
    font-weight: 300;
  }
    
  }

  .main-body{
    width: 80%;
    margin-left: 5rem;

    .title-image{
    width: 45%;
    float: right;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }

   h1 {
     font-size: 3.5rem;
     font-weight: 600;
     margin: 3.2rem 0rem;
   }

   h2 {
     font-size: 3rem;
     font-weight: 600;
     margin: 3rem 0rem;
   }

   h3 {
     font-size: 2.2rem;
     font-weight: 600;
     margin: 2.6rem 0rem;
   }

   h4 {
     font-size: 1.8rem;
     font-weight: 600;
     margin: 2.2rem 0rem;
   }

   p{
     line-height: 1.5;
     font-size: 1.4rem;
     margin: 2rem 0rem;
   }

  }
  .prev-next-section {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 3rem;
    font-size: 1.4rem;
    font-weight: 600;
    .underline{

    text-decoration: underline;
    }
  }
  
  
  
 
`

const BlogPostTemplate = props => {
  
    const post = props.data.mdx
    const siteTitle = props.data.site.siteMetadata.title
    const { previous, next } = props.pageContext
    const blogSVG = post.frontmatter.header_image

    return (
      <Layout location={props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <TopicSelector location={props.location} />
        <BlogPostWrapper >
          <div className='hero'>
            <h1>{post.frontmatter.title}</h1>
            <div className="sub-text">
              <div className="sample-avatar"/>
              <div className="article-info">
                <p className="author-info">
                  By Jordan Lesich
                </p>
                <p className="date">
                  {post.frontmatter.date}
                </p>
                <p className="subject">
                  In <Link to={'/'} state={{subjectName: post.frontmatter.subject}}>
                    {post.frontmatter.subject}
                    </Link>
                </p>
              </div>
              </div>
          </div>
        <div className="main-body">
          <img 
          src={blogSVG} 
          className="title-image" 
          alt={post.frontmatter.alt || post.frontmatter.title} />
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>


        <hr/>
        

        <ul className='prev-next-section'>
          <li>
            {previous && (
              <Link to={`blog${previous.fields.slug}`} rel="prev">
                ← <span className='underline'>{previous.frontmatter.title}</span>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog${next.fields.slug}`} rel="next" >
                <span className='underline'>{next.frontmatter.title}</span> →
              </Link>
            )}
          </li>
        </ul>
        </BlogPostWrapper>
      </Layout>
    )
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
