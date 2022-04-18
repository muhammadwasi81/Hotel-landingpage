import React from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'
import LazyShow from '../animation/LazyShow'
import './Elegence.scss'

export default function Elegence() {
  return (
    <LazyShow>
      <div className="wrapper">
        <Container>
          <Row>
            <Col sm={6}>
              <p className="start__text fs-4">
                Elegance<span className="border__line"></span>{' '}
              </p>
              <p className="fs-1">
                Draw <br />
                <span className="fs-1">Your Elegance</span>
              </p>
              <p className="mt-5">Lorem ipsum dolor sit</p>
              <div className="select__wrapper mt-5">
                <Form.Select aria-label="Default select example">
                  <option>Room</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
              </div>
            </Col>
            <Col sm={6} className="my-2">
              <img
                src="./assets/alexander-kaunas-TAgGZWz6Qg8-unsplash.jpg"
                async
                alt="elegance"
                className="img-fluid"
              />
              <div style={{ position: 'relative' }}>
                <div className="color__box"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LazyShow>
  )
}
