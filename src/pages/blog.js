import React, {useState} from "react"
import {graphql } from "gatsby"
import BlogListing from "../components/blogListing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import TopicSelector from "../components/topicSelector"


const BlogWrapper = styled.div `

  position: relative;
  grid-column: 2;

  ul {
    list-style: none;
  }
    
  .top-article-text {
    margin: 2rem 0 2rem 0;
    font-size: 1.4rem;
    opacity: .5;
  }

  .no-posts-card{
    height: 500px;
    font-size: 3rem;
    margin: 0 auto;
  }

  
`
const Blog = props => {

    const startingSubject = props.location.hasOwnProperty('state.subjectName')? 
    props.location.state.subjectName 
    : 
    'All';

    const [subjectName, setSubjectName] = useState(startingSubject)


    const mapListings = (posts) => {
    return <ul>
            {posts.map(({ node }, index) => (
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
  }

  const filterListings = () => {
    const posts = props.data.allMdx.edges
    const filteredPosts = posts.filter(({node}) => node.frontmatter.subject === subjectName)
    if(filteredPosts.length>0){
      return mapListings(filteredPosts)
    }
    else{
      return <h2 className="no-posts-card">No Posts Available</h2>
    }
  }

  
  const changeSubject = (value) => {
      setSubjectName(value)
  }


    const { data } = props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    
    const topicDescriptionText = () => {
      switch(subjectName){
      case 'All':
      return 'All Topics'
      case 'WebDev':
      return 'Web Development'
      case 'Sagacity':
      return 'Stoicism'  
      case 'Projects':
      return `Coding Projects`
      case 'SageLife':
      return 'Living like a Sage'
      }
    }

   
    return (
      <Layout location={props.location} title={siteTitle}>
        <SEO title="All posts" />
          <BlogWrapper>
          <TopicSelector location={props.location} changeSubject={changeSubject}/>
          <p className='top-article-text'>Featured Article:</p>
          <p>{topicDescriptionText()}</p>
          {
          subjectName !== 'All'? 
          filterListings()
          :
          mapListings(posts)
          }
        
        </BlogWrapper>
      </Layout>
    )
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
