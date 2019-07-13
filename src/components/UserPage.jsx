import React from 'react';
import FeedList from './FeedList';
import InfoPanel from './InfoPanel';
import ChatPanel from './ChatPanel';
import { Grid } from 'semantic-ui-react';

export default class UserPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name : "Genady",
            address: "Israel",
            birthDate: 1990,
            image: "https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/23795595_10214749558117780_9064201581654371576_n.jpg?_nc_cat=111&_nc_oc=AQnFoyUX9aQs5AEGezRjGW5W0l1Bypk2PBvCJESKBl9wzesOF8PbgCkmuWCVmfIX1I8&_nc_ht=scontent.ftlv2-1.fna&oh=9e04b1304fe48909ad4397be42e0f36a&oe=5DBE6308",
            description: "This is me",
            friendsCount: 42,
            contacts: [
                {
                  image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Floganfuneralchapel.com%2Fwp-content%2Fuploads%2F2017%2F01%2Fgeneric-profile-avatar_352864-250x250.jpg&f=1',
                  name: "Genady",
                  isConnected: true
                },
                {
                  image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Floganfuneralchapel.com%2Fwp-content%2Fuploads%2F2017%2F01%2Fgeneric-profile-avatar_352864-250x250.jpg&f=1',
                  name: "Tammy",
                  isConnected: true
                },
                {
                  image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Floganfuneralchapel.com%2Fwp-content%2Fuploads%2F2017%2F01%2Fgeneric-profile-avatar_352864-250x250.jpg&f=1',
                  name: "Ido",
                  isConnected: false
                }
              ]
        }
    }

    getUserData() {
        // Fetch the user data here
        // It should contain it's metadata
        // firends info
        // chat data
        // feed data
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