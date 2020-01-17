import React from 'react';
import FeedList from './FeedList';
import InfoPanel from './InfoPanel';
import ChatPanel from './ChatPanel';
import { Grid, Modal, Button, GridRow } from 'semantic-ui-react';
import TopBar from "./TopBar";

export default class UserPage extends React.Component {

    state = {
        id: this.props.location.state.id,
        userData: {},
        friends: [],
        pendingFriends: [],
        currentPageFriends: [],
        modalOpen: false
    }

    componentDidMount = async () => {
        const userData = await this.getUserData(this.state.id)
        this.setState({ userData })
        await this.setFriends()
        await this.setFriends(true)
        await this.getCUrrentPageFriends()
    }

    setFriends = async (pending = false) => {
        let res = "";
        if (pending)
            res = await fetch(`https://localhost:5001/api/friends?id=${localStorage.getItem("id")}&status=0`);
        else res = await fetch(`https://localhost:5001/api/friends?id=${localStorage.getItem("id")}&status=1`);

        if (res.ok) {
            if (pending) {
                let pendingFriends = await res.json();
                this.setState({ pendingFriends })
            } else {
                let friends = await res.json();
                this.setState({ friends })
            }
        }
    }

    getCUrrentPageFriends = async () => {
        let res = await fetch(`https://localhost:5001/api/friends?id=${this.state.id}&status=1`);
        if (res.ok) {
            let currentPageFriends = res.json();
            this.setState({ currentPageFriends })
        }
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
        this.setState({ id, userData: data })
    }

    checkFriend = async () => {
        let res = await fetch(`https://localhost:5001/api/friends?id=${localStorage.getItem("id")}`);
        if (res.ok) {
            let friends = await res.json();
            return friends.includes(this.state.id);
        }
        return false;
    }

    sendFriendRequest = async () => {
        await fetch(`https://localhost:5001/api/friends/request?id=${localStorage.getItem("id")}&targetId=${this.state.id}`, {
            method: "POST"
        });
        this.setState({ modalOpen: false })
        alert("Sent friend request")
    }

    feedList = () => {
        let isFriend = true //this.state.currentPageFriends.map(friends => friends.id).includes(localStorage.getItem("id"))
        if (this.state.id == localStorage.getItem("id") || isFriend) {
            return (
                <Grid.Column width={9}>
                    <FeedList id={this.state.id} />
                </Grid.Column>
            )
        } else {

            return (
                <Grid.Column width={9}>
                    <Modal open={this.state.modalOpen} trigger={<Button onClick={() => this.setState({ modalOpen: true })}> Add Firend</Button>}>
                        <Modal.Header>Add Friend</Modal.Header>
                        <Modal.Content>To view User's feed, add him to friends</Modal.Content>
                        <Modal.Actions>
                            <Button
                                positive
                                icon='add user'
                                labelPosition='right'
                                content='Add as friend'
                                onClick={this.sendFriendRequest}
                            />
                        </Modal.Actions>
                    </Modal>
                </Grid.Column>
            )
        }
    }



    render() {
        return (
            <div>
                <TopBar changePage={this.changePage}
                    friends={this.state.friends}
                    pendingFriends={this.state.pendingFriends}
                    updateFriends={this.setFriends}
                />
                <Grid>
                    <Grid.Column width={4}>
                        <InfoPanel
                            image={this.state.userData.Image}
                            mail={this.state.userData.Email}
                            workPlace={this.state.userData.WorkPlace}
                            gender={this.state.userData.Gender}
                        />
                    </Grid.Column>
                    {this.feedList()}
                    <Grid.Column width={3}>
                        {/* <ChatPanel contacts={this.state.contacts}/> */}
                    </Grid.Column>
                </Grid>
            </div>
        )
    }


}