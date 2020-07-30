import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

export class Post extends Component {
    render() {
        const { user, text, comments, retweets, likes } = this.props.post;

        return (
            <div
                style={{
                    borderBottom: "1px solid",
                    borderColor: "#e6ecf0",
                    display: "flex",
                    height: "100%",
                    padding: "10px",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        float: "left",
                        minHeight: "100px",
                        paddingRight: "10px",
                    }}
                >
                    <img className="user-image" src={user.image} alt="User" />
                </div>
                <div>
                    <div>
                        <span className="font-weight-bold">
                            {user.username}
                        </span>{" "}
                        <span className="sub">{user.handle}</span>
                        {" · "}
                        <span className="sub">1h</span>
                    </div>
                    <div className="post-text">{text}</div>
                    <div className="pt-2">
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