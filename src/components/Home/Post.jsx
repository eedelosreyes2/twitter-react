import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import "./Home.css";

export class Post extends Component {
    render() {
        const { user, text, comments, retweets, likes } = this.props.post;

        return (
            <div className="post">
                <div className="post-user">
                    <img className="user" src={user.image} alt="User" />
                </div>
                <div>
                    <span className="font-weight-bold">{user.username}</span>
                    <span className="sub"> @{user.handle}</span>
                    <div className="post-text">{text}</div>
                    <div>
                        <IconContext.Provider
                            value={{
                                className: "post-icon",
                                style: { marginBottom: "2px" },
                            }}
                        >
                            <div className="post-icon-wrapper post-icon-comment">
                                <FaRegComment /> {comments}
                            </div>
                            <div className="post-icon-wrapper post-icon-retweet">
                                <FaRetweet /> {retweets}
                            </div>
                            <div className="post-icon-wrapper post-icon-like">
                                <FaRegHeart /> {likes}
                            </div>
                            <FiShare />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
