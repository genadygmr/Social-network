import React from 'react';
import _ from 'lodash';
import faker from 'faker';
import { Search, Menu, Input, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router'


const source = _.times(5, () => ({
    image: faker.internet.avatar(),
    title: faker.name.firstName() + " " + faker.name.lastName(),
    id: 5
}))

const initialState = {
    isLoading: false,
    results: [],
    value: ''
}

class TopBar extends React.Component {

    constructor(props) {
        super(props)
    }



    componentDidMount = () => console.log(JSON.stringify(source))

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

        console.log(results.body)

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
                    <Icon name="dropdown" />
                </Menu.Item>
            </Menu>
        )
    }


}

export default withRouter(TopBar);