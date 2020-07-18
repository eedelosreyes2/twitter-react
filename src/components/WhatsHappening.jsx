import React, { Component } from "react";

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
                title: "kali uchis",
                category: "R&B and soul",
                status: "Trending",
                tweets: 8267,
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
                className="ml-4 mt-3"
                style={{
                    backgroundColor: "#f5f8fa",
                    borderRadius: "15px",
                    maxHeight: "450px",
                    width: "350px",
                }}
            >
                <div className="h5 font-weight-bold pl-3 pt-2">
                    What's Happening
                </div>
                <hr className="hr-sm" />
                {this.state.stories.map((story) => {
                    const { category, status, title, tweets } = story;
                    return (
                        <div className="hoverable" key={story.id}>
                            <div className="pl-3 pb-1 pt-1">
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
                <div className="show-more text-primary p-3">Show more</div>
            </div>
        );
    }
}

export default WhatsHappening;
