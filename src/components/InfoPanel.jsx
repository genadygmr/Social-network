import React from 'react';
import { Card, Icon } from 'semantic-ui-react';


export default class InfoPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    setGender = () => {
        let iconName="";
        if(this.props.gender === "male") iconName = "man";
        else if(this.props.gender === "female") iconName="woman"
        else iconName = "other gender"

        return <Icon name={iconName} />
        
        
    }

    render() {
        const extraContent = (
            <div>
                <a>
                    <Icon name='user' />
                    {this.props.friendsCount} Friends
                </a>
                <div>
                    <Icon name='mail' />
                    {this.props.mail}
                </div>
                <div>
                    <Icon name='industry' />
                    {this.props.title} at {this.props.workPlace}
                </div>
                <div>
                    {this.setGender()}
                    {this.props.gender}
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