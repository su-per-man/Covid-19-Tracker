import React from 'react'
import { Card, Text, Heading } from 'evergreen-ui'
import { Modal } from './components/Modal'
import { Theme } from './components/Theme'
import { InfoTileData } from './components/InfoTileData'
import { Container, Row, Col } from 'react-bootstrap'

const cases = {
  "active": 406,
  "confirmed": 602,
  "deceased": 12,
  "recovered": 184,
  "delta": {
    "confirmed": 10,
    "deceased": 0,
    "recovered": 8
  }
}

function App() {
  return (

    <div>
      <Modal />
      <Container fluid>
        <Row className='mt-3'>
          <Col md={6}>
            <Card elevation={2} padding={24}>
              <Row>
                <Col md={6}>
                  <Heading>Total confirmed cases</Heading>
                  <Text color="muted" paddingTop={12} paddingBottom={12}>Updated 4 min ago</Text>
                  <Heading size={700} marginTop={15} marginBottom={15} color={Theme.primaryColor}>7,062,464</Heading>
                </Col>
                <Col md={6}>
                  <InfoTileData padding={8} cases={cases} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={6}>
            <Card elevation={2} padding={24}>

            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
