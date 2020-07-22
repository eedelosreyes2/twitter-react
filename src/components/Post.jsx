import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";

export class Post extends Component {
    render() {
        const { user, text, comments, retweets, likes } = this.props.post;

        return (
            <div className="post">
                <div className="col-4 post-user">
                    <img className="user" src={user.image} alt="User" />
                </div>
                <div>
                    <span className="font-weight-bold">{user.username}</span>
                    <span className="text-muted"> @{user.handle}</span>
                    <div className="post-text">{text}</div>
                    <div>
                        <IconContext.Provider
                            value={{
                                className: "post-icon",
                            }}
                        >
                            <FaRegComment /> {comments}
                            <FaRetweet /> {retweets}
                            <FaRegHeart /> {likes}
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
