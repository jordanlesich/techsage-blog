import React, {useState} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import TopArticle from '../components/topArticle'
import BlogListing from "../components/blogListing"
import TopicSelector from "../components/topicSelector"
import {useMediaQuery} from 'react-responsive'


const BlogWrapper = styled.div `

  position: relative;
  grid-column: 2;

  ul {
    list-style: none;
  }
    
  .top-article-text {
    margin: 2rem 0 2rem 0;
    font-size: 1.4rem;
    opacity: .6;
  }

  .no-posts-card{
    height: 500px;
    font-size: 3rem;
    margin: 0 auto;
  }

  
`


const IndexPage = props =>  {

    const {location} = props
    const siteTitle = "sageMachina Blog"
    const { data } = props
    const posts = data.allMdx.edges

    const isMobile = useMediaQuery({
      query: '(max-width: 567px)'
    })

    const startingSubject = props.location.hasOwnProperty('state.subjectName')? 
    props.location.state.subjectName 
    : 
    'All';

    const [subjectName, setSubjectName] = useState(startingSubject)

    const filteredPosts = subjectName === 'All' ? 
    posts 
    : 
    posts.filter(({node}) => node.frontmatter.subject === subjectName)

    const topArticle = filteredPosts.length > 0 && filteredPosts[0];
    const subPosts = filteredPosts.length > 1 && filteredPosts.slice(1) 

    const mapListings = () => {
      if (filteredPosts.length > 1) 
        return <ul>
            {subPosts.map(({ node }, index) => (
            <li key= {`list.${index}`}>
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
                index={index}
                changeSubject={changeSubject}
              />
            </li>
            ))
            }
          </ul>
      else{
        return <h2>No more articles in this category</h2>
      }
  }

  const changeSubject = (value) => {
      setSubjectName(value)
  }

    return (
      <Layout location={location} title={siteTitle}>
        <SEO 
        title="Home"
        keywords={[`web development`, `stoic`, `tech`, `coding`, `react`, `gatsby`]}
        />
          <BlogWrapper>
          <TopicSelector location={props.location} changeSubject={changeSubject}/>
          {filteredPosts.length > 0 ? 
            <TopArticle 
            key = {topArticle.node.fields.slug} 
            slug = {topArticle.node.fields.slug}
            header_image={topArticle.node.frontmatter.header_image}
            img_alt = {topArticle.node.frontmatter.alt}
            title = {topArticle.node.frontmatter.title}
            subject = {topArticle.node.frontmatter.subject}
            timeToRead = {topArticle.node.timeToRead}
            date = {topArticle.node.frontmatter.date}
            excerpt = {topArticle.node.frontmatter.description || 
            topArticle.node.excerpt}
            changeSubject={changeSubject}
            />
          : 
          <h2 style={{height: '70vh', fontSize: '3.5vw'}}>Sorry, there are no articles in this category yet</h2>
          }
          { filteredPosts.length > 0 && (
            <>
         {isMobile || <p className='top-article-text'>Latest 
          {subjectName === 'All'?  
          ' Blog Articles:'
          : 
          ` in ${subjectName}:`
          }
          </p>
          }
          
         { mapListings()}
            </>)
          }
        </BlogWrapper>
      </Layout>
    )
  }

export default IndexPage

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