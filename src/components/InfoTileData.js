import React from 'react';
import { Text, Pill, Badge, Strong } from 'evergreen-ui'
import { Container, Row, Col } from 'react-bootstrap'

function LegendData(props) {
    let temp = (props.delta !== 0 ? (props.delta > 0 ? "+" : "-") + props.delta : 0)
    return (
        <Row>
            <Col xs={12}>
                <Pill color={props.color} isSolid />
                <Strong size={500} marginLeft={12}>{props.title}</Strong>
                <Text float='right'>
                    <Text>{props.cases}</Text>
                    <Badge marginLeft={12} color="neutral">{temp}</Badge>
                </Text>
            </Col>
        </Row>
    )
}

export function InfoTileData(props) {
    return (
        <Container fluid>
            <LegendData color='red' title='Active cases' cases={props.cases.active} delta={props.cases.delta.confirmed - props.cases.delta.recovered} />
            <LegendData color='green' title='Recovered cases' cases={props.cases.recovered} delta={props.cases.delta.recovered} />
            <LegendData color='neutral' title='Fatal cases' cases={props.cases.deceased} delta={props.cases.delta.deceased} />
        </Container>
    );
}