import React, { Component } from 'react';
import { Container, Tab, Row, Nav, Col } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column mt-2'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey='first'>
                  <img
                    src='https://miro.medium.com/max/4960/1*MZf3WJBXaQasVWUAu7PpXA.png'
                    alt='First'
                    height='400'
                    width='900'
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    voluptates nihil quisquam est natus. Molestiae delectus cum
                    quae deserunt nobis incidunt rem velit adipisci amet.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <img
                    src='https://squalio.com/wp-content/uploads/2018/08/Teams-760x306.png'
                    alt='First'
                    height='400'
                    width='900'
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis ratione ducimus aspernatur modi dolore? Numquam
                    cupiditate suscipit nobis sint soluta libero, aliquam
                    laudantium quasi vitae sapiente labore pariatur provident
                    nulla!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam aliquid inventore labore repellendus facere!
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <img
                    src='https://miro.medium.com/max/2700/0*Wz93rPzLLTq1VwVW'
                    alt='First'
                    height='400'
                    width='900'
                  />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid accusamus debitis obcaecati accusantium, rerum
                    doloremque atque nobis?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth'>
                  <img
                    src='https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2019/07/JavaScript-Framework-2.jpg'
                    alt='First'
                    height='400'
                    width='900'
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi nostrum mollitia amet incidunt iure ducimus temporibus
                    magnam sed pariatur. Culpa accusantium blanditiis quaerat
                    ipsum eligendi.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth'>
                  <img
                    src='https://i.morioh.com/990d21e6a2.png'
                    alt='First'
                    height='400'
                    width='900'
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores magni placeat quod cupiditate quibusdam. Dolore
                    cum nihil dignissimos doloremque accusantium quam qui
                    recusandae?
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
