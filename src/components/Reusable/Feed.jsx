import React, { Component } from "react";
import { Post } from "./Post";

export class Feed extends Component {
    state = {
        posts: [
            {
                id: 0,
                createdAt: Date.now(),
                user: this.props.currentUser,
                text:
                    "Welcome to Twitter React App v1.0 😀  Make a post with text and they will show up here and on the profile page!",
                comments: 0,
                media: null,
                retweets: 0,
                likes: 0,
            },
            {
                id: 1,
                createdAt: Date.now() + 1,
                user: this.props.currentUser,
                text:
                    "If you need help or want to know something about this app, click on the 'Help' tab on the left!",
                comments: 0,
                media: null,
                retweets: 0,
                likes: 0,
            },
        ],
    };

    getMedia = () => {};

    getLikes = () => {
        const posts = [this.state.posts.filter((post) => post.likes > 0)];
        return posts;
    };

    render() {
        const type = this.props;
        let posts = this.state.posts;

        if (type === "media") {
            posts = this.getMedia;
        } else if (type === "likes") {
            posts = this.getLikes;
        }

        return (
            <div style={{ paddingBottom: "65px" }}>
                {posts.map((post) => {
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
