import React from 'react';
import { Feed } from "semantic-ui-react";
import FeedBox from "./FeedBox"
import "../designes/FeedList.css"

export default class FeedList extends React.Component {


    constructor() {
        super();
    }

    state = {
        feedData: [{
            image: "https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/23795595_10214749558117780_9064201581654371576_n.jpg?_nc_cat=111&_nc_oc=AQloJPwbB6MxDYLlkUNUXIeSoi9Mz99vPHFirB9W-kHxeklh-6ASCDQnP2rfhZMDMok&_nc_ht=scontent.ftlv2-1.fna&oh=da9918e57a9880f0bc88c39dc1ee6c4e&oe=5DBE6308",
            summeryText: "this is summary",
            extraText: "this is extra",
            likes: 42
        },
        {
            image: "https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/23795595_10214749558117780_9064201581654371576_n.jpg?_nc_cat=111&_nc_oc=AQloJPwbB6MxDYLlkUNUXIeSoi9Mz99vPHFirB9W-kHxeklh-6ASCDQnP2rfhZMDMok&_nc_ht=scontent.ftlv2-1.fna&oh=da9918e57a9880f0bc88c39dc1ee6c4e&oe=5DBE6308",
            summeryText: "this is summary",
            extraText: "this is extra",
            likes: 42
        }]
    }

    render() {
        return (
            <div className="feed">
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