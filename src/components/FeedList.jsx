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
        let res = await fetch("https://localhost:5001/api/posts", {
            headers: { "Content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                FromId: localStorage.getItem("id"),
                UserId: this.props.id,
                Content: this.state.newPost
            })
        });
        if(res.ok) {
            
            let fetchRes = await fetch(`https://localhost:5001/api/posts?id=${this.props.id}`);
            if(fetchRes.ok) {
                let posts = await fetchRes.json();
                this.setState({feedData: posts.reverse()})
            }
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
                        onClick={this.handleNewPost} />
                </Form>
                <Feed>
                    {this.state.feedData.map(data =>
                        <FeedBox
                            image={data.image}
                            summery={data.name}
                            extra={data.content}
                            likes={3}
                        />
                    )}
                </Feed>
            </div>
        )
    }


}