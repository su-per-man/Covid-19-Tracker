import React from 'react';
import { Card, Text, Heading, Pill, Pane, Badge } from 'evergreen-ui'

function LegendData(props) {
    let temp = (props.delta !== 0 ? (props.delta > 0 ? "+" : "-") + props.delta : 0)
    return (
        <Pane display='flex' alignItems="center">
            <Pane flex={1} alignItems="center" display="flex">
                <Pill margin={8} color={props.color} isSolid />
                <Heading>{props.title}</Heading>
            </Pane>
            <Text>{props.cases}</Text>
            <Badge color="neutral" marginLeft={8}>{temp}</Badge>
        </Pane>
    )
}

export function InfoTileData(props) {
    return (
        <Pane flex={1}>
            <LegendData color='red' title='Active cases' cases={props.cases.active} delta={props.cases.delta.confirmed - props.cases.delta.recovered} />
            <LegendData color='green' title='Recovered cases' cases={props.cases.recovered} delta={props.cases.delta.recovered} />
            <LegendData color='neutral' title='Fatal cases' cases={props.cases.deceased} delta={props.cases.delta.deceased} />
        </Pane>
    );
}