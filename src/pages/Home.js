import React, { Component } from 'react';
import CarouselBox from '../components/CarouselBox';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className='text-center m-4'>Our team</h2>
          <CardDeck className='m-4'>
            <Card bg='light'>
              <Card.Img
                variant='top'
                src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore, dolorum.
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
            <Card bg='info' text='light'>
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore, dolorum.
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
              <Card.Img
                variant='bottom'
                src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
              />
            </Card>
            <Card bg='light'>
              <Card.Img
                variant='top'
                src='https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&h=650&w=940'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore, dolorum.
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}
