import React, { Component } from "react";
import { IconContext } from "react-icons";
import { GoVerified } from "react-icons/go";

export class WhoToFollow extends Component {
    state = {
        users: [
            {
                id: 0,
                handle: "_elijah_d_r",
                username: "Elijah Delos Reyes",
                image:
                    "https://pbs.twimg.com/profile_images/1248762899570421761/A_OW8iC6_400x400.jpg",
                isVerified: false,
            },
            {
                id: 1,
                handle: "Genius",
                username: "Genius",
                image:
                    "https://pbs.twimg.com/profile_images/885222003174551552/cv3KtGVS_400x400.jpg",
                isVerified: true,
            },
            {
                id: 2,
                handle: "SupremeDreams_1",
                username: "Mark Phillips",
                image:
                    "https://pbs.twimg.com/profile_images/858754432925933573/ZX1yNEty_400x400.jpg",
                isVerified: true,
            },
        ],
    };

    render() {
        return (
            <div>
                <div
                    className="ml-4 mt-3"
                    style={{
                        backgroundColor: "#f5f8fa",
                        borderRadius: "15px",
                        maxHeight: "300px",
                        width: "350px",
                    }}
                >
                    <div className="header1 pb-1 pl-3 pt-2">Who to follow</div>
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
                                        className="user mr-3"
                                        src={image}
                                        alt="User"
                                        style={{
                                            display: "inline-block",
                                            float: "left",
                                        }}
                                    ></img>
                                    <div
                                        style={{
                                            display: "inline-block",
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
                                        <br />
                                        <span className="sub">@{handle}</span>
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
