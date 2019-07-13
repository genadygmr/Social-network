import React from 'react';
import { Card, Icon } from 'semantic-ui-react';


export default class InfoPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const extraContent = (
            <div>
                <a>
                    <Icon name='user' />
                    {this.props.friendsCount} Friends
                </a>
                <div>
                    <Icon name='home' />
                    {this.props.address}
                </div>
                <div>
                    <Icon name='birthday cake' />
                    {this.props.birhDate}
                </div>
            </div>
        )
        return (
            <Card
                image={this.props.image}
                header={this.props.name}
                description={this.props.description}
                extra={extraContent}
            />
        )
    }
}