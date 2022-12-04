import React from 'react'
import { Col, Row } from 'react-bootstrap'

type Props = {
  label: string
  value?: string
}

const DriverDetailItem: React.FC<Props> = ({ label, value }) => {
  return (
    <>
      <Row>
        <Col sm={3} lg={6} xl={3}>
          <h6 className="mb-0">{label}: </h6>
        </Col>
        <Col className="text-break" sm={9} lg={6} xl={9}>
          {value}
        </Col>
      </Row>
      <hr></hr>
    </>
  )
}

export default DriverDetailItem
