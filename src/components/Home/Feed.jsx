import React, { Component } from "react";
import { Post } from "../Reusable/Post";

export class Feed extends Component {
    state = {
        posts: [
            {
                id: 0,
                createdAt: Date.now(),
                text:
                    "Welcome to Twitter React App v1.0 😀  Make a post with text and they will show up here and on the profile page!",
                user: this.props.currentUser,
                comments: 0,
                retweets: 0,
                likes: 0,
            },
            {
                id: 1,
                createdAt: Date.now() + 1,
                text:
                    "If you need help or want to know something about this app, click on the 'Help' tab on the left!",
                user: this.props.currentUser,
                comments: 0,
                retweets: 0,
                likes: 0,
            },
        ],
    };

    render() {
        return (
            <div style={{ paddingBottom: "65px" }}>
                {this.state.posts.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            post={post}
                            currentUser={this.state.currentUser}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Feed;
