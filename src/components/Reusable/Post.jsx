import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaRetweet, FaRegHeart, FaHeart } from "react-icons/fa";
// import { FiShare } from "react-icons/fi";

var moment = require("moment");
moment().format();

export class Post extends Component {
    getDateString = (dateInMs) => {
        // moment(tweetDate, "dd MMM DD HH:mm:ss ZZ YYYY", "en");
        console.log(moment(dateInMs));
        return moment.unix(dateInMs);
    };

    render() {
        const {
            id,
            // createdAt,
            text,
            user,
            // comments,
            retweets,
            likes,
        } = this.props.post;

        return (
            <div
                style={{
                    borderBottom: "1px solid",
                    borderRight: "1px solid",
                    borderColor: "#e6ecf0",
                    display: "flex",
                    height: "100%",
                    padding: "10px",
                    paddingRight: "20px",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        float: "left",
                        minHeight: "80px",
                        paddingRight: "10px",
                    }}
                >
                    <Link to="/profile">
                        <img
                            className="user-image"
                            src={user.userImg}
                            alt="User"
                        />
                    </Link>
                </div>
                <div>
                    <Link to="/profile" style={{ color: "black" }}>
                        <span className="font-weight-bold">
                            {user.username}
                        </span>{" "}
                        <span className="sub">{user.handle}</span>
                        {/* {" · "}
                        <span className="sub">{createdAt}</span> */}
                    </Link>
                    <div
                        className="post-text"
                        style={{ overflowWrap: "anywhere" }}
                    >
                        {text}
                    </div>
                    <div className="pt-2">
                        <IconContext.Provider
                            value={{
                                className: "post-icon",
                                style: { marginBottom: "2px" },
                            }}
                        >
                            {/* <div className="post-icon-wrapper post-icon-comment">
                                <FaRegComment /> {comments}
                            </div> */}
                            {retweets > 0 ? (
                                <div
                                    className="retweeted retweet-wrapper"
                                    onClick={() => this.props.onRetweetPost(id)}
                                >
                                    <FaRetweet /> {retweets}
                                </div>
                            ) : (
                                <div
                                    className="retweet-wrapper"
                                    onClick={() => this.props.onRetweetPost(id)}
                                >
                                    <FaRetweet /> {retweets}
                                </div>
                            )}
                            {likes > 0 ? (
                                <div
                                    className="like-wrapper liked"
                                    onClick={() => this.props.onLikePost(id)}
                                >
                                    <FaHeart /> {likes}
                                </div>
                            ) : (
                                <div
                                    className="like-wrapper"
                                    onClick={() => this.props.onLikePost(id)}
                                >
                                    <FaRegHeart /> {likes}
                                </div>
                            )}
                            {/* <FiShare /> */}
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
