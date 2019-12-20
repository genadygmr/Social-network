import React from 'react';
import { Feed, Icon } from "semantic-ui-react";

export default class FeedBox extends React.Component {

    render() {
        return (
            <Feed.Event>
                <Feed.Label>
                    <img src={this.props.image} />
                </Feed.Label>
                <Feed.Content>
                    <Feed.Summary>
                        {this.props.summery}
                    </Feed.Summary>
                    <Feed.Extra>
                        {this.props.extra}
                    </Feed.Extra>
                    <Feed.Meta>
                        <Icon name="like" />
                        {this.props.likes} Likes
                    </Feed.Meta>
                </Feed.Content>
            </Feed.Event>
        )
    }
}