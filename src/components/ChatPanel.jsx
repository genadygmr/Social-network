import React from 'react';
import { List, Image, Icon, Header, Segment } from 'semantic-ui-react';
import "../designes/ChatPanel.css"

export default class ChatPanel extends React.Component {


    constructor(props) { super(props); }

    render() {

        const contacts = this.props.contacts.map((contact) => (
            <List.Item>
                <Image avatar src={contact.image} />
                <List.Content>
                    <List.Header as='a'>{contact.name}</List.Header>
                    <List.Description>
                        <Icon inverted color={contact.isConnected ? "green" : "red"} name="circle thin" />
                        <b>{contact.isConnected ? "Online" : "Offline"}</b>
                    </List.Description>
                </List.Content>
            </List.Item>
        ))

        return (
            <div>
                <Segment><Header as='h3' icon='chat' content='Chat' /></ Segment>
                <Segment>
                    <List divided>
                        {contacts}
                    </List>
                </Segment>
            </div>
        )
    }
}