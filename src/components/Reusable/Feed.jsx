import React, { Component } from "react";
import { Post } from "./Post";

export class Feed extends Component {
    render() {
        let posts = this.props.posts;

        if (this.props.type === "media") {
            posts = [...this.props.posts.filter((post) => post.media)];
        } else if (this.props.type === "likes") {
            posts = [...this.props.posts.filter((post) => post.likes > 0)];
        }

        return (
            <div style={{ paddingBottom: "65px" }}>
                {posts.reverse().map((post) => {
                    return (
                        <Post
                            key={post.id}
                            post={post}
                            currentUser={this.props.currentUser}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Feed;
