import React from 'react';
import { Search, Menu, Input, Icon } from 'semantic-ui-react';


export default class TopBar extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Menu>
                <Menu.Item>
                    <Icon name="home" />
                </Menu.Item>
                <Menu.Item>
                    {/* Place holder for search module */}
                    <Input className='icon' icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item position="right">
                    <Icon name="dropdown" />
                </Menu.Item>
            </Menu>
        )
    }


}