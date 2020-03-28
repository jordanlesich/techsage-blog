import React from "react"
import { Link, graphql } from "gatsby"
import BlogListing from "../components/blogListing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import styled from 'styled-components'


const BlogWrapper = styled.div `

  width: 1200px;
  position: relative;

  .subject-select {

  }

  ul {
    list-style: none;
  }
    

  .top-article-text {
    margin: 2rem 0 2rem 0;
    font-size: 1.4rem;
    opacity: .5;
  }

  
`


class Blog extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isFiltering: false,
      subjectName: ''
    }
    this.mapListings = this.mapListings.bind(this)
    this.filterListings= this.filterListings.bind(this)

    this.handleChange = this.handleChange.bind(this)
  }

  mapListings(posts){
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
                changeSubject={this.changeSubject}
              />
            </li>
            ))
            }
          </ul>
  }

  filterListings(){
    const posts = this.props.data.allMdx.edges
    const filteredPosts = posts.filter(({node}) => node.frontmatter.subject === this.state.subjectName)
    if(filteredPosts.length>0){
      return this.mapListings(filteredPosts)
    }
    else{
      return <h2>No Posts Available</h2>
    }
  }
  handleChange(e){
    if(e.target.value === "All"){
      this.setState({
        isFiltering : false,
        subjectName: ""
      })
    }
    else {
      this.setState({
        isFiltering : true,
        subjectName: e.target.value
      })
    }
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

  
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
          <BlogWrapper>
          {/* <div
          className="subject-select" 
          // style={{position: "absolute", left: '4rem', marginTop: "2rem"}}
          >
            <label htmlFor="subject-select">Current Subject: </label>
            <select 
            name="subjects" 
            id="subject-select" 
            onChange={this.handleChange}
            >
              <option value="All"> All </option>
              <option value="Sagacity"> Sagacity </option>
              <option value="Machina"> Machina </option>
              <option value="InDepth"> InDepth </option>
              <option value="SageLife"> SageLife </option>
            </select>  
          </div> */}
          <p className='top-article-text'>Featured Article:</p>
          {
          this.state.isFiltering? 
          this.filterListings()
          :
          this.mapListings(posts)
          }
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
        </BlogWrapper>
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
