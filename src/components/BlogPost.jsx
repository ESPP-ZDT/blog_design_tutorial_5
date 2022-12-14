import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogPost = () => {
  return (
    <Container style={{
        fontFamily: 'Montserrat, sans-serif',
        color: '#333',
        backgroundColor: '#ccc',
        padding: 0,
        margin: 0,
      }}>
      <Row>
        <Col>
          <h1>Blog Post Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar neque ac dui malesuada, eu placerat mauris egestas.
            Aliquam porttitor ante a elit maximus, ut fringilla nisi
            rutrum. Morbi in ipsum quis nulla interdum accumsan.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPost;
