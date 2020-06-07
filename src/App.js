import React from 'react';
import * as Evergreen from 'evergreen-ui'

function App() {
  return (
    <div>
      <Evergreen.Popover position={Evergreen.Position.BOTTOM_LEFT}
        content={
          <Evergreen.Menu>
            <Evergreen.Menu.Group>
              <Evergreen.Menu.Item icon="people">Share...</Evergreen.Menu.Item>
              <Evergreen.Menu.Item icon="circle-arrow-right">Move...</Evergreen.Menu.Item>
              <Evergreen.Menu.Item icon="edit" secondaryText="⌘R">
                Rename...
        </Evergreen.Menu.Item>
            </Evergreen.Menu.Group>
            <Evergreen.Menu.Divider />
            <Evergreen.Menu.Group>
              <Evergreen.Menu.Item icon="trash" intent="danger">
                Delete...
        </Evergreen.Menu.Item>
            </Evergreen.Menu.Group>
          </Evergreen.Menu>
        }
      >
        <Evergreen.Button marginRight={16}>With Icons</Evergreen.Button>
      </Evergreen.Popover>
    </div>
  );
}

export default App;
