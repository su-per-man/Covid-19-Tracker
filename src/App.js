import React from 'react';
import { Card, Text, Heading, Pill, Pane, Button } from 'evergreen-ui'
import { Modal } from './components/Modal'
import { Theme } from './components/Theme'
import { InfoTileData } from './components/InfoTileData'

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
      <Card clearfix>
        <Card elevation={2} width='50%' padding={24} alignItems="center" margin={24} display="flex">
          {/* display="flex" justifyContent="center" alignItems="center" flexDirection="column" */}
          <Pane flex={1}>
            <Heading>Total confirmed cases</Heading>
            <Text color="muted" paddingTop={12} paddingBottom={12}>Updated 4 min ago</Text>
            <Heading size={700} marginTop={15} color={Theme.primaryColor}>7,062,464</Heading>
          </Pane>
          <InfoTileData cases={cases} />
        </Card>

        <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading size={600}>Left Aligned</Heading>
          </Pane>
          <Pane>
            {/* Below you can see the marginRight property on a Button. */}
            <Button marginRight={16}>Button</Button>
            <Button appearance="primary">Primary Button</Button>
          </Pane>
        </Pane>



      </Card>

    </div>
  );
}

export default App;
