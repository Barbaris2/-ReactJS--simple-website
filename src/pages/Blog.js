import React, { Component } from 'react';
import { Container, Col, Media, Row, Card, ListGroup } from 'react-bootstrap';

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md='9'>
            <Media className='m-5'>
              <img
                alt='js'
                width={150}
                height={150}
                className='mr-3'
                src='https://cdn2.hexlet.io/assets/professions/backend-19ce25bd3354e5e213a30b7cec4326f949a958b35c25352841aeef18f6536a7e.svg'
              />
              <Media.Body>
                <h5>Java Script</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae deleniti quibusdam libero quod sapiente itaque
                  pariatur, cum nobis, eaque error sunt! Ullam ea ipsum quasi
                  saepe magnam reiciendis dolorem ut.
                </p>
              </Media.Body>
            </Media>
            <Media className='m-5'>
              <img
                alt='js'
                width={150}
                height={150}
                className='mr-3'
                src='https://w3.org.ua/wp-content/uploads/2017/01/icon.javascript.png'
              />
              <Media.Body>
                <h5>Native JS</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae deleniti quibusdam libero quod sapiente itaque
                  pariatur, cum nobis, eaque error sunt! Ullam ea ipsum quasi
                  saepe magnam reiciendis dolorem ut.
                </p>
              </Media.Body>
            </Media>
            <Media className='m-5'>
              <img
                alt='js'
                width={150}
                height={150}
                className='mr-3'
                src='https://web-creator.ru/uploads/Page/25/react.svg'
              />
              <Media.Body>
                <h5>ReactJS</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae deleniti quibusdam libero quod sapiente itaque
                  pariatur, cum nobis, eaque error sunt! Ullam ea ipsum quasi
                  saepe magnam reiciendis dolorem ut.
                </p>
              </Media.Body>
            </Media>
            <Media className='m-5'>
              <img
                alt='js'
                width={150}
                height={150}
                className='mr-3'
                src='data:image/png;base64,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'
              />
              <Media.Body>
                <h5>Bootstrap</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae deleniti quibusdam libero quod sapiente itaque
                  pariatur, cum nobis, eaque error sunt! Ullam ea ipsum quasi
                  saepe magnam reiciendis dolorem ut.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md='3'>
            <h5 className='text-center mt-5'>Categories</h5>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>ReactJS</ListGroup.Item>
                <ListGroup.Item>NodeJS</ListGroup.Item>
                <ListGroup.Item>Node-red</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className='mt-3' bg='light'>
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Repudiandae deleniti quibusdam libero quod sapiente itaque
                  pariatur, cum nobis, eaque error sunt! Ullam ea ipsum quasi
                  saepe magnam reiciendis dolorem ut
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
