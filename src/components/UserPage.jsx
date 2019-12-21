import React from 'react';
import FeedList from './FeedList';
import InfoPanel from './InfoPanel';
import ChatPanel from './ChatPanel';
import { Grid } from 'semantic-ui-react';
import TopBar from "./TopBar";

export default class UserPage extends React.Component {

    state = {
        id: this.props.location.state.id,
        userData: {}
    }

    componentDidMount = async () => {
        console.log(1)
        const userData = await this.getUserData(this.state.id)
        this.setState({ userData })
    }


    getUserData = async (id) => {
        let response = await fetch(`https://localhost:5001/api/users/userdata?id=${id}`)
        if (!response.ok) {
            alert("Error, cannot get user data: Error code " + response.status);
            return null;
        }
        return await response.json();

    }

    changePage = async (id) => {
        console.log(1)
        console.log(`This is the id: ${id}`);
        const data = await this.getUserData(id)
        this.setState({id, userData: data})
    }



    render() {
        return (
            <div>
                <TopBar changePage={this.changePage} />
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
            </div>
        )
    }


}