import React from 'react';
import { Feed, Form, Button } from "semantic-ui-react";
import FeedBox from "./FeedBox"
import "../designes/FeedList.css"

export default class FeedList extends React.Component {


    constructor() {
        super();
    }

    state = {
        pageId: "",
        newPost: "",
        feedData: []
    }

    handleNewPost = async () => {
        // api request to add new post to the page
        let res = await fetch("https://localhost:5001/api/post", {
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                post: this.state.newPost
            })
        });
        let response = await res.json()
        // get the updated list
        if(response.ok()) {
            // fetch all the feed messages
        }
    }

    render() {
        return (
            <div className="feed">
                <Form reply>
                    <Form.TextArea onChange={(event, data) => this.setState({newPost: data.value.toString()})}/>
                    <Button content='Add Post'
                        labelPosition='left'
                        icon='edit'
                        primary
                        floated='right'
                        onClick={() => this.handleNewPost} />
                </Form>
                <Feed>
                    {this.state.feedData.map(data =>
                        <FeedBox
                            image={data.image}
                            summery={data.summeryText}
                            extra={data.extraText}
                            likes={data.likes}
                        />
                    )}
                </Feed>
            </div>
        )
    }


}