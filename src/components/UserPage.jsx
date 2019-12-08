import React from 'react';
import FeedList from './FeedList';
import InfoPanel from './InfoPanel';
import ChatPanel from './ChatPanel';
import { Grid } from 'semantic-ui-react';

export default class UserPage extends React.Component {

    state = {
        id: this.props.location.state.id,
        userData: {}
    }

    getUserData = async () => {
        let response = await fetch(`https://localhost:5001/api/userdata?id=${this.state.id}`)
        if(!response.ok) {
            alert("Error, cannot get user data: Error code " + response.status);
            return null;
        }
        return await response.json();
        
    }
    
    componentWillMount = async () => {
        const userData = await this.getUserData()
        this.setState({userData})
    }



render() {
    return (
        <Grid>
            <Grid.Column width={4}>
                <InfoPanel 
                    // friendsCount={this.state.UserData.friendsCount}
                    address={this.state.userData.address}
                    description={this.state.userData.description}
                    extra={this.state.userData.extra}
                    image={this.state.userData.image}
                />
            </Grid.Column>
            <Grid.Column width={9}>
                <FeedList />
            </Grid.Column>
            <Grid.Column width={3}>
                {/* <ChatPanel contacts={this.state.contacts}/> */}
            </Grid.Column>
        </Grid>
    )
}


}