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

  .border-container{
    border-right: 1px rgba(0,0,0,0.2) solid;
    border-left: 1px rgba(0,0,0,0.2) solid;
    width: 100%;
  }
  .hero {
    padding-top: 2rem;
    margin: 0 auto;
    width: 60%;
    border-bottom: 1px rgba(0,0,0,0.2) solid;
   
    h1 {
      font-size: 3.8rem;
      font-weight: 700;
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
    font-size:1.1rem;
    font-weight: 700;
  }
  .date{
    font-size: 1rem;
  }
  .subject{
    font-size: 1rem;
    a, a:visited{
      color: #ff6b00;
      text-decoration: underline;
    }
  }
  
    
  }
  .main-body{
    width: 60%;
    margin: 0 auto;

  .title-image{
    width: 40%;
    float: right;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }

   h1 {
     font-size: 3.5rem;
     font-weight: 300;
     margin: 3.2rem 0rem;
   }

   h2 {
     font-size: 3rem;
     font-weight: 300;
     margin: 3rem 0rem;
   }

   h3 {
     font-size: 2.2rem;
     font-weight: 300;
     margin: 2.6rem 0rem;
   }

   h4 {
     font-size: 1.8rem;
     font-weight: 400;
     margin: 2.2rem 0rem;
   }

   p{
     line-height: 1.4;
     font-size: 1.5rem;
     margin: 2rem 0rem;
     word-break: break-word;
   }

  }
  .prev-next-section {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 6rem;
    font-size: 1.4rem;
    font-weight: 600;


    .underline{
    text-decoration: underline;
    }
  }
  @media (max-width: 567px) {

    .border-container{
      border: none;
    }

    .hero {
      width: 80%;
    
      h1 {
        font-size: 2rem;
        margin: 0 1rem 1rem 1rem;
        text-align: center;
      }

      .sub-text{
        justify-content: center;
      }
      .article-info{
        margin-left: 0;
        text-align: center;
      }
      .sample-avatar {
      display: none;
      }
      .author-info{
       display: none;
      }
      .date, .subject {
       font-size: .95rem;
      }

    }
    .main-body {
      width: 80%;
      height: auto;
      /* justify-content: center; */

    .title-image{
        width: 100%;
        margin: 0 auto;
        /* text-align: center; */
        float: none;
      }
    h1 {
     font-size: 2rem;
     margin: 1.2rem 0rem;
   }

   h2 {
     font-size: 1.8rem;
     margin: 1rem 0rem;
   }

   h3 {
     font-size: 1.6rem;
     margin: 1rem 0rem;
   }

   h4 {
     font-size: 1.4rem;
     margin: 1rem 0rem;
   }
    
    p {
        font-size: 1.25rem;
      }
    }
  
    .prev-next-section {
    
    margin: 3rem auto 0 auto;
    font-size: 1rem;
    font-weight: 600;
    width: 80%;
    li{
       max-width: 40%;
    }
    
   a {
     display: flex;
     justify-content: center;
   }
    p{
     
    }
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
        <div className='border-container' >
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
        </div>
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
