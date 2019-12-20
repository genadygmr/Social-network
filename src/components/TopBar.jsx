import React from 'react';
import _ from 'lodash';
import faker from 'faker';
import { Search, Menu, Input, Icon } from 'semantic-ui-react';


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

export default class TopBar extends React.Component {

    constructor(props) {
        super(props)
    }



    componentDidMount = () => console.log(JSON.stringify(source))

    state = initialState

    // TODO: This is where the navigation should happen
    handleResultSelect = (e, { result }) => this.setState({ value: result.name })
    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })
    
        setTimeout(() => {
          if (this.state.value.length < 1) return this.setState(initialState)
    
          const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
          const isMatch = (result) => re.test(result.title)
    
          this.setState({
            isLoading: false,
            results: _.filter(source, isMatch),
          })
        }, 300)
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
                        onSearchChange={_.debounce(this.handleSearchChange, 500, {
                            leading: true,
                        })}
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