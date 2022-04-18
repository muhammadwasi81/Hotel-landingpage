import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import LazyShow from '../animation/LazyShow'
import './Cards.scss'

const CustomCards = (props) => (
  <Card>
    <Card.Img variant="top" src={props.image} style={props.style} />
    <Card.Body>
      <Card.Title>Lorem Ipsum dolor</Card.Title>
      <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, natus
        dolore.
      </Card.Text>
      <Button variant="success">Go somewhere</Button>
    </Card.Body>
  </Card>
)

export default function Cards() {
  return (
    <>
      <LazyShow>
        <div className="cards__wrapper">
          <Container className="my-5">
            <Row>
              <Col sm={4}>
                <CustomCards
                  image="/assets/map2.jpg"
                  style={{ height: '278px' }}
                />
              </Col>
              <Col sm={4}>
                <CustomCards
                  image="/assets/map1.jpg"
                  style={{ height: '278px' }}
                />
              </Col>
              <Col sm={4}>
                <CustomCards image="/assets/shaikh.jpg" />
              </Col>
            </Row>

            <Row className="mt-5">
              <Col sm={3}>
                <img
                  src="/assets/logo.png"
                  alt="logo"
                  width="200px"
                  height="100px"
                />
              </Col>
              <Col sm={3}>
                <img
                  src="/assets/apple.jpg"
                  alt="logo"
                  width="200px"
                  height="100px"
                />
              </Col>
              <Col sm={3}>
                <img
                  src="/assets/lambo.jpg"
                  alt="logo"
                  width="200px"
                  height="100px"
                />
              </Col>
              <Col sm={3}>
                <img
                  src="/assets/tesla.jpg"
                  alt="logo"
                  width="200px"
                  height="100px"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </LazyShow>
    </>
  )
}
