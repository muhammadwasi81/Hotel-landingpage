import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './TextSection.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function TextSection() {
  return (
    <div className="wrapper__img">
      <Container>
        <Row>
          <Col sm={10}>
            <p className="h1 text-white">
              Sunrises <br />
              <span>to Start fresh</span>
            </p>
            <span className="text__underline"></span>
            <p className="text-white mt-4">
              start your journey with great peeps
            </p>
          </Col>
          <Col sm={2} className="mt-5">
            <Row>
              <Col sm={10} className="my-4">
                <Button className="journey_btn">Start Journey</Button>
              </Col>
              <Col sm={2} className="my-4">
                <span className="icon__wrapper">
                  <AiOutlineShoppingCart className="icon" />
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
