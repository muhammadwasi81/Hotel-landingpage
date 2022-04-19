import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Retail.scss'
import { IoIosLeaf } from 'react-icons/io'

const CustomGoals = (props) => (
  <div className="main__wrapper  text-center">
    <div
      className="box__one  d-flex justify-content-around"
      style={{ width: '8rem', height: '8rem' }}
    >
      <div className="inner__content my-3">
        <IoIosLeaf className="icon" />
      </div>
    </div>
    <p>lorem</p>
    <strong>$000</strong>
  </div>
)
export default function Retail() {
  return (
    <div className="retail__wrapper">
      <Container>
        <Row>
          <Col sm={12}>
            <p className="start__text fs-4">
              Retail<span className="border__line"></span>{' '}
            </p>
            <p className="fs-1">
              Why Retail?
              <br />
            </p>
          </Col>
          <Col sm={4} className="d-flex justify-content-around">
            <CustomGoals />
          </Col>
          <Col sm={4} className="d-flex justify-content-around">
            <CustomGoals />
          </Col>
          <Col sm={4} className="d-flex justify-content-around">
            <CustomGoals />
          </Col>
          <Col sm={12}>
            <Row>
              <Col sm={3}>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  dolorem officiis sapiente velit tempore sit, quidem nobis
                  incidunt ipsa pariatur explicabo natus voluptatum odit
                </p>
              </Col>
              <Col sm={9}>
                <Row>
                  <Col sm={3} className="d-flex justify-content-center">
                    <CustomGoals />
                  </Col>
                  <Col sm={3} className="d-flex justify-content-around">
                    <CustomGoals />
                  </Col>
                  <Col sm={3} className="d-flex justify-content-around">
                    <CustomGoals />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
