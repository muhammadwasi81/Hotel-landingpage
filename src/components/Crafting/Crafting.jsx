import React from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'
import './Crafting.scss'

export default function Crafting() {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col sm={6}>
            <p className="start__text fs-4">
              lorem ipsum dolor<span className="border__line"></span>{' '}
            </p>
            <p className="fs-1">
              Crafting in
              <br />
              <span className="fs-1">Strategic</span>
              <br />
              <span className="fs-1">Locals</span>
            </p>

            <p className="mt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem corrupti vel dolorem consequuntur esse ducimus fuga
              ullam minus obcaecati voluptatum debitis provident fugit iure,
              nisi accusamus dolore maiores voluptates. Sapiente debitis quaerat
              molestiae iure dolor quos iusto voluptatum aliquam. Sunt quis
              temporibus pariatur incidunt cupiditate minima ea voluptas odio
              molestias.
            </p>

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
              <div className="color__box__two"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
