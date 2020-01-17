import React from 'react';
import _ from 'lodash';
import faker from 'faker';
import { Search, Menu, Tab, Button, Icon, Dropdown, Modal, Item } from 'semantic-ui-react';
import { withRouter } from 'react-router'



const initialState = {
    isLoading: false,
    results: [],
    value: '',
}


class TopBar extends React.Component {


    constructor(props) {
        super(props)
    }

    reactToFriendRequest = async (id, status) => {
        let result = await fetch(`https:/localhost:5001/api/friends?id=${id}&connectionStatus=${status}`, {
            method: "PUT"
        })

        if (result.ok) {
            await this.props.updateFriends()
        }
    }


    friendsList = (pending = false) => {
        if (pending) {
            return this.props.pendingFriends.map((friend) => (
                <Item>
                    <Item.Image size="tiny" src={friend.image} />
                    <Item.Content>
                        <Item.Header>
                            {friend.name}
                            <span>
                                <Button id={friend.requestId} className="1" onClick={() => this.reactToFriendRequest(friend.requestid,"1")}>Accept</Button>
                                <Button id={friend.requestId} className="2" onClick={() => this.reactToFriendRequest(friend.requestid,"2")}>Reject</Button>
                            </span>
                        </Item.Header>
                    </Item.Content>
                </Item>
            ))
        } else {
            return this.props.friends.map((friend) => (
                <Item>
                    <Item.Image size="tiny" src={friend.image} />
                    <Item.Content>
                        <Item.Header>
                            {friend.name}
                            <span>
                                <Button id={friend.requestId} className="1" onClick={this.reactToFriendRequest}>Remove</Button>                            </span>
                        </Item.Header>
                    </Item.Content>
                </Item>
            ))
        }
    }


    panes = [
        { menuItem: 'Firends', render: () => <Tab.Pane>{this.friendsList()}</Tab.Pane> },
        { menuItem: 'Friends suggestions', render: () => <Tab.Pane>{this.friendsList(true)}</Tab.Pane> },
    ]


    state = initialState

    // TODO: This is where the navigation should happen
    handleResultSelect = (e, { result }) => {
        this.setState({ value: result.name })
        this.props.changePage(result.id)
    };


    handleSearchChange = async (e, { value }) => {
        this.setState({ isLoading: true, value })
        let response = await fetch(`https://localhost:5001/api/users/query?query=${value}`)
        let results = await response.json();
        this.setState({ isLoading: false, results })
    }



    render() {
        const { isLoading, results, value } = this.state
        return (
            <Menu>
                <Menu.Item>
                    <Icon name="home" />
                </Menu.Item>
                <Menu.Item>
                    <Search
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={this.handleSearchChange}
                        results={results}
                        value={value}
                    />
                </Menu.Item>
                <Menu.Item position="right">
                    <Dropdown text="Menu">
                        <Dropdown.Menu>
                            <Modal trigger={<Button>Friends</Button>}>
                                <Modal.Content>
                                    <Tab panes={this.panes} />
                                </Modal.Content>
                            </Modal>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu>
        )
    }


}

export default withRouter(TopBar);