import React from 'react';
import { Pane, Dialog, Button, Text, Avatar, Heading } from 'evergreen-ui'
import { Theme } from './Theme'

export class Modal extends React.Component {
    render() {
        return (
            <Pane>
                <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
                    <Pane flex={1} alignItems="center" display="flex">
                        <Heading color={Theme.primaryColor}>COVID-19 Tracker</Heading>
                    </Pane>
                    <Button>Show Dialog</Button>
                </Pane>
                <Dialog isShown={false} title="About Me" hasFooter={false}>
                    <Pane display="flex" alignItems="center" flexDirection="column" >
                        <Avatar isSolid name="Suman Kumar" size={100} margin={10} />
                        <Heading>Suman Kumar</Heading>
                        <Text>Lorem ipsum Lorem ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum </Text>
                    </Pane>
                </Dialog>
            </Pane>
        );
    }
}