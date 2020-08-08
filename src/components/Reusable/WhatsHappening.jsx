import React, { Component } from "react";
import { Link } from "react-router-dom";

export class WhatsHappening extends Component {
    state = {
        stories: [
            {
                id: 0,
                title:
                    "Ghost of Tsushima's photo mode has players impressed 📸",
                category: "Gaming",
                status: "Last night",
                tweets: null,
                image: "/img-src.jpg",
            },
            {
                id: 1,
                title: "Trump is still an idiot",
                category: "USA",
                status: "Trending",
                tweets: "99K",
                image: null,
            },
            {
                id: 2,
                title: "Rapper Logic announces retirement and final album",
                category: "Music",
                status: "Last Night",
                tweets: null,
                image: "/img-src.jpg",
            },
            {
                id: 3,
                title: "DDoS",
                category: null,
                status: "Trending in California",
                tweets: 13100,
                image: null,
            },
        ],
    };

    render() {
        return (
            <div
                style={{
                    backgroundColor: "#f5f8fa",
                    borderRadius: "15px",
                    margin: "10px auto",
                    maxHeight: "450px",
                    width: "350px",
                }}
            >
                <div className="header1 pb-1 pl-3 pt-2">What's Happening</div>
                <hr className="hr-sm" />
                {this.state.stories.map((story) => {
                    const { category, status, title, tweets } = story;
                    return (
                        <div key={story.id}>
                            <div className="hoverable pl-3 pb-1 pt-1">
                                {category ? (
                                    <span className="sub">
                                        {category} · {status}
                                    </span>
                                ) : (
                                    <span className="sub">{status}</span>
                                )}
                                <br />
                                <span className="story-title">{title}</span>
                                {tweets ? (
                                    <span className="sub">
                                        <br />
                                        {/* TODO: parse */}
                                        {tweets} Tweets
                                    </span>
                                ) : null}
                            </div>
                            <hr className="hr-sm" />
                        </div>
                    );
                })}
                <Link to="/explore">
                    <div className="show-more twitter-blue p-3">Show more</div>
                </Link>
            </div>
        );
    }
}

export default WhatsHappening;
