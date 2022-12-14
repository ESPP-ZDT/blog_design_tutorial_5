import React from 'react'
import { Container } from 'react-bootstrap'
import BlogPost from './BlogPost'

const BlogpostContainer = () => {
  return (
    <Container style={{
      fontFamily: 'Montserrat, sans-serif',
      color: '#333',
      backgroundColor: '#eee',
      padding: 0,
      margin: 0,
    }}>
      <BlogPost className="w-50"/>
    </Container>
  )
}

export default BlogpostContainer
