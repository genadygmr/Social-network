import React from 'react';
import { Feed, Icon, Button } from "semantic-ui-react";

export default class FeedBox extends React.Component {

    render() {
        return (
            <Feed.Event>
                <Feed.Label>
                    <img src={this.props.image} />
                </Feed.Label>
                <Feed.Content>
                    <Feed.Summary>
                        <Feed.User>{this.props.usenrname}</Feed.User>{this.props.summery}
                        <Feed.Date>{this.props.page}</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra>
                        {this.props.extra}
                    </Feed.Extra>
                    <Feed.Meta>
                        <Icon name="like" />
                        {this.props.likes} Likes
                        <Button icon onClick={() => this.props.remove(this.props.id)}>
                            <Icon name="trash" />
                        </Button>
                    </Feed.Meta>
                </Feed.Content>
            </Feed.Event>
        )
    }
}