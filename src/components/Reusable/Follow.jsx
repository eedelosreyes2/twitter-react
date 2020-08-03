import React, { Component } from "react";
import { IconContext } from "react-icons";
import { GoVerified } from "react-icons/go";

export class WhoToFollow extends Component {
    state = {
        users: [
            {
                id: 0,
                handle: "@sfchronicle",
                username: "San Francisco Chronicle",
                image:
                    "https://pbs.twimg.com/profile_images/1145742752824483842/gAPc8mwO_400x400.png",
                isVerified: true,
            },
            {
                id: 1,
                handle: "@BarackObama",
                username: "Barack Obama",
                image:
                    "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg",
                isVerified: true,
            },
            {
                id: 2,
                handle: "@BernieSanders",
                username: "Bernie Sanders",
                image:
                    "https://pbs.twimg.com/profile_images/1097820307388334080/9ddg5F6v_400x400.png",
                isVerified: true,
            },
        ],
    };

    render() {
        return (
            <div>
                <div
                    style={{
                        backgroundColor: "#f5f8fa",
                        borderRadius: "15px",
                        margin: "10px auto",
                        maxHeight: "300px",
                        width: "350px",
                    }}
                >
                    <div className="header1 pb-1 pl-3 pt-2">
                        {this.props.title}
                    </div>
                    <hr className="hr-sm" />
                    {this.state.users.map((user) => {
                        const {
                            id,
                            handle,
                            username,
                            image,
                            isVerified,
                        } = user;
                        return (
                            <div key={id}>
                                <div className="hoverable pl-3 pb-2 pt-2">
                                    <img
                                        className="user-image mr-3"
                                        src={image}
                                        alt="User"
                                        style={{
                                            display: "inline-block",
                                            float: "left",
                                        }}
                                    ></img>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <span className="story-title">
                                            {username}
                                            {isVerified ? (
                                                <IconContext.Provider
                                                    value={{
                                                        className:
                                                            "twitter-blue",
                                                        style: {
                                                            margin:
                                                                "auto auto 3px 2px",
                                                        },
                                                    }}
                                                >
                                                    <GoVerified />
                                                </IconContext.Provider>
                                            ) : null}
                                        </span>
                                        {/* <br /> */}
                                        <span className="sub">{handle}</span>
                                    </div>
                                </div>
                                <hr className="hr-sm" />
                            </div>
                        );
                    })}
                    <div className="show-more twitter-blue p-3">Show more</div>
                </div>
            </div>
        );
    }
}

export default WhoToFollow;
