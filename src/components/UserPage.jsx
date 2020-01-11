import React from 'react';
import FeedList from './FeedList';
import InfoPanel from './InfoPanel';
import ChatPanel from './ChatPanel';
import { Grid, Modal, Button } from 'semantic-ui-react';
import TopBar from "./TopBar";

export default class UserPage extends React.Component {

    state = {
        id: this.props.location.state.id,
        userData: {}
    }

    componentDidMount = async () => {
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
        const data = await this.getUserData(id)
        this.setState({id, userData: data})
    }

    feedList = async () => {
        if (this.state.id === localStorage.getItem("id")) {
            return <FeedList id={this.state.id}/>
        } else {
            return <Modal>
                <Modal.Header>Add Friend</Modal.Header>
                <Modal.Content>To view User's feed, add him to friends</Modal.Content>
                <Modal.Actions>
                    <Button
                        positive
                        icon='add user'
                        labelPosition='right'
                        content='Yes'
                        onClick={} // function to add a friend
                    />
                </Modal.Actions>
            </Modal>
        }
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
                        <FeedList id={this.state.id}/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        {/* <ChatPanel contacts={this.state.contacts}/> */}
                    </Grid.Column>
                </Grid>
            </div>
        )
    }


}