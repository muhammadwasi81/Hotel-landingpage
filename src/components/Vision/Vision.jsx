import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LazyShow from '../animation/LazyShow'
import './Vision.scss'

export default function Vision() {
  return (
    <LazyShow>
      <div className="vision_wrapper">
        <Container>
          <Row>
            <Col sm={6} className="my-2">
              <img
                src="./assets/arab.jpg"
                async
                alt="elegance"
                className="arab__img"
              />
              <div style={{ position: 'relative' }}>
                <div className="color__box__two"></div>
              </div>
            </Col>
            <Col sm={6} className="mt-3">
              <p className="start__text fs-4">
                lorem ipsum dolor<span className="border__line"></span>{' '}
              </p>
              <p className="fs-1">
                A Vision
                <br />
                <span className="fs-1">of the future</span>
              </p>

              <p className="mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem corrupti vel dolorem consequuntur esse ducimus
                fuga ullam minus obcaecati voluptatum debitis provident fugit
                iure, nisi accusamus dolore maiores voluptates. Sapiente debitis
                quaerat molestiae iure dolor quos iusto voluptatum aliquam. Sunt
                quis temporibus pariatur incidunt cupiditate minima ea voluptas
                odio molestias.
              </p>

              <Row className="text-center m-auto mt-4">
                <Col sm={3}>
                  <p className="text-muted">lorem ipsum</p>
                  <strong>$100</strong>
                </Col>
                <Col sm={3}>
                  <p className="text-muted">lorem ipsum</p>
                  <strong>$200</strong>
                </Col>
              </Row>
              <Row className="text-center m-auto mt-4">
                <Col sm={3}>
                  <p className="text-muted">lorem ipsum</p>
                  <strong>$340</strong>
                </Col>
                <Col sm={3}>
                  <p className="text-muted">lorem ipsum</p>
                  <strong>$500</strong>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </LazyShow>
  )
}
