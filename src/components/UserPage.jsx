import React from 'react';
import FeedList from './FeedList';
import InfoPanel from './InfoPanel';
import ChatPanel from './ChatPanel';
import { Grid } from 'semantic-ui-react';

export default class UserPage extends React.Component {

    state = {
        id: ""
    }

    getUserData = async () => {
        await fetch(`https://localhost:5001/api/userdata?id=${id}`)
    }



render() {
    return (
        <Grid>
            <Grid.Column width={4}>
                <InfoPanel 
                    friendsCount={this.state.friendsCount}
                    address={this.state.address}
                    description={this.state.description}
                    extra={this.state.extra}
                    image={this.state.image}
                />
            </Grid.Column>
            <Grid.Column width={9}>
                <FeedList />
            </Grid.Column>
            <Grid.Column width={3}>
                <ChatPanel contacts={this.state.contacts}/>
            </Grid.Column>
        </Grid>
    )
}


}