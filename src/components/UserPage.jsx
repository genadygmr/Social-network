import React from 'react';
import FeedList from './FeedList';
import InfoPanel from './InfoPanel';
import ChatPanel from './ChatPanel';
import { Grid } from 'semantic-ui-react';

export default class UserPage extends React.Component {

    state = {
        id: "",
        userData: {}
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const userData = await this.getUserData(id)
        this.setState({id, userData})
    }

    getUserData = async (id) => {
        let response = await fetch(`https://localhost:5001/api/users/userdata?id=${id}`)
        if(!response.ok) {
            alert("Error, cannot get user data: Error code " + response.status);
            return null;
        }
        return await response.json();
        
    }



render() {
    return (
        <Grid>
            <Grid.Column width={4}>
                <InfoPanel 
                    image={this.state.userData.Image}
                    mail={this.state.userData.Email}
                    workPlace={this.state.userData.WorkPlace}
                    gender={this.state.userData.Gender}
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